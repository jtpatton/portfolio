app
    .controller('homeCtrl',['$scope', function($scope){
        $scope.title = "James Tyler Patton",
        $scope.pros = ["Web", "UX", "UI"],
        //typed.js for home screen
        $(function(){
            $(".typed").typed({
                strings: ["Web Designer", "Web Developer", "UX Designer", "UI Designer", "Front-end Developer"],
                typeSpeed: 70,
                backDelay: 2500,
                loop: true
            });
        });
    }])