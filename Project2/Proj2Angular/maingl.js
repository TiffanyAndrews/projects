function TTTCtrl($scope, $location)  {

  $scope.reset = function() {
    $scope.gameBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    $scope.nextMove = 'X';
  };
 
  $scope.takeTurn= function(row, col) {
    if (!$scope.winner && !$scope.gameBoard[row][col]) {
      $scope.gameBoard[row][col] = $scope.nextMove;
      $scope.nextMove = $scope.nextMove == 'X' ? 'O' : 'X';
      setUrl();
    }
  };
 
  $scope.reset();
}