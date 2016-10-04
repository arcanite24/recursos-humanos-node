app.controller('UserCtrl', function ($scope, $state, $sails, $help) {
  
  $scope.loadAllUsers = function () {
        
    $scope.allUsersTableConfig = {
      itemsPerPage: 5,
      fillLastPage: true
    }
    
    $sails.get('/api/user').then(function (data) {
      var tempList = data.data;
      $scope.allUsers = tempList.map(function (user) {
        if (!user.empresa) {
          user.empresa = {
            name: 'No asignada'
          }
        }
        return user;
      });
    }).catch(function (err) {
      console.log(err)
      swal('!Error!', 'Error obteniendo la lista de usuarios...', 'error');
      $scope.allUsers = [];
    });
  }
      
  $scope.loadEmpresas = function () {
    $sails.get('/api/empresa').then(function (data) {
      $scope.empresas = data;
    }).catch(function (err) {
      $scope.empresas = [];
    });
  }
  
  $scope.editUser = function (user) {
    $help.modalSimple('/templates/modal/editUser.html', function($scope, $mdDialog) {
      $scope.newuserdata = user;
      $scope.borrarUser = function (id) {
        $scope.loader = true;
        $sails.delete('/api/user/'+id).then(function(data) {
          $scope.loader = false;
          $state.reload();
          $mdDialog.hide();
        });
      }
      
      $scope.closeModal = function () {
        $mdDialog.hide();
      }
      
      $scope.editarUser = function (data) {
        var editUserData = {
          name: data.name,
          empresa: data.empresa
        };
        $scope.loader = true;
        $sails.put('/api/user/'+data.id, editUserData).then(function (thenData) {
          swal('¡Exito!', 'Usuario editado correctamente.', 'success');
          $scope.loader = false;
          $mdDialog.hide();
        });
      }
    });
  }
  
  $scope.openAddUser = function () {
    $help.modalSimple('/templates/modal/addUser.html', function ($scope, $state, $sails, $mdDialog) {
      
      $scope.closeModal = function () {
        $mdDialog.hide();
      }
      
      $scope.addUser = function (userData) {
        $sails.post('/api/user', userData).then(function (data) {
          swal('¡Exito!', 'Usuario creado correctamente.', 'success');
          $mdDialog.hide();  
          $state.reload();
        }).catch(function () {
          swal('!Error!', 'Error al crear usuario, verifica los datos ingresados.', 'error');
        });
      }
      
    });
  }
  
});