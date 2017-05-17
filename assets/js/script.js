$(function(){

	/*
		Gets the number of letters which will be animated and an empty array
		which is populated when animation is completed
	*/
	var completedAni = [];

	/*
		We would have to grab the encoded name and real name from the database and
		populate variables in Javascript.
	*/
	var completedName = 'JERMAINE';
	var completedPhrase = 'THANK YOU FOR FIGHTING ON.';

	var nameEl = document.querySelector('.name');
	var phraseEl = document.querySelector('.complete');

	var name = document.querySelector('.name');

	/*
		Gets the name which is produced from the backend and adds a <span data-decode>
		around the selected characters in the regex
	*/
	// $('.name').html(function(i, html) {
	// 	return html.replace(/(3|4)/g, '<span data-decode>$1</span>');
	// });

	$('.name').html(function(i, html) {
		var $characters = $.trim(html).split("");
		$characters.forEach(function(char, i){
			// console.log(char);
			switch(char) {
				case 'E':
					$characters[i] = '3';
					break;
				case 'R':
					$characters[i] = '4';
				default:
				 	return null
			}
		})

		// console.log($characters.join(''));
		var uncoded = $characters.join('');
		var newName = uncoded.replace(/(3|4)/g, '<span data-decode>$1</span>');

		$('.name').html(newName);
	})

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
					nameEl.innerHTML = completedName;
					phraseEl.innerHTML = completedPhrase;
				}
			}
		});
	}, 1000);
});
