var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "MITM college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "Nandan";
        $scope.department = "Information Science";
        $scope.semester = 3;

        //aray
        $scope.students =[
            "AKSHAY U SHET",
            "AYUSH KUMAR K S",
            "karthik c",
            "Nandan",
        ];
    }
);