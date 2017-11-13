"use strict";

angular
.module('mjt')
.service('datafetchService', DatafetchService);

DatafetchService.$inject = ['$http'];

function DatafetchService ($http) {
	var service = this;

	service.getList = function () {
		var response = $http({
			cache: true,
			method: 'GET',
			url: "data/list.json"
		});

		return response;
	};

	service.getPost = function (param) {
		var response = $http({
			cache: true,
			method: 'GET',
			url: "data/"+param+".json"
		});

		return response;
	};
}