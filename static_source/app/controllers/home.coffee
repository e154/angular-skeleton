'use strict'

angular
.module('appControllers')
.controller 'homeCtrl', ['$scope', 'Notify'
($scope, Notify) ->
  vm = this

  Notify 'error', "Тестовое сообщение"

  console.log 'home ctrl'
]