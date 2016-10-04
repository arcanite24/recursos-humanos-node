app.controller('EmpresaCtrl', function ($scope, $state, $sails, $help) {
  
  $scope.loadAllEmpresas = function () {
        
    $scope.allEmpresasTableConfig = {
      itemsPerPage: 5,
      fillLastPage: true
    }
    
    $sails.get('/api/empresa').then(function (data) {
      $scope.allEmpresas = data.data;
    }).catch(function (err) {
      console.log(err)
      swal('!Error!', 'Error obteniendo la lista de empresas...', 'error');
      $scope.allEmpresas = [];
    });
  }
      
  $scope.loadEmpresas = function () {
    $sails.get('/api/empresa').then(function (data) {
      $scope.empresas = data;
    }).catch(function (err) {
      $scope.empresas = [];
    });
  }
  
  $scope.editEmpresa = function (user) {
    $help.modalSimple('/templates/modal/editEmpresa.html', function($scope, $mdDialog) {
      $scope.newempresadata = user;
      $scope.borrarEmpresa = function (id) {
        $scope.loader = true;
        $sails.delete('/api/empresa/'+id).then(function(data) {
          $scope.loader = false;
          $state.reload();
          $mdDialog.hide();
        });
      }
      
      $scope.closeModal = function () {
        $mdDialog.hide();
      }
      
      $scope.editarEmpresa = function (data) {
        var editUserData = {
          name: data.name
        };
        $scope.loader = true;
        $sails.put('/api/empresa/'+data.id, editUserData).then(function (thenData) {
          swal('¡Exito!', 'Empresa editada correctamente.', 'success');
          $scope.loader = false;
          $mdDialog.hide();
        });
      }
    });
  }
  
  $scope.openAddEmpresa = function () {
    $help.modalSimple('/templates/modal/addEmpresa.html', function ($scope, $state, $sails, $mdDialog) {
      
      $scope.closeModal = function () {
        $mdDialog.hide();
      }
      
      $scope.addEmpresa = function (userData) {
        $sails.post('/api/empresa', userData).then(function (data) {
          swal('¡Exito!', 'Empresa creada correctamente.', 'success');
          $mdDialog.hide();  
          $state.reload();
        }).catch(function (err) {
          swal('!Error!', 'Error al crear empresa, verifica los datos ingresados.', 'error');
        });
      }
      
    });
  }
  
});