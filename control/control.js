


$(".draggable").draggable({ 
  revert:true,
});  

$(".avatar").droppable({
  accept: '.draggable',
  drop: function(event, ui) {
    
    if ($(ui.draggable).hasClass('dress') ){
      $(ui.draggable).hide();
      $('.avatar .dress').show();
    }
    if ($(ui.draggable).hasClass('croptop') ){
      $(ui.draggable).hide();
      $('.avatar .croptop').show();
    }
    if ($(ui.draggable).hasClass('pants') ){
      $(ui.draggable).hide();
      $('.avatar .pants').show();
    }
    if ($(ui.draggable).hasClass('cap') ){
      $(ui.draggable).hide();
      $('.avatar .cap').show();
    }
    if ($(ui.draggable).hasClass('hairstyle1') ){
      $(ui.draggable).hide();
      $('.avatar .hairstyle1').show();
    }
    if ($(ui.draggable).hasClass('hairtsyle2') ){
      $(ui.draggable).hide();
      $('.avatar .hairstyle2').show();
    }
    if ($(ui.draggable).hasClass('deminskrit') ){
      $(ui.draggable).hide();
      $('.avatar .deminskrit').show();
    }

    if ($(ui.draggable).hasClass('jean') ){
      $(ui.draggable).hide();
      $('.avatar .jean').show();
    }
    
  }
});

$(".return").droppable({
  accept: '.draggable',
  drop: function(event, ui) {

    if ($(ui.draggable).hasClass('dress') ){
      $(ui.draggable).hide();
      $('.return .dress').show();
    }
    if ($(ui.draggable).hasClass('croptop') ){
      $(ui.draggable).hide();
      $('.return .croptop').show();
    }
    if ($(ui.draggable).hasClass('pants') ){
      $(ui.draggable).hide();
      $('.return .pants').show();
    }
    if ($(ui.draggable).hasClass('cap') ){
      $(ui.draggable).hide();
      $('.return .cap').show();
    }
    if ($(ui.draggable).hasClass('hairstyle1') ){
      $(ui.draggable).hide();
      $('.return .hairstyle1').show();
    }
    if ($(ui.draggable).hasClass('hairtsyle2') ){
      $(ui.draggable).hide();
      $('.return .hairstyle2').show();
    }
    if ($(ui.draggable).hasClass('deminskrit') ){
      $(ui.draggable).hide();
      $('.return .deminskrit').show();
    }

    if ($(ui.draggable).hasClass('jean') ){
      $(ui.draggable).hide();
      $('.return .jean').show();
    }
  }
});
