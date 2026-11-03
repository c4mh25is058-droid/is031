var app = angular.module('myApp', []);

app.controller('LibraryController', function($scope) {
    $scope.libraryName = "My Library";
    $scope.books = [
        { name: "The Hobbit" },
        { name: "Pride and Prejudice" },
        { name: "The Little Prince" }
    ];
});

app.controller('BooksController', function($scope) {
    $scope.newBookName = "";

    $scope.addBook = function() {
        var bookName = $scope.newBookName.trim();
        if (bookName) {
            $scope.books.push({ name: bookName });
            $scope.newBookName = "";
        }
    };
});