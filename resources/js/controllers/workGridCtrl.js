angular.module('wendyApp')
.controller('workGridCtrl', function ($scope) {
	'use strict';

	$scope.works = [
		{
			title: 'Coppertone',
			image: '',
			role: 'Art Direction'
		},
		{
			title: 'Migrant Offshore Aid Station',
			image: 'images/child-crying.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Starbucks',
			image: 'images/starbucks.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Beau\'s',
			image: 'images/beaus.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Tracksmith',
			image: 'images/tracksmith.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Philips Hue',
			image: 'images/hue.jpg',
			role: 'Art Direction'
		},
		{
			title: 'Levis',
			image: 'images/levis.jpg',
			role: 'Art Direction'
		},
	];
});
