(function($) {

  $.fn.decodeName = function(options) {

    /*
      Default settings for the plugin
    */
    var settings = $.extend({
      name: 'FIRST NAME',
      phrase: 'THANK YOU FOR FIGHTING ON',
    }, options);

    /*
      Split name into an array;
    */
    var $characters = $.trim(settings.name).split('');

    var _this = this;
    var completedAni = [];

    /*
      Go through each letter in the array and find each letter and
      swap based on the switch case below.
    */
    $characters.forEach(function(char, i) {
      switch(char) {
        case 'E':
        case 'e':
          $characters[i] = '3';
          break;
        case 'R':
        case 'r':
          $characters[i] = '4';
          break;
        default:
          return null
      }
    })

    var uncoded = $characters.join('');
    var newName = uncoded.replace(/(3|4)/g, '<span data-decode>$1</span>');

    $(this).html(newName);

    // Shuffle the contents of container
  	setTimeout(function() {
  		var container = $("[data-decode]");
  		var totalSpans = container.length;

  		container.shuffleLetters({
  			"step": 30,
  			"fps": 10,
  			callback: function() {

  				completedAni.push('complete');

  				if(completedAni.length === totalSpans) {
            $(_this).text(settings.name);
            $(_this).next().html(settings.phrase);
  				}
  			}
  		});
  	}, 1000);
  }

}(jQuery));
