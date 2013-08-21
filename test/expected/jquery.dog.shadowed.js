define([ 'jquery', 'jquery' ], function (jQuery, $) {
(function ($) {
	
	$.fn.dog = function() {
		console.log("i am a dog.");
	}

})(jQuery);
;
return jQuery;
});