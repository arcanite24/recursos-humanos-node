var app = angular.module('RecursosApp', [
  'ngSails',
  'ui.router',
  'ngMaterial'  
]);

app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/mdi.svg')
});

app.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
  .state('login', {url: '/login', templateUrl: 'templates/auth/login.html', controller: 'AuthCtrl'})
});