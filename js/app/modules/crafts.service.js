// module : one
(function(){
  'use strict';
  var craftsService = angular.module('crafts.service',[]);
  craftsService.config(function(){
    console.log('crafts.service : config');
  });
  craftsService.run(function(){
    console.log('crafts.service : run');
  });
  // a Factory
  craftsService.factory('CraftsServiceFactory',function(){
    console.log('crafts.service : craftsServiceFactory');
    var factory = {
      version:'1.0.0',
      showVersion:function(){
        console.log('CraftsServiceFactory Version',this.version);
      }
    };
    return factory;
  });
  // a Service
  craftsService.service('CraftsService',function(){
    this.serviceVersion = '1.0.0';
    this.logInfo = function(){
      console.log('CraftsService : info : Version',this.serviceVersion);
    }
  });
})();
