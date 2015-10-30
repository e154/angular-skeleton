
'use strict'

angular.module('appFilters', [])
angular.module('appControllers', [])
angular.module('appServices', ['ngResource'])
app = angular
  .module('app', [
    'ngRoute'
    'appControllers'
    'appFilters'
    'appServices'
    'route-segment'
    'view-segment'
  ])

angular.module('app')
  .config ['$routeProvider', '$locationProvider', '$routeSegmentProvider'
  ($routeProvider, $locationProvider, $routeSegmentProvider) ->
    $routeSegmentProvider
      .when '/',              'home'

      .segment 'home',
        default: true
        templateUrl: '/templates/home.html'
        controller: 'homeCtrl as home'

    $locationProvider.html5Mode
      enabled: true
      requireBase: false

    $routeProvider.otherwise
      redirectTo: '/'
  ]

angular.module('app')
  .run ['$rootScope'
  ($rootScope) =>

  ]