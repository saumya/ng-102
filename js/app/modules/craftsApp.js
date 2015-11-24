//
(function(){
	'use strict';
	//	Application Entry Module
	var mApp = angular.module('myCraftsApp',["ngRoute","ngResource","crafts.test","crafts.one","crafts.service","crafts.searchService","crafts.searchServiceModule","crafts.directiveOneModule"]);
	//	Configuration for the application
	mApp.config(function($routeProvider,$locationProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider.
			when("/",{templateUrl: "partials/app_home.html"}).
			//when("/test",{templateUrl:"partials/app_test.html",controller:"TestController"}).
			when("/test",{templateUrl:"partials/app_test.html",controller:"SearchServiceController"}).
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
		//DuckDuckGo.search("India"); // returns an object of type Promise
		//DuckDuckGo.search("India").success().error();
		/*
		// Implementation, Type : 1
		DuckDuckGo.search("India")
			.success(function(data,status,headers,config){
				console.group('Success');
				console.log('data',data);
				console.log('status',status);
				console.log('headers',headers);
				console.log('config',config);
				console.groupEnd();
			})
			.error(function(data,status,headers,config){
				console.group('Error');
				console.log('data',data);
				console.log('status',status);
				console.log('headers',headers);
				console.log('config',config);
				console.groupEnd();
			});
		*/

		// Implementation, Type : 2
		var p = DuckDuckGo.search("India");
		p.success(function(data,status,headers,config){
			console.log('Success',data,status,headers,config);
		});
		p.error(function(data,status,headers,config,a1){
			console.log('Error',data,status,headers,config);
		});

		/*
		// Implementation, Type : 3
		var p = DuckDuckGo.search("India");
		//p.then(function(result){},function(error){});
		p.then(function(result){
			console.log('Success : ',result);
		},function(error){
			console.log('Error',error);
		});
		*/
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
