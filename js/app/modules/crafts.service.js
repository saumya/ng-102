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
  craftsService.factory('CraftsService',function(){
    console.log('crafts.service : craftsServiceFactory');
    var service = {
      version:'1.0.0',
      showVersion:function(){
        console.log('CraftsService Version',this.version);
      }
    };
    return service;
  });
})();
