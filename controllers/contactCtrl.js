app
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
    }]);