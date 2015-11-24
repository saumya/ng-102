/*
* module : crafts.weatherService
* exposes : Weather
*/
(function(){'use strict';
  var weatherService = angular.module('crafts.weatherService',[]);
  weatherService.config(function(){
    console.log('crafts.weatherService : config');
  });
  weatherService.run(function(){
    console.log('crafts.weatherService : run');
  });
  //
  weatherService.factory('Weather',function($http){
    var runRequest = function(cityName){
      var u = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=d7294bb0cf2c11c186be40c7d0111111";
      var searchUrl = u;
      var promise = $http({ method: 'GET', url: searchUrl });
      return promise;
    };
    // the returning object, that will be used outside
    var factory = {
      search: function(searchString){
        return runRequest(searchString);
      }
    };
    return factory;
  });
})();
