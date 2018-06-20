$(document).ready(function() {

  /*
  $('form').submit(function(event){
    event.preventDefault();
  });

  var config = {
    auth0Domain: 'https://auth.freecodecamp.org',
    clientID: 'fhiILUfkVewunEORIG1wZ4yghfLi3ZEh',
    callbackURL: 'http://localhost:3000/auth/auth0/callback'
  }
  var params = Object.assign({
    domain: config.auth0Domain,
    clientID: config.clientID,
    redirectUri: config.callbackURL,
    scope: 'openid email',
    audience: 'https://' + config.auth0Domain + '/userinfo',
    responseType: 'code'
  }, config.internalOptions);
  */

  var passwordlessOptions = {
    theme: {
      logo: 'https://raw.githubusercontent.com/freeCodeCamp/assets/master/assets/logos/fcc_puckRoundedCorners600.png',
      primaryColor: '#006400'
    },
    languageDictionary: {
      title: "freeCodeCamp.org"
    },
    allowedConnections: ['email'],
    passwordlessMethod: 'link',
    auth: {
      responseMode: 'form_post',
      redirect: false,
      redirectUrl: 'http://localhost:3000/auth/auth0/callback',
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email'
      }
    }
  }

  var lockPasswordless = new Auth0LockPasswordless(
   'fhiILUfkVewunEORIG1wZ4yghfLi3ZEh',
   'freecodecamp.auth0.com',
   passwordlessOptions
  );
  /*
  $('#email-signin').click(function(){
    lockPasswordless.show();
  });
  */

});
