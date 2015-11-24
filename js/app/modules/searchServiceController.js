// module : one
(function(){'use strict';
  var sModule = angular.module('crafts.searchServiceModule',["crafts.searchService"]);
  sModule.config(function(){
    console.log('crafts.searchService : config');
  });
  sModule.run(function(){
    console.log('crafts.searchService : run');
  });
  sModule.controller('SearchServiceController',function($scope,$rootScope,DuckDuckGo){
    console.group('crafts.searchServiceModule : SearchServiceController : ');
    console.log('crafts.searchServiceModule : SearchServiceController');
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
})();
