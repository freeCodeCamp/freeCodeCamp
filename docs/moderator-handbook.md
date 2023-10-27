# The Official freeCodeCamp Moderator Handbook

This handbook will help you moderate different places in our community. This covers conversations and interactions in issues and pull request threads on GitHub, the community forum, the chat rooms, and other official communities that we foster.

> [!NOTE]
> All freeCodeCamp moderators are community-wide moderators. That means we trust you to oversee any of these places.

You can serve as a moderator on any of the platforms that are of the most interest to you. Some moderators just help out on GitHub, while others just help out on the forum. Some moderators are active everywhere.

The bottom line is that we want you to enjoy being a moderator, and invest your scarce time in places that are of interest to you.

> "With great power comes great responsibility." - Uncle Ben

As a moderator, temperament is more important than technical skill.

Listen. Be helpful. Don't abuse your power.

freeCodeCamp is an inclusive community, and we need to keep it that way.

We have a single [Code of Conduct](https://code-of-conduct.freecodecamp.org) that governs our entire community. The fewer the rules, the easier they are to remember. You can read those rules and commit them to memory [here](https://code-of-conduct.freecodecamp.org).

> [!NOTE]
> As a moderator, we would add you to one or more teams on GitHub, our community forums & chat servers. If you are missing access to a platform that you would like to moderate, please [reach out to a staff member](FAQ.md#additional-assistance).

## Moderating GitHub

Moderators have two primary responsibilities on GitHub:

1. Triaging and responding to issues.
2. Reviewing and merging pull requests (aka QA).

### Moderating GitHub Issues

We use our main [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) repository as a common issue tracker for all of our repositories. We get new issues every day, all of which need to be triaged, labeled, and addressed. This is also a great place to start helping with open-source codebase contributions.

#### Issue Triage

[Triaging](https://en.wikipedia.org/wiki/Triage) is a process of prioritizing attention to each new issue report. We have an extensive list of labels that we use to mark each issue's priority, category, status, and scope.

You can help us organize and triage the issue reports by applying labels from [this list](https://github.com/freeCodeCamp/freeCodeCamp/labels). Usually, a description is available alongside the label explaining its meaning.

Please pay special attention to the labels `"help wanted"` and `"first timers only"`. These are to be added to threads that you think can be opened up to potential contributors for making a pull request.

For triaging a trivial issue such as a typo fix, it is recommended to apply a "first timers only" label along with additional information. You can utilize the [reply template](reply-templates.md#first-timer-only-issues) provided for this purpose.

#### Closing Stale, Outdated, Inactive Issues and Pull Requests

- Stale issues or PRs are those that have not seen any activity from the author for 21 days (3 weeks from the last activity), but only after a moderator has requested more information/changes.

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label, etc.

- If the contributor asks for additional assistance or even time, the above can be relaxed and revisited after a response is given. In any case, the mods should use their best judgment to resolve the outstanding PR's status.

> [!TIP]
> We recommend you use this list of standard [reply templates](reply-templates.md) while triaging issues.

### Moderating Pull Requests

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp's repository. We must perform Quality Assurance (QA) on pull requests before we decide whether to merge them, request changes, or close them.

#### Types of Pull Requests

1. **Challenge instruction edits**

   These are changes to the text of challenges - the description, instructions, or test text.

   You can also review these right on GitHub and decide whether to merge them. We need to be a bit more careful about these because millions of people will encounter this text as they work through the freeCodeCamp curriculum. Does the pull request make the text more clear without making it much longer? Are the edits relevant and not overly pedantic? Remember that our goal is for challenges to be as clear and as short as possible. They aren't the place for obscure details. Contributors may try to add links to resources to the challenges.

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with a "LGTM" (Looks Good To Me) comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

2. **Challenge code edits**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   Some contributors may try to add additional tests to cover pedantic corner-cases. We need to be careful to not make the challenge too complicated. These challenges and their tests should be as simple and intuitive as possible. Aside from the algorithm challenges and interview prep section, learners should be able to solve each challenge within about 2 minutes.

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with an "LGTM" comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

3. **Platform changes**

   These code edits change the functionality of the freeCodeCamp platform itself.

   Sometimes contributors try to make changes without much explanation, but for code changes, we need to make sure there's a genuine need for the change. These pull requests should reference an existing GitHub issue where the reasons for the change are discussed. Then you can open the pull request on your computer and test them out locally.

   After you've done so, if the changes look good, don't merge them quite yet. You can comment on the pull request saying "LGTM", then mention **"@freeCodeCamp/dev-team"** so they can take a final look.

4. **Automated PRs (Dependabot)**

   Some PRs are automated dependency updates made via an integration. You should not merge or approve these PRs. One of the dev-team members will take care of reviewing and merging such automated PRs.

#### How to Review, Merge, or Close Pull Requests

##### Assign yourself to a Pull Request:

First of all, when you choose a pull request to review, you should assign yourself to it. You can do this by clicking the "assign yourself" link below the "assignees" part on the right-hand column of GitHub's interface.

Depending on the type of pull request it is, follow the corresponding rules listed previously.

##### Ensure the CI Checks are Passing:

Before merging any pull request, make sure that GitHub is reporting all checks to be passing (green check marks) on the pull requests. If you see any of the checks failing, please investigate and clarify the root cause. Is the change being made breaking our tests? Will the site build correctly if the PR is merged? These checks are critical for the stability of the platform.

> [!WARNING]
> Merging a PR that fails CI/CD checks can cause difficulties for all stakeholders, including the dev-team and contributors.

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

This means that another pull request has made a change to that same part of that same file. GitHub has a tool for addressing these merge conflicts right on GitHub. You can try to address these conflicts. Use your best judgment.

The pull request's changes will be on top, and the main branch's changes will be on the bottom. Sometimes there will be redundant information in there that can be deleted. Before you finish, be sure to delete the `<<<<<<`, `======`, and `>>>>>>` that Git adds to indicate areas of conflict.

If you are uncertain, please ask one of the fellow moderators or the dev-team for assistance.

##### Merging a Valid Pull Request:

If the pull request looks ready to merge (and doesn't require additional approvals - remember we require at least two), you can go ahead and merge it. Be sure to use the default **"Squash and Merge"** option. This will squash all the pull requests commits down into a single commit, making the Git history much easier to read.

> You should then comment on the pull request, thanking the contributor in your own personal way!

If the pull request author is a "first-time contributor" you should also congratulate them on their first merged pull request to the repository. You can look at the upper right-hand corner of the PR's body to determine a first-time contributor. It will show `First-time contributor` as shown below:

<details>
   <summary>
      First-time contributor badge on pull requests (screenshot)
   </summary>
   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="First time contributor badge on pull requests">
</details>

If the pull request doesn't look ready to merge, you can politely reply telling the author what they should do to get it ready. Hopefully, they will reply and get their pull request closer to ready.

If you need a second opinion on a pull request, go ahead and leave your comments on the pull request, then add the "discussing" label to the pull request.

##### Closing an Invalid Pull Request:

Often, a pull request will be low effort. You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "Made changes" or "Update index.md".

There are also situations where the contributor is trying to add a link to their website, include a library they created, or have a frivolous edit that doesn't help anyone but themselves.

You can close these invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

#### Filtering Pull Requests

To sort Pull Requests for Quality Assurance for quick access to PRs that are ready for review, do not have a merge conflict, are not blocked, and have all status checks in green, use the following link to apply the filters:

[Direct link with filter applied](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse)

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderating the Forum

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "This is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Deleting Forum Posts

Forum moderators can delete users' posts. You should only do this for the following instances:

1. Someone has posted a pornographic or graphically violent image.
2. Someone has posted a link or code that is malicious in nature and could harm other campers who click on it.
3. Someone has flooded a thread with a lot of spam messages.
4. An account has been created, beyond a reasonable doubt, to spam.

### Dealing with Spam

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Check the box in the private message indicating that your message is a "formal warning."

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Dealing with Off-Topic Conversations

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Dealing with Posted Solutions

If a user replies in a help thread for the freeCodeCamp curriculum with a solution, remove it and use the **Solution Instead of Help** canned reply (or a similar response in your own words).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it, and use the **Blurred Spoiler Solution** canned reply.

If a user creates a thread asking for feedback on a solution, move the thread to the feedback subforum and blur the solution, as necessary. If the user is only posting the solution to show it off, then unlist the thread and use the **Solutions Thread** canned reply.

### Underage Users

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then
**Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per our Terms of Service.

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp Terms of Service](https://freecodecamp.org/terms), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

### Moderating Via Cell Phone

Moderating the forum is possible via a cell phone but you may encounter some usage quirks. This is not an exhaustive list.

- When trying to include a "Canned reply" in a response, if the menu doesn't open (after clicking on the gear), click on the text area first then try it again.
- The moderator's 'wrench' is at the bottom of the view-port but if you click it and cannot see the "Select Posts" button because it has scrolled out of view, you may need to try to scroll to it, though sometimes that doesn't work in which case moving to a desktop/laptop monitor may be needed.
- Sometimes clicking on the three-dot menu below a post can hide the reply icon. Reload the page to get it back.

## Moderating Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderating Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

> [!NOTE]
> Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Make sure the user intended to violate the [Code of Conduct](https://code-of-conduct.freecodecamp.org).**

   Not all violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org) were intended as such. A new camper might post a large amount of code for help, unaware that this can be disruptive to the conversation. In these cases, you can just ask them to paste their code with services like CodePen or Pastebin.

2. **If the camper clearly and intentionally violates the [Code of Conduct](https://code-of-conduct.freecodecamp.org), the moderator will proceed as follows:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING]
   > The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creating a private discussion**

   There may be situations where you need to address a concern with a camper privately. This should not be done through DMs, which can lead to situations where you claim one thing and the camper claims another. Instead, use the bot's functionality to create a private discussion:

   - Call the `/private` command, where `target` is the camper you want to open a private channel with.
   - The bot will create a new channel, and add the mentioned camper and all moderators with the `Your Friendly Moderator` role. While all moderators are added to the channel for transparency, the moderator who calls this command should be the only one to interact with the camper unless they request assistance.
   - When the conversation is complete, click the `❌ Close` button _on the first message in the private channel_ to have the bot close and delete that channel.

4. **Deleting messages**

   Our moderation bot is configured to log deleted messages automatically in the `#mod-log` channel. If a message is not in line with our Code of Conduct, or otherwise not appropriate for our community, you are generally safe to delete it.

   Note that if the message contains content that violates Discord's terms of service, you'll want to report it via https://dis.gd/report **prior to** deleting it.

5. **Don’t threaten to take action**

   If a camper breaks the [Code of Conduct](https://code-of-conduct.freecodecamp.org), don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `/private` command, or use the bot's moderation commands.

   If a violation was clearly unintended and doesn't warrant moderation action or private conversation, make the offending camper aware of their actions without making it come across as a warning.

   For example:

   - Camper posts a wall of code to request help:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code.

   - Or if you really have to explain why:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our [Code of Conduct](https://code-of-conduct.freecodecamp.org).

   - For mild and unintentional violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org):

     Moderator: This is a friendly reminder for everyone to follow the [Code of Conduct](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Don’t brag about being a moderator**

   Do not see yourself as above the community. **You are the community.** And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers.

   If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

7. **Don’t contradict other moderators**

   If you disagree with a moderator's action, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in `#mod-chat` and convince the moderator that they themselves should reverse their ban or change their PoV (Point of View).

   _Remember: We’re all on the same team. We want to dignify the role of moderators and present a unified front._

8. **Talk with other moderators**

   We have a `#mod-chat` room for moderators only. Use it! If you feel uncomfortable with handling a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team, and we value every team member's input! Even if you totally disagree with anything in these guidelines or the [Code of Conduct](https://code-of-conduct.freecodecamp.org)!

9. **Temporarily inactive**

   If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the `#mod-chat` channel. This is so we know if we can count on you to be regularly active on the server or not.

## How to Become a Moderator

Suppose you are helping people in the community consistently over time. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE]
> For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
>
> This is required for us to be able to give you write access to some of our repositories.

## How Our Contributors Room Works

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Dealing with Solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Dealing with (Mental) Health Inquiries

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. This can be done with the bot's `private` command.

- The user is guaranteed some privacy.
- Public chat is no longer disrupted.
- Other team members can pitch in, should you feel uncomfortable dealing with the situation yourself.

Helpful URLs:

http://suicide.org/international-suicide-hotlines.html

## A Note on Free Speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!
