# 如何校對譯文

Our proofreading team is responsible for ensuring that translations accurately reflect the source text. We trust our proofreaders to ensure that we have very high quality translations.

All our translations are done by hand, by real humans. Proofreading ensures that there is a consistent tone across our all our translated resources like the curriculum.

To begin proofreading, visit [our translation platform](https://translate.freecodecamp.org) and login. Select "Go to console" in the top navigation bar to switch from the public view to the workspace view.

## 選擇文件

You should see the list of projects you have been granted access to. Select the project that you would like to proofread, then select the language.

![Image - Proofreading File Tree](https://contribute.freecodecamp.org/images/crowdin/proof-file-tree.png)

You should now see the list of available files. Choose your file by selecting the `Proofread` button on the right of that file, then choosing `Proofreading` from the drop-down menu that appears.

> [!NOTE] If you are in this workspace view, but want to work on [translating a file](how-to-translate-files.md) instead of proofreading, you may select `Crowdsourcing` from the dropdown menu instead.

## 校對譯文

![Image - Proofreading View](https://contribute.freecodecamp.org/images/crowdin/proofread.png)

<!--Add proofread/crowdsource button to the image-->

Here you will see the list of strings in the selected file, with their related translations. The translation that is displayed here is the translation that has received the highest score (between upvotes and downvotes) from the translation community.

While you can view _all_ proposed translations for a given string, the community scores (determined by the upvotes and downvotes) should be taken into consideration when choosing which translation to approve. The community can review proposed translations and recommend which one is most accurate and clear.

1. 這是源文件的字符串（英文）。
2. 這是相匹配的翻譯的字符串。 此處將顯示基於贊同和反對票數的最受歡迎的譯文建議。
3. 點擊這個選擇標記按鈕確認該譯文。
4. Crowdin 將顯示每個字符串的狀態。 `Done` 的意思是已經確認了譯文，我們將在下次從 Crowdin 拉取內容的時候下載已確認的譯文。 `Todo` 的意思是字符串的譯文還未被校對確認。 `Hidden` means the string is locked and _should not be translated_. `Comment` 的意思是對此字符串有評論消息。
5. 可以使用復框選擇多條譯文，並在此處一次性批量確認。
6. 你可以在此處查看社區建議的譯文，社區對其的評分，以及 Crowdin 建議的譯文。
7. 這個按鈕顯示/隱藏右側的顯示窗口，你可以在其中查看翻譯、評論、翻譯記憶和詞彙表術語。
8. Crowdin 在此處顯示來自質量保證檢查的報錯消息。 也就是說，如果譯文中有不正確的地方，Crowdin 會通知你。 請仔細校對確認出現報錯消息的譯文。

No additional actions are required once a file has been proofread.

> [!NOTE] Approving a string in the proofreading view will mark it as complete and it will be downloaded in our next pull from Crowdin to GitHub.

## Becoming a proofreader

If you have any questions, or are interested in becoming a proofreader, feel free to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay). We will typically grant you proofreading access if you have been contributing to freeCodeCamp for a while.

Our staff team and community moderators teams are always looking for kind volunteers like you who help us make high quality translations available to the world.

> [!NOTE] Crowdin 會允許你校對你自己的譯文。 一般來說，最好是讓另一位校對者審覈你的譯文，以確保最終內容的準確性。

## Creating a channel on Chat for a world language

For the most part we encourage you to use the [contributors chat](https://discord.gg/PRyKn3Vbay) room for all correspondence. However if the team of volunteer translators grows for a certain language, we can consider creating additional break-out channel for the language.

If you are already a proofreader and are interested in having a dedicated channel on our chat servers for a specific language, [fill out this form](https://forms.gle/XU5CyutrYCgDYaVZA).
