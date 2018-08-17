angular.module('ToDo', []).controller('todoController', ['$scope', function($scope) {

    $scope.todos = [
        {title:'Build a todo app, please!!!', done:false}
    ];

    $scope.addToDo = function () {
        $scope.todos.push({title:$scope.toDoInput, done:false})
        $scope.toDoInput = '';
    };

    $scope.clearCompleted = function () {
        let sntces = $scope.todos;
        $scope.todos = sntces.filter(sntce => sntce.done === false);
    };

}]);