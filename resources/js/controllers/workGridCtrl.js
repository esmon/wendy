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
			image: 'resources/images/child-crying.jpg',
			role: 'Art Direction',
			slug: 'migrant-offshore-aid-station'
		},
		{
			title: 'Starbucks',
			image: 'resources/images/starbucks.jpg',
			role: 'Art Direction',
			slug: 'starbucks'
		},
		{
			title: 'Beau\'s',
			image: 'resources/images/beaus.jpg',
			role: 'Art Direction',
			slug: 'beaus'
		},
		{
			title: 'Tracksmith',
			image: 'resources/images/tracksmith.jpg',
			role: 'Art Direction',
			slug: 'tracksmith'
		},
		{
			title: 'Philips Hue',
			image: 'resources/images/hue.jpg',
			role: 'Art Direction',
			slug: 'philips-hue'
		},
		{
			title: 'Levis',
			image: 'resources/images/levis.jpg',
			role: 'Art Direction',
			slug: 'levis'
		},
	];
});
