angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  var successCallback = function(res) {
    return res;
  };

  var errorCallback = function(err) {
    return err;
  };

  $scope.addLink = function() {
    Links.addOne().then(successCallback, errorCallback);
  };

});