angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  $scope.idInfo = mainSrv.idFinder($stateParams.id, mainSrv.travelInfo);
  $scope.bookedStyle = {
    'background-image': 'url(' + mainSrv.bookedUrl + ')'
  }


})
