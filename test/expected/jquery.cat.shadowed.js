define([ 'jquery', 'jquery' ], function (jQuery, $) {
(function ($) {
	
	$.fn.cat = function() {
		console.log("i am a cat.");
	}

})(jQuery);
;
return jQuery;
});