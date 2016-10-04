var app = angular.module('RecursosApp', [
  'ngSails',
  'ui.router',
  'ngMaterial',
  'angular-table'
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
  if (!$rootScope.logeado) {
    $state.go('login');
  }
});

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
  .state('login', {url: '/login', templateUrl: 'templates/auth/login.html', controller: 'AuthCtrl'})
  .state('main', {url: '/dashboard', templateUrl: 'templates/dashboard/main.html', controller: 'MainCtrl'})
  
  .state('manage-users', {url: '/users/list', templateUrl: 'templates/users/list.html', controller: 'UserCtrl'})
  
  .state('manage-empresas', {url: '/empresa/list', templateUrl: 'templates/empresas/list.html', controller: 'EmpresaCtrl'})
});