var app = angular.module("bumChic");

app.controller("QuizCtrl", function($scope){
	$scope.pageClass = "page-quiz";

	$scope.submitQuiz = function() {

	// Check if there are any unanswered button questions by looking at each ng-model (!q1.selected)
	var formInvalid = false;
	var finalText = '';
	var finalImage = '';

	if(!$scope.q1 || !$scope.q2 || !$scope.q3 || !$scope.q4 || !$scope.q5 || !$scope.q6) {
		formInvalid = true;
	}
	if(formInvalid) {
		$scope.showError = true;
		var finalTextError = "Hey dude, fill out all the questions please!";
		var finalImageError = '<img src="/images/Errors.png" />';
		finalText = finalTextError;
		finalImage = finalImageError;
	} else {
		$scope.showError = false;
	
	// Initialize total points
	var totalPoints = 0;

	// Grab all radio inputs
	var radioInputs = document.querySelectorAll('input[type="radio"');

	// Get "value" of each radio button that is "checked"
	var currentRadioInput;
	for(var i = 0; i < radioInputs.length; i++) {
		
		// Get the current iteration of the radio input
		currentRadioInput = radioInputs[i];

		// Check if it is "checked"
		if(currentRadioInput.checked) {
			
			// If "checked", get the value of the checked radio button
			var newValue = Number(currentRadioInput.value);

			// Add the new value to the total
			totalPoints = totalPoints + newValue;
		}
	}

	// Make end statements
	var finalTextFail = "You are a pure bum of grossness. Sorry! You are too much grundge and not enough Chic. Keep at it and one day, you will be walking down the streets with pride.";
	var finalTextHalfWay = "You are half and half, yo! You have a good balance of grundge and Chic. You may not be able to grow a beard of manly proportions, but you have a well formed base. Keep at it!";
	var finalTextGlory = "Welcome to the cool club! You have reached the highest form of Bum Chic. Look at you with your awesome beard, vintage jacket, and perfect gloves. You are the perfect balance of sophisticated Bum Chic!";

	// Store min and max values that user could have picked
	var min = 6;
	var max = 24;

	if (totalPoints < 6 ) {
		finalText = finalTextError;
	} else if (totalPoints <= 12) {
		finalText = finalTextFail;
	} else if (totalPoints <= 18) {
		finalText = finalTextHalfWay;
	} else {
		finalText = finalTextGlory;
	}

	var finalImageFail = '<img src="/images/hobo1.png" />';
	var finalImageHalfWay = '<img src="/images/hobo2.png" />';
	var finalImageGlory = '<img src="/images/hobo3.png" />';

	if (totalPoints < 6 ) {
		finalImage = finalImageError;
	} else if (totalPoints <= 12) {
		finalImage = finalImageFail;
	} else if (totalPoints <= 18) {
		finalImage = finalImageHalfWay;
	} else {
		finalImage = finalImageGlory;
	}
	$scope.reset();
}
	// Show final answer
	finalAnswer(finalText, finalImage);
}

function finalAnswer(finalText, finalImage){
	
	// Grab the modal body
	var modalContent = document.querySelector('.modal-body');

	// Swap out the content in the modal
	finalResults = finalImage + "</br>" + finalText;
	modalContent.innerHTML = finalResults;
}

$scope.reset = function() {
	$scope.q1 = '';
	$scope.q2 = '';
	$scope.q3 = '';
	$scope.q4 = '';
	$scope.q5 = '';
	$scope.q6 = '';
}

});
