---
title: What is an API
---

## What is an API?


API stands for Application Programming Interface. APIs hide complexity from developers, extend systems to partners, organize code, and make components reusable. Don’t worry about the AP, just focus on the I. An API is an interface. You use interfaces all the time. A computer operating system is an interface. Buttons in an elevator are an interface. A gas pedal in a car is an interface.

An interface sits on top of a complicated system and simplifies certain tasks, a middleman that saves you from needing to know all the details of what’s happening under the hood. A web API is the same sort of thing. It sits on top of a web service, like Twitter or YouTube, and simplifies certain tasks for you. It translates your actions into the technical details for the computer system on the other end.

If you have ever programmed in an object-oriented language like Java or C++, an API is quite similar to the concept of a class. When we call a method on an object (such as ```.toString()```) we don't really care HOW the object is producing the result, all we care about is the string we get at the end. A call to an API works in the same way. For example, when we make a call to the Facebook API to retrieve a user's profile picture, we don't care about how the information is retrieved from the server. We just make the request to the API, let it handle all the complicated retrieval logic, and get our photo at the end of it all. 

## Why Are APIs Useful?

Having access to an API generally means having access to a large amount of organized data. The gatekeeper of that data gives a developer permission (in the form of an *API key*) to query a server for information. If the request is successful, the server responds with a message that may look something like this:

```javascript
{
  "coord": {
    "lon":139,
    "lat":35
  },
  "wind": {
    "speed":7.31,
    "deg":187.002
  },
  "rain": {
    "3h":0
  },
  "clouds": {
    "all":92
  }
}
```

Source: [Open Weather API](https://openweathermap.org/current)

In the example above, a developer made a request for the current weather at a specific latitude and longitude, and the server responded with a *JSON object* about the wind, rain, and clouds for that location. Services that you use every day are made with many request and response cycles such as this.

<strong>Here are Top 10 APIs for beginners </strong>

<ol>
  <li>Dropbox: https://www.dropbox.com/developers</li>
  <li>Google Maps: https://developers.google.com/maps/web/</li>
  <li>Twitter: https://dev.twitter.com/docs</li>
  <li>YouTube: https://developers.google.com/youtube/v3/getting-started</li>
  <li>Soundcloud: http://developers.soundcloud.com/docs/api/guide#playing</li>
  <li>Stripe: https://stripe.com/docs/tutorials/checkout</li>
  <li>Instagram: http://instagram.com/developer/</li>
  <li>Twilio: https://www.twilio.com/docs</li>
  <li>Yelp: http://www.yelp.com/developers/getting_started</li>
  <li>Facebook: https://developers.facebook.com/docs/facebook-login/login-flow-for-web</li>
</ol>

## API Tokens

Generally, before using an API from service, you will be required to register your app or open an account with the service. You will then be given a unique key / token / secret / code which acts as a form of authentication. The service will know who is requesting the information. For example, it is not uncommon for services to offer free API calls to indie developers, but require payments if the number of API calls you make in a period of time exceeds their threshold. Tokens can also be revoked if the service determines that the APIs have been abused, so it is important to check the terms and conditions. These tokens should be kept secret.

For example, this is the API call for Dropbox to [list folders](https://www.dropbox.com/developers/documentation/http/documentation#sharing-list_folders).
```
curl -X POST https://api.dropboxapi.com/2/sharing/list_folders \
    --header "Authorization: Bearer <access_token>" \
    --header "Content-Type: application/json" \
    --data "{\"limit\": 100,\"actions\": []}"
```
Without an access token obtained from Dropbox, the API call will not work.

#### More Information:
* [API for non-programmers](https://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/)
* [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)
* [Medium](https://medium.com/girl-geeks/top-10-apis-for-beginners-4d3c43be9386)
