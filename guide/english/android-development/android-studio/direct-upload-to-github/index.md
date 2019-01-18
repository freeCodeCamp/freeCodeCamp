---
title: Direct Upload to GitHub Via Android Studio
---

![](https://i.imgur.com/W6QaUAX.png)

[GitHub](https://services.github.com/on-demand/intro-to-github/) is a web based version control which is an amazing tool used by developers to store multiple versions of their projects. There may be times when you may add a feature to your project but may want to keep that bit of code separate. On Github you can create seperate branches and store the necessary code. 

The following are the steps to be followed in case the project has not been connected to GitHub from Android Studio:

### Windows

1. Sign up and create a GitHub account [here](https://www.github.com).
2. Download Git from [here](https://git-scm.com/downloads) and install it on your system. You will have to set up the environment variables so the Git commands can work from any file location.
3. Open the project in Android Studio and go to **File -> Settings -> Version Control -> Git**.
4. Click on the test button to check the "path to Git executables". If a success message is shown everything is OK. Otherwise, navigate to git.exe where you installed Git and test again.
5. Go to **File -> Settings -> Version Control -> GitHub**. Enter your email and password used to create your GitHub account and click the OK button.
6. Then go to **VCS -> Import into Version Control -> Share Project on GitHub**. Enter your repository name, a description of your project, and click the Share button.
7. In the next window check all the files you want to track for your initial commit and click OK.
8. Now the project will be uploaded to the GitHub repository. When uploading is finished we will get a message in Android Studio showing "Successfully shared project on GitHub". Click on the link provided in that message to go to your project's GitHub repository.

If your project is connected to GitHub and you would like to push a commit:

### Windows

1. In the toolbar select the **VCS-> Commit** and enter the commit message.
2. After entering the commit message select commit and push.
3. Finally select push.

![](https://i.imgur.com/1UUFXnM.png)
![](https://i.imgur.com/Lih2m92.png)
