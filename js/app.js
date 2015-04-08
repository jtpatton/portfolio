var app = angular.module('portfolio', ['ui.router', 'HashBangURLs'])

app
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'templates/portfolio.html',
				controller: 'portfolioCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
			.state('resume', {
				url: '/resume',
				templateUrl: 'templates/resume.html',
				controller: 'resumeCtrl'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.php',
				controller: 'contactCtrl'
			})
	}])

//Get the time, used for clock on desktop
app.run(function($rootScope,$interval){
    $rootScope.AssignedDate = Date;
    $interval(function(){},1000)
})

//Change hashbang from # to #!, which allows Google to index pages
angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
  $location.hashPrefix('!');
}]);