//
// SVG INLINER
// Convert <img> elements pointing to SVG files to inline SVG
//
// With some help from https://snippetlib.com/jquery/replace_all_svg_images_with_inline_svg
$(function() {
	$('img[src*=".svg"]').each(function(){
		var $img = $(this);
		var imgAttr = this.attributes;

		$.get($img.attr('src'), function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add all attributes from img element back to svg element (except the src attribute)
			for(x = 0; x < imgAttr.length; x++) {
				if(imgAttr[x].name != 'src') $svg.attr(imgAttr[x].name, imgAttr[x].value);
			}
			
			// Remove any invalid XML tags as per http:validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		});
	});
});