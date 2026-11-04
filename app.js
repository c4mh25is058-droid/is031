
/*
Name: Your Full Name
Department: Your Department
*/

// Create AngularJS application
var app = angular.module("collegeApp", []);

// Parent Controller
app.controller("CollegeController", function($scope) {

    // College name
    $scope.collegeName = "MAHARAJA INSTITUTE OF TECHNOLOGY";

});

// Child Controller
app.controller("StudentController", function($scope) {

    // Student input variables
    $scope.name = "NANDAN KUMAR M";
    $scope.department = "INFORMATION TECHNOLOGY";
    $scope.semester = 3;
    $scope.marks = 90;

    // Sample student names
    $scope.students = [
        "Rahul",
        "Priya",
        "Arun"
    ];

    // Initially hide student details
    $scope.showDetails = false;

    // Function to add a student
    $scope.addStudent = function() {

        if ($scope.name && $scope.name.trim() !== "") {

            // Add student name to array
            $scope.students.push($scope.name.trim());

            // Clear name input
            $scope.name = "";

        } else {

            alert("Please enter a student name!");

        }

    };

});
