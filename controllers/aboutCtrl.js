app
	.controller('aboutCtrl', ['$scope', function($scope){
        $(".window-contain").draggable({handle: ".windowhead", containment: [ 105, 50, 10000, 10000]});
    }])