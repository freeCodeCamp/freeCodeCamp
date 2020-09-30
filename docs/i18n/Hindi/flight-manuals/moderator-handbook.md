# The official freeCodeCamp Moderator Handbook.

This will help you moderate different places in our community, including:

- GitHub issues & pull requests
- The forum, chat rooms, Facebook groups, and other online meeting places
- In-person events like study groups, hackathons, and conferences

**All freeCodeCamp Moderators are community-wide moderators. That means that we trust you to oversee any of these places.**

This said, you can serve as a moderator in whichever places are of the most interest to you. Some moderators just help out on GitHub. Others just help out on the forum. Some moderators are active everywhere.

The bottom line is that we want you to enjoy being a moderator, and invest your scarce time in places that are of interest to you.

> [!NOTE] "With great power comes great responsibility." - Uncle Ben

As a moderator, temperament is more important than technical skill.

Listen. Be Helpful. Don't abuse your power.

freeCodeCamp is an inclusive community, and we need to keep it that way.

We have a single code of conduct that governs our entire community. The fewer the rules, the easier they are to remember. You can read those rules and commit them to memory [here](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderators have the ability to close issues and accept or close pull requests.

Moderators have two primary responsibilities regarding GitHub:

1. QA'ing and merging pull requests
2. Evaluating and responding to issues

## Moderating Pull Requests

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp's repository. It's important that we perform Quality Assurance (QA) on pull requests before we decide whether to merge them or close them.

### Types of Pull Requests

1. **Challenge Instruction Edits** These are changes to the text of challenges - the Description, Instructions, or Test Text. You can also review these right on GitHub and decide whether to merge them. We need to be a bit more careful about these, because millions of people will encounter this text as they work through the freeCodeCamp curriculum. Does the pull request make the text more clear without making it much longer? Are the edits relevant and not overly pedantic? Remember that our goal is for challenges to be as clear and as short as possible. They aren't the place for obscure details. Also, contributors may try to add links to resources to the challenges. You can close these pull requests and reply to them with this:

   > Thank you for your pull request.
   > 
   > I am closing this pull request. Please add links and other details to the challenge's corresponding guide article instead.
   > 
   > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you, and happy coding.

2. **Challenge Code Edits** These are changes to the code in a challenge - the Challenge Seed, Challenge Solution, and Test Strings. These pull requests need to be pulled down from GitHub and tested on your local computer to make sure the challenge tests can still be passed with the current solution, and the new code doesn't introduce any errors. Some contributors may try to add additional tests to cover pedantic corner-cases. We need to be careful to not make the challenge too complicated. These challenges and their tests should be as simple and intuitive as possible. Aside from the algorithm challenges and interview prep section, learners should be able to solve each challenge within about 2 minutes.

3. **Codebase Changes** These code edits change the functionality of the freeCodeCamp platform itself. Sometimes contributors try to make changes without much explanation, but for code changes we need to make sure there's a genuine need for the change. So these pull requests should reference an existing GitHub issue where the reasons for the change are discussed. Then you can open the pull request on your computer and test them out locally. After you've done so, if the changes look good, don't merge them quite yet. You can comment on the pull request saying "LGTM", then mention @raisedadead so he can take a final look.

### How to merge or close pull requests

First of all, when you choose a pull request to QA, you should assign yourself to it. You can do this by clicking the "assign yourself" link below the "assignees" part on the right hand column of GitHub's interface.

Depending on the type of pull request it is, follow the corresponding rules listed above.

Before merging any pull request, make sure that GitHub has green checkmarks for everything. If there are any X's, investigate them first and figure out how to get them turned into green checkmarks first.

Sometimes there will be a Merge Conflict. This means that another pull request has made a change to that exact same part of that same file. GitHub has a tool for addressing these merge conflicts right on GitHub. You can try to address these conflicts. Just use your best judgement. The pull request's changes will be on top, and the Master branch's changes will be on bottom. Sometimes there will be redundant information in there that can be deleted. Before you finish, be sure to delete the `<<<<<<`, `======`, and `>>>>>>` that Git adds to indicate areas of conflict.

If the pull request looks ready to merge (and doesn't require approval from @raisedadead), you can go ahead and merge it. Be sure to use the default "Squash and Merge" functionality on GitHub. This will squash all the pull requests commits down into a single commit, which makes the Git history much easier to read.

You should then comment on the pull request, thanking the contributor in your own personal way.

If the author of the pull request is a "first time contributor" you should also congratulate them on their first merged pull request to the repository. You can look at the upper right-hand corner of the PR's body to determine a first-time contributor.  It will show `First-time contributor` as shown below:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

If the pull request doesn't look ready to merge you can politely reply telling the author what they should do to get it ready. Hopefully they will reply and get their pull request closer to ready.

Often, a pull request will be obviously low effort. You can often tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template, or used a generic pull request title like "made changes" or "Update index.md".

There are also situations where the contributor is trying to add a link to their own website, or include a library they themselves created, or has a frivolous edit that doesn't serve to help anyone but themselves.

In both of these situations, you should go ahead and close their pull request and reply with this standard message:

> Thank you for opening this pull request.
> 
> This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.
> 
> Thank you and happy coding.

If you need a second opinion on a pull request, go ahead and leave your comments on the pull request, then add the "discussing" label to the pull request.

## Moderating GitHub Issues

freeCodeCamp is an active open source project. We get new issues every day, all of which need to be triaged and labeled.

### Types of GitHub Issues

1. **Code Help Requests**, which people have mistakenly created GitHub issues for. If someone is asking for help, paste the following message, then close the issue.

   > Thank you for reporting this issue.
   > 
   > This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the \*\*"Help"\*\* button on the challenge on freeCodeCamp, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.
   > 
   > If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened. 
   > 
   > Thank you and happy coding.

2. **Bug or Clarification issues** Try to reproduce the bug yourself if you can. If not, ask them for the steps to reproduce the bug, and whether they have any screenshots, videos, or additional details that can help you reproduce the issue. Once you can reproduce the issue - or at least confirm it's a legit issue - label it `confirmed`. Then:

- If it's a simple change to an existing challenge, label as `first timers only`, otherwise label as `help wanted`. Use other labels as appropriate.
- If the issue is more significant, flag as `bug`. &nbsp; If there is any ambiguity as to the proper course of action on an issue, feel free to tag @raisedadead on the issue get his opinion on it, then add the `Discussing` label.

3. **Duplicate Issues** If an issue is the same as another reported issue, the prior reported issue should take precedence. Flag as `Duplicate`, paste the following message replacing `#XXXXX` with the issue number, then close the issue.

   > Thank you for reporting this issue.
   > 
   > This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so I am closing it as a duplicate.
   > 
   > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you and happy coding.

4. **Fixed in staging** Some problems may have already been fixed in staging, but don't have a GitHub issue associated with them. If this is the case, you can paste the following message, close the issue, and add a `status: resolved/shipping` label:

   > Thank you for reporting this issue.
   > 
   > This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, I'm closing this issue.
   > 
   > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you and happy coding.

### Closing Stale, Outdated, Inactive Issues and Pull Requests

- Stale Issues or PRs are those that have not seen any activity from the OP for 21 days (3 weeks from the last activity), but only after a moderator has requested more information/changes.  These can be closed in an automated/bot script or by the moderators themselves.

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label etc.

- If the OP asks for additional assistance or even time, the above can be relaxed and revisited after a response is given. In any case the mods should use their best judgement to resolve the outstanding PR's status.

### Other guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be QA'd by another moderator, just like with any other PR.

If you notice anyone breaking the [code of conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email dev@freecodecamp.org with a link to the offending pull request and we can consider banning them from freeCodeCamp's GitHub organization entirely.

# Moderating the Forum

As a Moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the smallest kindness may trigger a cascade of good deeds.

### Deleting forum posts

Forum moderators have the ability to delete user's posts. You should only do this for the following instances:

1. Someone has posted a pornographic or graphically violent image.
2. Someone has posted a link or code that is malicious in nature, and could harm other campers who click on it.
3. Someone has flooded a thread with lots of spam messages.

### Dealing with spam

For the first spam post of a user, send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then follow the process above. Quietly block the user from posting (using the silence option on the User Admin panel), then send a warning with the Code of Conduct. Check the box in the private message indicating that your message is a "formal warning."

You can ask questions and report incidents in the in the [staff forum section](https://forum.freecodecamp.com/c/staff).

### Dealing with off-topic conversations

Posts or topics that seems to be in the wrong place can be re-categorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the Staff category, and tag another moderator if you want them to review your moderating actions.

### Underage Users

Our Terms of Service require that freeCodeCamp users be at least 13 years of age. In the event that a user reveals that they are under the age of 13, send them the below message and delete their forum account (if deletion is not available, suspending the account is sufficient). Then email [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) or [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) to delete the user's freeCodeCamp account as well.

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per Terms of Service

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

# Moderating Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. In these cases, their post should be deleted, but the person who posted it doesn't necessarily need to be banned. By getting their post deleted, they will hopefully come to understand that what they posted was inappropriate.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language, then you should strongly consider blocking the member from the Facebook group.

# Moderating Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on Discord:

1. **Make sure it was intended to violate the Code of Conduct.** Not all violations of the CoC were intended as such. A new camper might post a large amount of code for help, unaware that this can be considered spamming. In these cases, you can just ask them to paste their code with services like Codepen or Pastebin.

2. **If the camper clearly violates the Code of Conduct, the moderator will proceed as follows:**

- Suspend the offending camper, but don't warn or threaten them. Instead, quietly give them the Suspended role on Discord, then send them the following message:

```
This is a standard message notifying you that I had to temporarily suspend you from talking on the freeCodeCamp Discord server.

I am a moderator acting on behalf of our open source community. I can consider removing your suspension, but I need you to take the following 3 steps first:

1. Read our Code of Conduct: https://code-of-conduct.freecodecamp.org/
2. Message me back confirming that you have finished reading it.
3. Explain to me why you think I suspended you, and why I should remove your suspension.
```

- Report a short summary of the event and how they responded to it in the #admin channel. Here's an example of what such a summary might look like:

```
Suspended: _@username_
Reason(s): _Spamming, trolling_
Evidence: _One or more links to the offending message(s)_
CoC: _Sent_
```

- A report for removing a suspension should look like:

```
I’ve removed the suspension from ` @username `. I sent them the Code of Conduct. They just today realized they were suspended and apologized for what they did.
```

- Based on the offenders reply, the moderator will decide whether to remove the suspension from the offending camper. If they seem respectful and apologetic, the moderator can remove the suspension. As a matter of policy, moderators will be polite during this process, no matter how poorly the offending camper has behaved. If they aren't respectful or unwilling to accept the CoC, the suspension should be followed with a ban from the Discord server. Use the same summary as above, but replace "Suspended:" with "Banned:".

3. **How to ban and/or unban**

- In order to ban someone, right click on their username/profile picture and select "Ban <username>". You will be given the option to delete their previous messages - select "Don't delete any", as the messages should remain present as a historic record.
- If you decide to ban someone, it means they're unwilling to abide to our Code of Conduct. Therefore unbanning a Camper should rarely occur. However, if the need arises, you can do so by clicking on the server name, choosing "Server Settings", choosing "Bans", selecting the user you wish to unban, and clicking "Revoke Ban".

Discord Bans are global - you cannot ban a user from a specific channel, only from the entire server.

4. **Deleting messages** Moderators have the ability to delete messages on Discord. They should only exercise this ability in four very specific situations:

- Someone has posted a pornographic or graphically violent image.
- Someone has posted a link or code that is malicious in nature, and could harm other campers who click on it.
- Someone has flooded the chat with lots of spam messages to such an extreme extent (usually involving bots) as to render chat completely unusable.
- Someone has posted advertisement and / or a self-promoting message / image (social media).

In all other situations - even situations where the code of conduct is violated - Moderators should not delete the message as these are an important historic record. When you do delete a message, make sure you take a screenshot of it first! The screenshot can be logged in the #mod-log channel, but for the #activity-log it is sufficient to say the evidence was "removed due to sensitive content". Note: If the message contains material that would be illegal to take a screenshot of, copy the message link instead - provide that message link to @raisedadead to forward to Discord's Trust and Safety team.

5. **Don’t use @everyone or @here** Don’t use @everyone or @here under any circumstances! Every single person in that chat room will get a notification. In some cases, tens of thousands of people. Instead, if you want people to see an announcement, you can pin it to the channel to allow everyone to read it.

6. **Don’t threaten to ban or suspend** If a camper is breaking the code of conduct, don’t threaten to ban or suspend them, and never warn them in public. Instead, talk to them privately, or send them a DM and issue a suspension (per the above protocol). No one else in that channel needs to know that you banned / suspended the person - campers can view the summary in the #activity-log channel if they want to keep up on that information. If a violation was clearly unintended and doesn't warrant a suspension or private conversation, make the offending camper aware of his / her actions without making it come across as a warning. For example:

- Camper posts a wall of code to request help

  Moderator: @username Please use Codepen or Pastebin when posting large amounts of code.

- Or if you really have to explain why:

  Moderator: @username Please use Codepen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our Code of Conduct.

- For mild and unintentional violations of the code of conduct

  Moderator: This is a friendly reminder for everyone to follow the code of conduct: https://code-of-conduct.freecodecamp.org/

7. **Don’t brag about being a moderator** Do not see yourself as above the community. You are the community. And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers. If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

8. **Don’t contradict other moderators** If you disagree with the action of a moderator, talk with them in private or bring it up in the #mod-chat channel. Never override a ban, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in mod-chat and convince the moderator that they themselves should reverse their ban or change their point of view. Remember: we’re all on the same team. We want to dignify the role of moderators and present a unified front.

9. **Talk with other moderators** We have a room for moderators only. Use it! If you feel uncomfortable with how to handle a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team and we value the input of every team member! Even if you totally disagree with anything in these guidelines or the Code of Conduct!

10. **Temporarily inactive** If you're not going to be active as a Moderator for a while due to vacation, illness or any other reason, make sure to let the others know in the #mod-chat channel. This is so we know if we can count on you to be regularly active in the server or not.

# How to become a moderator

If you are helping people in the community consistently over time, our Moderator Team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our Moderator Teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **For GitHub:** After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation. This is required for us to be able to give you write access on some of our repositories.

# How we retire inactive moderators

Please note that we will frequently remove mods whom we think are inactive. When we do this we will send the following message:

> This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

> If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.

# How our Contributors room works

Anyone is welcome in the [Contributors room on our Discord](https://discord.gg/KVUmVXA). It is the designated chat room for moderators and other campers who are contributing to our community in any number of ways, including through study groups.

Our assumption is that contributors will read anything in this room that directly mentions them with an `@username`. Everything else is optional. But feel free to read anything anyone posts in there and interact.

# Dealing with solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp in some way. Once you realize that this is what they're after, please stop talking to them and tell them to email quincy@freecodecamp.org. He gets proposals like this all the time and is in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

# Dealing with (mental) health inquiries

You may come across situations where users are seeking medical advice or are dealing with mental health issues and are looking for support. As a matter of policy, you should avoid talking privately about these matters. Should the situation at some point reflect back to fCC, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help. As difficult as it sometimes can be, avoid giving any tips or advice other than pointing the user in the direction of professional help!

If this happens on Discord: Suspend the user. This is not to punish them! Suspending a user will create a private channel that's only accessible by the user and the team. This will benefit both the user and fCC in several ways:

- The user is guaranteed some privacy
- Public chat is no longer disrupted
- Other team members can pitch in, should you be uncomfortable dealing with the situation yourself

> [!NOTE] Suspending a user automatically gives them a message about reading our Code of Conduct. Make sure you inform the user that you Suspended them to give them some privacy and that they're not being punished. This is very important! We absolutely want to avoid giving users the idea that they're being punished for reaching out to get help!

If you believe the user is capable of rejoining the community, right click on the private channel and copy the ID. Put the following message in #mod-log:

> Reference medical advice: <channel ID> <username>

After that, you can remove the Suspension from the user as you normally do.

Helpful URLs:

http://www.suicide.org/international-suicide-hotlines.html

# A note on free speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic perfectly summarizes most communities' thoughts on free speech. So if someone defends something they're saying as "free speech" feel free to send it to them.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!
