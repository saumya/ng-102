// Directive 1.0.0
(function(){ 'use strict';
  var directiveModule = angular.module('crafts.directiveOneModule',[]);
  //directiveModule.directive('craftsOne',function(){});
  directiveModule.directive('google',function(){
    var directiveObj = {
      restrict:'EAC',
      replace: true,
      template:'<a href="http://google.com">Google</a>'
    };
    return directiveObj;
  });
  directiveModule.directive('craftsOneDirective',function(){
    var directiveObj = {
      restrict:'E',
      replace: true, // replaces the custom-directive-tag from generated HTML
      templateUrl:"partials/app_directive_one.html"
    };
    return directiveObj;
  });
  directiveModule.directive('craftsTwoDirective',function(){
    var directiveObj = {
      restrict:'EA',
      replace:true,
      template:'<a href="{{linkUrl}}">{{linkName}}</a>',
      scope:{
        linkUrl:'@',
        linkName:'@nameToDisplay'
      },
      controller:function($scope){
        console.log('craftsTwoDirective:controller:$scope',$scope);
        console.log('$scope.linkUrl : ',$scope.linkUrl);
        console.log('$scope.linkName : ',$scope.linkName);
      }
    };
    return directiveObj;
  });
})();
