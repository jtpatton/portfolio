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
	.controller('aboutCtrl', ['$scope', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	}])
	.controller('contactCtrl',['$scope', '$http', function($scope, $http){
		$scope.formData = {};

		// process the form
		$scope.processForm = function() {
			$scope.start();
			$http({
		        method  : 'POST',
		        url     : 'process.php',
		        data    : $.param($scope.formData),  // pass in data as strings
		        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		    })
		        .success(function(data) {
		            console.log(data);

		            $scope.complete();
		            if (!data.success) {
		            	// if not successful, bind errors to error variables
		                $scope.errorName = data.errors.inputName;
		                $scope.errorEmail = data.errors.inputEmail;
		                $scope.errorMessage = data.errors.inputMessage;
		                $scope.errorPhone = data.errors.inputPhone;
		            } else {
		            	// if successful, bind success message to message
		            	$scope.errorName = "";
		                $scope.errorEmail = "";
		                $scope.errorPhone = "";
		                $scope.errorMessage = "";
		                $scope.message = data.message;
		                
		                $scope.formData.inputName = "";
		                $scope.formData.inputEmail = "";
		                $scope.formData.inputCompany = "";
		                $scope.formData.inputPhone = "";
		                $scope.formData.inputMessage = "";
		            }
		        });
		    console.log($scope.formData);

		};

		$scope.start = function(){
			console.log('Sending Message');
		};
		$scope.complete = function(){
			console.log('Message Sent');
		};

		$('.social-icons.facebook').hover(
			function(){
				$('.social-icons.facebook img').attr('src', 'images/social-facebook.png');
			},
			function(){
				$('.social-icons.facebook img').attr('src', 'images/social-facebook-outline.png');
			}
		);
		$('.social-icons.linkedin').hover(
			function(){
				$('.social-icons.linkedin img').attr('src', 'images/social-linkedin.png');
			},
			function(){
				$('.social-icons.linkedin img').attr('src', 'images/social-linkedin-outline.png');
			}
		);
		$('.social-icons.github').hover(
			function(){
				$('.social-icons.github img').attr('src', 'images/social-github.png');
			},
			function(){
				$('.social-icons.github img').attr('src', 'images/social-github-outline.png');
			}
		);

		$('.social-icons.email').hover(
			function(){
				$('.social-icons.email img').attr('src', 'images/ios7-email.png');
			},
			function(){
				$('.social-icons.email img').attr('src', 'images/ios7-email-outline.png');
			}
		);

		
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
	}])
	.controller('homeCtrl',['$scope', function($scope){
		$scope.title = "James Tyler Patton",
		$scope.pros = ["Web", "UX", "UI"],
        //typed.js for home screen
        $(function(){
            $(".typed").typed({
                strings: ["Code Warrior", "Web Designer", "Web Developer", "UX Designer", "UI Designer", "Graphic Artist"],
                typeSpeed: 70,
                backDelay: 2500,
                loop: true
            });
        });
	}])
	.controller('portfolioCtrl',['$scope', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
		$(function(){
			$('.portfolio > .row').hover(function(){
				if(window.innerWidth > 1100){
					$(this).children('.col6').children('a').children('img').addClass('hover');
				}
			},function(){
				$(this).children('.col6').children('a').children('img').removeClass('hover');
			});
		});
	}])
	.controller('resumeCtrl',['$scope', function($scope){
		$(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
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