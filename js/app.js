var app = angular.module("bumChic", ["ngRoute", "ngAnimate"]);
	
app.config(function($routeProvider){
	//routing goes here
	$routeProvider
		.when("/home", {
			templateUrl: "partials/home.html",
			controller: "HomeCtrl"
		})
		.when("/quiz", {
			templateUrl: "partials/quiz.html",
			controller: "QuizCtrl"
		})
		.otherwise({redirectTo:"/home"});
});

