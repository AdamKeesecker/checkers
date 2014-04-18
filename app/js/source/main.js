(function(){
  'use strict';

  $(document).ready(init);

  var currPlayer;

  function init(){
    currPlayer='player1';
    addSpace();
    setUpBoard();

    $('#reset').click(request);

    $('#board').on('click','.validSpace', selectPiece);
    $('#board').on('click','td:not(.piece)', movePiece);



  }






  function movePiece(){
    if($(this).hasClass('validSpace')){
      $('.selected').removeClass('selected');
    }
  }

  function selectPiece(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
    }
    else{
      if(isSelected()){
        $('.selected').removeClass('selected');
      }
      if($(this).hasClass('piece')){
        if($(this).hasClass(currPlayer)){
          $(this).addClass('selected');
        }
      }
    }
  }

  function isSelected(){
    return($('.selected').length > 0);
  }


  function setUpBoard(){
    var spaces = $('.validSpace');
    for(var i=0; i<12; i++){
      $(spaces[i]).addClass('player2');
      $(spaces[i]).addClass('piece');

    }
    for(i=20; i<32; i++){
      $(spaces[i]).addClass('player1');
      $(spaces[i]).addClass('piece');
    }
  }


  function addSpace(){
    $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
    $('tr:nth-child(2n-1) td:nth-child(2n)').addClass('validSpace');
  }



  function request(){
    var answer = confirm('Are you sure you would like to reset?');
    if(answer===true){
      setUpBoard();
    }
  }


























})();
