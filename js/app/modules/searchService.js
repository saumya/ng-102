// module : one
(function(){
  'use strict';
  var searchService = angular.module('crafts.searchService',[]);
  searchService.config(function(){
    console.log('crafts.searchService : config');
  });
  searchService.run(function(){
    console.log('crafts.searchService : run');
  });
  // a Factory
  searchService.factory('SearchServiceFactory',function(){
    console.log('crafts.service : SearchServiceFactory');
    var factory = {
      version:'1.0.0',
      showVersion:function(){
        console.log('SearchServiceFactory Version',this.version);
      }
    };
    return factory;
  });
  searchService.factory('DuckDuckGo',function($http){
    //var ddgUrl = "http://api.duckduckgo.com/?q=india&format=json&pretty=1";
    var ddgUrl = "http://api.duckduckgo.com";
    var runRequest = function(searchString){
      return $http({ url:ddgUrl + '/?q=' + searchString + '&format=json&pretty=1' });
    };
    var factory = {
      search: function(searchString){
        return runRequest(searchString);
      }
    };
    return factory;
  });
  // a Service
  searchService.service('SearchServiceService',function(){
    this.serviceVersion = '1.0.0';
    this.logInfo = function(){
      console.log('SearchServiceService : info : Version',this.serviceVersion);
    }
  });
})();
