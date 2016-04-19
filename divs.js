var app = angular.module('demoApp', []);
app.controller('demoCtrl', function($scope) {
    $scope.messages = [];
    $scope.clickedOrTouched = function(item) {
        (item) ? item = 1 : null
        for (var i =0 ; i< item ; i++) {
            $scope.messages.push("You have Clicked");
        }
    };
});//end-demoCtrl
app.directive('onTouch', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var ontouchFn = scope.$eval(attrs.onTouch);
            elm.bind('touchstart', function(evt) {
                scope.$apply(function() {
                    ontouchFn.call(scope, evt.which);
                });
            });
            elm.bind('click', function(evt){
                scope.$apply(function() {
                    ontouchFn.call(scope, evt.which);
                });
            });
        }
    };
});//end-directive