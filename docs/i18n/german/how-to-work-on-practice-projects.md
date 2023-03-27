# Wie man an Übungsprojekten arbeitet

Our practice projects use a step-based approach to teach concepts to campers. Ein Projekt besteht aus mehreren Dateien, die wir als **"Schritte"** bezeichnen. Diese Dateien werden nach der Challenge-ID benannt, um Probleme mit dem Übersetzungsablauf zu vermeiden. Das macht es leider schwierig, die zu einem bestimmten Schritt gehörende Datei zu finden.

Wir haben ein Editor-Tool für Aufgaben entwickelt, das hier Abhilfe schafft. Mit diesem Tool kannst du durch die verfügbaren Projekte und die Schritte für jedes Projekt (in der richtigen Reihenfolge) navigieren. Außerdem gibt es einen eingebetteten Code-Editor, mit dem du die Dateien direkt bearbeiten kannst.

## Den Aufgaben-Editor verwenden

In dieser Anleitung erfährst du, wie du mit unserem Aufgaben-Editor an den Übungsprojekten arbeiten kannst.

### Starten des Editors

Um den Editor zu starten, stelle sicher, dass du dich im Stammverzeichnis von freeCodeCamp befindest. Then, run `pnpm run challenge-editor` to start both the client and the API that powers the editor.

Der Client läuft auf Port `3300`, so dass du ihn unter `http://localhost:3300` erreichen kannst. Die API läuft auf Port `3200`, um Konflikte mit dem Lernclient und dem Server zu vermeiden. Dies ermöglicht es dir, die freeCodeCamp-Anwendung gleichzeitig mit dem Editor laufen zu lassen, so dass du deine Änderungen lokal testen kannst.

### Navigating the Editor

The default view will list the available `superblocks` - these are the certifications. Click on the certification link you want to work on.

This will take you to the list of blocks. These are the practice projects. Click on the project link you want to work on.

This will take you to a list of steps for the project. If you are working on an existing step, you can click on the step link to open the editor. If you are adding or removing steps, click the `Use the step tools` link to switch to the step tools for that challenge.

### Editing Steps

When you click on a step, you'll be taken to the editor. This is a basic text editor that offers syntax highlighting.

After you have made your changes, click the `Save Changes` button to save your changes. You will get a browser alert letting you know that your changes are ready to commit. Note that you'll need to use `git` manually to stage and commit your files - this tool will not do that for you.

### Step Tools

When you click the `Use the step tools` link, you'll be taken to the step tools page. This allows you to add or remove steps from the project.

#### Create Next Step

Clicking this button will add a new step at the end of the project. This step will use the previous step's code as the seed.

#### Create Empty Steps

Enter the number of steps you want to add in the input. Then, clicking the button will create that many empty steps at the end of the project.

#### Insert Step

Enter the step number that you want to add. Then, click the `Insert Step` button to add the step. The following steps will be re-ordered.

#### Delete Step

Enter the step number you want to delete. Then click the `Delete Step` button to remove that step. This will automatically update the step numbers for the remaining steps.

#### Update Step Titles

You should not have to use this tool unless you've manually deleted or added steps. This tool will reorder the step numbers.

## Using the Scripts Manually

If you want to work on the steps manually, in your local IDE, you can run the step management scripts directly.

The `tools/challenge-helper-scripts` folder contains tools to help facilitate the creation and maintenance of the freeCodeCamp project-based curriculum.

### Create a new project

Run `pnpm run create-project` from the root directory. This opens up a command line ui that guides you through the process. Once that has finished, there should be a new challenge in the English curriculum that you can use for the first step of the project. For example, if you created a project called `test-project` in the Responsive Web Design certification, it would be in `curriculum/challenges/english/01-responsive-web-design/test-project`.

If you want to create new steps, the following tools simplify that process.

### create-next-step

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

#### How to run script:

1. Wechsle in das Verzeichnis des Projekts.
2. Run the following command:

```bash
pnpm run create-next-step
```

### create-empty-steps

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

#### How to run script:

1. Wechsle in das Verzeichnis des Projekts.
2. Run the following command:

```bash
pnpm run create-empty-steps X # where X is the number of steps to create.
```

### insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

#### How to run script:

1. Wechsle in das Verzeichnis des Projekts.
2. Run the following command:

```bash
pnpm run insert-step X # where X is the position to insert the new step.
```

### delete-step

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

#### How to run script

1. Wechsle in das Verzeichnis des Projekts.
2. Run the following command:

```bash
pnpm run delete-step X # where X is the step number to be deleted.
```

### update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

#### How to run script

1. Wechsle in das Verzeichnis des Projekts.
2. Run the following command:

```bash
pnpm run update-step-titles
```
