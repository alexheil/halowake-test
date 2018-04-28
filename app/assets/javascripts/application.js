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

var flashTimeout = function() {

  setTimeout(function() {
    $('.flash_js').fadeOut();
  }, 5000);

};

$(document).ready(flashTimeout);
$(document).on('turbolinks:load', flashTimeout);

var signInAndRegister = function() {

  $('#sign-in').click(function() {
    $('#sign-in-form').fadeIn(300);
    $('#close-sign-in').fadeIn(300);
    $('#sign-in').fadeOut(300);
    $('#register').fadeOut(300);
    $('#menu-container').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
    $('.background').addClass("blur", 300);
  });

  $('#register').click(function() {
    $('#register-form').fadeIn(300);
    $('#close-register').fadeIn(300);
    $('#sign-in').fadeOut(300);
    $('#register').fadeOut(300);
    $('#menu-container').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
    $('.background').addClass("blur", 300);
  });

  $('.back').click(function() {
    $('#sign-in-form').fadeOut(300);
    $('#register-form').fadeOut(300);
    $('#close-sign-in').fadeOut(300);
    $('#close-register').fadeOut(300);
    $('#sign-in').fadeIn(300);
    $('#register').fadeIn(300);
    $('#menu-container').fadeOut(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
    $('.background').removeClass("blur", 300);
  });

  $('.close').click(function() {
    $('#sign-in-form').fadeOut(300);
    $('#close-sign-in').fadeOut(300);
    $('#register-form').fadeOut(300);
    $('#close-register').fadeOut(300);
    $('#sign-in').fadeIn(300);
    $('#register').fadeIn(300);
    $('#menu-container').fadeOut(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
    $('.background').removeClass("blur", 300);
  });

};

$(document).ready(signInAndRegister);
$(document).on('turbolinks:load', signInAndRegister);

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

  $(".album_form").on("click", ".close", function() {
    $('#album-form').fadeOut(300);
    $('#close-album').fadeOut(300);
    $('#edit-photo-click').fadeIn(300);
    $('#create-album').fadeIn(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('#share-click').click(function() {
    $('#share-form').fadeIn(300);
    $('#edit-photo-click').fadeOut(300);
    $('.back').fadeIn(300);
    $('.wrapper').addClass("blur", 300);
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
    $('#sign-in-form').fadeOut(300);
    $('#register-form').fadeOut(300);
    $('#close-sign-in').fadeOut(300);
    $('#close-register').fadeOut(300);
    $('#share-form').fadeOut(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('.close').click(function() {
    $('#profile-form').fadeOut(300);
    $('#album-form').fadeOut(300);
    $('#close-profile').fadeOut(300);
    $('#edit-album-form').fadeOut(300);
    $('.flash_js').fadeOut(300)
    $('#create-album').fadeIn(300);
    $('#edit-profile').fadeIn(300);
    $('#edit-photo-click').fadeIn(300);
    $('#edit-album-click').fadeIn(300);
    $('#sign-in-form').fadeOut(300);
    $('#register-form').fadeOut(300);
    $('#close-sign-in').fadeOut(300);
    $('#close-register').fadeOut(300);
    $('#share-form').fadeOut(300);
    $('.back').fadeOut(300);
    $('.wrapper').removeClass("blur", 300);
  });

  $('#optional-fields-click').click(function() {
    $('#optional-fields').fadeIn(300);
    $('#optional-fields-click').hide();
    $('#optional-fields-close').fadeIn(300);
  });

  $('#optional-fields-close').click(function() {
    $('#optional-fields').fadeOut(300);
    $('#optional-fields-close').hide();
    $('#optional-fields-click').fadeIn(300);
  });

};

$(document).ready(editProfile);
$(document).on('turbolinks:load', editProfile);

var followButton = function() {

  if ($(".submit-button").val() == "Following") {
    $(".submit-button").mouseenter(function() {
      $(".submit-button").val("Unfollow");
      $(".submit-button").attr('class', 'unsubmit-button');
    });
    $(".submit-button").mouseleave(function() {
      $(".submit-button").val("Following");
      $(".unsubmit-button").attr('class', 'submit-button');
    });
  };

  $('.text-hover').mouseenter(function() {
    $(this).parent().closest('.relative').find('.thumbnail-image-feed').css('opacity', '0.5')
  });

  $('.text-hover').mouseleave(function() {
    $(this).parent().closest('.relative').find('.thumbnail-image-feed').css('opacity', '1')
  });

  $('.thumbnail-image-feed').mouseenter(function() {
    $(this).parent().closest('.relative').find('.thumbnail-image-feed').css('opacity', '0.5')
  });

  $('.thumbnail-image-feed').mouseleave(function() {
    $(this).parent().closest('.relative').find('.thumbnail-image-feed').css('opacity', '1')
  });

};

$(document).ready(followButton);
$(document).on('turbolinks:load', followButton);

var userTabs = function() {

  $('.album_tabs').on('click','#album-button', function() {
    $('#albums-container').fadeIn(300);
    $('#feed-container').hide();
    $('#album-button').removeClass("deactive-tab");
    $('#album-button').addClass("active-tab");
    $('#feed-button').removeClass("active-tab");
    $('#feed-button').addClass("deactive-tab");
  });

  $('.album_tabs').on('click','#feed-button', function() {
    $('#albums-container').hide();
    $('#feed-container').fadeIn(300);
    $('#album-button').addClass("deactive-tab");
    $('#album-button').removeClass("active-tab");
    $('#feed-button').addClass("active-tab");
    $('#feed-button').removeClass("deactive-tab");
  });

  if ($('#is-art-click').prop('checked')) {
    $('#photo-tab').addClass("unchecked-tab");
    $('#photo-tab').removeClass("checked-tab");
    $('#art-tab').addClass("checked-tab");
    $('#art-tab').removeClass("unchecked-tab");
  };

  $('.photo_form').on('click','#photo-tab', function() {
    $('#albums-container').fadeIn(300);
    $('#feed-container').hide();
    $('#photo-tab').removeClass("unchecked-tab");
    $('#photo-tab').addClass("checked-tab");
    $('#art-tab').removeClass("checked-tab");
    $('#art-tab').addClass("unchecked-tab");
  });

  $('.photo_form').on('click','#art-tab', function() {
    $('#albums-container').hide();
    $('#feed-container').fadeIn(300);
    $('#photo-tab').addClass("unchecked-tab");
    $('#photo-tab').removeClass("checked-tab");
    $('#art-tab').addClass("checked-tab");
    $('#art-tab').removeClass("unchecked-tab");
  });

  $('#bronze-id').click(function() {
    $('#bronze-tab').addClass("bronze-tab");
    $('#bronze-tab').removeClass("unchecked-membership-tab");
    $('#silver-tab').removeClass("silver-tab");
    $('#gold-tab').removeClass("gold-tab");
    $('#platinum-tab').removeClass("platinum-tab");
    $('#silver-tab').addClass("unchecked-membership-tab");
    $('#gold-tab').addClass("unchecked-membership-tab");
    $('#platinum-tab').addClass("unchecked-membership-tab");
  });

  $('#silver-id').click(function() {
    $('#silver-tab').addClass("silver-tab");
    $('#silver-tab').removeClass("unchecked-membership-tab");
    $('#bronze-tab').removeClass("bronze-tab");
    $('#gold-tab').removeClass("gold-tab");
    $('#platinum-tab').removeClass("platinum-tab");
    $('#bronze-tab').addClass("unchecked-membership-tab");
    $('#gold-tab').addClass("unchecked-membership-tab");
    $('#platinum-tab').addClass("unchecked-membership-tab");
  });

  $('#gold-id').click(function() {
    $('#gold-tab').addClass("gold-tab");
    $('#gold-tab').removeClass("unchecked-membership-tab");
    $('#bronze-tab').removeClass("bronze-tab");
    $('#silver-tab').removeClass("silver-tab");
    $('#platinum-tab').removeClass("platinum-tab");
    $('#bronze-tab').addClass("unchecked-membership-tab");
    $('#silver-tab').addClass("unchecked-membership-tab");
    $('#platinum-tab').addClass("unchecked-membership-tab");
  });

  $('#platinum-id').click(function() {
    $('#platinum-tab').addClass("platinum-tab");
    $('#platinum-tab').removeClass("unchecked-membership-tab");
    $('#bronze-tab').removeClass("bronze-tab");
    $('#silver-tab').removeClass("silver-tab");
    $('#gold-tab').removeClass("gold-tab");
    $('#bronze-tab').addClass("unchecked-membership-tab");
    $('#silver-tab').addClass("unchecked-membership-tab");
    $('#gold-tab').addClass("unchecked-membership-tab");
  });

  if ($('#bronze-id').prop('checked')) {
    $('#bronze-tab').removeClass("unchecked-membership-tab");
    $('#bronze-tab').addClass("bronze-tab");
  };

  if ($('#silver-id').prop('checked')) {
    $('#silver-tab').removeClass("unchecked-membership-tab");
    $('#silver-tab').addClass("silver-tab");
  };

  if ($('#gold-id').prop('checked')) {
    $('#gold-tab').removeClass("unchecked-membership-tab");
    $('#gold-tab').addClass("gold-tab");
  };

  if ($('#platinum-id').prop('checked')) {
    $('#platinum-tab').removeClass("unchecked-membership-tab");
    $('#platinum-tab').addClass("platinum-tab");
  };

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
    $('#art-fields').fadeIn(300);
    $('#photo-fields').hide();
  });

  $('#is-photo-click').click(function() {
    $('#art-fields').hide();
    $('#photo-fields').fadeIn(300);
  });

  $('#shippable').click(function() {
    $('#shippable-fields').fadeIn(300);
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