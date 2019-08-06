---
title: Handle a Rejected Promise with catch
---
# Handle a Rejected Promise with catch

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```

</details>