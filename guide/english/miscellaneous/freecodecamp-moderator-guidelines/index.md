---
title: Freecodecamp Moderator Guidelines
---
# The Pillars of Moderation

Above all else, remember that your purpose as a moderator is to serve our community:

*   Listen
*   Be Helpful
*   Don't abuse your power

# Moderating Gitter

Here's how moderators deal with violations of our <a href='https://www.freecodecamp.com/code-of-conduct' target='_blank' rel='nofollow'>Code of Conduct</a> on Gitter:

1.  Moderators will ban the offending person immediately.

2.  Moderators will then send them this message:

    > This is a standard message notifying you that I had to temporarily ban you from freeCodeCamp's chat rooms.
    > 
    > I am a moderator acting on behalf of our open source community. I can consider unbanning you, but I need you to do something first.
    > 
    > 1\. Read our <a href='[https://www.freecodecamp.com/code-of-conduct' target='_blank' rel='nofollow'>**`Code of Conduct`**</a>).  
    > 2\. Please confirm that you've read it.  
    > 3\. Explain to me why you think I banned you.

3.  Based on their reply, moderators will decide whether to unban the offending camper. If the offending camper hasn't been banned by that moderator before, and if they seem respectful and apologetic, the moderator can unban them. As a matter of policy, moderators will be polite during this process, no matter how poorly the offending camper has behaved.

4.  Moderators will type a short summary of the event and how they responded to it in the <a href='https://gitter.im/freeCodeCamp/admin' target='_blank' rel='nofollow'>admin room</a>. Here's an example of what such summaries might look like:

    > I banned ` `@username` ` for spamming and sent them the Code of Conduct. They said they were sorry and that they honestly didn't realize what they were doing was considered spamming. I unbanned them.
    > 
    > I've unbanned ` `@username` `. I sent them the Code of Conduct. They just today realized they were banned and apologized for what they did.
    > 
    > I've banned ` `@username` ` for harassment. They got nasty with me. I recommend we contact Gitter for a global ban.

In order to ban someone, type the following into the chat room:

> `/ban @username`

If they cooperate, you can later unban them with:

> `/unban @username`

This only works for that single room, so you may need to ban them more than one place.

If a camper continues to jump from room to room causing problems, moderators can request a global ban in the <a href='https://gitter.im/freecodecamp/admin' target='_blank' rel='nofollow'>admin room</a>.

### Deleting Gitter messages

Moderators have the ability to delete messages on Gitter. They should only exercise this ability in three very specific situations:

1.  Someone has posted a pornographic or graphically violent image.
2.  Someone has posted a link or code that is malicious in nature, and could harm other campers who click on it.
3.  Someone has flooded the chat with lots of spam messages to such an extreme extent (usually involving bots) as to render chat completely unusable.

In all other situations - even situations where the code of conduct is violated - Moderators should not delete the message as these are an important historic record.

### Don't use `@/all`

Don't use _`@/all`_ under any circumstances. Every single person in that chat room will get a notification. In some cases, tens of thousands of people.

Instead, if you want people to see an announcement, use a heading text size. You can do this by putting a `#` in front of your first sentence.

### Don't warn or threaten to ban

If someone is breaking the code of conduct, don't warn them or threaten to ban them. Instead, quietly ban them, then private message them and proceed according to the above protocol. No one else in the room needs to know that you banned the person.

### Don't brag about being a moderator

Do not see yourself as above the community. You are the community. And the community has trusted you to help protect something rare that we all share - a welcoming place for new developers.

If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they're doing nothing wrong. This is just human nature.

### Don't contradict other moderators

If you disagree with the action of a moderator, talk with them in private or bring it up in mod chat. Never override a ban. Instead, have a cool-headed discussion in mod-chat, and convince the moderator that they themselves should reverse their ban.

Remember: we're all on the same team. We want to dignify the role of moderators and present a unified front.

# Moderating GitHub

Moderators are volunteers who have the ability to close issues and accept or deny pull requests.

Moderators have two primary responsibilities regarding GitHub:

1.  Evaluating and responding to Issues
2.  QA'ing and Merging Pull Requests

### Evaluating and Responding to Issues

freeCodeCamp is an active open source project. We get dozens of issues each day, all of which need to be triaged and labeled.

There are several general classes of Issues:

1.  **Code Help Requests**, which are not appropriate for Issues.  
    If an issue is clearly someone asking for help, paste the following message, then close the issue.

    > Thank you for reporting this issue.
    > 
    > This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Help"** button on the challenge on freeCodeCamp, which will take you to the help chatroom for that specific challenge. You can also view our <a href='https://forum.freecodecamp.com/t/free-code-camp-official-chat-rooms/19390' target='_blank' rel='nofollow'>**full list of official chatrooms**</a>).
    > 
    > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you, and happy coding.

2.  **Bug or Clarification issues** Confirm the bug yourself if possible. Seek additional details as necessary, such as Steps to Reproduce. Once the issue has been reproduced - or at least deemed legitimate - label it `confirmed`. Then:

    *   If it's a simple change to an existing challenge, flag as `help wanted` and, optionally, as `first-timers-only`. Use other tags as appropriate.
    *   If the issue is more significant, flag as `bug`.
    *   <a href='https://forum.freecodecamp.com/t/free-code-camp-issue-labels/19556' target='_blank' rel='nofollow'>Label Usage Guide</a>  

        If there is any ambiguity as to the proper course of action on an issue, feel free to tag **`@freeCodeCamp/moderators`** to get opinions from other moderators. Flag as `Discussing`.
3.  **Duplicate Issues** If an issue is the same as another reported issue, the prior reported issue should take precedence. Flag as `Duplicate`, paste the following message replacing `#XXXXX` with the issue number, then close the issue.

    > Thank you for reporting this issue.
    > 
    > This is a standard message notifying you that this issue appears to be very similar to issue <span class="hashtag">#XXXXX</span>, so I am closing it as a duplicate.
    > 
    > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you, and happy coding.

4.  **Fixed in staging** Some issues have been fixed in staging, but don't have another issue on the same topic. Paste the following message, then close the issue:

    > Thank you for reporting this issue.
    > 
    > This is a standard message notifying you that this issue is present in production, but it has been fixed in staging. Because of that, I'm closing this issue. When staging will be pushed to production again, your issue will be resolved.
    > 
    > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you, and happy coding.

5.  **Bike Shedding** Bike Shedding is an example of <a href='https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality' target='_blank' rel='nofollow'>Parkinson's law of triviality</a>. Some issues are simply not worth fixing. If you believe an issue isn't worth the effort, flag as `bikeshedding`, paste and fill out the following message, then close the issue:

    > Thank you for reporting this issue.
    > 
    > _Give a short explanation of why this is bikeshedding, a form of <a href='https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality' target='_blank' rel='nofollow'>Parkinson's law of triviality</a>, so I'm closing it._
    > 
    > If you think I'm wrong in closing this issue, please reopen it and add further clarification. Thank you, and happy coding.

### Moderating Pull Requests

Pull Requests (PRs) are how contributors to freeCodeCamp submit changes to the repository for consideration. It's important that these PRs are properly formatted, and undergo thorough Quality Assurance Testing prior to being merged.

### Pull Request Requirements and Formatting

All PRs must meet the following requirements before they should be accepted:

1.  It must reference at least one open issue, and the body should also include `closes #XXXXX` for each issue number it addresses (replacing `#XXXXX` with the issue number)
2.  It must be against the **`staging`** branch
3.  It must be from a properly named non-staging branch, on the user's personal fork of freeCodeCamp
4.  The title should describe the change made
5.  Its title should NOT have an issue number in it
6.  Its body should give details about the change, as well as level of testing (i.e. untested, tested locally)
7.  _Related_ changes should be squashed to single commit. But _relevant or notable_ changes may have separate commits.
8.  Code must pass all tests and linting

If the PR does not meet one or more of these requirements, open a GitHub review specifying which of the 8 requirements is not yet met. New Contributors may be referred to the <a href='https://gitter.im/freeCodeCamp/Contributors' target='_blank' rel='nofollow'>Contributors</a> Chat room. At a moderator's discretion the issue may be closed.

### Quality Assurance (QA)

Assuming that the basic requirements for the PR are met, all PRs should undergo some level of QA testing. The most basic QA process is to check out the PR locally on your computer and test the changed functionality.

1.  Make sure you're able to reproduce the issue locally.
2.  Verify that the PR actually fixes the issue.
3.  You can reply to the issue with **"LGTM"**, which means "looks good to me".
4.  If you have any doubt as to whether the PR should be merged, let a second person QA it, and then they can merge it.
5.  If there's already an "LGTM" and you successfully QA the PR as well, you should merge it.

If there is any doubt about the functionality, you may mention **`@freeCodeCamp/moderators`** to get a second opinion.

### Special Requirements

PRs which change the underlying function of the site or make non-trivial changes to the UI or UX of the site should be approved by <a href='https://gitter.im/berkeleytrue' target='_blank' rel='nofollow'>@BerkeleyTrue</a> or <a href='https://gitter.im/quincylarson' target='_blank' rel='nofollow'>@QuincyLarson</a>. If you have any doubt, tag them in a comment and/or draw their attention to the PR via Gitter Chat.

### Other Rules Governing Moderators

Though you will have write access to freeCodeCamp's repository:

*   **you should never push code directly to the freeCodeCamp repository**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repo.
*   you should never accept your own PRs. They must be QA-ed by another moderator, just like with any other PR.

# Moderating the Forum

Moderating the forum follows the same principals as moderating Gitter. The following describes the slight variations, to account for the differences from Gitter on the Discourse platform.

Forum moderators are responsible for making our community an enjoyable place for anyone to learn and get help. Forum Moderators will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

### Deleting forum posts

Forum moderators have the ability to delete user's posts. You should only do this for the following instances:

1.  Someone has posted a pornographic or graphically violent image.
2.  Someone has posted a link or code that is malicious in nature, and could harm other campers who click on it.
3.  Someone has flooded a thread with lots of spam messages.

### Dealing with spam

For the first spam post of a user, send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then follow the process above. Quietly block user from posting, then send warning with Code of Conduct. Check the box in the private message indicating that your message is a "formal warning."

It is not necessary to use the Gitter admin room to report incidents on the forum. If you have questions, please ask in the <a href='https://forum.freecodecamp.com/c/staff' target='_blank' rel='nofollow'>staff</a> forum section.

### Dealing with off-topic conversations

Posts or topics that seems to be in the wrong place, can be re-categorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the Staff category, and tag another moderator if you want them to review your moderating actions.

# How to become a moderator

Have you been contributing to our community, and desire the additional power/responsibility that comes with being a moderator?

Gather evidence that shows your helpfulness on GitHub issues, and/or helping campers on Gitter and our forums, and PM it in Gitter to:

*   <a href='https://gitter.im/berkeleytrue' target='_blank' rel='nofollow'>@BerkeleyTrue</a>
*   <a href='https://gitter.im/codenonprofit' target='_blank' rel='nofollow'>@CodeNonprofit</a>
*   <a href='https://gitter.im/quincylarson' target='_blank' rel='nofollow'>@QuincyLarson</a>

Additional requirements:

*   You must enable Two Factor Authentication on your GitHub account.
*   Your GitHub profile should at least have your first name.
*   Your GitHub photo should feature your face.

If you are approved, we will add you to our <a href='https://github.com/orgs/freeCodeCamp/teams/moderators' target='_blank' rel='nofollow'>Moderator Team</a>.

# How we retire inactive moderators

Please note that we will frequently remove issue mods whom we think are inactive. When we do this we will send the following message:

> This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.
> 
> If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.

# How our Contributors room works

Anyone is welcome in the <a href='https://gitter.im/freecodecamp/contributors' target='_blank' rel='nofollow'>Contributors room</a>. It is the designated chat room for moderators and other campers who are contributing to our community in any number of ways, including through study groups.

Our assumption is that contributors will read anything in this room that directly mentions them with an `@username`, or is directed to `@/all`. Everything else is optional. But feel free to read anything anyone posts in there and interact.

# How to become a moderator on this forum

If you are already a moderator, you can request moderator status on this forum as well. Message [@michaelhenderson](/users/michaelhenderson) here on the forum and he will verify your Moderator status on GitHub, then grant you moderator status here.

# Dealing with solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp in some way. Once you realize that this is what they're after, please stop talking to them and tell them to talk directly with <a>Quincy Larson</a>. He get proposals like this literally every day and is in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

# Definitions

> The key words "MUST", "MUST NOT", "REQUIRED", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in <a href='https://www.ietf.org/rfc/rfc2119.txt' target='_blank' rel='nofollow'>**RFC 2119**</a>.