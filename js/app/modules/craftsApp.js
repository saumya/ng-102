//
(function(){
	//	Application Entry Module
	var mApp = angular.module('myCraftsApp',["ngRoute"]);
	//	Configuration for the application
	mApp.config(function($routeProvider,$locationProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider.
			when("/",{templateUrl: "partials/app_home.html"}).
			when("/login",{templateUrl:"partials/app_test.html",controller:"TestController"}).
			otherwise({redirectTo:"/"});
	});
	//	Controller
	mApp.controller('TestController',function($scope){
		$scope.appinfo =	[	{name:'craft',version:'1.0.0',author:'saumya'},
												{name:'craft',version:'1.0.0',author:'saumya'}	];
	});
})();
