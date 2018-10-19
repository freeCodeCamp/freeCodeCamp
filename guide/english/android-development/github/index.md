---
title: Direct upload to Github via Android Studio
---

![](https://i.imgur.com/W6QaUAX.png)

[Github](https://services.github.com/on-demand/intro-to-github/) is a web based version control which is an amazing tool used by developers to store multiple versions of their projects. There may be times when you may add a feature to your project but may want to keep that bit of code seperate. On Github you can create seperate branches and store the necessary code. 

The following are the steps to be followed in case the project has not been connected to Github from Android Studio:

1. Sign up and create a GitHub account [here](https://www.github.com).
2. Download git from [here](https://git-scm.com/downloads) and install it in your system. You will have to set up the environment variables so that the git commands can work from any file locations.
3. Open the project in android studio and go to File -> Settings -> Version Control -> Git.
4. Click on test button to test "path to Git executables". If successful message is shown everything is ok, else navigate to git.exe from where you installed git and test again.
5. Go to File -> Settings -> Version Control -> GitHub. Enter your email and password used to create GitHub account and click on OK button.
6. Then go to VCS -> Import into Version Control -> Share Project on GitHub. Enter Repository name, Description and click Share button.
7. In the next window check all files inorder to add files for initial commit and click OK.
8. Now the project will be uploaded to the GitHub repository and when uploading is finished we will get a message in android studio showing "Successfully shared project on GitHub". Click on the link provided in that message to go to GitHub repository.

The following are the steps to be followed in case a project is already connected to the Github:

1. In the toolbar select the VCS-> Commit and enter the commit message.
2. After entering the commit message select commit and push.
3. Finally select push.

![](https://i.imgur.com/1UUFXnM.png)
![](https://i.imgur.com/Lih2m92.png)
