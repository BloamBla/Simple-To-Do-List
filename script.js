angular.module('ToDo', []).controller('todoController', ['$scope', function($scope) {

    $scope.todos = [
    ];

    $scope.addToDo = function () {
        $scope.todos.push({title:$scope.toDoInput, done:false})
        $scope.toDoInput = '';
    };

    $scope.clearCompleted = function () {
        let todosArr = $scope.todos;
        $scope.todos = todosArr.filter(todosArrPart => !todosArrPart.done);
    };

    $scope.clearThisGoal = function ($index) {
        $scope.todos.splice($index, 1);
    };

}]);
