# 公式 freeCodeCamp モデレーターハンドブック

このハンドブックは、私たちのコミュニティの様々な場所をモデレートするのに役立ちます。 GitHub、コミュニティフォーラム、チャットルーム、およびその他の公式コミュニティにおける Issue とプルリクエストスレッドに関する、会話とインタラクションを説明します。

> [!NOTE] すべての freeCodeCamp モデレーターは、コミュニティ全体のモデレーターです。 上記いずれかの場所を監督していただきます。

最も興味のあるプラットフォームのモデレーターになることができます。 GitHub を支援するモデレーターもいれば、フォーラムを支援するモデレーターもいます。 すべての場所においてご活躍いただくモデレーターもいます。

モデレーターであることを楽しんでください。 興味のある場所に皆さんの時間を投資してください。

> 「大いなる力には大いなる責任が伴う」 - ベンおじさん

モデレーターにとって、気質は技術的スキルよりも重要です。

聞きましょう。 役に立ちましょう。 権力を乱用してはいけません。

freeCodeCamp は包括的なコミュニティであり、それを維持する必要があります。

私たちにはコミュニティ全体を支配する単一の行動規範があります。 ルールは少ないほど、覚えやすいものです。 [こちら](https://code-of-conduct.freecodecamp.org) にあるルールを読み、記憶に留めておいてください。

> [!NOTE] GitHub、コミュニティフォーラム 、チャットサーバーのチームに、皆さんをモデレーターとして追加します。 モデレートしたいプラットフォームにアクセスできない場合は、[スタッフまでご連絡ください](FAQ.md#その他の支援)。

## GitHub をモデレートする

モデレーターは、GitHub 上で 2 つの主要な責任を負います。

1. Issue のトリアージと対応
2. プルリクエストのレビューとマージ (すなわち、QA)

### GitHub Issue をモデレートする

main の [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) リポジトリを、すべてのリポジトリのための共通 Issue トラッカーとして使用しています。 毎日新しい問題が起きており、そのすべてをトリアージし、ラベル付けし、対処する必要があります。 オープンソースコードベースの貢献を始めるのに最適な場所です。

#### Issue のトリアージ

[トリアージ](https://en.wikipedia.org/wiki/Triage) は、新しい Issue の各報告に対して優先順位を付けるプロセスです。 それぞれの Issue の優先順位、カテゴリ、ステータス、スコープにマークを付けるために使用する広範なラベルリストがあります。

[このリスト](https://github.com/freeCodeCamp/freeCodeCamp/labels) のラベルを使用して、Issue 報告を整理しトリアージすることができます。 通常、ラベルにはその説明書きがあります。

`"help wanted"` と `"first timers only"` のラベルに特に注意してください。 これらは、プルリクエストを行う潜在的なコントリビューターが入る可能性があるスレッドに追加されます。

`"first timer only"` ラベルは些細な問題 (例: タイプミスの修正) に適用され、追加情報が必要となります。 この [返信テンプレート](moderator-handbook.md#初回者用の-issue) をトリアージに使用できます。

#### 古く、期限切れで、不活発な Issue とプルリクエストをクローズする

- 古い Issue または 古い PR とは、作成者が過去 21 日間 (最後の活動から 3 週間) アクティビティを行っていないものを指しますが、具体的にはモデレーターが作成者に対して追加情報 / 変更を要求してから上記既定の日数を経過したものを指します。

- アクティビティは、`status: update needed` ラベルなどの PR とトリアージの更新をリクエストするコメントと定義されます。

- コントリビューターから支援もしくは時間の追加要求があった場合、それに対する回答を返し、該当する Issue または PR を後日改めて確認することができます。 いずれの場合でも、モデレーターは、未解決の PR を解決するために最善の判断を下す必要があります。

> [!TIP] Issue をトリアージする際には、この標準の [返信テンプレート](moderator-handbook.md#返信テンプレート) リストを使用することをお勧めします。

### プルリクエストをモデレートする

プルリクエスト (PR) とは、コントリビューターが freeCodeCamp のリポジトリに変更を送信する方法です。 プルリクエストをマージするか、変更をリクエストするか、もしくはクローズするかを決定する前に、Quality Assurance (QA) を実行しなければなりません。

#### プルリクエストの種類

1. **チャレンジ指示の編集**

   これは、チャレンジテキスト (説明、指示、またはテストテキスト) の変更です。

   GitHub で確認し、マージするかどうかを決定することもできます。 しかし、これについては少し注意する必要があります。 なぜなら、freeCodeCamp カリキュラムを通して何百万人もの方がこのテキストを見るからです。 テキストは、プルリクエストにより、冗長になることなく明確になっていますか？ 編集内容は、過度に知識をひけらかすものではなく、関連性の高いものになっていますか？ 可能な限り明確かつ短文のチャレンジにすることが目標であることを忘れないでください。 曖昧であってはなりません。 コントリビューターが、チャレンジにリソースへのリンクを追加しようとする場合もあります。

   無効なプルリクエストをクローズして、この [返信テンプレート](moderator-handbook.md#無効なプルリクエストをクローズする-1) で返信します。

   正しく変更されたら、必ず「LGTM」コメントで承認を残してください。 プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

2. **チャレンジコードの編集**

   これは、チャレンジシード、チャレンジソリューション、テスト文字列などのチャレンジのコードの変更です。

   現在のソリューションでチャレンジテストに合格できるかどうか、また新しいコードでエラーが発生しないかどうか確認するために、プルリクエストを GitHub からプルダウンしローカルコンピュータまたは Gitpod でテストする必要があります。

   コントリビューターの中には、衒学的で厄介なケースも網羅するために、追加テストを含めようとする人もいるかもしれません。 チャレンジがあまり複雑にならないように注意しなければなりません。 チャレンジとそのテストは可能な限りシンプルで直感的なものにします。 アルゴリズムチャレンジとインタビュー準備セクションは別として、学習者は約 2 分以内に各チャレンジを解決する必要があります。

   無効なプルリクエストをクローズして、この [返信テンプレート](moderator-handbook.md#無効なプルリクエストをクローズする-1) で返信します。

   正しく変更されたら、必ず「LGTM」コメントで承認を残してください。 プルリクエストがモデレーターまたは開発チームから少なくとも 2 つの承認 (あなたを含む) を得たら、マージすることができます。

3. **プラットフォームの変更**

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

##### マージの競合を処理する

マージの競合が発生することがあります。

これは、別のプルリクエストがその同じファイルの同じ部分に変更を加えたことを意味します。 GitHub には、GitHub 上でこれらのマージ競合に対処するためのツールがあります。 皆さんはこれらの競合に対処することができます。 最善の判断をしてください。

プルリクエストの変更は一番上にあり、main ブランチの変更は一番下にあります。 次のような、削除可能な冗長な情報がある場合もあります。 終了する前に、Git が競合エリアを表すために追加する `<<<<<<`、`======` および `>>>>>>` を削除してください。

ご不明な点がある場合は、モデレーターまたは開発チームにお問い合わせください。

##### 有効なプルリクエストをマージする

プルリクエストにマージの準備ができている (そして、少なくとも 2 人が承認済みで追加承認が必要ない) 場合、マージすることができます。 デフォルトの **"Squash and Merge"** オプションを使用してください。 これにより、すべてのプルリクエストがコミットされて単一のコミットにスカッシュされ、Git の履歴がより読みやすくなります。

> そして、コントリビューターに感謝の意を示すため、それぞれの書き方でプルリクエストにコメントする必要があります。

プルリクエストの作成者が、「新規コントリビューター」である場合、リポジトリに初めてマージされたプルリクエストに対しても祝意を伝える必要があります。 PR ボディの右上隅を見ると、新規コントリビューターであるかどうかを判断することができます。 以下のように、`First-time contributor` が表示されています。

<details>
   <summary>
      プルリクエストの新規コントリビューターバッジ (スクリーンショット)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="プルリクエストの新規コントリビューターバッジ" />
</details>

プルリクエストにマージの準備ができていない場合は、準備するために何をすべきかを作成者に伝えるために丁寧に返信します。 上手くいけば、作成者から返信があり、プルリクエストの準備に近づけるでしょう。

プルリクエストにセカンドオピニオンが必要な場合は、プルリクエストにコメントを残してください。そして、プルリクエストに 「discussing」ラベルを追加します。

##### 無効なプルリクエストをクローズする

大抵の場合、プルリクエストには手間がかかりません。 コントリビューターがプルリクエストテンプレートのチェックボックスにチェックを付けなかったり、「made changes」や「Update index.md」のように特徴のないプルリクエストのタイトルを使用したりした場合は、通常これをすぐに確認できます。

コントリビューターが Web サイトへのリンクを追加しようとしたり、彼らが作成したライブラリを含めようとしたり、彼ら以外の誰にも役に立たない自由な編集をしようとする状況もあります。

無効なプルリクエストをクローズして、これらの [返信テンプレート](moderator-handbook.md#無効なプルリクエストをクローズする-1) で返信します。

#### GitHub モデレーターに関するその他のガイドライン

freeCodeCamp のリポジトリへの書き込み権限はありますが、**freeCodeCamp リポジトリに直接コードをプッシュしてはいけません**。 すべてのコードは、リポジトリのフォークからのプルリクエストへという形で、freeCodeCamp のコードベースに入る必要があります。

また、自分の PR を承認するべきではありません。 他の PR と同様に、別のモデレーターがレビューする必要があります。

誰かが GitHub Issue に関する [行動規範](https://code-of-conduct.freecodecamp.org) に違反していることに気づいた場合、または悪意あるコンテンツやコードでプルリクエストをオープンしている場合は、問題のあるプルリクエストへのリンクを添付して `support[at]freecodecamp.org` までメールしてください。該当者を freeCodeCamp の GitHub 組織 にアクセスできないようにすることを検討します。

## フォーラムをモデレートする

モデレーターとして、コミュニティを、誰もが助けを得ながら学ぶことができる楽しい場所に保つ支援をします。 フラグ付きの投稿やスパム、トピック外の内容、不適切な会話に対処します。

フォーラムのモデレーターになると、「 [person] さんの初めての投稿です。ようこそコミュニティへ！」または「 [person] さんは長い間投稿していません。投稿があったら歓迎しましょう！」など、フォーラムメンバーに関する青色のモデレーターヒントが表示されるようになります。

![「 [person] さんが投稿するのはこれが初めてです。コミュニティに歓迎しましょう！」という青色のテキストメッセージ](https://i.imgur.com/mPmVgzK.png)

これは、あなたが彼らを歓迎するとともに彼らを特別な気分にさせる機会です。 わずかにしか関与していない人が、次のスーパーヘルパーになり、コーディングの学習で多くの人を助けることになる可能性があります。 ほんの少しの思いやりが、善行の連鎖を引き起こすかもしれません。

### フォーラムの投稿を削除する

フォーラムモデレーターは、ユーザーの投稿を削除できます。 以下の場合にのみ、投稿を削除する必要があります。

1. ポルノやグラフィカルに暴力的な画像を投稿している
2. 本質的に悪意のあるリンクやコードを投稿し、それをクリックする他のキャンパーに害を与える可能性がある
3. たくさんのスパムメッセージでスレッドを氾濫させている

### スパムに対処する

最初のスパム投稿については、問題を説明するメッセージを送信し、必要に応じてリンクや投稿を削除します。 ユーザーのプロフィール欄に、あなたが行ったアクションを説明するメモを残してください。 問題が解決しない場合は、(ユーザー管理パネルのサイレンスオプションを使用して) ユーザーの投稿をブロックします。 行動規範を使用してユーザーに警告を送信します。 プライベートメッセージのボックスにチェックを入れ、メッセージが「正式な警告」であることを示します。

モデレーターとして、[スタッフフォーラムセクション](https://forum.freecodecamp.org/c/mod-team/4) でインシデントについて質問したり報告したりできます。

### トピック外の会話に対処する

間違った場所にあるように思われる投稿やトピックは、適切な場所へ再分類したり、名前を変更したりできます。

例外的な状況として、モデレーターがディスカッションを複数のスレッドにフォークすることが適切である場合があります。

問題や質問がある場合は、スタッフカテゴリでアクションを投稿し、モデレーターとしてのアクションを確認してもらいたい場合は、別のモデレーターにタグ付けします。

### 未成年のユーザー

私たちの [利用規約](https://www.freecodecamp.org/terms) では、freeCodeCamp ユーザーは少なくとも 13 歳である必要があります。 ユーザーが 13 歳未満であることを明らかにした場合、以下のメッセージをユーザーに送信し、そのフォーラムアカウントを削除します (削除できない場合は、アカウントを停止するだけで十分です)。

**ユーザーの freeCodeCamp アカウントも削除するには、`support[at]freecodecamp.org` にメールしてください。**

```markdown
件名: 13 歳未満のユーザーは、利用規約によりフォーラムをご利用いただけません

あなたが 13 歳未満のユーザーであると判明いたしました。 [freeCodeCamp 利用規約](https://www.freecodecamp.org/news/terms-of-service) では、サイトまたはフォーラムを利用するには 13 歳以上である必要があります。 そのため、誠に恐れ入りますが、あなたの freeCodeCamp アカウントとフォーラムアカウントの両方を削除させていただくこととなりました。 この制限は米国の法律に準拠したものです。

13 歳以上になられてから、またご参加いただけることをお待ちしております。

ご理解のほどよろしくお願いいたします。
```

## Facebook をモデレートする

私たちの [行動規範](https://code-of-conduct.freecodecamp.org/) に違反するようなものがあれば、すぐに削除してください。

自分が面白いと思うことを投稿する人が時々います。 彼らは、自分たちが言ったこと、シェアしたことが攻撃的だと解釈され得ることに気づいていません。 そのような投稿は削除する必要がありますが、必ずしもその人のアクセスを禁じるわけではありません。 投稿が削除されることにより、ユーザーは投稿内容が不適切だったと気づくことになるでしょう。

しかし、それが文化的な違いや英語での誤解では説明できない酷い犯罪である場合もあります。 その場合、Facebook グループからメンバーをブロックすることを検討するべきです。

## チャットをモデレートする

モデレーターは、以下のように、チャットサーバー上の [行動規範](https://code-of-conduct.freecodecamp.org/) の違反に対処します。

1. **ユーザーが、意図して行動規範に違反していることを確認します。**

   CoC のすべての違反がそのように意図されているわけではありません。 新しいキャンパーは、スパムであると気づかずに、支援のために大量のコードを投稿する場合もあります。 この場合、CodePen や Pastebin のようなサービスを使用してコードを貼り付けるようにキャンパーに依頼することができます。

2. **キャンパーが、明確かつ意図的に行動規範に違反した場合、モデレーターは以下を実行します。**

   チャットルームから問題のある人を退出させたり、ミュートしたりします。 誰かを退出させるまたはミュートするには、彼らのプロフィール画像上で左クリックして、3 つの点を選択します。 そして、「ルームから削除」を選択して退出させるか、「ユーザーをミュート」を選択してメッセージを送信できないようにします。 その後、#mod-log チャンネルでその概要を報告します。 以下は、そのような概要の例です。

   ```
   Kicked: _@username_
   Reason(s): _Spamming, trolling_
   Evidence: _One or more links to the offending message(s)_
   ```

3. **プライベートディスカッションを作成します。**

   キャンパーに関わる懸念事項に対して個人的に対処する必要のある場合があるかもしれません。 これは、DM を通じて行うべきではありません。あなたがあることを主張し、キャンパーがそれとは別のことを主張する状況につながる可能性があります。 代わりに、bot の機能を使用してプライベートディスカッションを作成してください。

   - `!fCC private username` コマンドを呼び出します。ここでは、`username` が、キャンパーのチャットユーザー名です。
   - bot は新しいチャンネルを作成し、上述のキャンパーと `Your Friendly Moderator` の役割を持つすべてのモデレーターをディスカッションに追加します。 透明性を保つため、すべてのモデレーターをチャンネルに追加しますが、支援を求めない限り、このコマンドを呼び出すモデレーターがキャンパーと接触する唯一の人であるべきです。
   - ディスカッションが完了したら、_プライベートチャンネル_ にある `!fCC close` コマンドを呼び出し、bot をクローズしてそのチャンネルを削除します。

4. **メッセージを削除します。**

   モデレーターは、チャットサーバー上のメッセージを削除できます。 モデレーターは、以下 4 つの非常に特定の状況でのみこの機能を行使します。

   - ポルノやグラフィカルに暴力的な画像を投稿している

   - 本質的に悪意のあるリンクやコードを投稿し、それをクリックする他のキャンパーに害を与える可能性がある

   - 非常に多くのスパムメッセージ (通常 bot も含む) を送ることでチャットを溢れさせ、チャットを完全に使用不能にしている

   - 広告や自己宣伝メッセージ / イメージ (ソーシャルメディア) を投稿している

   他のすべての状況において (たとえ行動規範に違反している場合でも)、モデレーターは、メッセージを削除してはなりません。なぜなら、それらは重要な記録だからです。 メッセージを削除する場合は、まずスクリーンショットを撮ってください！ スクリーンショットは #mod-log チャンネルに記録することができます。

   > [!NOTE] スクリーンショットを撮ることが違法となる素材がメッセージに含まれている場合、代わりにメッセージリンクをコピーしてください。そのメッセージリンクを @raisedadead へ提供して、Discord の Trust & Safety チームへ転送します。

5. **@all または @here は使用しません。**

   どんな状況下でも、@all または @here を使用しないでください！ チャットルームにいるすべての人に通知が届いてしまいます。 場合によっては、何万人もの人々に通知が届きます。

   多くの人にアナウンスメントを見て欲しい場合は、誰もが読むことができるようにチャンネルに固定することができます。

6. **アクションを起こすと脅してはなりません。**

   キャンパーが行動規範に違反した場合、モデレーターとしてアクションを起こすと言って脅してはなりません。また、公の場でキャンパーに対し警告を与えてはなりません。 代わりに、bot の `private` コマンドを使用して彼らと非公開で話をします。 あなたがその人を利用禁止 / 一時利用停止したという事実は、そのチャンネルで誰も知る必要はありません。 明らかに意図された違反ではなく、一時利用停止や個人的な会話を行うことが当然であるとは言えない場合には、警告としての印象を与えずに、違反しているキャンパーにその行動が問題であることを認識させます。 例を示します。

   - キャンパーが大量のコードを投稿して支援を要求する場合

     モデレーター: @username 大量のコードを投稿する場合は CodePen または Pastebin を使用してください。

   - 上記対応の理由も説明する必要がある場合

     モデレーター: @username 大量のコードを投稿する場合は CodePen または Pastebin を使用してください。なぜなら、チャットを混乱させ、私たちの行動規範によりスパムとみなされる可能性があるからです。

   - 行動規範に対する軽微および意図しない違反

     モデレーター: 皆さんに遵守いただきたい行動規範を念のためお知らせいたします。https://code-of-conduct.freecodecamp.org/ をご覧ください。

7. **モデレーターであることを自慢してはなりません。**

   自分がコミュニティの上にいるとは思わないでください。 皆さんはコミュニティの中にいます。 コミュニティは、共有する素晴らしいもの、つまり、新しい開発者を _歓迎する_ 場所、を皆さんが保護してくれると信じています。

   モデレーターであることを自慢すれば、周囲の人は不安を感じるかもしれません。何も悪いことをしていなくても、警察官の周りにいると不安を感じるのと同じです。 それが人間の本質なのです。

8. **他のモデレーターを批判してはなりません。**

   モデレーターのアクションに同意できない場合は、プライベートまたは #mod-chat チャンネルで相談してください。 モデレーターのアクションを無効にしないでください。他のモデレーターを公に批判してはいけません。 代わりに、`#mod-chat` で冷静なディスカッションを行い、利用禁止を取り消したり、視点を変えたりするように、そのモデレーターを説得します。

   私たちは皆同じチームに所属していることを忘れないでください。 モデレーターの役割を尊重し、統一戦線の形を取りたいと考えています。

9. **他のモデレーターと話をします。**

   モデレーター専用ルームがあります。 それを使ってみましょう！ 特定の状況を処理することを不快に感じる場合は、他のモデレーターに支援を求めてください。 議論されるべきことがあると思ったら、議論してください。 皆さんはチームの一員であり、私たちはすべてのチームメンバーからのインプットを大切にしています！ 皆さんが、ガイドラインや行動規範に完全に同意していないとしても、皆さんからの意見を大切にします！

10. **一時的に非アクティブにします。**

    休暇、病気、または他の理由により、しばらくモデレーターとして活動できない場合は、`#mod-chat` チャンネルで他の人に知らせるようにしてください。 そうすることで、皆さんがサーバー上で通常どおり活動しているかどうかを認識することができます。

## モデレーターになる方法

皆さんが、長い期間一貫してコミュニティの人を支援しているとします。 その場合、やがてモデレーターチームが気づき、チームの誰かが、あなたのことをモデレーター候補として [私たちスタッフ](https://forum.freecodecamp.org/g/Team) に知らせることになります。 モデレーターになるための近道はありません。

承認されると、皆さんは、[GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators)、[フォーラム](https://forum.freecodecamp.org/g/moderators)、チャットなどのモデレーターチームに追加されます。

> [!NOTE] GitHub の場合: モデレーターとして承認されると、Github リポジトリへの招待が届きます。 招待を承認するには、[freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) に進む必要があります。
> 
> これは、一部のリポジトリへの書き込みアクセスを提供するために必要となります。

## 非アクティブモデレーターの削除方法

非アクティブと思われるモデレーターは頻繁に削除します。 削除すると、次のようなメッセージが送信されます。

```markdown
最近アクティブではないモデレーターの方にお送りしている通知メッセージです。最近の活動が少なくなっているようですので、モデレーターチームから削除させていだきます。 これまでのご支援に深く感謝いたします。

私たちの理解が誤っている場合、再度貢献できる状況になった場合には、このメッセージに返信する形でどうぞお知らせください。
```

## Contributors ルームの仕組み

Anyone is welcome in the [Contributors room on our chat server](https://discord.gg/PRyKn3Vbay). 学習グループなど、様々な方法でコミュニティに貢献しているモデレーターやキャンパーのための専用のチャットルームです。

`@username` で直接メンションされているものを、コントリビューターがこのルームで読むことを想定しています。 他はすべて任意ですが、自由に誰かの投稿を読んだり交流したりしてください。

## 勧誘者への対応

freeCodeCamp と連携またはブランド提携したい団体から、アプローチを受ける場合があります。 そのようなことを求めていると気が付いたら、**その団体と話しをするのは止めて**、`team[at]freecodecamp.org` にメールを書くように伝えてください。

私たちは、いつもこのような提案を受けています。スタッフは、そのような関係が私たちのコミュニティにとって価値があるのかどうか (ほとんどの場合そうではありません) を判断するのに最適な立場にあります。

## (メンタル) ヘルスに関する問い合わせへの対応

ユーザーが医療アドバイスを求めたり、メンタルヘルスの問題でサポートを求めたりする状況に遭遇することがあります。

ポリシー上、これらの問題について個人的に話すことは避けるべきです。 もしその状況が freeCodeCamp に反映された場合、私たちはその会話を記録します。 私たちは医療の専門家ではないこと、そしてユーザー自身で専門的な支援を見つけることを推奨していることを明確にしてください。

難しい場合もありますが、ユーザーを専門家の支援の方向に向けてください。ヒントやアドバイスを与えることを避けてください！

これが、チャットサーバーで発生した場合は、ユーザーとモデレーターチームのプライベートチャンネルを作成してください。 bot の `private` コマンドで作成することができます。

- ユーザーはプライバシーを保証されています。
- パブリックチャットはもう中断されません
- 対応に気まずさを感じる場合は、他のチームメンバーが支援することができます。

参考URL:

http://www.suicide.org/international-suicide-hotlines.html

## 言論の自由に関する注意点

人々は、「言論の自由」として述べた攻撃的または扇情的な何かを擁護しようとする場合があります。

この XKCD 漫画は、言論の自由に対するコミュニティでの考えを要約しています。 誰かが「言論の自由」という名目で何かを擁護する場合、これをその人たちに送ってください。

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

お読みいただきありがとうございます。また、開発者コミュニティを支援してくださってありがとうございます！

## 返信テンプレート

以下は、プルリクエストをレビューしたり、問題やプルリクエストをトリアージしたりする際に使用できる標準的な返信テンプレートです。

> GitHub のビルトインの [**Saved replies**](https://github.com/settings/replies/) 機能を使用して自分で作成するか、以下のテンプレートを使用することができます。

### お礼

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### お礼と祝福

> 新規コントリビューターへの感謝と励まし

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

> PR が、最新の `main` ブランチで更新されていない場合

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

Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
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

> PR が反復または重複している場合

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### 無効なプルリクエストをクローズする

> PR が無効な場合

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> PR が外部リソースへのリンクを追加している場合

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

### 無効な Issue をクローズする

> Issue がキャンパーのコードに関連する場合

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Issue が以前の Issue と重複している場合

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Issue がステージングで修正された場合

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### 初回者用の Issue

> Issue が新規コードコントリビューターの対象となる場合

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing, our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
