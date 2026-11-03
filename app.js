var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    $scope.name = "Nandan";
});
//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "MITM college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "Nandan";
        $scope.department = "information science and engineering";
    }
);
//sample