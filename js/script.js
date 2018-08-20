angular.module('ToDo', []).controller('todoController', ['$scope', function($scope) {

    $scope.todos = [
    ];

    $scope.addToDo = function () {
        $scope.todos.push({title:$scope.toDoInput, done:false});
        $scope.toDoInput = '';
    };

    $scope.clearCompleted = function () {
        let todosArr = $scope.todos;
        $scope.todos = todosArr.filter(todosArrPart => !todosArrPart.done);
    };

    $scope.clearThisGoal = function ($index) {
        $scope.todos.splice($index, 1);
    };

    $scope.sortFromAToZ = function () {
        let arr = $scope.todos;
        arr.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
    };

    $scope.sortFromZToA = function () {
        let arr = $scope.todos;
        arr.sort(function (a, b) {
            if (a.title > b.title) {
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
            return 0;
        });
    }

}]);