/*

	jQuery Tooltip Plugin
	v. 0.1
	
	@author Soults
	
*/

jQuery.fn.tooltip = function() {
	
	// Get tooltip text
	var tt = this.attr('alt');
	
	// Create tooltip element
	var td = '<div class="tooltip">' + tt + '</div>';
	
	// When mouse over to the element append tooltip to this ...
	this.mouseover(function(){
		$(this).parent().append(td);
		// ... and show it
		$(this).next().fadeIn(500);	
	});
	// When mouse go to something else remove tooltip
	this.mouseout(function(){
		$(this).next().fadeOut(500).remove();
	})
	
};
