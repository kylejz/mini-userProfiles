var app = angular.module('userProfiles');




app.controller('MainController', function(mainService) {
	
	this.users = mainService.getUsers();

});