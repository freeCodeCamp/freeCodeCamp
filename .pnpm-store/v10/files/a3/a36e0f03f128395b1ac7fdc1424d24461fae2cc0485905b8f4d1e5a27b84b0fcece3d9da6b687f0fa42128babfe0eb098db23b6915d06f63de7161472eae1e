# Localizations

We welcome any localization for axe-core. For details on how to contribute, see the [Contributing section](../README.md#contributing) of the main README. For details on the message syntax, see [Check Message Template](../doc/check-message-template.md).

To create a new translation for axe, start by running `grunt translate --lang=<langcode>`. This will create a JSON file with the default English text in it for you to translate. Alternatively, you could copy `_template.json`.

To update an existing translation file, re-run `grunt translate --lang=<langcode>`. This will add new messages used in English and remove messages that are no longer used in English.

`_template.json` is a generated file which is created every time axe is built. It's compiled using each rule's `description` and `help` properties, as well as each check's `metadata.messages` property. To update the `_template.json` file you'll need to update the corresponding [rule](../lib/rules) or [check](../lib/checks) metadata file and rebuild.
