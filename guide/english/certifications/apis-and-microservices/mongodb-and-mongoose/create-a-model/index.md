---
title: Create a Model
---
## Create a Model

### Creating Schema
See the [Mongoose docs](https://mongoosejs.com/docs/guide.html) first where is a lot of useful stuff. 
When you are building schema you can use either of three options for name validation
```javascript
name: String
name: {type: String}
name: {type: String, required: true} //preferred
```
For array of favoriteFoods here is the validation:
```javascript
favoriteFoods: [{ type: String }]
```
### Creating a Model
Now that we have the schema of our model, we can actually create a model by:
```javascript
var Model  = mongoose.model('Model', modelSchema);
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
