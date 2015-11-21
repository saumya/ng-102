// module : one
(function(){
  'use strict';
  var craftsOne = angular.module('crafts.one',[]);
  craftsOne.config(function(){
    console.log('crafts.one : config');
  });
  craftsOne.run(function(){
    console.log('crafts.one : run');
  });
  craftsOne.factory('oneFactory',function(){
    console.log('crafts.one : oneFactory');
    var service = {};
    return service;
  });
  craftsOne.directive('oneDirective',function(){
    console.log('crafts.one : oneDirective');
    var myDirective = {
      template: '<button>My Directive One Button</button>'
    };
    return myDirective;
  });
})();
