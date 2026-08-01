# Workshop seed diff: `workshop-build-a-football-player-card-builder`

- Steps: **71**
- Steps with a `# --solutions--` section: **1** (Step 71)

Diffs are unified (`diff -u`) over everything below each step's `# --seed--` header. `--fcc-editable-region--` marker lines are stripped everywhere so they don't add noise.

---

## Step 1 seed (full)

~~~~md
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Football Player Card Builder</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.tsx"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { FootballPlayerCard } from './index.tsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<FootballPlayerCard />);
    </script>
  </body>
</html>
```

```css
html,
body {
  min-height: 100%;
  font-family: "Lato", system-ui, sans-serif;
  background-color: #0a0a23;
}

.page {
  min-height: 100vh;
  background-color: #0a0a23;
}

.header {
  background-color: #1b1b32;
  border-bottom: 3px solid #f1be32;
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 24px;
}

.header-title {
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #f1be32;
}

.header-subtitle {
  font-size: 12px;
  color: #99c9ff;
  margin-top: 2px;
}

.main {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 24px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 1fr 1fr;
  }
}

.form-panel {
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-section-title {
  font-size: 17px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1f2937;
  margin-bottom: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group select {
  padding: 7px 12px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-panel > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
}

.input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.25);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.preview-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

@media (min-width: 1024px) {
  .preview-panel {
    position: sticky;
    top: 32px;
  }
}

.tier-elite { 
  --accent: #dbb8ff; 
}

.tier-gold   { 
  --accent: #f1be32; 
}

.tier-silver { 
  --accent: #99c9ff; 
}

.tier-bronze { 
  --accent: #acd157; 
}

.preview-box {
  width: 100%;
  background-color: #1b1b32;
  border-radius: 12px;
  border: 2px solid var(--accent);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.preview-label {
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #dfdfe2;
}

.preview-hint {
  font-size: 11px;
  color: #99c9ff;
  margin-top: 2px;
}

.card-wrapper {
  clip-path: polygon(8% 0%, 92% 0%, 100% 5%, 100% 91%, 98% 96%, 93% 99%, 87% 100%, 13% 100%, 7% 99%, 2% 96%, 0% 91%, 0% 5%);
  background-color: var(--accent);
  padding: 3px;
  display: inline-block;
}

.card {
  clip-path: polygon(8% 0%, 92% 0%, 100% 5%, 100% 91%, 98% 96%, 93% 99%, 87% 100%, 13% 100%, 7% 99%, 2% 96%, 0% 91%, 0% 5%);
  width: 260px;
  background-color: #0a0a23;
  font-family: "Lato", sans-serif;
  overflow: hidden;
}

.card-header {
  background-color: #1b1b32;
  padding: 16px 20px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-rating {
  font-size: 48px;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
}

.card-position {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-top: 2px;
}

.card-header-right {
  text-align: right;
}

.card-tier-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: #0a0a23;
  background-color: var(--accent);
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

.card-club {
  font-size: 13px;
  font-weight: 700;
  color: #dfdfe2;
}

.card-image-wrap {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #1b1b32;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}

.card-name-strip {
  background-color: var(--accent);
  padding: 8px 20px;
  text-align: center;
}

.card-name {
  font-size: 18px;
  font-weight: 900;
  color: #0a0a23;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.card-stats {
  background-color: #dfdfe2;
  padding: 12px 20px 20px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 0 12px;
}

.stat-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-col:last-child {
  padding-left: 28px;
}

.stat-divider {
  background-color: #d0d0d5;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.stat-value {
  font-size: 15px;
  font-weight: 900;
  color: #0a0a23;
  min-width: 24px;
  text-align: right;
}

.stat-label {
  font-size: 10px;
  font-weight: 700;
  color: #1b1b32;
  letter-spacing: 0.08em;
}
```

```tsx
const { useState } = React;

export const FootballPlayerCard = () => {
  return (
    <h1 style={{ backgroundColor: '#fff' }}>Hello, TSX!</h1>
  )
};
```
~~~~

## Seed diffs

### Step 1 → Step 2

````diff
--- Step 1 seed
+++ Step 2 seed
@@ -353,9 +353,11 @@
 ```tsx
 const { useState } = React;
 
+
+
 export const FootballPlayerCard = () => {
   return (
-    <h1 style={{ backgroundColor: '#fff' }}>Hello, TSX!</h1>
+    <h1 style={{ backgroundColor: '#fff' }}>Football Card Builder</h1>
   )
 };
 ```
````

### Step 2 → Step 3

````diff
--- Step 2 seed
+++ Step 3 seed
@@ -353,7 +353,13 @@
 ```tsx
 const { useState } = React;
 
-
+export const PlayerCard = () => {
+  return (
+    <div className="card-wrapper tier-gold">
+      
+    </div>
+  );
+}
 
 export const FootballPlayerCard = () => {
   return (
````

### Step 3 → Step 4

````diff
--- Step 3 seed
+++ Step 4 seed
@@ -362,8 +362,6 @@
 }
 
 export const FootballPlayerCard = () => {
-  return (
-    <h1 style={{ backgroundColor: '#fff' }}>Football Card Builder</h1>
-  )
+  return <PlayerCard />;
 };
 ```
````

### Step 4 → Step 5

````diff
--- Step 4 seed
+++ Step 5 seed
@@ -356,7 +356,9 @@
 export const PlayerCard = () => {
   return (
     <div className="card-wrapper tier-gold">
-      
+      <div className="card">
+        
+      </div>
     </div>
   );
 }
````

### Step 5 → Step 6

````diff
--- Step 5 seed
+++ Step 6 seed
@@ -357,7 +357,9 @@
   return (
     <div className="card-wrapper tier-gold">
       <div className="card">
-        
+        <div className="card-header">
+          
+        </div>
       </div>
     </div>
   );
````

### Step 6 → Step 7

````diff
--- Step 6 seed
+++ Step 7 seed
@@ -358,7 +358,10 @@
     <div className="card-wrapper tier-gold">
       <div className="card">
         <div className="card-header">
-          
+          <div>
+            <div className="card-rating">98</div>
+            
+          </div>
         </div>
       </div>
     </div>
````

### Step 7 → Step 8

````diff
--- Step 7 seed
+++ Step 8 seed
@@ -360,8 +360,9 @@
         <div className="card-header">
           <div>
             <div className="card-rating">98</div>
-            
+            <div className="card-position">ST</div>
           </div>
+          
         </div>
       </div>
     </div>
````

### Step 8 → Step 9

````diff
--- Step 8 seed
+++ Step 9 seed
@@ -362,7 +362,10 @@
             <div className="card-rating">98</div>
             <div className="card-position">ST</div>
           </div>
-          
+          <div className="card-header-right">
+            <div className="card-tier-badge">GOLD</div>
+            
+          </div>
         </div>
       </div>
     </div>
````

### Step 9 → Step 10

````diff
--- Step 9 seed
+++ Step 10 seed
@@ -364,9 +364,10 @@
           </div>
           <div className="card-header-right">
             <div className="card-tier-badge">GOLD</div>
-            
+            <div className="card-club">Santos FC</div>
           </div>
         </div>
+        
       </div>
     </div>
   );
````

### Step 10 → Step 11

````diff
--- Step 10 seed
+++ Step 11 seed
@@ -367,7 +367,9 @@
             <div className="card-club">Santos FC</div>
           </div>
         </div>
-        
+        <div className="card-image-wrap">
+          
+        </div>
       </div>
     </div>
   );
````

### Step 11 → Step 12

````diff
--- Step 11 seed
+++ Step 12 seed
@@ -368,8 +368,9 @@
           </div>
         </div>
         <div className="card-image-wrap">
-          
+          <img src="https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg" alt="Edson Arantes do Nascimento (Pele) headshot" className="card-image" />
         </div>
+        
       </div>
     </div>
   );
````

### Step 12 → Step 13

````diff
--- Step 12 seed
+++ Step 13 seed
@@ -370,6 +370,9 @@
         <div className="card-image-wrap">
           <img src="https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg" alt="Edson Arantes do Nascimento (Pele) headshot" className="card-image" />
         </div>
+        <div className="card-name-strip">
+          <span className="card-name">PELE</span>
+        </div>
         
       </div>
     </div>
````

### Step 13 → Step 14

````diff
--- Step 13 seed
+++ Step 14 seed
@@ -373,7 +373,19 @@
         <div className="card-name-strip">
           <span className="card-name">PELE</span>
         </div>
-        
+        <div className="card-stats">
+          <div className="stat-col">
+            <div className="stat-row">
+              
+            </div>
+            <div className="stat-row">
+              
+            </div>
+            <div className="stat-row">
+              
+            </div>
+          </div>
+        </div>
       </div>
     </div>
   );
````

### Step 14 → Step 15

````diff
--- Step 14 seed
+++ Step 15 seed
@@ -376,13 +376,16 @@
         <div className="card-stats">
           <div className="stat-col">
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
           </div>
         </div>
````

### Step 15 → Step 16

````diff
--- Step 15 seed
+++ Step 16 seed
@@ -376,18 +376,19 @@
         <div className="card-stats">
           <div className="stat-col">
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">97</span>
+              <span className="stat-label">PAC</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">98</span>
+              <span className="stat-label">SHO</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">83</span>
+              <span className="stat-label">PAS</span>
             </div>
           </div>
+          
         </div>
       </div>
     </div>
````

### Step 16 → Step 17

````diff
--- Step 16 seed
+++ Step 17 seed
@@ -388,7 +388,18 @@
               <span className="stat-label">PAS</span>
             </div>
           </div>
-          
+          <div className="stat-divider" />
+          <div className="stat-col">
+            <div className="stat-row">
+              
+            </div>
+            <div className="stat-row">
+              
+            </div>
+            <div className="stat-row">
+              
+            </div>
+          </div>
         </div>
       </div>
     </div>
````

### Step 17 → Step 18

````diff
--- Step 17 seed
+++ Step 18 seed
@@ -391,13 +391,16 @@
           <div className="stat-divider" />
           <div className="stat-col">
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
             <div className="stat-row">
-              
+              <span className="stat-value"></span>
+              <span className="stat-label"></span>
             </div>
           </div>
         </div>
````

### Step 18 → Step 19

````diff
--- Step 18 seed
+++ Step 19 seed
@@ -353,6 +353,8 @@
 ```tsx
 const { useState } = React;
 
+
+
 export const PlayerCard = () => {
   return (
     <div className="card-wrapper tier-gold">
@@ -391,16 +393,16 @@
           <div className="stat-divider" />
           <div className="stat-col">
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">99</span>
+              <span className="stat-label">DRI</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">41</span>
+              <span className="stat-label">DEF</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value"></span>
-              <span className="stat-label"></span>
+              <span className="stat-value">75</span>
+              <span className="stat-label">PHY</span>
             </div>
           </div>
         </div>
````

### Step 19 → Step 20

````diff
--- Step 19 seed
+++ Step 20 seed
@@ -353,7 +353,13 @@
 ```tsx
 const { useState } = React;
 
-
+interface PlayerData {
+  name: string;
+  overallRating: number;
+  position: string;
+  club: string;
+  
+}
 
 export const PlayerCard = () => {
   return (
````

### Step 20 → Step 21

````diff
--- Step 20 seed
+++ Step 21 seed
@@ -358,9 +358,17 @@
   overallRating: number;
   position: string;
   club: string;
-  
+  imageUrl: string;
+  pac: number;
+  sho: number;
+  pas: number;
+  dri: number;
+  def: number;
+  phy: number;
 }
 
+
+
 export const PlayerCard = () => {
   return (
     <div className="card-wrapper tier-gold">
````

### Step 21 → Step 22

````diff
--- Step 21 seed
+++ Step 22 seed
@@ -367,7 +367,12 @@
   phy: number;
 }
 
-
+export function getPlayerTier(rating: number): string {
+  if (rating >= 92) return "elite";
+  if (rating >= 85) return "gold";
+  if (rating >= 75) return "silver";
+  return "bronze";
+}
 
 export const PlayerCard = () => {
   return (
````

### Step 22 → Step 23

````diff
--- Step 22 seed
+++ Step 23 seed
@@ -374,7 +374,7 @@
   return "bronze";
 }
 
-export const PlayerCard = () => {
+export const PlayerCard = ({ player }: { player: PlayerData }) => {
   return (
     <div className="card-wrapper tier-gold">
       <div className="card">
````

### Step 23 → Step 24

````diff
--- Step 23 seed
+++ Step 24 seed
@@ -431,6 +431,6 @@
 }
 
 export const FootballPlayerCard = () => {
-  return <PlayerCard />;
+  return <PlayerCard player={{ name: 'PELE', overallRating: 98, position: 'ST', club: 'Santos FC', imageUrl: 'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg', pac: 97, sho: 98, pas: 83, dri: 99, def: 41, phy: 75 }} />;
 };
 ```
````

### Step 24 → Step 25

````diff
--- Step 24 seed
+++ Step 25 seed
@@ -376,7 +376,7 @@
 
 export const PlayerCard = ({ player }: { player: PlayerData }) => {
   return (
-    <div className="card-wrapper tier-gold">
+    <div className={`card-wrapper tier-${getPlayerTier(player.overallRating)}`}>
       <div className="card">
         <div className="card-header">
           <div>
````

### Step 25 → Step 26

````diff
--- Step 25 seed
+++ Step 26 seed
@@ -380,8 +380,8 @@
       <div className="card">
         <div className="card-header">
           <div>
-            <div className="card-rating">98</div>
-            <div className="card-position">ST</div>
+            <div className="card-rating">{player.overallRating}</div>
+            <div className="card-position">{player.position}</div>
           </div>
           <div className="card-header-right">
             <div className="card-tier-badge">GOLD</div>
````

### Step 26 → Step 27

````diff
--- Step 26 seed
+++ Step 27 seed
@@ -384,7 +384,9 @@
             <div className="card-position">{player.position}</div>
           </div>
           <div className="card-header-right">
-            <div className="card-tier-badge">GOLD</div>
+            <div className="card-tier-badge">
+              {getPlayerTier(player.overallRating).toUpperCase()}
+            </div>
             <div className="card-club">Santos FC</div>
           </div>
         </div>
````

### Step 27 → Step 28

````diff
--- Step 27 seed
+++ Step 28 seed
@@ -387,7 +387,7 @@
             <div className="card-tier-badge">
               {getPlayerTier(player.overallRating).toUpperCase()}
             </div>
-            <div className="card-club">Santos FC</div>
+            <div className="card-club">{player.club}</div>
           </div>
         </div>
         <div className="card-image-wrap">
````

### Step 28 → Step 29

````diff
--- Step 28 seed
+++ Step 29 seed
@@ -391,7 +391,7 @@
           </div>
         </div>
         <div className="card-image-wrap">
-          <img src="https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg" alt="Edson Arantes do Nascimento (Pele) headshot" className="card-image" />
+          <img src={player.imageUrl} alt={`${player.name} headshot`} className="card-image" />
         </div>
         <div className="card-name-strip">
           <span className="card-name">PELE</span>
````

### Step 29 → Step 30

````diff
--- Step 29 seed
+++ Step 30 seed
@@ -394,7 +394,7 @@
           <img src={player.imageUrl} alt={`${player.name} headshot`} className="card-image" />
         </div>
         <div className="card-name-strip">
-          <span className="card-name">PELE</span>
+          <span className="card-name">{player.name}</span>
         </div>
         <div className="card-stats">
           <div className="stat-col">
````

### Step 30 → Step 31

````diff
--- Step 30 seed
+++ Step 31 seed
@@ -399,15 +399,15 @@
         <div className="card-stats">
           <div className="stat-col">
             <div className="stat-row">
-              <span className="stat-value">97</span>
+              <span className="stat-value">{player.pac}</span>
               <span className="stat-label">PAC</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value">98</span>
+              <span className="stat-value">{player.sho}</span>
               <span className="stat-label">SHO</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value">83</span>
+              <span className="stat-value">{player.pas}</span>
               <span className="stat-label">PAS</span>
             </div>
           </div>
````

### Step 31 → Step 32

````diff
--- Step 31 seed
+++ Step 32 seed
@@ -414,15 +414,15 @@
           <div className="stat-divider" />
           <div className="stat-col">
             <div className="stat-row">
-              <span className="stat-value">99</span>
+              <span className="stat-value">{player.dri}</span>
               <span className="stat-label">DRI</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value">41</span>
+              <span className="stat-value">{player.def}</span>
               <span className="stat-label">DEF</span>
             </div>
             <div className="stat-row">
-              <span className="stat-value">75</span>
+              <span className="stat-value">{player.phy}</span>
               <span className="stat-label">PHY</span>
             </div>
           </div>
@@ -432,6 +432,8 @@
   );
 }
 
+
+
 export const FootballPlayerCard = () => {
   return <PlayerCard player={{ name: 'PELE', overallRating: 98, position: 'ST', club: 'Santos FC', imageUrl: 'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg', pac: 97, sho: 98, pas: 83, dri: 99, def: 41, phy: 75 }} />;
 };
````

### Step 32 → Step 33

````diff
--- Step 32 seed
+++ Step 33 seed
@@ -432,7 +432,19 @@
   );
 }
 
-
+const defaultPlayer: PlayerData = {
+  name: "PELE",
+  overallRating: 98,
+  position: "ST",
+  club: "Santos FC",
+  imageUrl: "https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg",
+  pac: 97,
+  sho: 98,
+  pas: 83,
+  dri: 99,
+  def: 41,
+  phy: 75,
+};
 
 export const FootballPlayerCard = () => {
   return <PlayerCard player={{ name: 'PELE', overallRating: 98, position: 'ST', club: 'Santos FC', imageUrl: 'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg', pac: 97, sho: 98, pas: 83, dri: 99, def: 41, phy: 75 }} />;
````

### Step 33 → Step 34

````diff
--- Step 33 seed
+++ Step 34 seed
@@ -447,6 +447,7 @@
 };
 
 export const FootballPlayerCard = () => {
-  return <PlayerCard player={{ name: 'PELE', overallRating: 98, position: 'ST', club: 'Santos FC', imageUrl: 'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg', pac: 97, sho: 98, pas: 83, dri: 99, def: 41, phy: 75 }} />;
+  
+  return <PlayerCard player={defaultPlayer} />;
 };
 ```
````

### Step 34 → Step 35

````diff
--- Step 34 seed
+++ Step 35 seed
@@ -447,7 +447,10 @@
 };
 
 export const FootballPlayerCard = () => {
-  
-  return <PlayerCard player={defaultPlayer} />;
+  const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
+  return (
+    
+    <PlayerCard player={player} />
+  );
 };
 ```
````

### Step 35 → Step 36

````diff
--- Step 35 seed
+++ Step 36 seed
@@ -449,8 +449,17 @@
 export const FootballPlayerCard = () => {
   const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
   return (
-    
-    <PlayerCard player={player} />
+    <div className="page">
+      <header className="header">
+        <div className="header-inner">
+          <p className="header-title">Football Card Builder</p>
+          <p className="header-subtitle">Customize your player card</p>
+        </div>
+      </header>
+      
+      <PlayerCard player={player} />
+      
+    </div>
   );
 };
 ```
````

### Step 36 → Step 37

````diff
--- Step 36 seed
+++ Step 37 seed
@@ -456,9 +456,17 @@
           <p className="header-subtitle">Customize your player card</p>
         </div>
       </header>
-      
-      <PlayerCard player={player} />
-      
+      <main className="main">
+        <div className="layout">
+          <div className="form-panel">
+            
+          </div>
+          <div className="preview-panel">
+            
+          </div>
+        </div>
+        <PlayerCard player={player} />
+      </main>
     </div>
   );
 };
````

### Step 37 → Step 38

````diff
--- Step 37 seed
+++ Step 38 seed
@@ -462,10 +462,15 @@
             
           </div>
           <div className="preview-panel">
-            
+            <p className="preview-label">Live Preview</p>
+            <p className="preview-hint">Updates as you type</p>
+            <div
+              className={`preview-box tier-${getPlayerTier(player.overallRating)}`}
+            >
+              <PlayerCard player={player} />
+            </div>
           </div>
         </div>
-        <PlayerCard player={player} />
       </main>
     </div>
   );
````

### Step 38 → Step 39

````diff
--- Step 38 seed
+++ Step 39 seed
@@ -459,7 +459,10 @@
       <main className="main">
         <div className="layout">
           <div className="form-panel">
-            
+            <div>
+              <p className="form-section-title">Player Info</p>
+              
+            </div>
           </div>
           <div className="preview-panel">
             <p className="preview-label">Live Preview</p>
````

### Step 39 → Step 40

````diff
--- Step 39 seed
+++ Step 40 seed
@@ -461,6 +461,12 @@
           <div className="form-panel">
             <div>
               <p className="form-section-title">Player Info</p>
+              <div className="form-group">
+                <label className="label" htmlFor="name">
+                  Name
+                </label>
+                <input id="name" className="input" type="text" />
+              </div>
               
             </div>
           </div>
````

### Step 40 → Step 41

````diff
--- Step 40 seed
+++ Step 41 seed
@@ -467,7 +467,17 @@
                 </label>
                 <input id="name" className="input" type="text" />
               </div>
-              
+              <div className="form-row">
+                <div className="form-group">
+                  <label className="label" htmlFor="position">
+                    Position
+                  </label>
+                  <input id="position" className="input" type="text" />
+                </div>
+                <div className="form-group">
+                  
+                </div>
+              </div>
             </div>
           </div>
           <div className="preview-panel">
````

### Step 41 → Step 42

````diff
--- Step 41 seed
+++ Step 42 seed
@@ -475,9 +475,13 @@
                   <input id="position" className="input" type="text" />
                 </div>
                 <div className="form-group">
-                  
+                  <label className="label" htmlFor="overallRating">
+                    Overall
+                  </label>
+                  <input id="overallRating" className="input" type="number" />
                 </div>
               </div>
+              
             </div>
           </div>
           <div className="preview-panel">
````

### Step 42 → Step 43

````diff
--- Step 42 seed
+++ Step 43 seed
@@ -481,6 +481,12 @@
                   <input id="overallRating" className="input" type="number" />
                 </div>
               </div>
+              <div className="form-group">
+                <label className="label" htmlFor="club">
+                  Club
+                </label>
+                <input id="club" className="input" type="text" />
+              </div>
               
             </div>
           </div>
````

### Step 43 → Step 44

````diff
--- Step 43 seed
+++ Step 44 seed
@@ -487,8 +487,14 @@
                 </label>
                 <input id="club" className="input" type="text" />
               </div>
-              
+              <div className="form-group">
+                <label className="label" htmlFor="imageUrl">
+                  Image URL
+                </label>
+                <input id="imageUrl" className="input" type="text" />
+              </div>
             </div>
+            
           </div>
           <div className="preview-panel">
             <p className="preview-label">Live Preview</p>
````

### Step 44 → Step 45

````diff
--- Step 44 seed
+++ Step 45 seed
@@ -494,7 +494,12 @@
                 <input id="imageUrl" className="input" type="text" />
               </div>
             </div>
-            
+            <div>
+              <p className="form-section-title">Player Stats</p>
+              <div className="stats-grid">
+                
+              </div>
+            </div>
           </div>
           <div className="preview-panel">
             <p className="preview-label">Live Preview</p>
````

### Step 45 → Step 46

````diff
--- Step 45 seed
+++ Step 46 seed
@@ -497,6 +497,18 @@
             <div>
               <p className="form-section-title">Player Stats</p>
               <div className="stats-grid">
+                <div className="form-group">
+                  <label className="label" htmlFor="pac">
+                    PAC
+                  </label>
+                  <input id="pac" className="input" type="number" />
+                </div>
+                <div className="form-group">
+                  <label className="label" htmlFor="sho">
+                    SHO
+                  </label>
+                  <input id="sho" className="input" type="number" />
+                </div>
                 
               </div>
             </div>
````

### Step 46 → Step 47

````diff
--- Step 46 seed
+++ Step 47 seed
@@ -509,6 +509,18 @@
                   </label>
                   <input id="sho" className="input" type="number" />
                 </div>
+                <div className="form-group">
+                  <label className="label" htmlFor="pas">
+                    PAS
+                  </label>
+                  <input id="pas" className="input" type="number" />
+                </div>
+                <div className="form-group">
+                  <label className="label" htmlFor="dri">
+                    DRI
+                  </label>
+                  <input id="dri" className="input" type="number" />
+                </div>
                 
               </div>
             </div>
````

### Step 47 → Step 48

````diff
--- Step 47 seed
+++ Step 48 seed
@@ -521,7 +521,18 @@
                   </label>
                   <input id="dri" className="input" type="number" />
                 </div>
-                
+                <div className="form-group">
+                  <label className="label" htmlFor="def">
+                    DEF
+                  </label>
+                  <input id="def" className="input" type="number" />
+                </div>
+                <div className="form-group">
+                  <label className="label" htmlFor="phy">
+                    PHY
+                  </label>
+                  <input id="phy" className="input" type="number" />
+                </div>
               </div>
             </div>
           </div>
````

### Step 48 → Step 49

````diff
--- Step 48 seed
+++ Step 49 seed
@@ -353,6 +353,8 @@
 ```tsx
 const { useState } = React;
 
+
+
 interface PlayerData {
   name: string;
   overallRating: number;
@@ -465,7 +467,15 @@
                 <label className="label" htmlFor="name">
                   Name
                 </label>
-                <input id="name" className="input" type="text" />
+                <input
+                  id="name"
+                  className="input"
+                  type="text"
+                  value={player.name}
+                  onChange={(e) =>
+                    setPlayer({ ...player, name: e.target.value })
+                  }
+                />
               </div>
               <div className="form-row">
                 <div className="form-group">
````

### Step 49 → Step 50

````diff
--- Step 49 seed
+++ Step 50 seed
@@ -353,6 +353,20 @@
 ```tsx
 const { useState } = React;
 
+const POSITIONS = [
+  "GK",
+  "CB",
+  "LB",
+  "RB",
+  "CDM",
+  "CM",
+  "CAM",
+  "LW",
+  "RW",
+  "ST",
+  "CF"
+] as const;
+
 
 
 interface PlayerData {
````

### Step 50 → Step 51

````diff
--- Step 50 seed
+++ Step 51 seed
@@ -367,7 +367,7 @@
   "CF"
 ] as const;
 
-
+type Position = typeof POSITIONS[number];
 
 interface PlayerData {
   name: string;
````

### Step 51 → Step 52

````diff
--- Step 51 seed
+++ Step 52 seed
@@ -372,7 +372,7 @@
 interface PlayerData {
   name: string;
   overallRating: number;
-  position: string;
+  position: Position;
   club: string;
   imageUrl: string;
   pac: number;
````

### Step 52 → Step 53

````diff
--- Step 52 seed
+++ Step 53 seed
@@ -496,7 +496,13 @@
                   <label className="label" htmlFor="position">
                     Position
                   </label>
-                  <input id="position" className="input" type="text" />
+                  <select
+                    id="position"
+                    className="input"
+                    value={player.position}
+                    
+                  >
+                  </select>
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="overallRating">
````

### Step 53 → Step 54

````diff
--- Step 53 seed
+++ Step 54 seed
@@ -500,8 +500,10 @@
                     id="position"
                     className="input"
                     value={player.position}
-                    
+                    onChange={(e) => 
+                      setPlayer({ ...player, position: e.target.value as Position })}
                   >
+                    
                   </select>
                 </div>
                 <div className="form-group">
````

### Step 54 → Step 55

````diff
--- Step 54 seed
+++ Step 55 seed
@@ -503,7 +503,13 @@
                     onChange={(e) => 
                       setPlayer({ ...player, position: e.target.value as Position })}
                   >
-                    
+                    {POSITIONS.map(
+                      (pos) => (
+                        <option key={pos} value={pos}>
+                          {pos}
+                        </option>
+                      )
+                    )}
                   </select>
                 </div>
                 <div className="form-group">
````

### Step 55 → Step 56

````diff
--- Step 55 seed
+++ Step 56 seed
@@ -516,7 +516,18 @@
                   <label className="label" htmlFor="overallRating">
                     Overall
                   </label>
-                  <input id="overallRating" className="input" type="number" />
+                  <input
+                    id="overallRating"
+                    className="input"
+                    type="number"
+                    value={player.overallRating}
+                    onChange={(e) =>
+                      setPlayer({
+                        ...player,
+                        overallRating: Number(e.target.value),
+                      })
+                    }
+                  />
                 </div>
               </div>
               <div className="form-group">
````

### Step 56 → Step 57

````diff
--- Step 56 seed
+++ Step 57 seed
@@ -534,7 +534,15 @@
                 <label className="label" htmlFor="club">
                   Club
                 </label>
-                <input id="club" className="input" type="text" />
+                <input
+                  id="club"
+                  className="input"
+                  type="text"
+                  value={player.club}
+                  onChange={(e) =>
+                    setPlayer({ ...player, club: e.target.value })
+                  }
+                />
               </div>
               <div className="form-group">
                 <label className="label" htmlFor="imageUrl">
````

### Step 57 → Step 58

````diff
--- Step 57 seed
+++ Step 58 seed
@@ -548,7 +548,15 @@
                 <label className="label" htmlFor="imageUrl">
                   Image URL
                 </label>
-                <input id="imageUrl" className="input" type="text" />
+                <input
+                  id="imageUrl"
+                  className="input"
+                  type="text"
+                  value={player.imageUrl}
+                  onChange={(e) =>
+                    setPlayer({ ...player, imageUrl: e.target.value })
+                  }
+                />
               </div>
             </div>
             <div>
````

### Step 58 → Step 59

````diff
--- Step 58 seed
+++ Step 59 seed
@@ -566,7 +566,15 @@
                   <label className="label" htmlFor="pac">
                     PAC
                   </label>
-                  <input id="pac" className="input" type="number" />
+                  <input
+                    id="pac"
+                    className="input"
+                    type="number"
+                    value={player.pac}
+                    onChange={(e) =>
+                      setPlayer({ ...player, pac: Number(e.target.value) })
+                    }
+                  />
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="sho">
````

### Step 59 → Step 60

````diff
--- Step 59 seed
+++ Step 60 seed
@@ -580,7 +580,15 @@
                   <label className="label" htmlFor="sho">
                     SHO
                   </label>
-                  <input id="sho" className="input" type="number" />
+                  <input
+                    id="sho"
+                    className="input"
+                    type="number"
+                    value={player.sho}
+                    onChange={(e) =>
+                      setPlayer({ ...player, sho: Number(e.target.value) })
+                    }
+                  />
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="pas">
````

### Step 60 → Step 61

````diff
--- Step 60 seed
+++ Step 61 seed
@@ -594,7 +594,15 @@
                   <label className="label" htmlFor="pas">
                     PAS
                   </label>
-                  <input id="pas" className="input" type="number" />
+                  <input
+                    id="pas"
+                    className="input"
+                    type="number"
+                    value={player.pas}
+                    onChange={(e) =>
+                      setPlayer({ ...player, pas: Number(e.target.value) })
+                    }
+                  />
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="dri">
````

### Step 61 → Step 62

````diff
--- Step 61 seed
+++ Step 62 seed
@@ -608,7 +608,15 @@
                   <label className="label" htmlFor="dri">
                     DRI
                   </label>
-                  <input id="dri" className="input" type="number" />
+                  <input
+                    id="dri"
+                    className="input"
+                    type="number"
+                    value={player.dri}
+                    onChange={(e) =>
+                      setPlayer({ ...player, dri: Number(e.target.value) })
+                    }
+                  />
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="def">
````

### Step 62 → Step 63

````diff
--- Step 62 seed
+++ Step 63 seed
@@ -383,6 +383,8 @@
   phy: number;
 }
 
+
+
 export function getPlayerTier(rating: number): string {
   if (rating >= 92) return "elite";
   if (rating >= 85) return "gold";
@@ -622,13 +624,29 @@
                   <label className="label" htmlFor="def">
                     DEF
                   </label>
-                  <input id="def" className="input" type="number" />
+                  <input
+                    id="def"
+                    className="input"
+                    type="number"
+                    value={player.def}
+                    onChange={(e) =>
+                      setPlayer({ ...player, def: Number(e.target.value) })
+                    }
+                  />
                 </div>
                 <div className="form-group">
                   <label className="label" htmlFor="phy">
                     PHY
                   </label>
-                  <input id="phy" className="input" type="number" />
+                  <input
+                    id="phy"
+                    className="input"
+                    type="number"
+                    value={player.phy}
+                    onChange={(e) =>
+                      setPlayer({ ...player, phy: Number(e.target.value) })
+                    }
+                  />
                 </div>
               </div>
             </div>
````

### Step 63 → Step 64

````diff
--- Step 63 seed
+++ Step 64 seed
@@ -383,7 +383,7 @@
   phy: number;
 }
 
-
+const STORAGE_KEY = "football_player_card";
 
 export function getPlayerTier(rating: number): string {
   if (rating >= 92) return "elite";
@@ -464,6 +464,8 @@
   phy: 75,
 };
 
+
+
 export const FootballPlayerCard = () => {
   const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
   return (
````

### Step 64 → Step 65

````diff
--- Step 64 seed
+++ Step 65 seed
@@ -464,7 +464,13 @@
   phy: 75,
 };
 
-
+function loadPlayer(): PlayerData {
+  try {
+    
+  } catch (error) {
+    
+  }
+}
 
 export const FootballPlayerCard = () => {
   const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
````

### Step 65 → Step 66

````diff
--- Step 65 seed
+++ Step 66 seed
@@ -466,7 +466,10 @@
 
 function loadPlayer(): PlayerData {
   try {
-    
+    const saved = localStorage.getItem(STORAGE_KEY);
+    if (saved) {
+      
+    };
   } catch (error) {
     
   }
````

### Step 66 → Step 67

````diff
--- Step 66 seed
+++ Step 67 seed
@@ -468,11 +468,15 @@
   try {
     const saved = localStorage.getItem(STORAGE_KEY);
     if (saved) {
-      
+      return {
+        ...defaultPlayer, 
+        ...JSON.parse(saved) 
+      }
     };
   } catch (error) {
     
   }
+  
 }
 
 export const FootballPlayerCard = () => {
````

### Step 67 → Step 68

````diff
--- Step 67 seed
+++ Step 68 seed
@@ -474,9 +474,9 @@
       }
     };
   } catch (error) {
-    
+    console.log("Failed to load player data, using defaults:", error);
   }
-  
+  return defaultPlayer;
 }
 
 export const FootballPlayerCard = () => {
````

### Step 68 → Step 69

````diff
--- Step 68 seed
+++ Step 69 seed
@@ -351,7 +351,7 @@
 ```
 
 ```tsx
-const { useState } = React;
+const { useState, useEffect } = React;
 
 const POSITIONS = [
   "GK",
@@ -481,6 +481,9 @@
 
 export const FootballPlayerCard = () => {
   const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
+
+  
+
   return (
     <div className="page">
       <header className="header">
````

### Step 69 → Step 70

````diff
--- Step 69 seed
+++ Step 70 seed
@@ -482,7 +482,13 @@
 export const FootballPlayerCard = () => {
   const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
 
-  
+  useEffect(() => {
+    try {
+      
+    } catch (error) {
+      
+    }
+  }, [player]);
 
   return (
     <div className="page">
````

### Step 70 → Step 71

````diff
--- Step 70 seed
+++ Step 71 seed
@@ -484,9 +484,9 @@
 
   useEffect(() => {
     try {
-      
+      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
     } catch (error) {
-      
+      console.log("Failed to save player data:", error);
     }
   }, [player]);
 
````

### Step 71 → Step 71 solution

````diff
--- Step 71 seed
+++ Step 71 solution
@@ -480,7 +480,7 @@
 }
 
 export const FootballPlayerCard = () => {
-  const [player, setPlayer] = useState<PlayerData>(defaultPlayer);
+  const [player, setPlayer] = useState<PlayerData>(loadPlayer);
 
   useEffect(() => {
     try {
````
