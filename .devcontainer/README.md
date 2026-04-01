# To start developing:

Wait for the container to build and start. You will see "Done. Press any key to close the terminal." in the terminal when it's ready. 

Once it's running, you can start the development server:

**Option 1:** Press `Ctrl+Shift+P`, type "Run Task", select "Start Development"
**Option 2:** Open a terminal and run:

```bash
pnpm run develop
```

## Optional setup

> ** macOS users:** After installing Homebrew during setup, if you see
> `brew: command not found`, you need to add Homebrew to your PATH first.
> Run this in your terminal:
>
> ```bash
> eval "$(/usr/local/bin/brew shellenv zsh)"
> ```
>
> To make this permanent, add it to your `~/.zprofile` file.

For E2E tests:

```bash
npx playwright install chromium
```

For curriculum tests:

```bash
pnpm -F=curriculum install-puppeteer
```

## More information

For detailed setup instructions and contribution guidelines, visit:
https://contribute.freecodecamp.org/how-to-setup-freecodecamp-locally
