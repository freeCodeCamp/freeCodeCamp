---
title: Understand the Hazards of Using Imperative Code
---
## Understand the Hazards of Using Imperative Code

### Disclaimer

In this text, there will two possible solutions for this challenge. First part is code analysis, so if you want to skip to the solutions, please scroll to bottom.  

____

Note: If you run the tests, they will pass even though you didn't make a necessary change.

What you should notice is the fact that output is not as suggested in instructions, which should be the following array:
**['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']**.

Instead, you will recieve this array:
**['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']**.

### Code analysis

Take a look at the last part of code to make a conclusion where is the issue.

#### Part 1
```
var finalTabs = socialWindow
```
After this part of the code is executed, our array is **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']**

#### Part 2
```
.tabOpen() // Open a new tab for cat memes  
 ```
 
#### Part 3
After adding a 'new tab' to the array,  our array is now **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab']**
```
.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
```
This part of the code should supposedly close the third window (index 2 as the count starts from 0) and return video window without the third window which is 'Vimeo' in this case. So, returned array should look like **['Netflix', 'YouTube', 'Vine']** and after adding it to the main array,  our array should be **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab', 'Netflix', 'YouTube', 'Vine']**

#### Part 4
```
.join(workWindow.tabClose(1).tabOpen());
```
This part would close second tab (index 1) in the workWindow **['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']**, which would be 'Inbox', and after that push a 'new tab' to the array, returning **['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']** and adding it to the main array for a complete array which should look like this:  
**['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']**, as mentioned in the instructions.



If we compare the requested array and the one we recieved after running the initial code, we can see that value 'Vine' is omitted. Therefore, we need to see what is the cause of this. We can see that value 'Vine' is a value of an array **videoWindow**.  
Now that we know this, we will check the operations done on that array. This is done in Part 3:
```
.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
```

We can see that **tabClose()** is performed on this array, so we will analyze the code contained in that method.
```
tabClose = function (index) {
 1. var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
 2. var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

 3. this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
 4. return this;
 };
 ```
 For an index, we will take 2 - as done in the challenge.
 1. At the beginning, our array **videoWindow** looks like this:   
 **['Netflix', 'YouTube', 'Vimeo', 'Vine']**.
 2. After first line is executed, variable tabsBeforeIndex will take 2 (index) values starting from 0 (splice(0,2))  and create  a new array containing them.  
 Arrays now look like this:  
 tabsBeforeIndex: **['Netflix', 'YouTube']**  
 videoWindow: **['Vimeo', 'Vine']**   
 
 You can already see why splice() can be very hazardous, as it always modifies the array it is executed upon and returns that modified array - it is not deterministic.  
 
 3. After second line is executed, tabsAfterIndex should take values starting from index (in this case 2) and remove them from videoWindow array. As we can see that in the current state (**['Vimeo', 'Vine']**), videoWindow does not have index 2 so empty array is returned. Final state:  
 tabsBeforeIndex: **['Netflix', 'YouTube']**  
 videoWindow: **['Vimeo', 'Vine']**  
 tabsAfterIndex: **[]**  
 
 After the third line and concatenation the returned array is the same as tabsBeforeIndex, which results in both 'Vimeo' and 'Vine' values not being in the array.  
 
 ### Solution 1, using splice(). This creates side effects(changes to the original array) and should be avoided in practice.
 
 In order for the method tabClose to work properly, 
 ```
 var tabsAfterIndex = this.tabs.splice(index);
 ```
 should be replaced with
 ```
 var tabsAfterIndex = this.tabs.splice(1);
 ```
 
  This way, after second line is executed on the current array **['Vimeo', 'Vine']**, it will always omit the first value (index 0) and the one with index 1 until the end, resulting in the proper array returned.
 
 
 ### Solution 2,using slice(). This does not create side effects and should be preferred over splice().
 
 This part of the code:
 ```
 var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
 var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
 ```

 should be replaced with:
 
 
 ```
 var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
 var tabsAfterIndex = this.tabs.slice(index+1);
```
### Word of caution

splice() should be always used carefully as it modifies the contents it is working on. For documentation and differences between splice and slice please take a look at:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  



<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
