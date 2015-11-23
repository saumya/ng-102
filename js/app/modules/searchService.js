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
  // a Service
  searchService.service('SearchServiceService',function(){
    this.serviceVersion = '1.0.0';
    this.logInfo = function(){
      console.log('SearchServiceService : info : Version',this.serviceVersion);
    }
  });
})();
