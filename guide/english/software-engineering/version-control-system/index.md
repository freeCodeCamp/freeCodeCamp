---
title: Version Control System
---
## Version Control System

Version control systems (VCS), also called Source Code Management (SCM), are tools used to track changes on files, manage version and ease collaborative file editing.
There are mainly 2 types of VCS:
- Centralized Version Control System 
Where a central repository is authoritative. The associate architecture is client/server.
The first VCS (CVS, SVN...) were Centralized Version Control System.
- Distributed Version Control System 
Where multiple repository exchange modification. The associate architecture is mostly peer to peer, but one repo can be declared as authoritative.
The most used modern VCS (Git, Mercurial...) are Distributed Version Control System.

### Why use it?
- **Changes history** - VCS enable the user to browse and search all the changes which are automatically recorded with useful information (date, author...) and
- **Versions/tags** - The user can search/retrieve specific state of the files that have been labeled with tags and version names
- **Branching/Merging** - Distributed Version Control System make it easy to maintain parallel branch of files and to merge them partially or totally when needed.
- **Atomic operations** - All modern VCS provide atomic operations: All modifications are guaranteed to succeed or fail as whole which ensure that the files are always in a consistent state.

### Most popular Version Control System

- Git

*Git* is a Distributed Version Control System and probably the most used VCS used nowadays with *Mercurial*.

- Mercurial

*Mercurial* is a Distributed Version Control System and probably the most used VCS used nowadays with *Git*.

- CVS

*CVS* is an old SCM which was proeminent before *SVN* widespread.
*CVS* and *SVN* are now deprecated in favor of Distributed Version Control System like *Git* and *Mercurial*.

- SVN/Subversion

*SVM* is an old SCM that succeeded *CVS*.
Eventually *SVN* was deprecated by the wide adoption of Distributed Version Control System like *Git* and *Mercurial*

<hr>
<h2>Working with Git</h2>
<h3>5 most common basic git commands</h3>
<ul>
  <h4>1. <code>git init</code></h4>
  <li>Initializes or creates a new git Repository.</li>
  <li>'HEAD' is the name of the current commit.</li>
</ul>
<ul>
  <h4>2.1. <code>git add [filename]</code></h4>
  <li>Command to add files specified with [filename] to the staging area.</li>
  <li>Staging area is an intermediate area, where files in the working directory are staged before being committed to the repository. git pushes files to staging area before a commit.</li>
</ul>
<ul>
  <h4>2.2. <code>git add .</code></h4>
  <li>Command to add all the files in the working directory to the staging area, here all the files are specified with a period symbol at the end.</li>
</ul>
<ul>
  <h4>3. <code>git commit</code></h4>
  <li>To commit changes to the repository</li>
</ul>
<ul>
  <h4>4. <code>git status</code></h4>
  <li>Status command shows which files have changed since last commit.</li>
</ul>
<ul>
  <h4>5. <code>git log</code></h4>
  <li>git log displays every commit that has ever been made starting with the most recent.</li>
  <li>Each commit has an ID, an Author, a Date, and a message associated with it.</li>
  <li>ID is sort of like a serial number. It uniquely identifies each commit and lets you refer to it.</li>
</ul>

<h3>5 most common intermediate level of git commands</h3>
<ul>
  <h4>1. <code>git diff [commit id-1] [commit id-2]</code></h4>
  <li>Compare different versions of a file within git.</li>
  <li>green lines with + sign were added.</li>
  <li>red lines with - sign were removed.</li>
</ul>
<ul>
  <h4>2. <code>git clone [URL]</code></h4>
  <li>Git has a command allowing you to copy an entire repository from one computer to another. The command is called git clone because it creates a clone of the repository.</li>
</ul>
<ul>
  <h4>3. <code>git checkout [commit id]</code></h4>
  <li>checking out a commit means resetting all of your files to how they were at the time that commit was made. Simply restoring a previous version.</li>
</ul>
<ul>
  <h4>4. <code>git ignore [filename]</code></h4>
  <li>It tells git what files it should not track, normally used for external packages which are just imported as a whole to the project.</li>
</ul>
<ul>
  <h4>5. <code>git reset</code></h4>
  <li>Erases commits, removing items from the repository <b>(Dangerous)</b></li>
</ul>

<h3>5 most common advanced level of git commands used when working with branches</h3>
<ul>
  <h4>1. <code>git branch [branch-name]</code></h4>
  <li>It creates a new branch with that name</li>
  <li>master is the default branch, it is considered production quality branch that never breaks, always works.</li>
  <li>To simply view your current branch</li>
  <code>$git branch</code>
</ul>
<ul>
  <h4>2. <code>git checkout [branch-name]</code></h4>
  <li>To switch to another branch.</li>
</ul>
<ul>
  <h4>3. <code>git merge [branch-name-1] [branch-name-2]</code></h4>
  <li>To merge [branch-name-2] into [branch-name-1].</li>
</ul>
<ul>
  <h4>4. <code>git branch -d [branch-name]</code></h4>
  <li>If you don't need a branch anymore, you can delete it using this command.</li>
</ul>
<ul>
  <h4>5. <code>git show [commit ID]</code></h4>
  <li>Git includes a command to show you what changes were introduced by a commit compared to its parent, without knowing its parent.</li>
</ul>

<h3>5 best practices using git</h3>
<ol>
  <li>It's good idea to keep commits small with one commit per logical change.</li>
  <li>it's always best practice to add messages to your commits so that other collaborators can understand what changes you have made. the message explains what has changed since last commit. <code>git commit -m "write a message here"</code></li>
  <li>Branch for collaboration: To keep things organized when working with others. If you and your collaborators all make changes on the same branch, you can't easily work on separate features simultaneously. A common workflow for developers working on projects together includes making a new branch for every feature or bug-fix.</li>
  <li>Branches are really good, even if you get bored on working on a feature, it gives you the ability to switch and start working on something else.</li>
  <li>Give meaningful names to branches and use commit messages with better understanding messages which justifies the commit.</li>
</ol>

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='http://savannah.nongnu.org/projects/cvs' target='_blank'>CVS</a>

<a href='https://git-scm.com/' target='_blank'>Git</a>

<a href='https://www.mercurial-scm.org/' target='_blank'>Mercurial</a>


<a href='http://subversion.tigris.org/' target='_blank'>SVN</a>


<a href='https://en.wikipedia.org/wiki/Version_control' target='_blank'>Version Control on Wikipedia</a>

