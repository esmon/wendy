angular.module('wendyApp')
.controller('workGridCtrl', function ($scope) {
	'use strict';

	$scope.works = [
		{
			title: 'Coppertone',
			image: '',
			role: 'Art Direction',
			slug: 'coppertone'
		},
		{
			title: 'Migrant Offshore Aid Station',
			image: 'images/child-crying.jpg',
			role: 'Art Direction',
			slug: 'migrant-offshore-aid-station'
		},
		{
			title: 'Starbucks',
			image: 'images/starbucks.jpg',
			role: 'Art Direction',
			slug: 'starbucks'
		},
		{
			title: 'Beau\'s',
			image: 'images/beaus.jpg',
			role: 'Art Direction',
			slug: 'beaus'
		},
		{
			title: 'Tracksmith',
			image: 'images/tracksmith.jpg',
			role: 'Art Direction',
			slug: 'tracksmith'
		},
		{
			title: 'Philips Hue',
			image: 'images/hue.jpg',
			role: 'Art Direction',
			slug: 'philips-hue'
		},
		{
			title: 'Levis',
			image: 'images/levis.jpg',
			role: 'Art Direction',
			slug: 'levis'
		},
	];
});
