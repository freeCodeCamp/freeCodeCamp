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

> [!NOTE] As a moderator we would add you to one or more teams on GitHub, our community forums & chat servers. If you are missing access on a platform that you would like to moderate, please [reach out to a staff member](FAQ.md#additional-assistance).

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

A `"first timers only"` label should be applied to a trivial issue (ie a typo fix) and should include additional information. この [返信テンプレート](moderator-handbook.md#初回者用の-issue) をトリアージに使用できます。

#### 古く、期限切れで、不活発な Issue とプルリクエストをクローズする

- 古い Issue または 古い PR とは、作成者が過去 21 日間 (最後の活動から 3 週間) アクティビティを行っていないものを指しますが、具体的にはモデレーターが作成者に対して追加情報 / 変更を要求してから上記既定の日数を経過したものを指します。

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label, etc.

- コントリビューターから支援もしくは時間の追加要求があった場合、それに対する回答を返し、該当する Issue または PR を後日改めて確認することができます。 いずれの場合でも、モデレーターは、未解決の PR を解決するために最善の判断を下す必要があります。

> [!TIP] Issue をトリアージする際には、この標準の [返信テンプレート](moderator-handbook.md#返信テンプレート) リストを使用することをお勧めします。

### プルリクエストをモデレートする

プルリクエスト (PR) とは、コントリビューターが freeCodeCamp のリポジトリに変更を送信する方法です。 プルリクエストをマージするか、変更をリクエストするか、もしくはクローズするかを決定する前に、Quality Assurance (QA) を実行しなければなりません。

#### プルリクエストの種類

1. **Challenge instruction edits**

   These are changes to the text of challenges - the description, instructions, or test text.

   GitHub で確認し、マージするかどうかを決定することもできます。 しかし、これについては少し注意する必要があります。 なぜなら、freeCodeCamp カリキュラムを通して何百万人もの方がこのテキストを見るからです。 テキストは、プルリクエストにより、冗長になることなく明確になっていますか？ 編集内容は、過度に知識をひけらかすものではなく、関連性の高いものになっていますか？ 可能な限り明確かつ短文のチャレンジにすることが目標であることを忘れないでください。 曖昧であってはなりません。 コントリビューターが、チャレンジにリソースへのリンクを追加しようとする場合もあります。

   無効なプルリクエストをクローズして、この [返信テンプレート](moderator-handbook.md#無効なプルリクエストをクローズする-1) で返信します。

   If the changes look good, please ensure to leave an approval with a "LGTM" (Looks Good To Me) comment. プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

2. **Challenge code edits**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   コントリビューターの中には、衒学的で厄介なケースも網羅するために、追加テストを含めようとする人もいるかもしれません。 チャレンジがあまり複雑にならないように注意しなければなりません。 チャレンジとそのテストは可能な限りシンプルで直感的なものにします。 アルゴリズムチャレンジとインタビュー準備セクションは別として、学習者は約 2 分以内に各チャレンジを解決する必要があります。

   無効なプルリクエストをクローズして、この [返信テンプレート](moderator-handbook.md#無効なプルリクエストをクローズする-1) で返信します。

   If the changes look good, please ensure to leave an approval with a "LGTM" comment. プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

3. **Platform changes**

   このコード編集により、freeCodeCamp プラットフォーム自体の機能を変更します。

   コントリビューターは、説明せずに変更しようとすることがありますが、コードの変更については、その変更が間違いなく必要であることを確認する必要があります。 説明の無いプルリクエストについては、変更理由が説明されている既存の GitHub の問題を参照する必要があります。 その後、コンピュータでプルリクエストをオープンし、ローカルでテストすることができます。

   上記完了後、正しく変更されていても、まだマージしないでください。 「LGTM」とプルリクエストにコメントを残し、**"@freeCodeCamp/dev-team"** と記述することで、開発チームが最終的な確認を行います。

4. **自動 PR (Dependabot)**

   一部の PR は、インテグレーションにより自動的に依存関係を更新します。 これらの PR をマージまたは承認してはなりません。 開発チームメンバーの 1 人が、このような自動化された PR のレビューとマージを行います。

#### プルリクエストをレビュー、マージ、またはクローズする方法

##### プルリクエストをアサインする

まず最初に、レビューするプルリクエストを選択するときには、それを自分自身にアサインする必要があります。 GitHub インターフェースの右側の列にある「assignees」の下にある「assign yourself」リンクをクリックします。

プルリクエストの種類に応じて、対応する上述のルールに従ってください。

##### CI チェックに合格していることを確認する

プルリクエストをマージする前に、GitHub で、プルリクエストのすべてのチェックが合格 (緑色のチェックマーク) となっていることを確認してください。 チェックが不合格の場合は、原因を調べて明確にしてください。 テストに不合格となるような変更ですか？ PR がマージされる場合、サイトは正しく構築されますか？ これらのチェックはプラットフォームの安定性に不可欠です。

> [!WARNING] CI/CD チェックが不合格の PR をマージすると、開発チームやコントリビューターを含むすべてのステークホルダーに問題を引き起こす可能性があります。

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

これは、別のプルリクエストがその同じファイルの同じ部分に変更を加えたことを意味します。 GitHub には、GitHub 上でこれらのマージ競合に対処するためのツールがあります。 皆さんはこれらの競合に対処することができます。 Use your best judgment.

プルリクエストの変更は一番上にあり、main ブランチの変更は一番下にあります。 次のような、削除可能な冗長な情報がある場合もあります。 終了する前に、Git が競合エリアを表すために追加する `<<<<<<`、`======` および `>>>>>>` を削除してください。

ご不明な点がある場合は、モデレーターまたは開発チームにお問い合わせください。

##### 有効なプルリクエストをマージする

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

You can close these invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

#### Other Guidelines for Moderators on GitHub

freeCodeCamp のリポジトリへの書き込み権限はありますが、**freeCodeCamp リポジトリに直接コードをプッシュしてはいけません**。 すべてのコードは、リポジトリのフォークからのプルリクエストへという形で、freeCodeCamp のコードベースに入る必要があります。

また、自分の PR を承認するべきではありません。 他の PR と同様に、別のモデレーターがレビューする必要があります。

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## フォーラムをモデレートする

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. フラグ付きの投稿やスパム、トピック外の内容、不適切な会話に対処します。

フォーラムのモデレーターになると、「 [person] さんの初めての投稿です。ようこそコミュニティへ！」または「 [person] さんは長い間投稿していません。投稿があったら歓迎しましょう！」など、フォーラムメンバーに関する青色のモデレーターヒントが表示されるようになります。

![「 [person] さんが投稿するのはこれが初めてです。コミュニティに歓迎しましょう！」という青色のテキストメッセージ](https://i.imgur.com/mPmVgzK.png)

これは、あなたが彼らを歓迎するとともに彼らを特別な気分にさせる機会です。 わずかにしか関与していない人が、次のスーパーヘルパーになり、コーディングの学習で多くの人を助けることになる可能性があります。 ほんの少しの思いやりが、善行の連鎖を引き起こすかもしれません。

### Deleting Forum Posts

Forum moderators can delete users' posts. 以下の場合にのみ、投稿を削除する必要があります。

1. ポルノやグラフィカルに暴力的な画像を投稿している
2. 本質的に悪意のあるリンクやコードを投稿し、それをクリックする他のキャンパーに害を与える可能性がある
3. Someone has flooded a thread with a lot of spam messages.

### Dealing with Spam

最初のスパム投稿については、問題を説明するメッセージを送信し、必要に応じてリンクや投稿を削除します。 ユーザーのプロフィール欄に、あなたが行ったアクションを説明するメモを残してください。 問題が解決しない場合は、(ユーザー管理パネルのサイレンスオプションを使用して) ユーザーの投稿をブロックします。 Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). プライベートメッセージのボックスにチェックを入れ、メッセージが「正式な警告」であることを示します。

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Dealing with Off-Topic Conversations

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

例外的な状況として、モデレーターがディスカッションを複数のスレッドにフォークすることが適切である場合があります。

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### 未成年のユーザー

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. ユーザーが 13 歳未満であることを明らかにした場合、以下のメッセージをユーザーに送信し、そのフォーラムアカウントを削除します (削除できない場合は、アカウントを停止するだけで十分です)。

**ユーザーの freeCodeCamp アカウントも削除するには、`support[at]freecodecamp.org` にメールしてください。**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per our Terms of Service.

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp Terms of Service](https://freecodecamp.org/terms), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

## Facebook をモデレートする

私たちの [行動規範](https://code-of-conduct.freecodecamp.org/) に違反するようなものがあれば、すぐに削除してください。

自分が面白いと思うことを投稿する人が時々います。 彼らは、自分たちが言ったこと、シェアしたことが攻撃的だと解釈され得ることに気づいていません。 そのような投稿は削除する必要がありますが、必ずしもその人のアクセスを禁じるわけではありません。 投稿が削除されることにより、ユーザーは投稿内容が不適切だったと気づくことになるでしょう。

しかし、それが文化的な違いや英語での誤解では説明できない酷い犯罪である場合もあります。 その場合、Facebook グループからメンバーをブロックすることを検討するべきです。

## Moderating Discord

モデレーターは、以下のように、チャットサーバー上の [行動規範](https://code-of-conduct.freecodecamp.org/) の違反に対処します。

> [!NOTE] Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Make sure the user intended to violate the [Code of Conduct](https://code-of-conduct.freecodecamp.org).**

   Not all violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org) were intended as such. A new camper might post a large amount of code for help, unaware that this can be disruptive to conversation. この場合、CodePen や Pastebin のようなサービスを使用してコードを貼り付けるようにキャンパーに依頼することができます。

2. **If the camper clearly and intentionally violates the [Code of Conduct](https://code-of-conduct.freecodecamp.org), the moderator will proceed as follows:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING] The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creating a private discussion**

   キャンパーに関わる懸念事項に対して個人的に対処する必要のある場合があるかもしれません。 これは、DM を通じて行うべきではありません。あなたがあることを主張し、キャンパーがそれとは別のことを主張する状況につながる可能性があります。 代わりに、bot の機能を使用してプライベートディスカッションを作成してください。

   - Call the `/private` command, where `target` is the camper you want to open a private channel with.
   - bot は新しいチャンネルを作成し、上述のキャンパーと `Your Friendly Moderator` の役割を持つすべてのモデレーターをディスカッションに追加します。 透明性を保つため、すべてのモデレーターをチャンネルに追加しますが、支援を求めない限り、このコマンドを呼び出すモデレーターがキャンパーと接触する唯一の人であるべきです。
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

皆さんが、長い期間一貫してコミュニティの人を支援しているとします。 In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). モデレーターになるための近道はありません。

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
> 
> This is required for us to be able to give you write access to some of our repositories.

## How We Retire Inactive Moderators

Please note that we will frequently remove moderators whom we think are inactive. 削除すると、次のようなメッセージが送信されます。

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our moderator team. これまでのご支援に深く感謝いたします。

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting us know.
```

## How Our Contributors Room Works

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). 学習グループなど、様々な方法でコミュニティに貢献しているモデレーターやキャンパーのための専用のチャットルームです。

We assume contributors will read anything in this room that directly mentions them with an **@username**. 他はすべて任意ですが、自由に誰かの投稿を読んだり交流したりしてください。

## Dealing with Solicitors

freeCodeCamp と連携またはブランド提携したい団体から、アプローチを受ける場合があります。 そのようなことを求めていると気が付いたら、**その団体と話しをするのは止めて**、`team[at]freecodecamp.org` にメールを書くように伝えてください。

私たちは、いつもこのような提案を受けています。スタッフは、そのような関係が私たちのコミュニティにとって価値があるのかどうか (ほとんどの場合そうではありません) を判断するのに最適な立場にあります。

## Dealing with (Mental) Health Inquiries

ユーザーが医療アドバイスを求めたり、メンタルヘルスの問題でサポートを求めたりする状況に遭遇することがあります。

ポリシー上、これらの問題について個人的に話すことは避けるべきです。 もしその状況が freeCodeCamp に反映された場合、私たちはその会話を記録します。 私たちは医療の専門家ではないこと、そしてユーザー自身で専門的な支援を見つけることを推奨していることを明確にしてください。

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. bot の `private` コマンドで作成することができます。

- The user is guaranteed some privacy.
- Public chat is no longer disrupted.
- Other team members can pitch in, should you feel uncomfortable dealing with the situation yourself.

参考URL:

http://suicide.org/international-suicide-hotlines.html

## A Note on Free Speech

人々は、「言論の自由」として述べた攻撃的または扇情的な何かを擁護しようとする場合があります。

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

お読みいただきありがとうございます。また、開発者コミュニティを支援してくださってありがとうございます！

## 返信テンプレート

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues/pull requests.

> You can make your own saved replies with GitHub's built-in [saved replies](https://github.com/settings/replies/) feature or use the ones below.

### Thank You

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### お礼と祝福

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### ビルドエラー

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

### フォークの同期

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
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### マージ競合

> PR に解決すべきマージ競合がある場合¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ 新規コントリビューターにマージ競合が発生した場合、メンテナーがその競合を解決します。

### 重複

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### Closing Invalid Pull Requests

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

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### 無効な Issue をクローズする

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue.

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

### `first timer only` Issues

> When an issue is deemed to be eligible for first-time code contributors.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
