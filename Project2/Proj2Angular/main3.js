function TTTCtrl($scope, $location)  {

  $scope.reset = function() {
    $scope.gameBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    $scope.nextMove = 'X';
    $scope.winner = '';
   
  };
 
  var testWinner=function(){
  };

  $scope.takeTurn= function(row, col) {
    if ($scope.winner =='' && $scope.gameBoard[row][col]== '') {
      $scope.gameBoard[row][col] = $scope.nextMove;
      testWinner();
      $scope.nextMove = $scope.nextMove == 'X' ? 'O' : 'X';

    }
  };
 
  $scope.reset();
  $scope.$watch(function() { return $location.search().gameBoard;}, readUrl);
 
  function setUrl() {
    var rows = [];
    angular.forEach($scope.gameBoard, function(row) {
      rows.push(row.join(','));
    });
    $location.search({gameBoard: rows.join(';') + '/' + $scope.nextMove});
  }
 
  function grade() {
    var b = $scope.gameBoard;
    $scope.winner =
      row(0) || row(1) || row(2) ||
      col(0) || col(1) || col(2) ||
      diagonal(-1) || diagonal(1);
    function row(row) { return same(b[row][0], b[row][1], b[row][2]);}
    function col(col) { return same(b[0][col], b[1][col], b[2][col]);}
    function diagonal(i) { return same(b[0][1-i], b[1][1], b[2][1+i]);}
    function same(a, b, c) { return (a==b && b==c) ? a : '';};
  }
 
  function readUrl(value) {
    if (value) {
      value = value.split('/');
      $scope.nextMove = value[1];
      angular.forEach(value[0].split(';'), function(row, col){
        $scope.board[col] = row.split(',');
      });
      grade();
    }
  }
}