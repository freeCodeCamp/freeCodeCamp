---
title: URL Shortener Microservice
---
# URL Shortener Microservice

---
## Problem Explanation
The core features to complete this exercise are the creation and retrieval of URLs from the Database.


---
## Hints

### Hint 1

Creating Short URL
- Connect to your database instance.
    > **Note**: It's important to check your Mongoose connection status before dive into the problem, just to check if everything is okay with your database configuration. This should help: `mongoose.connection.readyState`
- Receive a POST request containing an URL to be saved on Database.
- Check if it is a valid URL using `dns.lookup(url, callback)`
    - Remember you need to import the dns module with required.
- Generate some kind of identifier to save your original URL in database.
    - A SHA-1 hash could be used, or even the object ID when saving the element.
    - There is a bunch of samples over the internet how to generate some kind of identifier, try to explore it or create your own.
    - An example of how this should look like: `{'url': www.freecodecamp.org, 'hash': 'ef49fa8b4'}`
    
### Hint 2
Retrieving Short URL
- Receive a GET request containing an identifier used to find a stored URL.
- Try to find one URL saved for this identifier
- Redirect user to URL.
    > **Note**: The `res.redirect(url)` function need that the given url, has a defined protocol (http://, https://), or it will just concatenate it as an extension of your current domain. eg: Good URL: `https://www.freecodecamp.org`, Bad URL: `www.freecodecamp.org`. Try it out.
- Remember to handle error situations with proper response like, `res.json({"error":"invalid URL"});
