# Workshop seed diff: `workshop-envelope-budget-app`

- Steps: **98**
- Steps with a `# --solutions--` section: **1** (Step 98)

Diffs are unified (`diff -u`) over everything below each step's `# --seed--` header. `--fcc-editable-region--` marker lines are stripped everywhere so they don't add noise.

---

## Step 1 seed (full)

~~~~md
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Envelope Budgeter</title>
  </head>

  <body>
    <main>
      <h1>Envelope Budgeter</h1>
      <div class="container">

      </div>
    </main>
  </body>
</html>
```

```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  text-align: center;
  margin-top: 30px;
  font-size: 2em;
}

.container {
  width: 90%;
  max-width: 680px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

label,
legend {
  font-weight: bold;
  margin-bottom: 5px;
}

fieldset {
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
}

legend {
  padding: 0 8px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

input,
select,
button {
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-height: 32px;
  box-sizing: border-box;
}

input:focus,
select:focus,
button:focus {
  outline: 2px solid var(--light-yellow);
  border-color: var(--dark-yellow);
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
  transition: background-color 0.2s ease, border 0.2s ease;
}

button:hover {
  background-color: var(--dark-yellow);
  color: white;
}

.controls {
  margin-bottom: 20px;
}

.controls span {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 15px;
  text-align: center;
  background-color: var(--dark-blue);
  border-radius: 6px;
  margin-top: 20px;
}

.output span {
  font-weight: bold;
  font-size: 1.4em;
}

.surplus {
  color: var(--light-green);
}

.deficit {
  color: var(--light-pink);
}

.hide {
  display: none;
}

@media (max-width: 600px) {
  body {
    font-size: 16px;
  }

  .controls span {
    flex-direction: column;
    align-items: stretch;
  }

  button,
  input,
  select {
    width: 100%;
  }
}
```

```js

```
~~~~

## Seed diffs

### Step 1 → Step 2

````diff
--- Step 1 seed
+++ Step 2 seed
@@ -12,7 +12,9 @@
     <main>
       <h1>Envelope Budgeter</h1>
       <div class="container">
+        <form id="budget-form">
 
+        </form>
       </div>
     </main>
   </body>
````

### Step 2 → Step 3

````diff
--- Step 2 seed
+++ Step 3 seed
@@ -13,7 +13,8 @@
       <h1>Envelope Budgeter</h1>
       <div class="container">
         <form id="budget-form">
-
+          <label for="income">Total Monthly Income</label>
+          <input id="income" />
         </form>
       </div>
     </main>
````

### Step 3 → Step 4

````diff
--- Step 3 seed
+++ Step 4 seed
@@ -14,7 +14,14 @@
       <div class="container">
         <form id="budget-form">
           <label for="income">Total Monthly Income</label>
-          <input id="income" />
+          <input 
+            type="number" 
+            min="0" 
+            id="income" 
+            placeholder="e.g. 2000" 
+            required 
+          />
+
         </form>
       </div>
     </main>
````

### Step 4 → Step 5

````diff
--- Step 4 seed
+++ Step 5 seed
@@ -12,6 +12,7 @@
     <main>
       <h1>Envelope Budgeter</h1>
       <div class="container">
+
         <form id="budget-form">
           <label for="income">Total Monthly Income</label>
           <input 
@@ -22,6 +23,13 @@
             required 
           />
 
+          <fieldset id="rent">
+            <legend>Rent</legend>
+            <label for="rent-amount">Amount</label>
+            <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
+          </fieldset>
+          
+
         </form>
       </div>
     </main>
````

### Step 5 → Step 6

````diff
--- Step 5 seed
+++ Step 6 seed
@@ -28,7 +28,12 @@
             <label for="rent-amount">Amount</label>
             <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
           </fieldset>
-          
+
+          <fieldset id="food">
+            <legend>Food</legend>
+            <div class="input-container"></div>
+          </fieldset>
+        
 
         </form>
       </div>
````

### Step 6 → Step 7

````diff
--- Step 6 seed
+++ Step 7 seed
@@ -33,7 +33,12 @@
             <legend>Food</legend>
             <div class="input-container"></div>
           </fieldset>
-        
+
+          <fieldset id="utilities">
+            <legend>Utilities</legend>
+            <div class="input-container"></div>
+          </fieldset>
+          
 
         </form>
       </div>
````

### Step 7 → Step 8

````diff
--- Step 7 seed
+++ Step 8 seed
@@ -38,8 +38,13 @@
             <legend>Utilities</legend>
             <div class="input-container"></div>
           </fieldset>
-          
 
+          <fieldset id="entertainment">
+            <legend>Entertainment</legend>
+            <div class="input-container"></div>
+          </fieldset>
+          
+          
         </form>
       </div>
     </main>
````

### Step 8 → Step 9

````diff
--- Step 8 seed
+++ Step 9 seed
@@ -43,8 +43,12 @@
             <legend>Entertainment</legend>
             <div class="input-container"></div>
           </fieldset>
-          
-          
+
+          <div class="controls">
+            <span>
+            
+            </span>
+          </div>
         </form>
       </div>
     </main>
````

### Step 9 → Step 10

````diff
--- Step 9 seed
+++ Step 10 seed
@@ -46,7 +46,11 @@
 
           <div class="controls">
             <span>
-            
+              <label for="entry-dropdown">Add expense to:</label>
+              <select id="entry-dropdown" name="options">
+                
+              </select>
+              <button type="button" id="add-entry">Add Entry</button>
             </span>
           </div>
         </form>
````

### Step 10 → Step 11

````diff
--- Step 10 seed
+++ Step 11 seed
@@ -48,11 +48,16 @@
             <span>
               <label for="entry-dropdown">Add expense to:</label>
               <select id="entry-dropdown" name="options">
-                
+                <option value="rent" selected>Rent</option>
+                <option value="food">Food</option>
+                <option value="utilities">Utilities</option>
+                <option value="entertainment">Entertainment</option>
               </select>
               <button type="button" id="add-entry">Add Entry</button>
             </span>
           </div>
+          
+          
         </form>
       </div>
     </main>
````

### Step 11 → Step 12

````diff
--- Step 11 seed
+++ Step 12 seed
@@ -12,7 +12,6 @@
     <main>
       <h1>Envelope Budgeter</h1>
       <div class="container">
-
         <form id="budget-form">
           <label for="income">Total Monthly Income</label>
           <input 
@@ -56,9 +55,16 @@
               <button type="button" id="add-entry">Add Entry</button>
             </span>
           </div>
-          
-          
+
+          <div>
+            <button type="submit">
+              Calculate Remaining Budget
+            </button>
+            <button type="button" id="clear">Clear</button>
+          </div>
         </form>
+
+
       </div>
     </main>
   </body>
````

### Step 12 → Step 13

````diff
--- Step 12 seed
+++ Step 13 seed
@@ -64,9 +64,11 @@
           </div>
         </form>
 
-
+        <div id="output" class="output hide"></div>
+        
       </div>
     </main>
+
   </body>
 </html>
 ```
````

### Step 13 → Step 14

````diff
--- Step 13 seed
+++ Step 14 seed
@@ -68,7 +68,7 @@
         
       </div>
     </main>
-
+    <script src="./script.js"></script>
   </body>
 </html>
 ```
````

### Step 14 → Step 15

````diff
--- Step 14 seed
+++ Step 15 seed
@@ -222,5 +222,6 @@
 ```
 
 ```js
+const budgetForm = document.getElementById('budget-form');
 
 ```
````

### Step 15 → Step 16

````diff
--- Step 15 seed
+++ Step 16 seed
@@ -223,5 +223,8 @@
 
 ```js
 const budgetForm = document.getElementById('budget-form');
+const incomeInput = document.getElementById("income");
+const rentInput = document.getElementById("rent-amount");
+const entryDropdown = document.getElementById("entry-dropdown");
 
 ```
````

### Step 16 → Step 17

````diff
--- Step 16 seed
+++ Step 17 seed
@@ -226,5 +226,8 @@
 const incomeInput = document.getElementById("income");
 const rentInput = document.getElementById("rent-amount");
 const entryDropdown = document.getElementById("entry-dropdown");
+const addEntryButton = document.getElementById('add-entry');
+const clearButton = document.getElementById('clear');
+const output = document.getElementById('output');
 
 ```
````

### Step 17 → Step 18

````diff
--- Step 17 seed
+++ Step 18 seed
@@ -229,5 +229,7 @@
 const addEntryButton = document.getElementById('add-entry');
 const clearButton = document.getElementById('clear');
 const output = document.getElementById('output');
+let isError = false;
+
 
 ```
````

### Step 18 → Step 19

````diff
--- Step 18 seed
+++ Step 19 seed
@@ -231,5 +231,7 @@
 const output = document.getElementById('output');
 let isError = false;
 
+function cleanInputString(str) {
 
+}
 ```
````

### Step 19 → Step 20

````diff
--- Step 19 seed
+++ Step 20 seed
@@ -232,6 +232,6 @@
 let isError = false;
 
 function cleanInputString(str) {
-
+  const regex = /hello/;
 }
 ```
````

### Step 20 → Step 21

````diff
--- Step 20 seed
+++ Step 21 seed
@@ -232,6 +232,6 @@
 let isError = false;
 
 function cleanInputString(str) {
-  const regex = /hello/;
+  const regex = /\+-/;
 }
 ```
````

### Step 21 → Step 22

````diff
--- Step 21 seed
+++ Step 22 seed
@@ -232,6 +232,6 @@
 let isError = false;
 
 function cleanInputString(str) {
-  const regex = /\+-/;
+  const regex = /\+-\s/;
 }
 ```
````

### Step 22 → Step 23

````diff
--- Step 22 seed
+++ Step 23 seed
@@ -42,7 +42,7 @@
             <legend>Entertainment</legend>
             <div class="input-container"></div>
           </fieldset>
-
+          
           <div class="controls">
             <span>
               <label for="entry-dropdown">Add expense to:</label>
@@ -232,6 +232,6 @@
 let isError = false;
 
 function cleanInputString(str) {
-  const regex = /\+-\s/;
+  const regex = /[+-\s]/;
 }
 ```
````

### Step 23 → Step 24

````diff
--- Step 23 seed
+++ Step 24 seed
@@ -42,7 +42,7 @@
             <legend>Entertainment</legend>
             <div class="input-container"></div>
           </fieldset>
-          
+
           <div class="controls">
             <span>
               <label for="entry-dropdown">Add expense to:</label>
@@ -232,6 +232,6 @@
 let isError = false;
 
 function cleanInputString(str) {
-  const regex = /[+-\s]/;
+  const regex = /[+-\s]/g;
 }
 ```
````

### Step 24 → Step 25

````diff
--- Step 24 seed
+++ Step 25 seed
@@ -232,6 +232,8 @@
 let isError = false;
 
 function cleanInputString(str) {
+  
   const regex = /[+-\s]/g;
+  return str.replace(regex, '');
 }
 ```
````

### Step 25 → Step 26

````diff
--- Step 25 seed
+++ Step 26 seed
@@ -232,8 +232,9 @@
 let isError = false;
 
 function cleanInputString(str) {
-  
+  console.log("original string: ", str);
   const regex = /[+-\s]/g;
   return str.replace(regex, '');
 }
+
 ```
````

### Step 26 → Step 27

````diff
--- Step 26 seed
+++ Step 27 seed
@@ -237,4 +237,5 @@
   return str.replace(regex, '');
 }
 
+console.log(cleanInputString("+-99"));
 ```
````

### Step 27 → Step 28

````diff
--- Step 27 seed
+++ Step 28 seed
@@ -232,10 +232,9 @@
 let isError = false;
 
 function cleanInputString(str) {
-  console.log("original string: ", str);
   const regex = /[+-\s]/g;
   return str.replace(regex, '');
 }
 
-console.log(cleanInputString("+-99"));
+
 ```
````

### Step 28 → Step 29

````diff
--- Step 28 seed
+++ Step 29 seed
@@ -236,5 +236,7 @@
   return str.replace(regex, '');
 }
 
+function isInvalidInput(str) {
 
+}
 ```
````

### Step 29 → Step 30

````diff
--- Step 29 seed
+++ Step 30 seed
@@ -237,6 +237,6 @@
 }
 
 function isInvalidInput(str) {
-
+  const regex = /e/;
 }
 ```
````

### Step 30 → Step 31

````diff
--- Step 30 seed
+++ Step 31 seed
@@ -237,6 +237,6 @@
 }
 
 function isInvalidInput(str) {
-  const regex = /e/;
+  const regex = /e/i;
 }
 ```
````

### Step 31 → Step 32

````diff
--- Step 31 seed
+++ Step 32 seed
@@ -237,6 +237,6 @@
 }
 
 function isInvalidInput(str) {
-  const regex = /e/i;
+  const regex = /[0-9]e[0-9]/i;
 }
 ```
````

### Step 32 → Step 33

````diff
--- Step 32 seed
+++ Step 33 seed
@@ -237,6 +237,6 @@
 }
 
 function isInvalidInput(str) {
-  const regex = /[0-9]e[0-9]/i;
+  const regex = /[0-9]+e[0-9]+/i;
 }
 ```
````

### Step 33 → Step 34

````diff
--- Step 33 seed
+++ Step 34 seed
@@ -237,6 +237,7 @@
 }
 
 function isInvalidInput(str) {
-  const regex = /[0-9]+e[0-9]+/i;
+  const regex = /\d+e\d+/i;
+
 }
 ```
````

### Step 34 → Step 35

````diff
--- Step 34 seed
+++ Step 35 seed
@@ -238,6 +238,8 @@
 
 function isInvalidInput(str) {
   const regex = /\d+e\d+/i;
-
+  return str.match(regex);
 }
+
+
 ```
````

### Step 35 → Step 36

````diff
--- Step 35 seed
+++ Step 36 seed
@@ -240,6 +240,5 @@
   const regex = /\d+e\d+/i;
   return str.match(regex);
 }
-
-
+console.log(isInvalidInput("1e3"));
 ```
````

### Step 36 → Step 37

````diff
--- Step 36 seed
+++ Step 37 seed
@@ -240,5 +240,5 @@
   const regex = /\d+e\d+/i;
   return str.match(regex);
 }
-console.log(isInvalidInput("1e3"));
+console.log(isInvalidInput("10"));
 ```
````

### Step 37 → Step 38

````diff
--- Step 37 seed
+++ Step 38 seed
@@ -240,5 +240,6 @@
   const regex = /\d+e\d+/i;
   return str.match(regex);
 }
-console.log(isInvalidInput("10"));
+
+
 ```
````

### Step 38 → Step 39

````diff
--- Step 38 seed
+++ Step 39 seed
@@ -241,5 +241,5 @@
   return str.match(regex);
 }
 
-
+console.log(entryDropdown.value);
 ```
````

### Step 39 → Step 40

````diff
--- Step 39 seed
+++ Step 40 seed
@@ -241,5 +241,7 @@
   return str.match(regex);
 }
 
-console.log(entryDropdown.value);
+function addEntry() {
+
+}
 ```
````

### Step 40 → Step 41

````diff
--- Step 40 seed
+++ Step 41 seed
@@ -242,6 +242,7 @@
 }
 
 function addEntry() {
+  const category = entryDropdown.value;
 
 }
 ```
````

### Step 41 → Step 42

````diff
--- Step 41 seed
+++ Step 42 seed
@@ -243,6 +243,6 @@
 
 function addEntry() {
   const category = entryDropdown.value;
-
+  const targetInputContainer = document.querySelector(category + ' .input-container');
 }
 ```
````

### Step 42 → Step 43

````diff
--- Step 42 seed
+++ Step 43 seed
@@ -243,6 +243,10 @@
 
 function addEntry() {
   const category = entryDropdown.value;
-  const targetInputContainer = document.querySelector(category + ' .input-container');
+  const targetInputContainer = document.querySelector(
+    `#${category} .input-container`
+  );
+
+
 }
 ```
````

### Step 43 → Step 44

````diff
--- Step 43 seed
+++ Step 44 seed
@@ -246,7 +246,6 @@
   const targetInputContainer = document.querySelector(
     `#${category} .input-container`
   );
-
-
+  const entryNumber = targetInputContainer.querySelectorAll();
 }
 ```
````

### Step 44 → Step 45

````diff
--- Step 44 seed
+++ Step 45 seed
@@ -246,6 +246,7 @@
   const targetInputContainer = document.querySelector(
     `#${category} .input-container`
   );
-  const entryNumber = targetInputContainer.querySelectorAll();
+  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
+
 }
 ```
````

### Step 45 → Step 46

````diff
--- Step 45 seed
+++ Step 46 seed
@@ -247,6 +247,8 @@
     `#${category} .input-container`
   );
   const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
-
+  const HTMLString = `
+  
+  `;
 }
 ```
````

### Step 46 → Step 47

````diff
--- Step 46 seed
+++ Step 47 seed
@@ -243,12 +243,10 @@
 
 function addEntry() {
   const category = entryDropdown.value;
-  const targetInputContainer = document.querySelector(
-    `#${category} .input-container`
-  );
+  const targetInputContainer = document.querySelector(`#${category} .input-container`);
   const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
   const HTMLString = `
-  
+  <label>Expense ${entryNumber} Name</label>`;
   `;
 }
 ```
````

### Step 47 → Step 48

````diff
--- Step 47 seed
+++ Step 48 seed
@@ -246,7 +246,8 @@
   const targetInputContainer = document.querySelector(`#${category} .input-container`);
   const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
   const HTMLString = `
-  <label>Expense ${entryNumber} Name</label>`;
+  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
+
   `;
 }
 ```
````

### Step 48 → Step 49

````diff
--- Step 48 seed
+++ Step 49 seed
@@ -247,6 +247,7 @@
   const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
   const HTMLString = `
   <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
+  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
 
   `;
 }
````

### Step 49 → Step 50

````diff
--- Step 49 seed
+++ Step 50 seed
@@ -248,6 +248,7 @@
   const HTMLString = `
   <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
   <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
+  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
 
   `;
 }
````

### Step 50 → Step 51

````diff
--- Step 50 seed
+++ Step 51 seed
@@ -249,7 +249,11 @@
   <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
   <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
   <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
+  <input 
+    type="number" 
+    min="0" 
+    id="${category}-${entryNumber}-amount" placeholder="Amount" 
+    />`;
 
-  `;
 }
 ```
````

### Step 51 → Step 52

````diff
--- Step 51 seed
+++ Step 52 seed
@@ -254,6 +254,8 @@
     min="0" 
     id="${category}-${entryNumber}-amount" placeholder="Amount" 
     />`;
-
+    targetInputContainer.innerHTML += HTMLString;
 }
+
+
 ```
````

### Step 52 → Step 53

````diff
--- Step 52 seed
+++ Step 53 seed
@@ -257,5 +257,5 @@
     targetInputContainer.innerHTML += HTMLString;
 }
 
-
+addEntryButton.addEventListener("click", addEntry);
 ```
````

### Step 53 → Step 54

````diff
--- Step 53 seed
+++ Step 54 seed
@@ -244,7 +244,7 @@
 function addEntry() {
   const category = entryDropdown.value;
   const targetInputContainer = document.querySelector(`#${category} .input-container`);
-  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
+  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
   const HTMLString = `
   <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
   <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
````

### Step 54 → Step 55

````diff
--- Step 54 seed
+++ Step 55 seed
@@ -254,7 +254,7 @@
     min="0" 
     id="${category}-${entryNumber}-amount" placeholder="Amount" 
     />`;
-    targetInputContainer.innerHTML += HTMLString;
+    targetInputContainer.insertAdjacentHTML();
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 55 → Step 56

````diff
--- Step 55 seed
+++ Step 56 seed
@@ -254,8 +254,10 @@
     min="0" 
     id="${category}-${entryNumber}-amount" placeholder="Amount" 
     />`;
-    targetInputContainer.insertAdjacentHTML();
+    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
 }
 
+
+
 addEntryButton.addEventListener("click", addEntry);
 ```
````

### Step 56 → Step 57

````diff
--- Step 56 seed
+++ Step 57 seed
@@ -257,7 +257,9 @@
     targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
 }
 
+function getTotalFromInputs(list) {
 
+}
 
 addEntryButton.addEventListener("click", addEntry);
 ```
````

### Step 57 → Step 58

````diff
--- Step 57 seed
+++ Step 58 seed
@@ -258,8 +258,9 @@
 }
 
 function getTotalFromInputs(list) {
+  let total = 0;
 
-}
 
+}
 addEntryButton.addEventListener("click", addEntry);
 ```
````

### Step 58 → Step 59

````diff
--- Step 58 seed
+++ Step 59 seed
@@ -259,8 +259,10 @@
 
 function getTotalFromInputs(list) {
   let total = 0;
+  for (const item of list) {
 
-
+  }
 }
+
 addEntryButton.addEventListener("click", addEntry);
 ```
````

### Step 59 → Step 60

````diff
--- Step 59 seed
+++ Step 60 seed
@@ -259,8 +259,9 @@
 
 function getTotalFromInputs(list) {
   let total = 0;
-  for (const item of list) {
 
+  for (const item of list) {
+    const currVal = item.value;
   }
 }
 
````

### Step 60 → Step 61

````diff
--- Step 60 seed
+++ Step 61 seed
@@ -259,9 +259,9 @@
 
 function getTotalFromInputs(list) {
   let total = 0;
-
   for (const item of list) {
-    const currVal = item.value;
+    const currVal = cleanInputString(item.value);
+
   }
 }
 
````

### Step 61 → Step 62

````diff
--- Step 61 seed
+++ Step 62 seed
@@ -261,6 +261,7 @@
   let total = 0;
   for (const item of list) {
     const currVal = cleanInputString(item.value);
+    const invalidInputMatch = isInvalidInput(currVal);
 
   }
 }
````

### Step 62 → Step 63

````diff
--- Step 62 seed
+++ Step 63 seed
@@ -262,7 +262,9 @@
   for (const item of list) {
     const currVal = cleanInputString(item.value);
     const invalidInputMatch = isInvalidInput(currVal);
+    if (invalidInputMatch) {
 
+    }
   }
 }
 
````

### Step 63 → Step 64

````diff
--- Step 63 seed
+++ Step 64 seed
@@ -263,6 +263,7 @@
     const currVal = cleanInputString(item.value);
     const invalidInputMatch = isInvalidInput(currVal);
     if (invalidInputMatch) {
+      alert(`Invalid Input: ${invalidInputMatch[0]}`);
 
     }
   }
````

### Step 64 → Step 65

````diff
--- Step 64 seed
+++ Step 65 seed
@@ -259,13 +259,17 @@
 
 function getTotalFromInputs(list) {
   let total = 0;
+
   for (const item of list) {
     const currVal = cleanInputString(item.value);
     const invalidInputMatch = isInvalidInput(currVal);
+
     if (invalidInputMatch) {
       alert(`Invalid Input: ${invalidInputMatch[0]}`);
-
+      isError = true;
+      return null;
     }
+
   }
 }
 
````

### Step 65 → Step 66

````diff
--- Step 65 seed
+++ Step 66 seed
@@ -269,8 +269,9 @@
       isError = true;
       return null;
     }
-
+    total += Number(currVal);
   }
+
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 66 → Step 67

````diff
--- Step 66 seed
+++ Step 67 seed
@@ -257,6 +257,8 @@
     targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
 }
 
+
+
 function getTotalFromInputs(list) {
   let total = 0;
 
@@ -271,7 +273,7 @@
     }
     total += Number(currVal);
   }
-
+  return total;
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 67 → Step 68

````diff
--- Step 67 seed
+++ Step 68 seed
@@ -257,8 +257,11 @@
     targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
 }
 
+function calculateBudget(e) {
 
 
+}
+
 function getTotalFromInputs(list) {
   let total = 0;
 
````

### Step 68 → Step 69

````diff
--- Step 68 seed
+++ Step 69 seed
@@ -258,7 +258,8 @@
 }
 
 function calculateBudget(e) {
-
+  e.preventDefault();
+  isError = false;
 
 }
 
````

### Step 69 → Step 70

````diff
--- Step 69 seed
+++ Step 70 seed
@@ -261,6 +261,9 @@
   e.preventDefault();
   isError = false;
 
+  const foodInputs = document.querySelectorAll("#food input[type='number']");
+
+
 }
 
 function getTotalFromInputs(list) {
````

### Step 70 → Step 71

````diff
--- Step 70 seed
+++ Step 71 seed
@@ -262,7 +262,7 @@
   isError = false;
 
   const foodInputs = document.querySelectorAll("#food input[type='number']");
-
+  const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
 
 }
 
````

### Step 71 → Step 72

````diff
--- Step 71 seed
+++ Step 72 seed
@@ -263,6 +263,8 @@
 
   const foodInputs = document.querySelectorAll("#food input[type='number']");
   const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
+  const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");
+
 
 }
 
````

### Step 72 → Step 73

````diff
--- Step 72 seed
+++ Step 73 seed
@@ -265,6 +265,8 @@
   const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
   const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");
 
+  const rent = getTotalFromInputs([rentInput]);
+
 
 }
 
````

### Step 73 → Step 74

````diff
--- Step 73 seed
+++ Step 74 seed
@@ -266,7 +266,7 @@
   const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");
 
   const rent = getTotalFromInputs([rentInput]);
-
+  const food = getTotalFromInputs(foodInputs);
 
 }
 
````

### Step 74 → Step 75

````diff
--- Step 74 seed
+++ Step 75 seed
@@ -267,6 +267,9 @@
 
   const rent = getTotalFromInputs([rentInput]);
   const food = getTotalFromInputs(foodInputs);
+  const utilities = getTotalFromInputs(utilitiesInputs);
+  const entertainment = getTotalFromInputs(entertainmentInputs);
+
 
 }
 
````

### Step 75 → Step 76

````diff
--- Step 75 seed
+++ Step 76 seed
@@ -269,6 +269,7 @@
   const food = getTotalFromInputs(foodInputs);
   const utilities = getTotalFromInputs(utilitiesInputs);
   const entertainment = getTotalFromInputs(entertainmentInputs);
+  const income = getTotalFromInputs([incomeInput]);
 
 
 }
````

### Step 76 → Step 77

````diff
--- Step 76 seed
+++ Step 77 seed
@@ -271,6 +271,10 @@
   const entertainment = getTotalFromInputs(entertainmentInputs);
   const income = getTotalFromInputs([incomeInput]);
 
+  if (isError) {
+    return;
+  }
+
 
 }
 
````

### Step 77 → Step 78

````diff
--- Step 77 seed
+++ Step 78 seed
@@ -275,6 +275,7 @@
     return;
   }
 
+  const expenses = rent + food + utilities + entertainment;
 
 }
 
````

### Step 78 → Step 79

````diff
--- Step 78 seed
+++ Step 79 seed
@@ -276,6 +276,8 @@
   }
 
   const expenses = rent + food + utilities + entertainment;
+  const netRemaining = income - expenses;
+
 
 }
 
````

### Step 79 → Step 80

````diff
--- Step 79 seed
+++ Step 80 seed
@@ -278,6 +278,9 @@
   const expenses = rent + food + utilities + entertainment;
   const netRemaining = income - expenses;
 
+  let statusText = "";
+  let statusClass = "";
+
 
 }
 
````

### Step 80 → Step 81

````diff
--- Step 80 seed
+++ Step 81 seed
@@ -280,8 +280,10 @@
 
   let statusText = "";
   let statusClass = "";
+  
+  if (netRemaining < 0) {
 
-
+  }
 }
 
 function getTotalFromInputs(list) {
````

### Step 81 → Step 82

````diff
--- Step 81 seed
+++ Step 82 seed
@@ -282,6 +282,7 @@
   let statusClass = "";
   
   if (netRemaining < 0) {
+    statusText = `Over Budget by $${Math.abs(netRemaining)}`;
 
   }
 }
````

### Step 82 → Step 83

````diff
--- Step 82 seed
+++ Step 83 seed
@@ -283,8 +283,9 @@
   
   if (netRemaining < 0) {
     statusText = `Over Budget by $${Math.abs(netRemaining)}`;
-
+    statusClass = "deficit";
   }
+
 }
 
 function getTotalFromInputs(list) {
````

### Step 83 → Step 84

````diff
--- Step 83 seed
+++ Step 84 seed
@@ -284,8 +284,12 @@
   if (netRemaining < 0) {
     statusText = `Over Budget by $${Math.abs(netRemaining)}`;
     statusClass = "deficit";
+  } else {
+    statusText = `$${netRemaining} Remaining`;
+    statusClass = "surplus";
   }
 
+
 }
 
 function getTotalFromInputs(list) {
````

### Step 84 → Step 85

````diff
--- Step 84 seed
+++ Step 85 seed
@@ -289,7 +289,7 @@
     statusClass = "surplus";
   }
 
-
+  output.innerHTML = ``;
 }
 
 function getTotalFromInputs(list) {
````

### Step 85 → Step 86

````diff
--- Step 85 seed
+++ Step 86 seed
@@ -289,7 +289,10 @@
     statusClass = "surplus";
   }
 
-  output.innerHTML = ``;
+  output.innerHTML = `
+    <span class="${statusClass}">${statusText}</span>
+
+  `; 
 }
 
 function getTotalFromInputs(list) {
````

### Step 86 → Step 87

````diff
--- Step 86 seed
+++ Step 87 seed
@@ -291,6 +291,7 @@
 
   output.innerHTML = `
     <span class="${statusClass}">${statusText}</span>
+    <hr>
 
   `; 
 }
````

### Step 87 → Step 88

````diff
--- Step 87 seed
+++ Step 88 seed
@@ -292,8 +292,9 @@
   output.innerHTML = `
     <span class="${statusClass}">${statusText}</span>
     <hr>
+    <p>$${income} Total Income</p>
 
-  `; 
+  `;
 }
 
 function getTotalFromInputs(list) {
````

### Step 88 → Step 89

````diff
--- Step 88 seed
+++ Step 89 seed
@@ -293,8 +293,10 @@
     <span class="${statusClass}">${statusText}</span>
     <hr>
     <p>$${income} Total Income</p>
-
+    <p>$${expenses} Total Expenses</p>
   `;
+  
+
 }
 
 function getTotalFromInputs(list) {
````

### Step 89 → Step 90

````diff
--- Step 89 seed
+++ Step 90 seed
@@ -295,7 +295,8 @@
     <p>$${income} Total Income</p>
     <p>$${expenses} Total Expenses</p>
   `;
-  
+
+  output.classList.remove("hide");
 
 }
 
@@ -317,4 +318,5 @@
 }
 
 addEntryButton.addEventListener("click", addEntry);
+
 ```
````

### Step 90 → Step 91

````diff
--- Step 90 seed
+++ Step 91 seed
@@ -317,6 +317,8 @@
   return total;
 }
 
-addEntryButton.addEventListener("click", addEntry);
 
+
+addEntryButton.addEventListener("click", addEntry);
+budgetForm.addEventListener("submit", calculateBudget);
 ```
````

### Step 91 → Step 92

````diff
--- Step 91 seed
+++ Step 92 seed
@@ -317,7 +317,9 @@
   return total;
 }
 
+function clearForm() {
 
+}
 
 addEntryButton.addEventListener("click", addEntry);
 budgetForm.addEventListener("submit", calculateBudget);
````

### Step 92 → Step 93

````diff
--- Step 92 seed
+++ Step 93 seed
@@ -318,7 +318,7 @@
 }
 
 function clearForm() {
-
+  const inputContainers = document.querySelectorAll('.input-container');
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 93 → Step 94

````diff
--- Step 93 seed
+++ Step 94 seed
@@ -318,7 +318,9 @@
 }
 
 function clearForm() {
-  const inputContainers = document.querySelectorAll('.input-container');
+  const inputContainers = Array.from(document.querySelectorAll('.input-container'));
+
+
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 94 → Step 95

````diff
--- Step 94 seed
+++ Step 95 seed
@@ -320,6 +320,10 @@
 function clearForm() {
   const inputContainers = Array.from(document.querySelectorAll('.input-container'));
 
+    for (const container of inputContainers) {
+    container.innerHTML = '';
+  }
+
 
 }
 
````

### Step 95 → Step 96

````diff
--- Step 95 seed
+++ Step 96 seed
@@ -324,6 +324,8 @@
     container.innerHTML = '';
   }
 
+  incomeInput.value = '';
+  rentInput.value = '';
 
 }
 
````

### Step 96 → Step 97

````diff
--- Step 96 seed
+++ Step 97 seed
@@ -326,7 +326,7 @@
 
   incomeInput.value = '';
   rentInput.value = '';
-
+  output.innerText = '';
 }
 
 addEntryButton.addEventListener("click", addEntry);
````

### Step 97 → Step 98

````diff
--- Step 97 seed
+++ Step 98 seed
@@ -317,18 +317,20 @@
   return total;
 }
 
-function clearForm() {
-  const inputContainers = Array.from(document.querySelectorAll('.input-container'));
+function clearForm() {  
+  const inputContainers = Array.from(document.querySelectorAll('.input-container'));  
 
-    for (const container of inputContainers) {
-    container.innerHTML = '';
-  }
+  for (const container of inputContainers) {  
+    container.innerHTML = '';  
+  }  
 
-  incomeInput.value = '';
-  rentInput.value = '';
-  output.innerText = '';
+  incomeInput.value = '';  
+  rentInput.value = '';  
+  output.innerText = '';  
+  output.classList.add('hide');  
 }
 
 addEntryButton.addEventListener("click", addEntry);
 budgetForm.addEventListener("submit", calculateBudget);
+
 ```
````

### Step 98 → Step 98 solution

````diff
--- Step 98 seed
+++ Step 98 solution
@@ -222,18 +222,18 @@
 ```
 
 ```js
-const budgetForm = document.getElementById('budget-form');
+const budgetForm = document.getElementById("budget-form");
 const incomeInput = document.getElementById("income");
 const rentInput = document.getElementById("rent-amount");
 const entryDropdown = document.getElementById("entry-dropdown");
-const addEntryButton = document.getElementById('add-entry');
-const clearButton = document.getElementById('clear');
-const output = document.getElementById('output');
+const addEntryButton = document.getElementById("add-entry");
+const clearButton = document.getElementById("clear");
+const output = document.getElementById("output");
 let isError = false;
 
 function cleanInputString(str) {
   const regex = /[+-\s]/g;
-  return str.replace(regex, '');
+  return str.replace(regex, "");
 }
 
 function isInvalidInput(str) {
@@ -243,18 +243,23 @@
 
 function addEntry() {
   const category = entryDropdown.value;
-  const targetInputContainer = document.querySelector(`#${category} .input-container`);
-  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
+  const targetInputContainer = document.querySelector(
+    `#${category} .input-container`
+  );
+  const entryNumber =
+    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
+
   const HTMLString = `
-  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
-  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
-  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
-  <input 
-    type="number" 
-    min="0" 
-    id="${category}-${entryNumber}-amount" placeholder="Amount" 
+    <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
+    <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
+    <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
+    <input
+      type="number"
+      min="0"
+      id="${category}-${entryNumber}-amount"
+      placeholder="Amount"
     />`;
-    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
+  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
 }
 
 function calculateBudget(e) {
@@ -262,8 +267,12 @@
   isError = false;
 
   const foodInputs = document.querySelectorAll("#food input[type='number']");
-  const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
-  const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");
+  const utilitiesInputs = document.querySelectorAll(
+    "#utilities input[type='number']"
+  );
+  const entertainmentInputs = document.querySelectorAll(
+    "#entertainment input[type='number']"
+  );
 
   const rent = getTotalFromInputs([rentInput]);
   const food = getTotalFromInputs(foodInputs);
@@ -271,16 +280,14 @@
   const entertainment = getTotalFromInputs(entertainmentInputs);
   const income = getTotalFromInputs([incomeInput]);
 
-  if (isError) {
-    return;
-  }
+  if (isError) return;
 
   const expenses = rent + food + utilities + entertainment;
   const netRemaining = income - expenses;
 
   let statusText = "";
   let statusClass = "";
-  
+
   if (netRemaining < 0) {
     statusText = `Over Budget by $${Math.abs(netRemaining)}`;
     statusClass = "deficit";
@@ -297,7 +304,6 @@
   `;
 
   output.classList.remove("hide");
-
 }
 
 function getTotalFromInputs(list) {
@@ -317,20 +323,21 @@
   return total;
 }
 
-function clearForm() {  
-  const inputContainers = Array.from(document.querySelectorAll('.input-container'));  
+function clearForm() {
+  const inputContainers = Array.from(
+    document.querySelectorAll(".input-container")
+  );
+  for (const container of inputContainers) {
+    container.innerHTML = "";
+  }
 
-  for (const container of inputContainers) {  
-    container.innerHTML = '';  
-  }  
-
-  incomeInput.value = '';  
-  rentInput.value = '';  
-  output.innerText = '';  
-  output.classList.add('hide');  
+  incomeInput.value = "";
+  rentInput.value = "";
+  output.innerText = "";
+  output.classList.add("hide");
 }
 
 addEntryButton.addEventListener("click", addEntry);
 budgetForm.addEventListener("submit", calculateBudget);
-
+clearButton.addEventListener("click", clearForm);
 ```
````
