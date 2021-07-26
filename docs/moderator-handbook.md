# The Official freeCodeCamp Moderator Handbook

This handbook will help you moderate different places in our community. This covers conversations and interactions in issues & pull request threads on GitHub, the community forum, the chat rooms and other official communities that we foster.

> [!NOTE]
> All freeCodeCamp moderators are community-wide moderators. That is we trust you to oversee any of these places.

You can serve as a moderator on any of the platforms that are of the most interest to you. Some moderators just help out on GitHub, while others just help out on the forum. Some moderators are active everywhere.

The bottom line is that we want you to enjoy being a moderator, and invest your scarce time in places that are of interest to you.

> "With great power comes great responsibility." - Uncle Ben

As a moderator, temperament is more important than technical skill.

Listen. Be Helpful. Don't abuse your power.

freeCodeCamp is an inclusive community, and we need to keep it that way.

We have a single code of conduct that governs our entire community. The fewer the rules, the easier they are to remember. You can read those rules and commit them to memory [here](https://code-of-conduct.freecodecamp.org).

> [!NOTE]
> As a moderator we would add you to one or more teams on GitHub, our community forum(s) & chat servers. If you are missing access on a platform that you would like to moderate please [reach out to a staff member](/FAQ?id=additional-assistance).

## Moderating GitHub

Moderators have two primary responsibilities on GitHub:

1. Triaging and responding to issues
2. Reviewing and merging pull requests (a.k.a QA).

### Moderating GitHub Issues

We use our main [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) repo as a common issue tracker for all of our repositories. We get new issues every day, all of which need to be triaged, labeled and addressed. This is also a great place to start helping with open-source codebase contributions.

#### Issue Triage

[Triaging](https://en.wikipedia.org/wiki/Triage) is a process of prioritizing attention to each new issue report. We have an extensive list of labels that we use to mark each issue's priority, category, status, and scope.

You can help us organize and triage the issue reports by applying labels from [this list](https://github.com/freeCodeCamp/freeCodeCamp/labels). Usually, a description is available alongside the label explaining its meaning.

Please pay special attention to the labels `"help wanted"` and `"first timers only"`. These are to be added to threads that you think can be opened up to potential contributors for making a pull request.

A `"first timer only"` label should be applied to a trivial issue (ex. a typo fix) and should include additional information. You can use this [reply template](/moderator-handbook?id=first-timer-only-issues) for triage.

#### Closing Stale, Outdated, Inactive Issues and Pull Requests

- Stale issues or PRs are those that have not seen any activity from the author for 21 days (3 weeks from the last activity), but only after a moderator has requested more information/changes.

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label etc.

- If the contributor asks for additional assistance or even time, the above can be relaxed and revisited after a response is given. In any case, the mods should use their best judgment to resolve the outstanding PR's status.

> [!TIP]
> We recommend you use this list of standard [reply templates](https://contribute.freecodecamp.org/#/moderator-handbook?id=reply-templates) while triaging issues.

### Moderating Pull Requests

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp's repository. We must perform Quality Assurance (QA) on pull requests before we decide whether to merge them, request changes, or close them.

#### Types of Pull Requests

1. **Challenge Instruction Edits**

   These are changes to the text of challenges - the Description, Instructions, or Test Text.

   You can also review these right on GitHub and decide whether to merge them. We need to be a bit more careful about these because millions of people will encounter this text as they work through the freeCodeCamp curriculum. Does the pull request make the text more clear without making it much longer? Are the edits relevant and not overly pedantic? Remember that our goal is for challenges to be as clear and as short as possible. They aren't the place for obscure details. Contributors may try to add links to resources to the challenges.

   You can close invalid pull requests and reply to them with these [reply templates](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

   If the change looks good, please ensure to leave an approval with a "LGTM" comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

2. **Challenge Code Edits**

   These are changes to the code in a challenge - the Challenge Seed, Challenge Solution, and Test Strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution, and the new code doesn't introduce any errors.

   Some contributors may try to add additional tests to cover pedantic corner-cases. We need to be careful to not make the challenge too complicated. These challenges and their tests should be as simple and intuitive as possible. Aside from the algorithm challenges and interview prep section, learners should be able to solve each challenge within about 2 minutes.

   You can close invalid pull requests and reply to them with these [reply templates](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

   If the change looks good, please ensure to leave an approval with a "LGTM" comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

3. **Platform Changes**

   These code edits change the functionality of the freeCodeCamp platform itself.

   Sometimes contributors try to make changes without much explanation, but for code changes, we need to make sure there's a genuine need for the change. These pull requests should reference an existing GitHub issue where the reasons for the change are discussed. Then you can open the pull request on your computer and test them out locally.

   After you've done so, if the changes look good, don't merge them quite yet. You can comment on the pull request saying "LGTM", then mention **"@freeCodeCamp/dev-team"** so they can take a final look.

4. **Automated PRs (Dependabot)**

   Some PRs are automated dependency updates made via an integration. You should not merge or approve these PRs. One of the dev-team members will take care of reviewing and merging such automated PRs.

#### How to review, merge or close pull requests

##### Assign yourself to a pull request:

First of all, when you choose a pull request to review, you should assign yourself to it. You can do this by clicking the "assign yourself" link below the "assignees" part on the right-hand column of GitHub's interface.

Depending on the type of pull request it is, follow the corresponding rules listed previously.

##### Ensure the CI checks are passing:

Before merging any pull request, make sure that GitHub is reporting all checks to be passing (green check marks) on the pull requests. If you see any of the checks failing, please investigate and clarify the root cause. Is the change being made breaking our tests? Will the site build correctly if the PR is merged? These checks are critical for the stability of the platform.

> [!WARNING]
> Merging a PR that fails CI/CD checks can cause difficulties for all stakeholders, including the dev-team and contributors.

##### Handling merge conflicts:

Sometimes there will be a Merge Conflict.

This means that another pull request has made a change to that same part of that same file. GitHub has a tool for addressing these merge conflicts right on GitHub. You can try to address these conflicts. Just use your best judgment.

The pull request's changes will be on top, and the main branch's changes will be on the bottom. Sometimes there will be redundant information in there that can be deleted. Before you finish, be sure to delete the `<<<<<<`, `======`, and `>>>>>>` that Git adds to indicate areas of conflict.

If you are uncertain, please ask one of the fellow moderators or the dev-team for assistance.

##### Merging a valid pull request:

If the pull request looks ready to merge (and doesn't require additional approvals - remember we require at least two), you can go ahead and merge it. Be sure to use the default **"Squash and Merge"** option. This will squash all the pull requests commits down into a single commit, making the Git history much easier to read.

> You should then comment on the pull request, thanking the contributor in your own personal way.

If the pull request author is a "first-time contributor" you should also congratulate them on their first merged pull request to the repository. You can look at the upper right-hand corner of the PR's body to determine a first-time contributor. It will show `First-time contributor` as shown below:

<details>
   <summary>
      First time contributor badge on pull requests (screenshot)
   </summary>
   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="First time contributor badge on pull requests">
</details>

If the pull request doesn't look ready to merge, you can politely reply telling the author what they should do to get it ready. Hopefully, they will reply and get their pull request closer to ready.

If you need a second opinion on a pull request, go ahead and leave your comments on the pull request, then add the "discussing" label to the pull request.

##### Closing an invalid pull request:

Often, a pull request will be low effort. You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "made changes" or "Update index.md".

There are also situations where the contributor is trying to add a link to their website, include a library they created, or have a frivolous edit that doesn't help anyone but themselves.

You can close invalid pull requests and reply to them with these [reply templates](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

#### Other guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [code of conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderating the Forum

As a Moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Deleting forum posts

Forum moderators can delete user's posts. You should only do this for the following instances:

1. Someone has posted a pornographic or graphically violent image.
2. Someone has posted a link or code that is malicious in nature and could harm other campers who click on it.
3. Someone has flooded a thread with lots of spam messages.

### Dealing with spam

For the first spam post of a user, send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the Code of Conduct. Check the box in the private message indicating that your message is a "formal warning."

You can ask questions and report incidents in the [staff forum section](https://forum.freecodecamp.com/c/staff).

### Dealing with off-topic conversations

Posts or topics that seem to be in the wrong place can be re-categorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the Staff category, and tag another moderator if you want them to review your moderating actions.

### Underage Users

Our [Terms of Service](https://www.freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the below message and delete their forum account (if deletion is not available, suspending the account is sufficient).

**Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp account as well.**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per Terms of Service

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

## Moderating Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted, was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderating Chat

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

1. **Make sure the user intended to violate the Code of Conduct.**

   Not all violations of the CoC were intended as such. A new camper might post a large amount of code for help, unaware that this can be considered spamming. In these cases, you can just ask them to paste their code with services like CodePen or Pastebin.

2. **If the camper clearly and intentionally violates the Code of Conduct, the moderator will proceed as follows:**

   Kick or mute the offending person from the chat room. To kick or mute someone, left-click on their profile picture, select the three dots, and select "Remove from room" to kick or "Mute user" to prevent them from sending messages. Then report a short summary of the event in the #mod-log channel. Here's an example of what such a summary might look like:

   ```
   Kicked: _@username_
   Reason(s): _Spamming, trolling_
   Evidence: _One or more links to the offending message(s)_
   ```

3. **Creating a Private Discussion**

   There may be situations where you need to address a concern with a camper privately. This should not be done through DMs, which can lead to situations where you claim one thing and the camper claims another. Instead, use the bot's functionality to create a private discussion:

   - Call the `!fCC private username` command, where `username` is the camper's chat username.
   - The bot will create a new channel, and add the mentioned camper and all moderators with the `Your Friendly Moderator` role. While all moderators are added to the channel for transparency, the moderator who calls this command should be the only one to interact with the camper unless they request assistance.
   - When the conversation is complete, call the `!fCC close` command _in the private channel_ to have the bot close and delete that channel.

4. **Deleting Messages**

   Moderators can delete messages on our chat server. They should only exercise this ability in four very specific situations:

   - Someone has posted a pornographic or graphically violent image.

   - Someone has posted a link or code that is malicious in nature and could harm other campers who click on it.

   - Someone has flooded the chat with lots of spam messages to such an extreme extent (usually involving bots) to render chat completely unusable.

   - Someone has posted an advertisement and/or a self-promoting message/image (social media).

   In all other situations - even situations where the code of conduct is violated - moderators should not delete the messages as they are important historic records. When you do delete a message, make sure you take a screenshot of it first! The screenshot can be logged in the #mod-log channel.

   > [!NOTE]
   > If the message contains material that would be illegal to take a screenshot of, copy the message link instead - provide that message link to @raisedadead to forward to Discord's Trust and Safety team.

5. **Don’t use @all or @here**

   Don’t use @all or @here under any circumstances! Every single person in that chat room will get a notification. In some cases, tens of
   thousands of people.

   Instead, if you want people to see an announcement, you can pin it to the channel to allow everyone to read it.

6. **Don’t threaten to take action**

   If a camper breaks the code of conduct, don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `private` command. No one else in that channel needs to know that you banned/suspended the person. If a violation was clearly unintended and doesn't warrant a suspension or private conversation, make the offending camper aware of his / her actions without making it come across as a warning. For example:

   - Camper posts a wall of code to request help:

     Moderator: @username Please use CodePen or Pastebin when posting large amounts of code.

   - Or if you really have to explain why:

     Moderator: @username Please use CodePen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our Code of Conduct.

   - For mild and unintentional violations of the code of conduct:

     Moderator: This is a friendly reminder for everyone to follow the code of conduct: https://code-of-conduct.freecodecamp.org/

7. **Don’t brag about being a moderator**

   Do not see yourself as above the community. You are the community. And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers.

   If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

8. **Don’t contradict other moderators**

   If you disagree with a moderator's action, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in `#mod-chat` and convince the moderator that they themselves should reverse their ban or change their point of view.

   Remember: we’re all on the same team. We want to dignify the role of moderators and present a unified front.

9. **Talk with other moderators**

   We have a room for moderators only. Use it! If you feel uncomfortable with handling a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team, and we value every team member's input! Even if you totally disagree with anything in these guidelines or the Code of Conduct!

10. **Temporarily inactive**

    If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the `#mod-chat` channel. This is so we know if we can count on you to be regularly active on the server or not.

## How to become a moderator

Suppose you are helping people in the community consistently over time. In that case, our Moderator Team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our Moderator Teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), and chat etc.

> [!NOTE]
> For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
>
> This is required for us to be able to give you write access to some of our repositories.

## How we retire inactive moderators

Please note that we will frequently remove mods whom we think are inactive. When we do this, we will send the following message:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.
```

## How our Contributors room works

Anyone is welcome in the [Contributors room on our chat server](https://chat.freecodecamp.org/channel/contributors). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an `@username`. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Dealing with solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Dealing with (mental) health inquiries

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice other than pointing the user in the direction of professional help!

If this happens on our chat server: Create a private channel for the user and the mod team. This can be done with the bot's `private` command.

- The user is guaranteed some privacy
- Public chat is no longer disrupted
- Other team members can pitch in, should you be uncomfortable dealing with the situation yourself

Helpful URLs:

http://www.suicide.org/international-suicide-hotlines.html

## A note on free speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech. So if someone defends something in the name of "free speech", feel free to send it to them.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!

## Reply Templates

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues and pull requests.

> You can make your own with GitHub's built-in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

### Thank you

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Build Error

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](https://contribute.freecodecamp.org/#/how-to-work-on-coding-challenges?id=testing-challenges) for instructions on running the CI build locally. ✅
```

### Syncing Fork

> When PR is not up to date with the `main` branch.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).
```

### Closing invalid pull requests

> When PR is invalid.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> When PR adds links to external resources.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

### Closing Invalid Issues

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### First Timer Only Issues

> When an issue is deemed to be eligible for first time code contributors.

```markdown
Thanks for opening this issue.

This looks something that can be fixed by "first time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in [our chat room](https://chat.freecodecamp.org/channel/contributors) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing, our moderators will guide you through this.

Sometimes we may get more than one pull requests. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
