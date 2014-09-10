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
	.controller('aboutCtrl', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	})
	.controller('contactCtrl', function($scope, $http){
		//http://www.chaosm.net/blog/2014/05/21/angularjs-contact-form-with-bootstrap-and-phpmailer/
	    
		
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	})
	.controller('homeCtrl', function($scope){
		$scope.title = "James Tyler Patton",
		$scope.pros = ["Web", "UX", "UI"],
        //typed.js for home screen
        $(function(){
            $(".typed").typed({
                strings: ["Web Designer", "Web Developer", "UX Designer", "UI Designer", "Graphic Artist"],
                typeSpeed: 70,
                backDelay: 2500,
                loop: true
            });
        });
	})
	.controller('portfolioCtrl', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	})
	.controller('resumeCtrl', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	})

//Get the time, used for clock on desktop
app.run(function($rootScope,$interval){
    $rootScope.AssignedDate = Date;
    $interval(function(){},1000)
})

//Change hashbang from # to #!, which allows Google to index pages
angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
  $location.hashPrefix('!');
}]);