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
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {
  $('#toggle_menu').click(function (e) {
    $('#wrapper').toggleClass('toggled');
    $('#toggle_menu').toggleClass('active');
  });
  $('ul#items>li').hover(function (e) {
    console.log('1');
    var selected = $(this).hasClass('selected');
    $('ul#items>li').removeClass('selected');
    if (!selected) {
      $(this).addClass('selected');
    }
  });
  $('ul#items>li>img').click(function (e) {
    var input = $(e.target).siblings('input[type=text]');
    var span = $(e.target).siblings('span');
    span.hide();
    input.show();
    input.focus();
    input.select();
  });
  $('ul#items>li>input[type=text]').focusout(function (e) {
    e.preventDefault();
    hideEditItemInput(e.target);
  });
  $('ul#items>li>input[type=text]').keyup(function (e) {
    e.preventDefault();
    if (e.keyCode == 27 || e.keyCode == 13) {
      hideEditItemInput(e.target);
    }
  });
  $('#todo_item_content').focus(function (e) {
    $('ul#items>li').removeClass('selected');
  });
  $('.add-list>a').click(function (e) {
    e.preventDefault();
    $('.add-list>a').hide();
    $('.add-list>input').show();
    $('.add-list>input').focus();
  });
  $('.add-list>input').keyup(function (e) {
    if (e.keyCode == 27) {
      $('.add-list>input').val('');
      $('.add-list>input').hide();
      $('.add-list>a').show();
    }
  });
  $('.edit-list').click(function (e) {
    e.preventDefault();
    var li = $(e.target).parents('li.todo-list-item');
    var input = li.find('input');
    var mainLink = li.find('.list-name');
    mainLink.hide();
    input.val(mainLink.text());
    input.show();
    input.focus();
    input.select();
  });
  $('li.todo-list-item>input[type=text]').focusout(function (e) {
    hideEditListInput(e.target);
  });
  $('li.todo-list-item>input[type=text]').keyup(function (e) {
    if (e.keyCode == 27) {
      hideEditListInput(e.target);
    }
  });
});

function hideEditListInput(target) {
  var input = $(target);
  var mainLink = input.parents('li.todo-list-item').find('.list-name');
  input.val(mainLink.text());
  input.hide();
  mainLink.show();
}

function hideEditItemInput(target) {
  var li = $(target).parent();
  var span = $(target).siblings('span');
  $(target).val('');
  $(target).hide();
  li.removeClass('selected');
  span.show();
}
