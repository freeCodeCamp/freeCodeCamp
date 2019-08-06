---
title: Handle a Fulfilled Promise with then
---
# Handle a Fulfilled Promise with then

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

</details>