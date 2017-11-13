'use strict';

angular.module('mjt')

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('app.home', {
		url:'/',
		views : {
			'container@': {
				templateUrl: 'views/home/home.tpl.html',
				controller: 'HomeCtrl',
				controllerAs : 'vm'
			}
		}
	})

}])

.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['datafetchService'];
function HomeCtrl(datafetchService) {
	var vm = this;

	var promise = datafetchService.getList();

	promise.then(function (response) {
		console.log(response.data);

		vm.data = Object.keys(response.data).map(function(key) {
			return response.data[key];
		});
	})
	.catch(function (error) {
		console.log(error);
	});
}