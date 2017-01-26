var main = window.main || {};

main.ga = window.ga || function() {};

$(document).ready(function() {

  const { Observable } = window.Rx;
  var CSRF_HEADER = 'X-CSRF-Token';

  var setCSRFToken = function(securityToken) {
    jQuery.ajaxPrefilter(function(options, _, xhr) {
      if (!xhr.crossDomain) {
        xhr.setRequestHeader(CSRF_HEADER, securityToken);
      }
    });
  };

  setCSRFToken($('meta[name="csrf-token"]').attr('content'));

  $('img').on('error', function() {
    $(this)
      .unbind('error')
      .attr(
        'src',
        'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png'
      );
  });

  $.each($('.sr-only'), function(i, span) {
    if ($(span).text() === ' Complete') {
      $(span).parents('p').addClass('manip-hidden');
    }
  });

  function addAlert(message = '', type = 'alert-info') {
    return $('.flashMessage').append($(`
      <div class='alert ${type}'>
        <button class='close' type='button', data-dismiss='alert'>
          <span class='ion-close-circled' />
        </Button>
        <div>${message}</div>
      </div>
    `));
  }

  function toggleNightMode() {
    if (!main.userId) {
      return addAlert('You must be logged in to use our themes.');
    }
    const iframe$ = document.getElementById('map-aside-frame');
    const body$ = $('body');
    if (iframe$) {
      iframe$.src = iframe$.src;
    }
    body$.hide();
    let updateThemeTo;
    if (body$.hasClass('night')) {
      body$.removeClass('night');
      updateThemeTo = 'default';
    } else {
      body$.addClass('night');
      updateThemeTo = 'night';
    }
    body$.fadeIn('100');
    const options = {
      url: `/api/users/${main.userId}/update-theme`,
      type: 'POST',
      data: { theme: updateThemeTo },
      dataType: 'json'
    };
    return $.ajax(options)
      .done(() => console.log('theme updated successfully'))
      .fail(err => {
        let message;
        try {
          message = JSON.parse(err.responseText).error.message;
        } catch (error) {
          return null;
        }
        if (!message) {
          return null;
        }
        return addAlert(message);
      });
  }

  Observable.merge(
    Observable.fromEvent($('#night-mode'), 'click'),
    Observable.create(observer => {
      window.Mousetrap.bind('g t n', () => observer.onNext());
    })
  )
    .debounce(500)
    .subscribe(toggleNightMode, err => console.error(err));

  // Hot Keys
  window.Mousetrap.bind('g n n', () => {
    // Next Challenge
    window.location = '/challenges/next-challenge';
  });
  window.Mousetrap.bind('g n m', () => {
    // Map
    window.location = '/map';
  });
  window.Mousetrap.bind('g n a', () => {
    // About
    window.location = '/about';
  });
  window.Mousetrap.bind('g n s', () => {
    // Shop
    window.location = '/shop';
  });
  window.Mousetrap.bind('g n o', () => {
    // Settings
    window.location = '/settings';
  });
  window.Mousetrap.bind('g n r', () => {
    // Repo
    window.location = 'https://github.com/freecodecamp/freecodecamp/';
  });

  (function getFlyer() {
    const flyerKey = '__flyerId__';
    $.ajax({
      url: '/api/flyers/findOne',
      method: 'GET',
      dataType: 'JSON',
      data: { filter: { order: 'id DESC' } }
    })
    // log error
    .fail(err => console.error(err))
    .done(flyer => {
      const lastFlyerId = localStorage.getItem(flyerKey);
      if (
        !flyer ||
        !flyer.isActive ||
        lastFlyerId === flyer.id
      ) {
        return;
      }
      $('#dismiss-bill').on('click', () => {
        localStorage.setItem(flyerKey, flyer.id);
      });
      $('#bill-content').html(flyer.message);
      $('#bill-board').fadeIn();
    });
  }());
});
