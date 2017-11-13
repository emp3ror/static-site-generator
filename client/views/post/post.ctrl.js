'use strict';

angular.module('mjt')

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('app.post', {
		url:'/post',
		abstract: true,
		views : {
			'container@': {
				templateUrl: 'views/post/post.tpl.html',
				controller: 'postCtrl',
				controllerAs : 'vm'
			}
		}
	})
	.state('app.post.param', {
		url:'/:param',
		views : {
			'container@': {
				templateUrl: 'views/post/post.tpl.html',
				controller: 'postCtrl',
				controllerAs : 'vm'
			}
		}
	})

}])

.controller('postCtrl', PostCtrl);

PostCtrl.$inject = ['datafetchService','$stateParams'];
function PostCtrl(datafetchService,$stateParams) {
	var vm = this;

	var param = $stateParams.param;
	var promise = datafetchService.getPost(param);

	promise.then(function (response) {
		console.log(response.data);
		vm.data = response.data;
		
	})
	.catch(function (error) {
		console.log(error);
	});
}