
'use strict'

angular.module('templates', [])
angular.module('appFilters', [])
angular.module('appControllers', [])
angular.module('appServices', ['ngResource'])
app = angular
  .module('app', [
    'templates'
    'ngRoute'
    'appControllers'
    'appFilters'
    'appServices'
    'route-segment'
    'view-segment'
    'toaster'
  ])
