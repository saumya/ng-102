// Directive 1.0.0
(function(){ 'use strict';
  var directiveModule = angular.module('crafts.directiveOneModule',[]);
  //directiveModule.directive('craftsOne',function(){});
  directiveModule.directive('google',function(){
    var directiveObj = {
      restrict:'E',
      template:'<a href="http://google.com">Google</a>'
    };
    return directiveObj;
  });
  directiveModule.directive('craftsOneDirective',function(){
    var directiveObj = {
      restrict:'E',
      templateUrl:"partials/app_directive_one.html"
    };
    return directiveObj;
  });
})();
