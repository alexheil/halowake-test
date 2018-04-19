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
    $('#close-photo-form').fadeIn(300);
    $('#create-album').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $('#edit-photo-click').click(function() {
    $('#album-form').fadeIn(300);
    $('#close-album').fadeIn(300);
    $('#close-photo-form').fadeIn(300);
    $('#edit-photo-click').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
  });

  $(".album_title").on("click", "#edit-album-click", function() {
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

  $(".album_form").on("click", "#close-album", function() {
    $('#album-form').fadeOut(300);
    $('#close-album').fadeOut(300);
    $('#edit-photo-click').fadeIn(300);
    $('#create-album').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('#close-photo-form').click(function() {
    $('#album-form').fadeOut(300);
    $('#close-photo-form').fadeOut(300);
    $('#edit-photo-click').fadeIn(300);
    $('#create-album').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);  });

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

  $('.album_tabs').on('click','#albums-tab', function() {
    $('#albums-container').fadeIn(300);
    $('#feed-container').hide();
    $('#albums-tab').css("background-color", "#ccc");
    $('#feed-tab').css("background-color", "#fff");
  });

  $('.album_tabs').on('click','#feed-tab', function() {
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

};

$(document).ready(forSale);
$(document).on('turbolinks:load', forSale);

var photoOrArt = function() {

  $('#is-art-click').click(function() {
    $('#art-fields').show();
    $('#photo-fields').hide();
  });

  $('#is-photo-click').click(function() {
    $('#art-fields').hide();
    $('#photo-fields').show();
  });

  $('#shippable').click(function() {
    $('#shippable-fields').show();
  });

  $('#downloadable').click(function() {
    $('#shippable-fields').hide();
  });

};

$(document).ready(photoOrArt);
$(document).on('turbolinks:load', photoOrArt);

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