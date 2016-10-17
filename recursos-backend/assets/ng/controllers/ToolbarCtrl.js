app.controller('ToolbarCtrl', function($scope, $state, $mdSidenav, $rootScope) {
  
   $rootScope.$on('$stateChangeSuccess', function (event) {
    if ($state.current.name != 'login') {
      if (!$rootScope.logeado) {
        $state.go('login');
      }
    }
  });

  $scope.abrirSidenav = function () {
    $mdSidenav('left').toggle();
  }

  $rootScope.rootLogout = function () {
    $rootScope.logeado = false;
    $rootScope.token = null;
    $rootScope._user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('_user');
    if ($mdSidenav('left').isOpen()) {
      $mdSidenav('left').toggle();
    }
    $state.go('login');
  }
});