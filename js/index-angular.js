var angularExample = angular.module('angularExample', [])

angularExample.controller('tabsController', function TabsController($scope) {
  $scope.tabs = [{
    id: 1,
    name: "Tab 1",
    menus: [{
      display: "Button 1",
      button_class: "btn-default"
    }, {
      display: "Button 2",
      button_class: "btn-primary"
    }, {
      display: "Button 3",
      button_class: "btn-success"
    }]
  }, {
    id: 2,
    name: "Tab 2",
    menus: [{
      display: "Button 1",
      button_class: "btn-default"
    }, {
      display: "Button 2",
      button_class: "btn-primary"
    }, {
      display: "Button 3",
      button_class: "btn-success"
    }, {
      display: "Button 4",
      button_class: "btn-info"
    }, {
      display: "Button 5",
      button_class: "btn-warning"
    }]
  }, {
    id: 3,
    name: "Tab 3",
    menus: [{
      display: "Button 1",
      button_class: "btn-default"
    }, {
      display: "Button 2",
      button_class: "btn-primary"
    }, {
      display: "Button 3",
      button_class: "btn-danger"
    }]
  }]
})
