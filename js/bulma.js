jQuery(document).ready(function ($) {

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  $('.modal-button').click(function() {
    var target = $(this).data('target');
    $('html').addClass('is-clipped');
    $(target).addClass('is-active');
  });

  $('.modal-background, .modal-close').click(function() {
    $('html').removeClass('is-clipped');
    $(this).parent().removeClass('is-active');
  });

  $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
    $('html').removeClass('is-clipped');
    $('#modal-ter').removeClass('is-active');
  });

  var $highlights = $('.highlight');

  $highlights.each(function() {
    var $el = $(this);
    var copy = '<button class="copy">Copy</button>';
    var expand = '<button class="expand">Expand</button>';
    $el.append(copy);

    if ($el.find('pre code').innerHeight() > 600) {
      $el.append(expand);
    }
  });

  var $highlightButtons = $('.highlight .copy, .highlight .expand');

  $highlightButtons.hover(function() {
    $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
  }, function() {
    $(this).parent().css('box-shadow', 'none');
  });

  $('.highlight .expand').click(function() {
    $(this).parent().children('pre').css('max-height', 'none');
  });

  // new Clipboard('.copy', {
  //   target: function(trigger) {
  //     return trigger.previousSibling;
  //   }
  // });

});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.scroll').fadeIn();
  } else {
    $('.scroll').fadeOut();
  }
});

// Close mobile & tablet menu on item click
$('.navbar-item').each(function(e) {
  $(this).click(function(){
    if($('.navbar-burger').hasClass('is-active')){
      $('.navbar-burger').removeClass('is-active');
      $('#navMenu').removeClass('is-active');
    }
  });
});

// Open or Close mobile & tablet menu
$('.navbar-burger').click(function () {
  if($('.navbar-burger').hasClass('is-active')){
    $('.navbar-burger').removeClass('is-active');
    $('#navMenu').removeClass('is-active');
  }else {
    $('.navbar-burger').addClass('is-active');
    $('#navMenu').addClass('is-active');
  }
});
