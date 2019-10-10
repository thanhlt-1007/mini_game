// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).on('ready', function() {
  $('.js-btn-display-answer').on('click', function() {
    var index = $(this).data('index');
    $('.js-row-answer').eq(index).find('.js-answer-char').removeClass('answer-char-hidden');
  });

  $('.js-tab-links').on('click', function() {
    var index = $(this).data('index');
    $('.js-tab-content').hide();
    $('.js-tab-content').eq(index).show();

    $('.js-tab-links').removeClass('active');
    $(this).addClass('active');
  });

  $('.js-input-answer').on('keypress', function(event) {
    var keyCode = event.keyCode;
    var answer = $(this).data('answer');
    var index = $(this).data('index');
    var val = $(this).val().replace(/ +/g, '').toUpperCase();
    var modal = $(this).closest('.js-modal-question-'+ index);
    var row = $('.js-row-answer').eq(index);
    var error = modal.find('.js-text-danger');
    error.html('');

    if(keyCode == '13') {
      if(answer == val) {
        row.find('.js-answer-char').removeClass('answer-char-hidden');
        modal.modal('hide');
        error.html('');

        $('.loader').removeClass('hidden');
        setTimeout(function(){
          $('.loader').addClass('hidden');
        }, 2000);
      } else {
        error.html('Chúc bạn may mắn lần sau');
      }
    }
  });
});
