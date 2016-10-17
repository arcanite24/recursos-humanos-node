app.controller('AuthCtrl', function ($state, $scope, $rootScope, $sails, CONFIG){
  
  if ($rootScope.logeado) {
    $state.go('main');
  }
  
  $scope.loginUser = function (data) {
    $sails.post(CONFIG.API + 'user/auth', data).then(function (dataPromise) {
      if (dataPromise.data.error) {
        swal("!Error!", dataPromise.data.error, "error");
      } else {
        $rootScope._user = dataPromise.data.user;
        $rootScope.token = dataPromise.data.token;
        $rootScope.logeado = true;
        
        //Local Storage
        localStorage.setItem('_user', JSON.stringify($rootScope._user));
        localStorage.setItem('token', $rootScope.token);
        
        $state.go('main');
      }
    }).catch(function (err) {
      swal("¡Error!", "Error con el servidor.", "error");
    });
  }
  
});