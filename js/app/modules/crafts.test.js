// Test module
(function(){
  'use strict';
  var craftsTestModule = angular.module('crafts.test',[]);
  craftsTestModule.config(function(){
    console.log('crafts.test : config');
  });
  craftsTestModule.run(function(){
    console.log('crafts.test : run');
  });
})();
