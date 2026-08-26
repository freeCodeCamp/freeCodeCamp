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

`post-create.sh` tries to set port 3000 to public for you. If it cannot, open
the **Ports** panel, right click port `3000`, then choose **Port Visibility >
Public**.

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
- `.devcontainer/on-create.sh` creates `.env`. In a GitHub Codespace it rewrites `HOME_LOCATION` and `API_LOCATION` to the forwarded port URLs, because `localhost` in a browser tab points at your own machine, not at the Codespace.
- `.devcontainer/post-create.sh` restores the Turbo cache baked into the image, waits for MongoDB, and seeds the database.
- `docker/devcontainer/Dockerfile` builds the image that `.devcontainer/docker-compose.yml` pulls from GHCR.

## More information

For the full contribution guide, see
https://contribute.freecodecamp.org/how-to-setup-freecodecamp-locally
