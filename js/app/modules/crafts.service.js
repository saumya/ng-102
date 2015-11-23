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
})();
