---
title: Remove a Package from Your Dependencies
---
# Remove a Package from Your Dependencies


---
## Hints

### Hint 1
You should go over to the `package.json` file in your project. Removing a package is as simple as going into your dependencies section and removing the line with the corresponding item. In the following example "express" is removed from `package.json`:

Before
```json
"dependencies": {
    "express": "^4.16.4",
    "helmet": "^3.14.0"
  },
```

After
```json
"dependencies": {
    "express": "^4.16.4",
  },
```