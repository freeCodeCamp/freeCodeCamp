# 公式 freeCodeCamp モデレーターハンドブック

このハンドブックは、私たちのコミュニティの様々な場所をモデレートするのに役立ちます。 This covers conversations and interactions in issues and pull request threads on GitHub, the community forum, the chat rooms, and other official communities that we foster.

> [!NOTE] すべての freeCodeCamp モデレーターは、コミュニティ全体のモデレーターです。 That means we trust you to oversee any of these places.

最も興味のあるプラットフォームのモデレーターになることができます。 GitHub を支援するモデレーターもいれば、フォーラムを支援するモデレーターもいます。 すべての場所においてご活躍いただくモデレーターもいます。

モデレーターであることを楽しんでください。 興味のある場所に皆さんの時間を投資してください。

> 「大いなる力には大いなる責任が伴う」 - ベンおじさん

モデレーターにとって、気質は技術的スキルよりも重要です。

聞きましょう。 Be helpful. 権力を乱用してはいけません。

freeCodeCamp は包括的なコミュニティであり、それを維持する必要があります。

We have a single [Code of Conduct](https://code-of-conduct.freecodecamp.org) that governs our entire community. ルールは少ないほど、覚えやすいものです。 [こちら](https://code-of-conduct.freecodecamp.org) にあるルールを読み、記憶に留めておいてください。

> [!NOTE] As a moderator, we would add you to one or more teams on GitHub, our community forums & chat servers. If you are missing access on a platform that you would like to moderate, please [reach out to a staff member](FAQ.md#additional-assistance).

## GitHub をモデレートする

モデレーターは、GitHub 上で 2 つの主要な責任を負います。

1. Triaging and responding to issues.
2. Reviewing and merging pull requests (aka QA).

### GitHub Issue をモデレートする

We use our main [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) repository as a common issue tracker for all of our repositories. We get new issues every day, all of which need to be triaged, labeled, and addressed. オープンソースコードベースの貢献を始めるのに最適な場所です。

#### Issue のトリアージ

[トリアージ](https://en.wikipedia.org/wiki/Triage) は、新しい Issue の各報告に対して優先順位を付けるプロセスです。 それぞれの Issue の優先順位、カテゴリ、ステータス、スコープにマークを付けるために使用する広範なラベルリストがあります。

[このリスト](https://github.com/freeCodeCamp/freeCodeCamp/labels) のラベルを使用して、Issue 報告を整理しトリアージすることができます。 通常、ラベルにはその説明書きがあります。

`"help wanted"` と `"first timers only"` のラベルに特に注意してください。 これらは、プルリクエストを行う潜在的なコントリビューターが入る可能性があるスレッドに追加されます。

For triaging a trivial issue such as a typo fix, it is recommended to apply a "first timers only" label along with additional information. You can utilize the [reply template](reply-templates.md#first-timer-only-issues) provided for this purpose.

#### 古く、期限切れで、不活発な Issue とプルリクエストをクローズする

- 古い Issue または 古い PR とは、作成者が過去 21 日間 (最後の活動から 3 週間) アクティビティを行っていないものを指しますが、具体的にはモデレーターが作成者に対して追加情報 / 変更を要求してから上記既定の日数を経過したものを指します。

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label, etc.

- コントリビューターから支援もしくは時間の追加要求があった場合、それに対する回答を返し、該当する Issue または PR を後日改めて確認することができます。 いずれの場合でも、モデレーターは、未解決の PR を解決するために最善の判断を下す必要があります。

> [!TIP] We recommend you use this list of standard [reply templates](reply-templates.md) while triaging issues.

### プルリクエストをモデレートする

プルリクエスト (PR) とは、コントリビューターが freeCodeCamp のリポジトリに変更を送信する方法です。 プルリクエストをマージするか、変更をリクエストするか、もしくはクローズするかを決定する前に、Quality Assurance (QA) を実行しなければなりません。

#### プルリクエストの種類

1. **Challenge instruction edits**

   These are changes to the text of challenges - the description, instructions, or test text.

   GitHub で確認し、マージするかどうかを決定することもできます。 しかし、これについては少し注意する必要があります。 なぜなら、freeCodeCamp カリキュラムを通して何百万人もの方がこのテキストを見るからです。 テキストは、プルリクエストにより、冗長になることなく明確になっていますか？ 編集内容は、過度に知識をひけらかすものではなく、関連性の高いものになっていますか？ 可能な限り明確かつ短文のチャレンジにすることが目標であることを忘れないでください。 曖昧であってはなりません。 コントリビューターが、チャレンジにリソースへのリンクを追加しようとする場合もあります。

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with a "LGTM" (Looks Good To Me) comment. プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

2. **Challenge code edits**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   コントリビューターの中には、衒学的で厄介なケースも網羅するために、追加テストを含めようとする人もいるかもしれません。 チャレンジがあまり複雑にならないように注意しなければなりません。 チャレンジとそのテストは可能な限りシンプルで直感的なものにします。 アルゴリズムチャレンジとインタビュー準備セクションは別として、学習者は約 2 分以内に各チャレンジを解決する必要があります。

   You can close invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with an "LGTM" comment. プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

3. **Platform changes**

   このコード編集により、freeCodeCamp プラットフォーム自体の機能を変更します。

   コントリビューターは、説明せずに変更しようとすることがありますが、コードの変更については、その変更が間違いなく必要であることを確認する必要があります。 説明の無いプルリクエストについては、変更理由が説明されている既存の GitHub の問題を参照する必要があります。 その後、コンピュータでプルリクエストをオープンし、ローカルでテストすることができます。

   上記完了後、正しく変更されていても、まだマージしないでください。 「LGTM」とプルリクエストにコメントを残し、**"@freeCodeCamp/dev-team"** と記述することで、開発チームが最終的な確認を行います。

4. **自動 PR (Dependabot)**

   一部の PR は、インテグレーションにより自動的に依存関係を更新します。 これらの PR をマージまたは承認してはなりません。 開発チームメンバーの 1 人が、このような自動化された PR のレビューとマージを行います。

#### How to Review, Merge, or Close Pull Requests

##### Assign yourself to a Pull Request:

まず最初に、レビューするプルリクエストを選択するときには、それを自分自身にアサインする必要があります。 GitHub インターフェースの右側の列にある「assignees」の下にある「assign yourself」リンクをクリックします。

プルリクエストの種類に応じて、対応する上述のルールに従ってください。

##### Ensure the CI Checks are Passing:

プルリクエストをマージする前に、GitHub で、プルリクエストのすべてのチェックが合格 (緑色のチェックマーク) となっていることを確認してください。 チェックが不合格の場合は、原因を調べて明確にしてください。 テストに不合格となるような変更ですか？ PR がマージされる場合、サイトは正しく構築されますか？ これらのチェックはプラットフォームの安定性に不可欠です。

> [!WARNING] CI/CD チェックが不合格の PR をマージすると、開発チームやコントリビューターを含むすべてのステークホルダーに問題を引き起こす可能性があります。

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

これは、別のプルリクエストがその同じファイルの同じ部分に変更を加えたことを意味します。 GitHub には、GitHub 上でこれらのマージ競合に対処するためのツールがあります。 皆さんはこれらの競合に対処することができます。 Use your best judgment.

プルリクエストの変更は一番上にあり、main ブランチの変更は一番下にあります。 次のような、削除可能な冗長な情報がある場合もあります。 終了する前に、Git が競合エリアを表すために追加する `<<<<<<`、`======` および `>>>>>>` を削除してください。

ご不明な点がある場合は、モデレーターまたは開発チームにお問い合わせください。

##### Merging a Valid Pull Request:

プルリクエストにマージの準備ができている (そして、少なくとも 2 人が承認済みで追加承認が必要ない) 場合、マージすることができます。 デフォルトの **"Squash and Merge"** オプションを使用してください。 これにより、すべてのプルリクエストがコミットされて単一のコミットにスカッシュされ、Git の履歴がより読みやすくなります。

> You should then comment on the pull request, thanking the contributor in your own personal way!

プルリクエストの作成者が、「新規コントリビューター」である場合、リポジトリに初めてマージされたプルリクエストに対しても祝意を伝える必要があります。 PR ボディの右上隅を見ると、新規コントリビューターであるかどうかを判断することができます。 以下のように、`First-time contributor` が表示されています。

<details>
   <summary>
      First-time contributor badge on pull requests (screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="プルリクエストの新規コントリビューターバッジ" />
</details>

プルリクエストにマージの準備ができていない場合は、準備するために何をすべきかを作成者に伝えるために丁寧に返信します。 上手くいけば、作成者から返信があり、プルリクエストの準備に近づけるでしょう。

プルリクエストにセカンドオピニオンが必要な場合は、プルリクエストにコメントを残してください。そして、プルリクエストに 「discussing」ラベルを追加します。

##### Closing an Invalid Pull Request:

大抵の場合、プルリクエストには手間がかかりません。 You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "Made changes" or "Update index.md".

コントリビューターが Web サイトへのリンクを追加しようとしたり、彼らが作成したライブラリを含めようとしたり、彼ら以外の誰にも役に立たない自由な編集をしようとする状況もあります。

You can close these invalid pull requests and reply to them with these [reply templates](reply-templates.md#closing-invalid-pull-requests).

#### Filtering Pull Requests

To sort Pull Requests for Quality Assurance for quick access to PRs that are ready for review, do not have a merge conflict, are not blocked, and have all status checks in green, use the following link to apply the filters:

[Direct link with filter applied](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse)

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## フォーラムをモデレートする

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Deleting Forum Posts

Forum moderators can delete users' posts. You should only do this for the following instances:

1. ポルノやグラフィカルに暴力的な画像を投稿している
2. 本質的に悪意のあるリンクやコードを投稿し、それをクリックする他のキャンパーに害を与える可能性がある
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

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then **Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

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

## Facebook をモデレートする

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderating Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

> [!NOTE] Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Make sure the user intended to violate the [Code of Conduct](https://code-of-conduct.freecodecamp.org).**

   Not all violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org) were intended as such. A new camper might post a large amount of code for help, unaware that this can be disruptive to the conversation. この場合、CodePen や Pastebin のようなサービスを使用してコードを貼り付けるようにキャンパーに依頼することができます。

2. **If the camper clearly and intentionally violates the [Code of Conduct](https://code-of-conduct.freecodecamp.org), the moderator will proceed as follows:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING] The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creating a private discussion**

   キャンパーに関わる懸念事項に対して個人的に対処する必要のある場合があるかもしれません。 これは、DM を通じて行うべきではありません。あなたがあることを主張し、キャンパーがそれとは別のことを主張する状況につながる可能性があります。 代わりに、bot の機能を使用してプライベートディスカッションを作成してください。

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

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
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
