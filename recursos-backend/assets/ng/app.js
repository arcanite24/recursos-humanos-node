var app = angular.module('RecursosApp', [
  'ngSails',
  'ui.router',
  'ngMaterial',
  'angular-table',
  'ngMaterialDatePicker',
  'signature'
]);

app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/mdi.svg')
});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .accentPalette('red');
});

app.constant('CONFIG', {
  API: 'http://recursos-humanos-node.arcanite24.c9users.io/api/'
});

app.run(function ($rootScope, $state) {
  $rootScope.$state = $state;
  
  var tempToken = localStorage.getItem('token');
  if (tempToken) {
    $rootScope.logeado = true;
  }
  
  if (!$rootScope.logeado) {
    $state.go('login');
  }
});

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
  .state('login', {url: '/login', templateUrl: 'templates/auth/login.html', controller: 'AuthCtrl'})
  .state('main', {url: '/dashboard', templateUrl: 'templates/dashboard/main.html', controller: 'MainCtrl'})
  
  .state('manage-users', {url: '/usuario/lista', templateUrl: 'templates/users/list.html', controller: 'UserCtrl'})
  .state('profile-users', {url: '/usuario/perfil', templateUrl: 'templates/users/profile.html', controller: 'UserCtrl'})
  
  .state('manage-empresas', {url: '/empresa/lista', templateUrl: 'templates/empresas/list.html', controller: 'EmpresaCtrl'})
  
  .state('manage-formatos', {url: '/formato/lista', templateUrl: 'templates/formatos/list.html', controller: 'FormatoCtrl'})
  
  .state('captura-list', {url: '/captura/lista', templateUrl: 'templates/captura/list.html', controller: 'CapturaCtrl'})
  
  .state('formato-actualizacion-datos', {url: '/captura/formatos/actualizacion-datos', templateUrl: 'templates/captura/formatos/actualizacion-datos.html', controller: 'CapturaCtrl'})
  });