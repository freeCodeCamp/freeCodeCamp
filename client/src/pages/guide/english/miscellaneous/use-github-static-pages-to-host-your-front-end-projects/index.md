---
title: Use Github Static Pages to Host Your Front End Projects
---
**Benefits**

I love Codepen.io, it's a wonderful, easy-to-use tool for simple front-end experimentation. But as the fcc projects got more complex, I realized coding locally was going to save me a bunch of headaches. My text-editor and <a href='https://incident57.com/codekit/' target='_blank' rel='nofollow'>codekit</a> combo are just waaay faster.

*   Autocomplete
*   Compile everything (codepen was really dragging trying to compile Jade)
*   Better auto-refresh
*   Built in bower
*   Git versioning
*   Improved screen real-estate experience

## Git to Github

Since I'm already saving locally, and using git for version control, I figured might as well upload to Github. Plus, Github has a fantastic, free service for front-end projects called <a href='https://pages.github.com/' target='_blank' rel='nofollow'>Github Pages</a>. Just update your repo and your changes are live.

How it works is simple. Github checks if your repository has a branch called `gh-pages` and serves any code that's sitting in that branch. No back-end stuff here, but HTML, CSS and JS work like a charm.

## First things first

Let's make a new folder for your project. I'll use the <a href='http://www.freecodecamp.com/challenges/stylize-stories-on-camper-news' target='_blank' rel='nofollow'>Camper News</a> project as my example.

Got to your work directory and make a new one. You can do this in the terminal (or not).

![Project Directory](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2e3faaa2752657c592a9991ceed29a0200f332e6.png)

Now, go into the project directory, and (for sure in the terminal this time) use the command `git init`. Note, this tutorial assumes <a href='https://git-scm.com/book/en/v2/Getting-Started-Installing-Git' target='_blank' rel='nofollow'>you have git installed</a>.

Alright, awesome. Now we're ready to work.

## Next steps

Create some files in your campNews directory. I don't know, maybe an index.html and probably app.css and app.js, or whatever naming convention you prefer. Put your code in these files. Alright, now we're ready for our first commit. It takes **two steps**.

1.  `git add -A` will prep all these new files and the new code inside them
2.  `git commit -m 'relevant message'` will commit all the work you've done to the branch you're currently on ('master' by default)

## The key to this whole thing

OK, so far we're still local. There's some stuff we gotta do to take our work and move it to github. It's at this point I like to switch branches. Remember - github only serves from gh-pages, and if you've followed along so far, your branch is called 'master'. Let's make a new (local) gh-pages branch.

`git checkout -b gh-pages` will create it, copy all the work from master into gh-pages and switch me over to the branch. Phew.

`git branch -d master` will get rid of the master branch. Sounds crazy I know, but what do we need it for? Just think of gh-pages as your NEW master branch.

Now, `git add -A` and `git commit -m 'relevant message'` again, just in case. And be prepared to leave your editor and terminal and go online for the first time.

Go to your github profile and create a new repo. Name it something relevant, like campNews.

![New Repo](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3f113af87b94fcd649c78d5f6d36463795671e7b.png)

Once it's created, go in and grab the HTTPS clone URL. (Ignore the files in my screenshot, your repo will be empty at this point).

![clone url](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a0f3da26ba0802342d7d6f7890763a2bca32b62a.png)

## Putting it all together

And you can leave the online world. Back to the terminal! Let's connect our local project to this github repo. All it takes is one command.

`git remote add origin <server>` Just replace server with the HTTPS url you just copied. So my command looks like this:

`git remote add origin https://github.com/gkobilansky/campNews.git`.

OK, so far we've:

1.  Created our project
2.  Versioned it in git
3.  Commited some changes
4.  Switched it to the 'gh-pages' branch
5.  Connected it to github

## Last step!

Push you project to github. Again, simple:

`git push origin gh-pages`

That command will make sure your latest commits get uploaded to github. Once you've done this at least once, your project should be available <a>http://_username_.github.io/_repository_</a>, so for me it's <a href='http://gkobilansky.github.io/campNews' target='_blank' rel='nofollow'>http://gkobilansky.github.io/campNews</a>.

Once this is all done, the process just repeats itself:

1.  `git add -A`
2.  `git commit -m 'relevant message'`
3.  `git push origin gh-pages`

Granted, steeper learning curve than codepen.io, but faster and more flexible once you get the hang of it.

Happy coding!

PS. Thanks to <a href='http://rogerdudler.github.io/git-guide/' target='_blank' rel='nofollow'>this guide</a> by Roger Dudler for keeping things simple.
