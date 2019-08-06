---
title: Complete a Promise with resolve and reject
---

# Complete a Promise with resolve and reject

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```

</details>
