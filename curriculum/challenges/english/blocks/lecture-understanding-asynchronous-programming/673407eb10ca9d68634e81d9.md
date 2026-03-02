---
id: 673407eb10ca9d68634e81d9
title: What Is the Geolocation API, and How Does the getCurrentPosition Work?
challengeType: 19
dashedName: what-is-the-geolocation-api-and-how-does-the-getcurrentposition-work
---

# --description--

The Geolocation API provides a way for websites to request the user's location. It's important to note that for privacy reasons, the user has to give permission before their location can be accessed via the website.

The main method we'll be focusing on today is `getCurrentPosition`. This method is used to collect the geographic location of the device. Here's an example of how you might use `getCurrentPosition`:

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  (error) => {
    console.log("Error: " + error.message);
  }
);
```

In this code, we're calling `getCurrentPosition` and passing it a function which will be called when the position is successfully obtained. This position object contains various pieces of information, but we're focusing on `latitude` and `longitude` only.

If there is an issue with getting the position, then the error will be logged to the console. 

The `getCurrentPosition` method uses GPS, Wi-Fi networks, or IP address geolocation, depending on the device and its settings. Once the location is found, the success callback function is called with a position object.

The position object contains various properties, where the most commonly used are `latitude` and `longitude`, but it can also include `altitude`, `accuracy`, `speed`, and `heading`, and so on.

One important consideration when using geolocation is user privacy. Explain to your users why you need their location data and how you'll use it.

# --questions--

## --text--

What is the primary purpose of the Geolocation API's `getCurrentPosition` method?

## --answers--

To set the user's current location.

### --feedback--

Think about what information this method provides to the web application.

---

To retrieve the user's current geographic location.

---

To calculate the distance between two points.

### --feedback--

Think about what information this method provides to the web application.

---

To display a map on the webpage.

### --feedback--

Think about what information this method provides to the web application.

## --video-solution--

2

## --text--

What object is used to access the Geolocation API in JavaScript?

## --answers--

`window.location`

### --feedback--

Think about which global object provides access to browser-specific information.

---

`document.geolocation`

### --feedback--

Think about which global object provides access to browser-specific information.

---

`navigator.geolocation`

---

`browser.location`

### --feedback--

Think about which global object provides access to browser-specific information.

## --video-solution--

3

## --text--

What is a key privacy consideration when using the Geolocation API?

## --answers--

Encrypting the location data.

### --feedback--

Think about what steps should be taken to respect user privacy.

---

Storing location data indefinitely.

### --feedback--

Think about what steps should be taken to respect user privacy.

---

Automatically accessing user location.

### --feedback--

Think about what steps should be taken to respect user privacy.

---

Obtaining user permission before accessing location.

## --video-solution--

4
