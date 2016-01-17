function askQuestions() {



	var firstName = prompt('what is your first name');
	var lastName = prompt('what is your last name');
	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello ' + fullName); 

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {

		console.log('User is an adult.');

	} else if (userAge >= 13) {

		console.log('User is a teenager.');

	} else if (userAge >= 0) {

		console.log('User is a child.');

	}

	if (firstName.toLowerCase() == "general"  && lastName != "assembly") {
	     console.log ("Welcome, General Assembly!");
	}

	var favecColour = prompt('What is your favourite colour?');

	if (favecColour == 'red' ||
		favecColour == 'green' ||
		favecColour == 'blue' ||
		favecColour == 'yellow') {

		$('h1').css('color',favecColour);

	}


}



//when the page has loaded function document.write
$(function() {

		// when the users clicks on the image ask questions

		$('img').on('click', askQuestions);

		// hide all sections to begin with
		$('h3').next().hide();

		// when the user clicks an h3 element
		$('h3').on('click', function() {

			// Hide the next element
			$(this).next().slideToggle(1000);

		});

});


