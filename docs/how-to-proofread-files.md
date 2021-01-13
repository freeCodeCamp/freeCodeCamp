# How to Proofread Translations

Our proofreading team is responsible for ensuring that translations are accurate and do not add, modify, or remove content from the text.

To begin proofreading, visit [our translation site](https://translate.freecodecamp.org) and login. Then select "Go to console" in the top navigation bar to switch from the public view to the workspace view.

## Select a File

You should see the list of projects you have been granted proofreader access on. Select the project that you would like to proofread, then select the language.

You should now see the list of available files. Choose your file by selecting the `Proofread` button on the right of that file.

## Proofread Translations

![Image - Proofreading View](./images/crowdin/proofread.png)

Here you will see the list of strings in the selected file, with their related translations. The translation that is displayed here is the translation which has received the highest score (between upvotes and downvotes) from the translation community.

1. This is the translation string - you are able to edit the translation directly from this view before approving it.
2. Crowdin will display the status of each string. `Done` means a translation has been proposed for the string. `Todo` means the string has not been translated. `Hidden` means the string is locked and *should not be translated*.
3. Crowdin displays error messages here from the quality assurance checks. In other words, if something does not seem correct in the translation, Crowdin will notify you. These translations should be approved with care.
4. Clicking this checkmark button will approve that translation.
5. Translations can be selected with the checkboxes and approved here in one bulk action.

> [!WARNING]
> Approving a string in the proofreading view will mark it as complete and it will be downloaded in our next pull from Crowdin to GitHub.

No additional actions are required once a file has been proofread. If you have any questions, or are interested in becoming a proofreader, feel free to reach out to us in our [contributors chat room](https://chat.freecodecamp.org/contributors).
