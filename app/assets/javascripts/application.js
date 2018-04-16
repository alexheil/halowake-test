//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var menuToggle = function() {

  $('#menu-click').click(function() {
    $('#menu-container').fadeIn(300);
    $('.back').fadeIn(300);
    $(".wrapper").addClass("blur");
  });

  $('.back').click(function() {
    $('#menu-container').fadeOut(300);
    $('.back').fadeOut(300);
    $(".wrapper").removeClass("blur");
  });

  $('#close-menu').click(function() {
    $('#menu-container').fadeOut(300);
    $('.back').fadeOut(300);
    $(".wrapper").removeClass("blur");
  });

};

$(document).ready(menuToggle);
$(document).on('turbolinks:load', menuToggle);


var editProfile = function() {

  $('#edit-profile').click(function() {
    $('#profile-form').fadeIn(300);
    $('#close-profile').fadeIn(300);
    $('#edit-profile').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $('#create-album').click(function() {
    $('#album-form').fadeIn(300);
    $('#close-album').fadeIn(300);
    $('#create-album').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $('#edit-photo-click').click(function() {
    $('#album-form').fadeIn(300);
    $('#close-album').fadeIn(300);
    $('#edit-photo-click').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $('#edit-album-click').click(function() {
    $('#edit-album-form').fadeIn(300);
    $('#edit-close-album').fadeIn(300);
    $('#edit-album-click').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $('#edit-close-album').click(function() {
    $('#edit-album-form').fadeOut(300);
    $('#edit-close-album').fadeOut(300);
    $('#edit-album-click').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('#close-profile').click(function() {
    $('#profile-form').fadeOut(300);
    $('#close-profile').fadeOut(300);
    $('#edit-profile').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('#close-album').click(function() {
    $('#album-form').fadeOut(300);
    $('#close-album').fadeOut(300);
    $('#edit-photo-click').fadeIn(300);
    $('#create-album').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('.back').click(function() {
    $('#profile-form').fadeOut(300);
    $('#album-form').fadeOut(300);
    $('#close-profile').fadeOut(300);
    $('#edit-album-form').fadeOut(300);
    $('.flash_js').fadeOut(300)
    $('#create-album').fadeIn(300);
    $('#edit-profile').fadeIn(300);
    $('#edit-photo-click').fadeIn(300);
    $('#edit-album-click').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('.flash_js').on('click','#close-alert', function() {
    $('.flash_js').fadeOut(300)
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

};

$(document).ready(editProfile);
$(document).on('turbolinks:load', editProfile);


var userTabs = function() {

  $('#albums-tab').click(function() {
    $('#albums-container').fadeIn(300);
    $('#feed-container').hide();
    $('#albums-tab').css("background-color", "#ccc");
    $('#feed-tab').css("background-color", "#fff");
  });

  $('#feed-tab').click(function() {
    $('#albums-container').hide();
    $('#feed-container').fadeIn(300);
    $('#feed-tab').css("background-color", "#ccc");
    $('#albums-tab').css("background-color", "#fff");
  });

};

$(document).ready(userTabs);
$(document).on('turbolinks:load', userTabs);

var forSale = function() {

  $('#for-sale').change(function() {
    $('#for-sale-container').toggle(this.checked);
  }).change();

  $('#is-photo-click').change(function() {
    $('#photo-fields').toggle(this.checked);
    $('#art-fields').hide();
    if ($(this).prop('checked')) {
      $('#art-fields').hide();
      $('#is-art-click').prop('checked', false);
    }
    else {
      $('#is-art-click').prop('checked', true);
      $('#art-fields').show();
    }
  }).change();

  $('#is-art-click').change(function() {
    $('#art-fields').toggle(this.checked);
    if ($(this).prop('checked')) {
      $('#photo-fields').hide();
      $('#is-photo-click').prop('checked', false);
    }
    else {
      $('#is-photo-click').prop('checked', true);
      $('#photo-fields').show();
    }
  });

};

$(document).ready(forSale);
$(document).on('turbolinks:load', forSale);

var purchaseForm = function() {

  $('#purchase-photo').click(function() {
    $('#purchase-form').fadeIn(300);
    $('#close-profile').fadeIn(300);
    $('#purchase-photo').fadeOut(300);
    $('.back').fadeIn(300);
    $(".wrapper").addClass("blur", 300);
  });

  $('#close-profile').click(function() {
    $('#purchase-form').fadeOut(300);
    $('#close-profile').fadeOut(300);
    $('#purchase-photo').fadeIn(300);
    $('.back').fadeOut(300);
    $(".wrapper").removeClass("blur", 300);
  });

  $('.back').click(function() {
    $('#purchase-form').fadeOut(300);
    $('#close-album').fadeOut(300);
    $('#purchase-photo').fadeIn(300);
    $('.back').fadeOut(300);
    $(".wrapper").removeClass("blur", 300);
  });

};

$(document).ready(purchaseForm);
$(document).on('turbolinks:load', purchaseForm);