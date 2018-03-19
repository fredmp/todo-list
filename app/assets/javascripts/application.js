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

$(document).ready(function () {
  $("#toggle_menu").click(function (e) {
    $("#wrapper").toggleClass("toggled");
    $("#toggle_menu").toggleClass("active");
  });
  $("ul#items>li").click(function (e) {
    var selected = $(this).hasClass('selected');
    $("ul#items>li").removeClass('selected');
    if (!selected) {
      $(this).addClass('selected');
    }
  });
  $("#todo_item_content").focus(function (e) {
    $("ul#items>li").removeClass('selected');
  });
  $(".add-list>a").click(function (e) {
    e.preventDefault();
    $(".add-list>a").hide();
    $(".add-list>input").show();
    $(".add-list>input").focus();
  });
  $(".add-list>input").keyup(function (e) {
    if (e.keyCode == 27) {
      $(".add-list>input").val('');
      $(".add-list>input").hide();
      $(".add-list>a").show();
    }
  });
  $(".todo-list-item, .list-name, .remove-list").mouseenter(function (e) {
    var element = $(e.target);
    if (element.hasClass('todo-list-item')) {
      $(e.target).find(".remove-list").css('display', 'inline');
    } else if (element.hasClass('list-name')) {
      $(e.target).next().css('display', 'inline');
    } else if (element.hasClass('remove-list')) {
      $(e.target).css('display', 'inline');
    }
  });
  $(".todo-list-item").mouseleave(function (e) {
    var element = $(e.target);
    if (element.hasClass('todo-list-item')) {
      $(e.target).find(".remove-list").css('display', 'none');
    } else if (element.hasClass('list-name')) {
      $(e.target).next().css('display', 'none');
    } else if (element.hasClass('remove-list')) {
      $(e.target).css('display', 'none');
    }
  });
});