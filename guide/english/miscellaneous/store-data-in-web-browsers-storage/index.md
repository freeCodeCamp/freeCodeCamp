---
title: Store Data in Web Browsers Storage
---
In order to manage data handled by your web application, you do not necessarily need a database. The respective Browser Storage features are supported by Chrome (version 4 and higher), Mozilla Firefox (version 3.5 and higher) and Internet Explorer (version 8 and higher), and a range of other browsers including those of iOS and Android.

There are two main possibilities for browser storage:

## 1\. localStorage

Any content/data saved to the `localStorage` object will be available after the browser has been restarted (closed and opened again). In order to **_save an item_** to `localStorage`, you can use the method `setItem()`. This method must be handed a key and a value.

    Example: localStorage.setItem("mykey","myvalue");

To **_retrieve the item from the localStorage_**, the method `getItem` must be used. The `getItem` method must be handed the key of the data you would like to retrieve:

      Example: localStorage.getItem("mykey");

You can remove an item from `localStorage` by using the `removeItem()` method. This method must be handed the key of the item to be removed:

      Example: localStorage.removeItem("mykey");

To clear the entire `localStorage`, you should use the `clear()` method on the `localStorage` object:

      Example: localStorage.clear();

## 2\. sessionStorage

Items saved in the `sessionStorage` object will remain until the browser is closed by the user. Then, the storage will be cleared.

You can save an item to `sessionStorage`, please use the method `setItem()` on the `sessionStorage` object:

    Example: sessionStorage.setItem("mykey","myvalue");

To **_retrieve the item from the sessionStorage_**, the method `getItem` must be used. The `getItem` method must be handed the key of the data you would like to retrieve:

      Example: sessionStorage.getItem("mykey");

You can remove an item from `sessionStorage` by using the `removeItem()` method. This method must be handed the key of the item to be removed:

      Example: sessionStorage.removeItem("mykey");

To clear the entire `sessionStorage`, you should use the `clear()` method on the `sessionStorage` object:

      Example: sessionStorage.clear();

## Saving arrays to localStorage and sessionStorage

You cannot just save single values to the `localStorage` and `sessionStorage`, but you can also save the content of an array.

In this example, we have an array with numbers:

    var ourArray =[1,2,3,4,5];

We can now save it to `localStorage` or `sessionStorage` using the `setItem()` method:

    localStorage.setItem("ourarraykey",JSON.stringify(ourArray));

or, for `sessionStorage`:

    sessionStorage.setItem("ourarraykey",JSON.stringify(ourArray));

In order to be saved, the array must first be converted to a string. In the example shown above, we are using the `JSON.stringify` method to accomplish this.

When retrieving our data from the `localStorage` or `sessionStorage`, convert it back to an array:

    var storedArray = localStorage.getItem("ourarraykey");
    ourArray = JSON.parse(storedArray);

or, for `sessionStorage`:

    var storedArray = sessionStorage.getItem("ourarraykey");
    ourArray = JSON.parse(storedArray);