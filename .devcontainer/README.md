# Develop freeCodeCamp in a container

The container builds itself, installs every dependency, starts MongoDB, and seeds a test user. Wait until the terminal shows `Done. Press any key to close the terminal.`

## Start the application

Choose one option:

- Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`), type `Run Task`, then select **Start freeCodeCamp**.
- Open a terminal and run:

  ```bash
  pnpm run develop
  ```

The first build takes several minutes. VS Code shows a notification when port `8000` is ready. Open that notification to view the client.

To build one part of the curriculum instead of all of it, set a filter:

```bash
FCC_SUPERBLOCK='responsive-web-design' pnpm run develop
```

## Services

| Port   | Service | Notes                                   |
| ------ | ------- | --------------------------------------- |
| `8000` | Client  | The learning platform.                  |
| `3000` | API     | API docs are at `/documentation`.       |
| `8025` | Mailpit | Every email the API sends arrives here. |

### Codespaces: port 3000 must be public

The client calls the API from your browser, across two different forwarded
origins. A private port answers that call with a GitHub sign-in redirect, and
the browser reports it as a CORS error.

`post-create.sh` attempts this, but the token a codespace provides does not
carry the `codespace` scope, so the attempt usually fails. Open the **Ports**
panel, right click port `3000`, then choose **Port Visibility > Public**. Run
`gh auth login -s codespace` once if you want the script to do it for you.

A public port is reachable by anybody who has the URL, and `sample.env` sets
`FCC_ENABLE_DEV_LOGIN_MODE=true`, which serves a sign-in route that needs no
password. Stop the codespace when you finish working.

## Optional setup

For end-to-end tests:

```bash
npx playwright install chromium
```

For curriculum tests:

```bash
pnpm -F=curriculum install-puppeteer
```

## How the container is built

- `docker/docker-compose.yml` defines MongoDB, the replica-set initialiser, and Mailpit. Contributors who work without a container use the same file.
- `.devcontainer/docker-compose.yml` adds the development container itself. The container and Mailpit share the database container's network namespace, so `MONGOHQ_URL` and `MAILPIT_HOST` in `sample.env` need no change, and no port is published to your machine. Do not remove `network_mode: service:db`.
- `.devcontainer/on-create.sh` creates `.env` from `sample.env`.
- `.devcontainer/codespace-env.sh` rewrites `HOME_LOCATION` and `API_LOCATION` to the forwarded port URLs, but only inside a Codespace, because `localhost` in a browser tab points at your own machine. It does nothing anywhere else.
- `.devcontainer/post-create.sh` restores the Turbo cache baked into the image, runs `codespace-env.sh`, waits for MongoDB, and seeds the database. The Codespace URL rewrite belongs to `postCreateCommand`, not `onCreateCommand`, because a prebuild snapshots the container after `onCreateCommand` and would freeze the wrong hostname.
- `docker/devcontainer/Dockerfile` builds the image that `.devcontainer/docker-compose.yml` pulls from GHCR.

## More information

For the full contribution guide, see
https://contribute.freecodecamp.org/how-to-setup-freecodecamp-locally
