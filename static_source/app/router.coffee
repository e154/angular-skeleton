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
