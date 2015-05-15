(function() {
  // runs every time a page loads.

  $.get('/account/api/paircode').success(function(data) {
    console.log("data from API", data.user);

    var pairData = data.user;

    if (!pairData.start) {
    // if the user has not submitted a pair request, it returns automatically.
      return;
    }

    function checkAndWarn() {
      var warningMins = 55,
          now = Date.now(),
          warningThreshold = now - (warningMins * 60 * 1000),
          userTime = pairData.start;

      // if the request is older than 55 minutes ago (i.e. there are 5 minutes left)
      if (userTime <= warningThreshold) {
        $('#expired-paircode-request').modal('show');
      }

    }
    // check on load and again every minute
    checkAndWarn();
    var timer = setInterval(checkAndWarn(), 60 * 1000);

  });
})();


// globally exposed function for the modal
function renewPairRequest() {
  $('#expired-paircode-request').modal('hide');
  $.get('/pair-coding/refresh').success(function(data) {
    if (data === 'OK') {
      console.log("Your request was refreshed; you have another hour remaining.");
    } else {
      console.log("There was a problem refreshing your request.");
    }
  });
}
