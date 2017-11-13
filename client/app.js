'use strict';

// Declare app level module which depends on views, and components

function run() {

}


var app = angular.module('mjt', [
  'ui.router',
  'ngSanitize'
  // 'mjt.common'
])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('app',{
      url : '',
      views : {
        'header@' : {
          controller : 'HeaderCtrl',
          templateUrl : 'components/common/header/header.tpl.html',
          controllerAs : "vm"
        },
        'footer@' : {
          controller : 'FooterCtrl',
          templateUrl : 'components/common/footer/footer.tpl.html',
          controllerAs : "vm"
        }
      }
    })
    
    .state('app.404',{
      url : '/404',
      views : {
        'header@' : {
          templateUrl : 'components/common/404.tpl.html'
        }
      }
    });

    $locationProvider.html5Mode(true);


    
}])
.run(run);