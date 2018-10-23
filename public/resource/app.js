angular.module('userManagementApp', [])
  .controller('userListController', ['$http', function($http) {
    var list = this;
    list.add = false;
    function getUsers () {
        $http({
            method: 'GET',
            url: '/users'
        }).then((response) => {
            list.users = response.data.users;
        }, (err) => {
            console.log('err: ', err);
        });
    }
    getUsers();
    list.addUser = function() {
        list.add = true;
        list.newUser = {};
    };
    list.submitUser = function() {
        $http({
            method: 'POST',
            url: '/addUser',
            data: list.newUser
        }).then((response) => {
            list.add = false;
            list.newUser = {};
            getUsers();
        }, (err) => {
            console.log('err: ', err);
        });
    };

    list.deleteUser = function(id) {
        $http({
            method: 'DELETE',
            url: '/removeUser/'+ id
        }).then((response) => {
            console.log('response: ', response);
            getUsers();
        }, (err) => {
            console.log('err: ', err);
        });
    };

    list.editUser = function(user) {
        list.isEdit = true;
        list.eUser = user;
    }

    list.updateUser = function() {
        $http({
            method: 'PATCH',
            url: '/updateUser',
            data: list.eUser
        }).then((response) => {
            console.log('response: ', response);
            list.eUser = {};
            list.isEdit = false;
            getUsers();
        }, (err) => {
            console.log('err: ', err);
        });
    }
  }]);