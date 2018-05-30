// in CSV, make sure that the headings are
// name
// grade
// bio
// website
// paid - for if they paid or not.

const artistsInfo = []
const $modalWrapper = $('#modalWrapper')
const $modalComponent = $('#modalComponent')
const $triggerWrapper = $('#triggerWrapper')

const gradeColor = {
  senior: '#FFb13A',
  junior: '#FEFF3A',
  sophomore: '#FF1838',
}

// Helper function to sort names alphabetically
function alphabetical(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

// fetch, standardize the data and then assign it to artistsInfo.
const getArtistsInfo = () => {
  let count = 0
  return $.ajax({
    type: "GET",
//     url: "js/data.csv",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLMTIgkC0SuLJ1ed4ksIvLZrxlIt1AAf-8kTCTu8tCLaFzZH8wf2Xj3cZM3NFLOjsTCrczRiuHxAru/pub?gid=755615192&single=true&output=csv",
    success: data => {
      const arrData = $.csv.toObjects(data)
      console.log('arrData.length', arrData.length)
      const cleanedData = arrData.reduce((a, d, i) => {
        if (!d.paid) {
	        console.log(d);
            return a
        }

        // some of the data doesn't represnt a URL, so this standarizes the data.
        d.website = (
          ~d.website.indexOf('//') || !d.website
            ? d.website
            : '//' + d.website
        )

        if (~d.grade.indexOf('senior')) {
          d.grade = 'senior'
        }

        d.colorTheme = gradeColor[d.grade]
        
        a.push(d)
        return a
      }, [])
      cleanedData.sort(alphabetical)
      console.log('cleanedData.length', cleanedData.length)
      artistsInfo.push(...cleanedData)
    },
    error: () => {
      if (count < 5) {
        ++count
        return getArtistsInfo()
      } else {
        console.warn("couldn't load CSV data")
      }
    }
  });
}

// animate the modal toggle
const toggleModal = () => {
  const opacity = +!$modalWrapper.hasClass('display')
  
  if (opacity) {
    $modalWrapper.toggleClass('display')
  }
  $modalWrapper.animate({ opacity: opacity }, 400, () => {
    if (!opacity) {
      $modalWrapper.toggleClass('display')
    }
  })
}

const updateModalText = d => {
  $modalComponent.css({
    backgroundColor: d.colorTheme
  })
  $modalComponent.find('.artist-name').text(d.name)
  $modalComponent.find('.artist-bio').text(d.bio)
  if (d.website) {
    $modalComponent.find('.artist-website')
      .text('Website')
      .attr('href', d.website)
  } else {
    $modalComponent.find('.artist-website')
      .text('')
      .attr('href', '')
  }
  
  const artist_info = document.querySelector('.artist_info')
  artist_info.scrollTop = 0
}



// when an artist's name is clicked
const handleArtistClick = e => {
  const artistIndex = $(e.target).attr('data-artist-index')
  const artist = artistsInfo[artistIndex]
  updateModalText(artist)
  toggleModal()
}

// create triggers for all the artists
const makeModalTriggers = () => {
  artistsInfo.forEach((d, i) => {
    const $artist = $('<article />', {
    class: 'participantbox ' + d.grade
    })

    $artist.append(
      $('<span />', {
        'data-artist-index': i,
        text: d.name,
        class: 'partipantname'
      })
    )

    $triggerWrapper.append($artist)
  })

  // assign event handler for the h1 names
  $('#triggerWrapper').on('click', '.partipantname', handleArtistClick)
}





$(document).ready(() => {
  // closes the modal when the black bg is clicked.
  $modalWrapper.on('click', toggleModal)
  $('.modal-close').on('click', toggleModal)
  // prevent the modal from closing when the user clicks the modal itself
  $modalComponent.on('click', e => e.stopPropagation())

  getArtistsInfo()
    .then(makeModalTriggers)
});

