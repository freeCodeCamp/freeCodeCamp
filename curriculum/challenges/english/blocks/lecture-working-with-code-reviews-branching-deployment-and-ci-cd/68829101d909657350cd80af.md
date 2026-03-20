---
id: 68829101d909657350cd80af
title: How Do You Use GitHub Pages to Deploy a Project?
challengeType: 19
dashedName: how-do-you-use-github-pages-to-deploy-a-project
---

# --description--

GitHub Pages is a really solid option for deploying static sites, or applications that do not require a back-end server to handle logic. That is, applications that run entirely client-side, or in the user's browser, can be fully deployed on this platform.

Additionally, GitHub Pages are completely free for open source projects. There are plenty of good reasons to make your project open source, and Pages adds yet another.

But how do you actually deploy to GitHub Pages? Well, that depends on how your application works.

Let's start with a basic HTML page. Here's one you can add to your existing repo if you'd like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Welcome to freeCodeCamp's Lessons!</h1>
    <p>Let's have some fun learning about Git and GitHub!</p>
  </body>
</html>
```

Now we need to visit our repository and click the "Settings" tab to go to the repository settings. Then we need to select "Pages" from the sidebar.

There's only a few options initially, but that's going to change as we start configuring the settings. First, we need to tell GitHub what to deploy from.

We'll want to leave this as "Deploy from a branch", because we aren't using a framework and have not configured any GitHub actions at all. You'll learn more about what those are in an upcoming lesson.

Next, set the branch that we are deploying from to `main` to deploy what's on that.

You'll then get a choice to deploy from your project's root folder or from a `docs` folder. This feature is used by projects like freeCodeCamp - we used to bundle documentation with our app, so we could deploy just the documentation onto GitHub pages via the `docs` folder. For now, leave it as the `/` (root) folder and hit the "Save" button next to this drop down to save your changes.

Once you've saved, you'll see a new input to configure a custom domain. If you have one already, and would like to use it, you can follow the link to the docs to do so. For this lesson, however, we are going to leave this blank.

You can also see the domain that your new GitHub Pages site has been deployed to. Without a custom domain, this defaults to `<username>.github.io`, where `<username>` is the name of your account (or the organization's account if you are deploying from an org-owned repository). And repository will be served on a path matching the repository's name, `<username>.github.io/<repo-name>`, for instance. If you visit the URL, you will see your site!

Now, when you push new changes to your `main` branch, GitHub Pages will automatically update our deployed site with the latest changes. This process can take a few minutes, depending on server load - and you may need to do a hard refresh to clear the cache.

And with that, we have successfully deployed a basic web application to GitHub Pages. You can also include CSS and JavaScript files in your Pages deployment, so you can build beautiful and interactive sites. And once you learn a framework like React or Angular, you can even deploy those on GitHub Pages too!

# --questions--

## --text--

What type of applications can be deployed on GitHub Pages?

## --answers--

Only documentation websites.

### --feedback--

Think about where the application logic runs - on a server or in the browser?

---

Applications that require server-side processing.

### --feedback--

Think about where the application logic runs - on a server or in the browser?

---

Static sites and client-side applications.

---

Database-driven applications.

### --feedback--

Think about where the application logic runs - on a server or in the browser?

## --video-solution--

3

## --text--

If your GitHub username is `johndoe` and your repository is named `my-portfolio`, what URL would your GitHub Pages site be deployed to?

## --answers--

`johndoe.github.io`

### --feedback--

Remember that repositories not matching the `username.github.io` pattern are served on a path.

---

`my-portfolio.github.io`

### --feedback--

Remember that repositories not matching the `username.github.io` pattern are served on a path.

---

`github.io/johndoe/my-portfolio`

### --feedback--

Remember that repositories not matching the `username.github.io` pattern are served on a path.

---

`johndoe.github.io/my-portfolio`

## --video-solution--

4

## --text--

When configuring GitHub Pages deployment, which of the following options do you need to specify?

## --answers--

The programming language used.

### --feedback--

Consider what GitHub needs to know to find and serve your static files.

---

The branch to deploy from and the folder location.

---

The server specifications.

### --feedback--

Consider what GitHub needs to know to find and serve your static files.

---

The database connection string.

### --feedback--

Consider what GitHub needs to know to find and serve your static files.

## --video-solution--

2
