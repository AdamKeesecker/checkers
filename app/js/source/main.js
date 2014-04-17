(function(){
  'use strict';

  $(document).ready(init);

  var playerTurn;
  var player1;
  var player2;
  var currentPlayer;



  function init(){
    addSpace();
    setUpBoard();
    $('.validSpace').click(selectPiece);
    $('#reset').click(reset);
  }

  function selectPiece(){
    if(isSelected()){
      $('.selected').removeClass('selected');
    }
    $(this).addClass('selected');
  }

  function isSelected(){
    if($('.selected').length > 0){
      return true;
    }
    return false;
  }

  function addSpace(){
    $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
    $('tr:nth-child(2n-1) td:nth-child(2n)').addClass('validSpace');
  }

  function setUpBoard(){
    var spaces = $('.validSpace');
    for(var i=0; i<12; i++){
      $(spaces[i]).addClass('player2');
    }
    for(i=20; i<32; i++){
      $(spaces[i]).addClass('player1');
    }
  }

  function reset(){

  }




























})();
