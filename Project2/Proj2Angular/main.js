function TTTCtrl($scope, $location)  {
	
	$scope.gameBoard = [
      		['', '', ''],
      		['', '', ''],
      		['', '', '']
    	];
    
	$scope.takeTurn=function(row,column) {
		
    if (!$scope.winner && !$scope.gameBoard[row][col]) {
      $scope.gameBoard[row][col] = $scope.nextMove;
      $scope.nextMove = $scope.nextMove == 'X' ? 'O' : 'X';
				
		}
	}
}