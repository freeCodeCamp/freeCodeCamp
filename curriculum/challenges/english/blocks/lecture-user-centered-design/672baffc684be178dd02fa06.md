---
id: 672baffc684be178dd02fa06
title: What Are Best Practices for Designing Cards?
challengeType: 19
dashedName: what-are-best-practices-for-designing-cards
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

Card components are a very common occurrence in e-commerce, social media, and news sites. They are used to help display information in a structured way. When you are designing your cards, it is important to understand best practices so your users can easily understand the information you are trying to convey.

The first consideration for card design should be simplicity. You don't want your cards to be visually cluttered or display too much information. For example, if a card design is visually cluttered, there will be too much information for the user to process all at once. 

Here is an example of a cluttered card design:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2><strong><em>Product Name: Ultimate Edition</em></strong></h2>
  <p>
    This is a great product that you will love! It has many features and benefits that will make your life easier and more enjoyable. Whether you're at home or on the go, this product is perfect for all situations. Don’t miss out on this incredible offer, buy now and experience the difference!
  </p>
  <button>Buy Now</button>
  <button>Learn More</button>
  <button>Add to Wishlist</button>
  <p><strong>Only 3 left in stock!</strong></p>
  <p><em>Rated 4.8 stars by 2,391 customers</em></p>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}
.card p {
  font-size: 1em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

:::

Having less information and good spacing between items on the card makes it easier for the user to process the information, and allows for multiple cards on the page.

Here is an example of a simple card design:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

:::

Another thing to consider is where the user can click on the card. Some card designs will have a single button, making it obvious where the user can click. Other card designs will have the entire card clickable. When the user hovers over any part of the card, the card will change color or have a shadow effect to indicate that the card is clickable. Whatever design you choose, it needs to be consistent throughout your site and easy for the user to understand. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <a href="#">
    <img src="https://placehold.co/150x150" alt="Example Product Image">
    <h2>Product Name</h2>
    <button>Buy Now</button>
  </a>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card a {
  text-decoration: none;
  color: inherit;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

:::

Another consideration is the use of media on your cards. Choosing high-quality media can significantly enhance the user experience. If you are using images or videos for say a product card, the higher the quality the more the user will be interested in that product. But if you use poor media quality, then the user might not trust the quality of your products and services. 

One of the last things to consider is the use of color hierarchy. You want to make sure that the most important information on the card is the most prominent. You can use bright colors for important elements like a call-to-action button, and light colors for less important items on a card.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #28a745; 
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

:::

As you continue to work on web applications, keep in mind the different best practices for card design. This will help you create better user experiences for your users.

# --questions--

## --text--

Why is it important to have a simple card design?

## --answers--

You want users to have a good user experience and digest the information easily.

---

You want users to be confused.

### --feedback--

Think about the user experience

---

You want users to be overwhelmed.

### --feedback--

Think about the user experience

---

You want users to be frustrated.

### --feedback--

Think about the user experience

## --video-solution--

1

## --text--

Why is it important to have good color hierarchy on your card design?

## --answers--

To make it difficult for users to understand the information.

### --feedback--

Think about what information is most important on the card

---

To make the site perform better.

### --feedback--

Think about what information is most important on the card

---

To highlight the most important information on the card.

---

To make the card visually cluttered.

### --feedback--

Think about what information is most important on the card

## --video-solution--

3

## --text--

What are the advantages of using high quality media on your card design?

## --answers--

There are no advantages.

### --feedback--

Think about how high quality media can impact the user experience

---

Users will leave the site immediately.

### --feedback--

Think about how high quality media can impact the user experience

---

It will speed up the performance of the site.

### --feedback--

Think about how high quality media can impact the user experience

---

Users will trust the quality of your products and services.

## --video-solution--

4
