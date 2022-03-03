# How to Work on Practice Projects

The `tools/challenge-helper-scripts` folder contains tools to help facilitate the creation and maintenance of the freeCodeCamp project-based curriculum.

## Create a new project

Run `npm run create-project`. This opens up a command line ui that guides you through the process. Once that has finished, there should be a new challenge in the English curriculum that you can use for the first step of the project. For example, if you created a project called `test-project` in the Responsive Web Design certification, it would be in `curriculum/challenges/english/01-responsive-web-design/test-project`.

If you want to create new steps, the following tools simplify that process.

## create-next-step

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### How to run script:

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run create-next-step
```

## create-empty-steps

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script:

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script:

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## delete-step

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### How to run script

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. Change to the directory of the project.
2. Run the following npm command:

```bash
npm run update-step-titles
```
