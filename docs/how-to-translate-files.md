# How to Translate freeCodeCamp's resources

It's our dream to provide you with the resources to learn, no matter the world language you speak. To help us with this massive effort, we have integrated our open-source code-base & curriculum with [Crowdin](https://crowdin.com/) - A tool to help us localize our code-base.

The translation workflow is split into two main activities:

- **Translating** curriculum files, documentation and UI elements like buttons, labels, etc.:

  As a translator you can sign up on [our translation platform](https://translate.freecodecamp.org) and contribute translations in any of the 30+ languages enabled in there. If you do not see a language that you speak and are interested in translating, [visit this frequently asked question](/FAQ?id=can-i-translate-freecodecamp39s-resources).

- **Proofreading** the translations for all of the above.

  Proofreaders verify that the community contributed translations are uniform in tone and free of common issues like typos, etc. In short, they ensure that the quality of translations is high. Note that we do not use machine translations for a reason.

> [!WARNING]
> We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Prepare yourself for contributions

> The freeCodeCamp Localization Roadmap – There Are No Speed Limits

You can translate as much as you want, when you want. It's only a matter of how much time and energy you are willing to invest as a volunteer translator.

We just ask that you understand the following:

1. **Translations are a team effort.**

   Translating freeCodeCamp's resources is one of the most fun and rewarding experiences as a contributor, and it works best if you involve your friends and colleagues who speak the same world language as you.

   We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [translators chat room](https://chat.freecodecamp.org/channel/translators) with your friends and showing your interest before starting off with translations. Crowdin makes it easy to contribute translations, but it's still a lot of work.

   We want you to enjoy contributing and not burn out or lose interest.

   A small group of 4-5 individuals is a good size to start your niche for your world language. You can then recruit even more friends to join the team.

2. **It costs quite a lot to spin servers for each language.**

   On the surface it might not seem how complicated the technical stack is, but it costs quite a lot to keep the engines running. This includes provisioning additional servers and dedicating staff to look after them.

   freeCodeCamp.org is committed to providing these for free as always, however we need to prioritize resources for those who need it the most. The last thing we want is to shutdown servers for a language if the translation activity dies off & things become outdated.

   Once a language reaches at least a few certifications on the curriculum we can begin deploying the language live on [`/learn`](https://www.freecodecamp.org/learn), while you continue to translate the remaining certifications.

   For example, we would want to deploy at least the entire front-end certifications suite when we ship a new world language for the first time.

3. **But what about the languages not listed on the translation platform?**

   We have looked at our user base and added 30+ most widely spoken languages to the list of enabled languages on the translations platform. Some languages like Chinese and Spanish are already deployed live on **"/learn"** at this moment.

   Unfortunately, the list does not include hundreds of languages out there. We get dozens of requests from contributors like you every day who want to help translate the site into a language they speak.

   We are definitely looking forward to adding more languages to the list, but as you may already guess, it would only be feasible if we get enough momentum around a world language.

   If you would like us to include a new world language, we recommend getting your friends excited about this.

   Once you have a small group of people (at least 4-5) interested and committed, we can hop on a call. We will explain all the details and walk you through some of the tools and processes.

## Getting started

First, make sure you come say "Hi" in our [translators chat room](https://chat.freecodecamp.org/channel/translators). We post regular updates about translating resources and answer a lot of your queries in there.

Next, head to our [translation platform](https://translate.freecodecamp.org/) and login (if you have not contributed to translations before, you will need to create an account).

Finally, go through the detailed walk-thru below to understand the translation tools and workflows at your disposal.

Happy translating.

## Select a Project and File

Once you visit the translation platform, you should see multiple "projects" available for translation:

1. [Contributing documentation](https://translate.freecodecamp.org/contributing-docs) project, which contains the files for this documentation site.
2. [Coding Curriculum](https://translate.freecodecamp.org/curriculum) project, which contains our challenge files for our curriculum.
3. [Learn User Interface](https://translate.freecodecamp.org/learn-ui) project which contains strings for UI elements like buttons, labels, etc. for our learning platform.

Select any project you want to contribute to, and you will see a list of available languages for translation.

![Image - List of available languages](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Select the language you want to work on, and you will see the complete file tree.

![Image - List of available files](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Each file and folder will show a progress bar. The **blue** portion of the progress bar indicates what percentage of the file has been translated, while the **green** portion of the progress bar indicates what percentage of the file has been approved by the proofreading team.

Select a file to work on and Crowdin will open the editor view.

> [!NOTE]
> When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Translate Curriculum

![Image - Editor View](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin separates a document into translatable "strings", usually sentences. Each string is translated individually. Referring to the image above:

1. A string highlighted in green already has a proposed translation.
2. A string highlighted in red does _not_ have a proposed translation.
3. A string with greyed out text is not translatable. This is the case for code blocks and other content that must not be translated. You will be unable to select these strings in the editor.
4. If a contributor has proposed a translation to a string, Crowdin will display those proposals here. You will not be able to save an identical translation - instead, if a translation is accurate, you should click the `+` icon to "upvote" it. An inaccurate translation can be "downvoted" with the `-` icon.
5. Crowdin will recommend translations based on Translation Memory (TM) or Machine Translation (MT). Translation Memory refers to similar or identical strings that we have translated/approved in other files. Machine Translation refers to translations recommended by their integrated library.
6. This is the editor pane, where you may write your proposed translation for the selected string.
7. The currently selected string in the editor will be highlighted in yellow.
8. Here you will see tags indicating the state of the string. `Done` means the string has at least one proposed translation. `Todo` means the string does not have any proposed translations.
9. Here you can see the comments window. If you have questions or concerns about a particular string, you can leave a comment on the string here for other translators to see.
10. These two "pane" buttons will hide the left (document) and right (comments) views.

> [!NOTE]
> If you see a hidden string that includes translations, please notify us in the [translators chat room](https://chat.freecodecamp.org/channel/translators) so we can remove the translation from memory.

When you have completed a translation for a string, select the `Save` button to store your translation on Crowdin. Other contributors will then be able to vote on your translation and proofreaders will be able to approve it.

You are welcome to translate as many strings as you like - there are no additional steps required when you complete a full file or propose a new translation. Clicking the `Save` button is all that is needed to store a translation.

> [!NOTE]
> If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate Documentation

Translating our contributing documentation is a similar flow to translating our curriculum files.

> [!NOTE]
> Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

## Rate Translations

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Quality Assurance Checks

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING]
> You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Do not translate the content within `<code>` tags. These tags indicate text that is found in code and should be left in English.
- Do not add additional content. If you feel a challenge requires changes in the text content or additional information, you should propose the changes through a GitHub issue or a pull request that modifies the English file.
- Do not change the order of content.

If you have any questions, feel free to reach out to us in our [translators chat room](https://chat.freecodecamp.org/channel/translators) and we will be happy to assist you.
