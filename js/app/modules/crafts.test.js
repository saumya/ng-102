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
  craftsTestModule.factory('testFactory',function(){
    console.log('crafts.test : testFactory');
    var service = {};
    return service;
  });
  craftsTestModule.directive('testDirective',function(){
    console.log('crafts.test : testDirective');
    var myDirective = {
      template: '<button>My Directive Button</button>'
    };
    return myDirective;
  });
})();
