Node and Git are supposed already installed.

### Step 1: Change storage location (optional)

If you don't want docker folders to be stored on your C: drive, you can move them to your D: drive (for example).

- Create two folders on D: drive (with powershell or cmd)

```powershell
mkdir .docker 
mkdir docker-projects
```

- Then, from `C:\Users\user_name`, in a powershell console (not cmd), create two junction links (You may need to be admin and/or in developer mode to do that):

```powershell
cmd mklink .docker /J D:\.docker
cmd mklink docker-projects /J D:\docker-projects
```

The remaining steps are already given in the docs file [how-to-setup-freecodecamp-locally](/docs/how-to-setup-freecodecamp-locally.md).
See it for more details. I suppose you have already forked freeCodeCamp on GitHub.

### Step 2: Install docker-toolbox for Windows Home


### Step 3: Clone your copy of freeCodeCamp

Once the installation is complete, launch the Docker Quickstart Terminal as admin user. Wait still it's complete.

---

**Only if you don't follow step 1:** Create `docker-projects` folder in home directory
```shell
cd ~
mkdir docker-projects
```
---

Go to the user folder in bash prompt:

```shell
cd ~
cd docker-projects
```

Clone your fork of freeCodeCamp there:
```shell
git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
```

Then add to your repo a remote reference to the main freeCodeCamp repository:

```shell
cd freeCodeCamp
git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
```

### Step 4: copy `sample.env` file

With the Git Bash prompt:

```shell
cp sample.env .env
```

Note the IP adress given by the output from `docker-machine ip` command.
Then open `.env` file and change `DOCKER_HOST_LOCATION` value to the IP value formerly noted.

### Step 5: Build with Docker

On the Git Bash (always from the freeCodeCamp folder), write the commands:

```shell
npm run docker:init
npm run docker:install
npm run docker:seed
# optional:
npm ci --ignore-scripts
```

(Wait for each command to fully complete)

### Step 6: Start up the API server

```shell
npm run docker:develop
```

To view in your browser, go to the adress indicated:
```shell
You can now view @freecodecamp/client in the browser.
client_1        |
client_1        |   Local:            http://0.0.0.0:8000/
```

Important: replace `0.0.0.0` between `http://` and `:8000/` by the IP indicated in step 4.

Repeat only this step 6 to run the next sessions (launch docker quickstart terminal as normal user).

### Step 7: update your freeCodeCamp repos (optional)

Update your local copy of the freeCodeCamp upstream repository:

```shell
git fetch upstream
git reset --hard upstream/master
git push origin master --force
# for verification (the resulting output should be empty):
git diff upstream/master
```

### One important remark

An important fact to be noted is that you *must* use Git Bash from docker QuickStart terminal in order to achieve the docker build (From step 3).