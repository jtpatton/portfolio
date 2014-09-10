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
		$scope.result = 'hidden'
		$scope.resultMessage;
		$scope.formData;
		$scope.submitButtonDisabled = false;
		$scope.submitted = false;
		$scope.submit = function(contactform) {
			$scope.submitted = true;
			$scope.submitButtonDisabled = true;
			if (contactform.$valid) {
				$http({
					method  : 'POST',
					url     : 'send_form.php',
					data    : $.param($scope.formData),
					headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).success(function(data){
					console.log(data);
					if (data.success) {
						$scope.submitButtonDisabled = true;
						$scope.resultMessage = data.message;
						$scope.result='bg-success';
					}else{
						$scope.submitButtonDisabled = false;
						$scope.resultMessage = data.message;
						$scope.result='bg-danger';
					}
				});
			}else{
				$scope.submitButtonDisabled = false;
				$scope.resultMessage = 'Failed Please Fill out all fields';
				$scope.result='bg-danger';
			}
		}
		
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