//
(function(){
	'use strict';
	//	Application Entry Module
	var mApp = angular.module('myCraftsApp',["ngRoute","ngResource","crafts.test","crafts.one","crafts.service","crafts.searchService"]);
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
	mApp.controller('TestController',function($scope,$rootScope,DuckDuckGo){
		console.group('Module : TestController : ');
		console.log('$scope : ',$scope);
		console.log('$rootScope : ',$rootScope);
		$scope.appinfo =	[	{name:'craft',version:'1.0.0',author:'saumya'},
												{name:'craft',version:'1.0.0',author:'saumya'}	];
		DuckDuckGo.search("India");
		console.groupEnd();
	});
	mApp.controller('LoginController',function($scope,$rootScope,CraftsServiceFactory,CraftsService,SearchServiceFactory){
		console.group('Module : LoginController : ');
		console.log('$scope : ',$scope);
		console.log('$rootScope : ',$rootScope);
		console.log('CraftsServiceFactory : ',CraftsServiceFactory);
		CraftsServiceFactory.showVersion();
		console.log('CraftsService : ',CraftsService);
		CraftsService.logInfo();
		console.log('SearchServiceFactory : ',SearchServiceFactory);
		SearchServiceFactory.showVersion();
		console.groupEnd();
	});
	// End Controllers
})();
