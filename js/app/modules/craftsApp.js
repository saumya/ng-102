//
(function(){
	'use strict';
	//	Application Entry Module
	var mApp = angular.module('myCraftsApp',["ngRoute","crafts.test","crafts.one"]);
	//	Configuration for the application
	mApp.config(function($routeProvider,$locationProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider.
			when("/",{templateUrl: "partials/app_home.html"}).
			when("/test",{templateUrl:"partials/app_test.html",controller:"TestController"}).
			when("/login",{templateUrl:"partials/app_login.html",controller:"LoginController"}).
			otherwise({redirectTo:"/"});
	});
	mApp.run(function($rootScope){
		console.log('Module : Application : run');
		console.log('$rootScope : ',$rootScope);
		$rootScope.appName = "Crafts Application, Version:1.0.0 .";
	});
	//	Controllers
	mApp.controller('TestController',function($scope,$rootScope){
		console.log('Module : TestController : ');
		console.log('$scope : ',$scope);
		console.log('$rootScope : ',$rootScope);
		$scope.appinfo =	[	{name:'craft',version:'1.0.0',author:'saumya'},
												{name:'craft',version:'1.0.0',author:'saumya'}	];
	});
	mApp.controller('LoginController',function($scope,$rootScope){
		console.log('Module : LoginController : ');
		console.log('$scope : ',$scope);
		console.log('$rootScope : ',$rootScope);
	});
	// End Controllers
})();
