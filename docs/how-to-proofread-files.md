# How to Proofread Translations

Our proofreading team is responsible for ensuring that translations accurately reflect the source text.

To begin proofreading, visit [our translation site](https://translate.freecodecamp.org) and login. Then select "Go to console" in the top navigation bar to switch from the public view to the workspace view.

## Select a File

You should see the list of projects you have been granted access to. Select the project that you would like to proofread, then select the language.

![Image - Proofreading File Tree](https://contribute.freecodecamp.org/images/crowdin/proof-file-tree.png)

You should now see the list of available files. Choose your file by selecting the `Proofread` button on the right of that file, then choosing `Proofreading` from the drop-down menu that appears.

> [!NOTE]
> If you are in this workspace view, but want to work on [translating a file](./how-to-translate-files.md) instead of proofreading, you may select `Crowdsourcing` from the dropdown menu instead.

## Proofread Translations

![Image - Proofreading View](https://contribute.freecodecamp.org/images/crowdin/proofread.png)

<!--Add proofread/crowdsource button to the image-->

Here you will see the list of strings in the selected file, with their related translations. The translation that is displayed here is the translation that has received the highest score (between upvotes and downvotes) from the translation community.

While you can view *all* proposed translations for a given string, the community scores (determined by the upvotes and downvotes) should be taken into consideration when choosing which translation to approve. The community can review proposed translations and recommend which one is most accurate and clear.

1. This is the original string (in English).
2. This is the matching translated string. The most popular translation proposal, based on upvotes and downvotes, will be displayed here.
3. Clicking this checkmark button will approve that translation.
4. Crowdin will display the status of each string. `Done` means a translation has been approved and will be downloaded on our next Crowdin pull. `Todo` means the string has not been proofread. `Hidden` means the string is locked and *should not be translated*. `Comment` means the string has a related comment.
5. Translations can be selected with the checkboxes and approved here in one bulk action.
6. You can view the community proposed translations, their popularity scores, and Crowdin suggested translations here.
7. This button shows/hides the right-hand side display pane, where you can view translations, comments, translation memory, and glossary terms.
8. Crowdin displays error messages here from the quality assurance checks. In other words, if something does not seem correct in the translation, Crowdin will notify you. These translations should be approved with care.

> [!WARNING]
> Approving a string in the proofreading view will mark it as complete and it will be downloaded in our next pull from Crowdin to GitHub.

No additional actions are required once a file has been proofread. If you have any questions, or are interested in becoming a proofreader, feel free to reach out to us in our [translators chat room](https://chat.freecodecamp.org/channel/translators). If you are already a proofreader and are interested in having a dedicated channel for a specific language, [fill out our form](https://forms.gle/XU5CyutrYCgDYaVZA).

> [!NOTE]
> Crowdin will allow you to approve your translations. In general, it is best to allow another proofreader to review your proposed translations as extra safety to ensure there are no errors.
