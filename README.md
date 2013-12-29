Hackathon Starter
=================
A kickstarter for **Node.js** projects.

![](https://lh6.googleusercontent.com/-NikjFtdyOq8/UsCv7URplAI/AAAAAAAADrE/a417u0cZU7Y/w1278-h958-no/Screenshot+2013-12-29+18.27.10.png)

Features
--------
- Local authentication using Email and Password
- OAuth2 authentication via Twitter, Facebook, Google or GitHub
- MVC Structure
- Bootstrap 3 + Flat UI
- Contact Form
- Account Management
- API Examples

Prerequisites
-------------
 - MongoDB
 - Node.js
 - **Xcode** (Mac OS X) or **Visual Studio** (Windows)


Quick Start
-----------
```
git clone git://github.com/sahat/hackathon-starter
cd hackathon-starter
npm install
node app.js
```
Make sure MongoDB server is running locally. The simplest way to get MongoDB:
**Ubuntu**
`sudo apt-get install mongodb`
**Mac OS X (via Homebrew)**
`brew update`
`brew install mongodb`
**Mac OS X (Manual Installation)** http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
**Windows**
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/

When deploying your app, you will want to use MongoLab or MongoHQ.

Documents
---------

**StackEdit** stores your documents in your browser local storage, which means all your documents are automatically saved locally and are accessible offline.

> **NOTE:** This also means that your documents are not shared between different browsers or computers and that clearing your browser's data may **delete all of them!**

#### <i class="icon-file"></i> Create a document

You can create a new document by clicking the <i class="icon-file"></i> button in the navigation bar. This will switch from the current document to the new one.

#### <i class="icon-folder-open"></i> Switch to another document

You can list all your local documents and switch from one to another by clicking the <i class="icon-folder-open"></i> button in the navigation bar.

#### <i class="icon-pencil"></i> Rename a document

You can rename the current document by clicking the document title in the navigation bar.

#### <i class="icon-trash"></i> Delete a document

You can delete the current document by clicking the <i class="icon-trash"></i> button in the navigation bar.

#### <i class="icon-hdd"></i> Save a document

You can save the current document to a file using the <i class="icon-hdd"></i> `Save as...` sub-menu.

> **NOTE:** See [<i class="icon-share"></i> Publish a document](#publish-a-document) section for a description of the different outputs.


----------


Synchronization
---------------

**StackEdit** can be combined with **Google Drive** and **Dropbox** to have your documents centralized in the *Cloud*. The synchronization mechanism will take care of uploading your modifications or downloading the latest version of your documents.

> **NOTE:**
> Full access to **Google Drive** or **Dropbox** is required to be able to import any document in StackEdit.
> - Imported documents are downloaded in your browser and are not transmitted to a server.
> - If you experience problems exporting documents to Google Drive, check and optionally disable browser extensions, such as Disconnect.

#### <i class="icon-download"></i> Import a document

You can import a document from the *Cloud* by going to the <i class="icon-provider-gdrive"></i> `Google Drive` or the <i class="icon-provider-dropbox"></i> `Dropbox` sub-menu and by clicking `Import from...`. Once imported, your document will be automatically synchronized with the **Google Drive** / **Dropbox** file.

#### <i class="icon-upload"></i> Export a document

You can export any document by going to the <i class="icon-provider-gdrive"></i> `Google Drive` or the <i class="icon-provider-dropbox"></i> `Dropbox` sub-menu and by clicking `Export to...`. Even if your document is already synchronized with **Google Drive** or **Dropbox**, you can export it to a another location. **StackEdit** can synchronize one document with multiple locations.

#### <i class="icon-refresh"></i> Synchronize a document

Once your document is linked to a **Google Drive** or a **Dropbox** file, **StackEdit** will periodically (every 3 minutes) synchronize it by downloading/uploading any modification. Any conflict will be detected, and a local copy of your document will be created as a backup if necessary.

If you just have modified your document and you want to force the synchronization, click the <i class="icon-refresh"></i> button in the navigation bar.

> **NOTE:** The <i class="icon-refresh"></i> button is disabled when:
> 
> - you are offline,
> - or the document is not synchronized with any location,
> - or the document has not been modified since the last synchronization.

#### <i class="icon-refresh"></i> Manage document synchronization

Since one document can be synchronized with multiple locations, you can list and manage synchronized locations by clicking <i class="icon-refresh"></i> `Manage synchronization` in the <i class="icon-provider-stackedit"></i> menu. This will open a dialog box allowing you to add or remove synchronization links that are associated to your document.

> **NOTE:** If you delete the file from **Google Drive** or from **Dropbox**, the document will no longer be synchronized with that location.

----------


Publication
-----------

Once you are happy with your document, you can publish it on different websites directly from **StackEdit**. As for now, **StackEdit** can publish on **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **Tumblr**, **WordPress** and on any SSH server.

#### <i class="icon-share"></i> Publish a document

You can publish your document by going to the <i class="icon-share"></i> `Publish on` sub-menu and by choosing a website. In the dialog box, you can choose the publication format:

- Markdown, to publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML, to publish the document converted into HTML (on a blog for instance),
- Template, to have a full control of the output.

> **NOTE:** The default template is a simple webpage wrapping your document in HTML format. You can customize it in the `Services` tab of the <i class="icon-cog"></i> `Settings` dialog.

#### <i class="icon-share"></i> Update a publication

After publishing, **StackEdit** will keep your document linked to that publish location so that you can update it easily. Once you have modified your document and you want to update your publication, click on the <i class="icon-share"></i> button in the navigation bar.

> **NOTE:** The <i class="icon-share"></i> button is disabled when:
> 
> - you are offline,
> - or the document has not been published anywhere.

#### <i class="icon-share"></i> Manage document publication

Since one document can be published on multiple locations, you can list and manage publish locations by clicking <i class="icon-share"></i> `Manage publication` in the <i class="icon-provider-stackedit"></i> menu. This will open a dialog box allowing you to remove publication links that are associated to your document.

> **NOTE:** In some cases, if you remove the file from the website or the post from the blog, the document will no longer be published on that location.

----------


Markdown Extra
--------------

**StackEdit** supports **Markdown Extra**, which extends **Markdown** syntax with some nice features.

> **NOTE:** You can disable any **Markdown Extra** feature in the `Extensions` tab of the <i class="icon-cog"></i> `Settings` dialog.


### Tables

**Markdown Extra** has a special syntax for tables:

Item      | Value
--------- | -----
Computer  | \$1600
Phone     | \$12
Pipe      | \$1

You can specify column alignment with one or two colons:

| Item      |  Value | Qty  |
| :-------- | ------:| :--: |
| Computer  | \$1600 |  5   |
| Phone     |   \$12 |  12  |
| Pipe      |    \$1 | 234  |


### Definition Lists

**Markdown Extra** has a special syntax for definition lists too:

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D


### Fenced code blocks

GitHub's fenced code blocks are also supported with **Prettify** syntax highlighting:

```
// Foo
var bar = 0;
```

> **NOTE:** To use **Highlight.js** instead of **Prettify**, just configure the `Markdown Extra` extension in the <i class="icon-cog"></i> `Settings` dialog.


### Special Attributes

With **Markdown Extra**, you can specify `class` and `id` attributes on headers and fenced code blocks just like this:

##### Header example {#my-header}

``` {#my-id .my-class}
var foo = bar;
```

Then you can create cross-references like this: [beginning of the document](#welcome).


### Footnotes

You can create footnotes like this[^footnote].

  [^footnote]: Here is the *text* of the **footnote**.


### SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                  | ASCII                                    | HTML                                |
 ------------------|------------------------------------------|-------------------------------------
| Single backticks | `'Isn't this fun?'`                      | &#8216;Isn&#8217;t this fun?&#8217; |
| Quotes           | `"Isn't this fun?"`                      | &#8220;Isn&#8217;t this fun?&#8221; |
| Dashes           | `-- is an en-dash and --- is an em-dash` | &#8211; is an en-dash and &#8212; is an em-dash |


### Table of contents

You can insert a table of contents using the marker `[TOC]`:

[TOC]


### MathJax
 
You can render *LaTeX* mathematical expressions using **MathJax**, as on [math.stackexchange.com][1]:

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall
n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> **NOTE:** When exporting, make sure you include MathJax to render mathematical expression correctly. Your page/template should include something like: 

```
<script type="text/javascript" src="https://stackedit.io/libs/MathJax/MathJax.js?config=TeX-AMS_HTML"></script>
```

> **NOTE:** You can find more information:
>
> - about **Markdown** syntax [here][2],
> - about **Markdown Extra** extension [here][3],
> - about **LaTeX** mathematical expressions [here][4],
> - about **Prettify** syntax highlighting [here][5],
> - about **Highlight.js** syntax highlighting [here][6].

Written with [StackEdit](https://stackedit.io/).

  [^stackedit]: StackEdit is a free, open-source Markdown editor based on PageDown, the Markdown library used by Stack Overflow and the other Stack Exchange sites.


  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
  [4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  [5]: https://code.google.com/p/google-code-prettify/
  [6]: http://highlightjs.org/
