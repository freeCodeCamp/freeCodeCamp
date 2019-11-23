<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# freeCodeCamp를 로컬 시스템에 설치하기
로컬 시스템에(역주: 예를 들어서, 내 컴퓨터) freeCodeCamp를 설치하려고 하신다면 이 가이드라인을 따라 주세요. 주기적으로 기여(역주: 참여)해 주실 생각이라면 이를 추천드립니다.

예를 들어서 가이드나 코딩챌린지 페이지 미리 보기라든지 코드를 디버깅하거나 버그를 고치는 등의 몇 가지 기여 흐름도는 여러분에게 freeCodeCamp를 로컬하게 진행하기를 기대합니다.

## GitHub에 있는 저장소를 복사하기
['Forking'](https://help.github.com/articles/about-forks/)은 여러분만의 GitHubd에 있는 freeCodeCamp의 주요 저장소의 복사본을 갖게 해 줍니다.

이는 아주 중요합니다. GitHub에 있는 freeCodeCamp의 복사본을 갖게 해 주거나 저장소를 다운받아 로컬하게 작업하도록 도와주기 때문입니다. 후에, 여러분이 로컬하게 작업한 결과물을 fork를 통해 여러분이 가지고 있는 복사본에서메인 저장소로 옮기는 것을 pull request를 통해 요청할 수 있습니다.

> **ProTip:**
> `https://github.com/freeCodeCamp/freeCodeCamp`에 있는 메인 저장소는 `upstream` 저장소로도 불리웁니다.
> `https://github.com/YOUR_USER_NAME/freeCodeCamp`에 있는 fork(역주: 복사본)은 `origin`이라고 불리기도 합니다.

#### 저장소 `https://github.com/freeCodeCamp/freeCodeCamp`를 fork하는 방법
1. GitHub에 있는 freeCodeCamp 저장소로 갑니다: <https://github.com/freeCodeCamp/freeCodeCamp>
2. 오른쪽 위에 위치한 "Fork" 버튼을 누릅니다. ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. 저장소가 제대로 fork되었다면, `https://github.com/YOUR_USER_NAME/freeCodeCamp`에서 freeCodeCamp 저장소의 복사본을 확인하실 수 있습니다.

![GIF - How to fork freeCodeCamp on GitHub](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## 개발환경 준비하기
사전에 필요한 것들을 설치했다면 개발 환경을 준비해 봅시다. 이는 흔한 개발 작업 방식이며 한 번만 하시면 됩니다.

#### 개발 환경 준비하는 방법:
1. 아직 [Git](https://git-scm.com/)이나 Git 클라이언트(서버로부터 정보나 서비스를 받는 컴퓨터)가 없다면 설치하세요. 컴퓨터에 운영체제와 함께 깔려있던 버전이 오래된 것일 수 있으니 최신 버전으로 업데이트해 주세요.

2. (선택사항이나 추천드립니다) [GitHub에 SSH 키 셋업하기](https://help.github.com/articles/generating-an-ssh-key/)

3. 자신에게 맞는코드에디터 설치하기
    [VS Code](https://code.visualstudio.com/)나 [Atom](https://atom.io/)을 추천드립니다. 이 두 에디터는 잘 만들어졌으며 무료이고 오픈 소스 코드 에디터들입니다.

4. 에디터에 linting 설치하기
    반드시 [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html)를 설치해 주세요. 이는 [freeCodeCamp의 자바스크립트 스타일 가이드](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121)와 일치하지 않는 부분을 표시해 줄 겁니다.

    > linting 에러들을 그냥 지나치지 말아 주세요. 이것들은 여러분을 **도와주려는** 목적이며, 간결한 코드를 유지하도록 해 줍니다.

## freeCodeCamp의 복사본을 복제하기
['Cloning'](https://help.github.com/articles/cloning-a-repository/)은 여러분 혹은 다른 사람의 소유인 '원격(remote)' 장소에서 **다운로드**한 저장소의 복사본입니다. 여러분의 경우, 이 원격 장소는 freeCodeCamp 저장소의 '분기(fork)'로 `https://github.com/YOUR_USER_NAME/freeCodeCamp`에서 확인할 수 있어야 합니다.

내 컴퓨터에서 아래 명령어를 실행하세요:

1. 터미널을 열고 / 명령어 프롬프트 / 프로젝트 디렉토리에 있는 셸

    _예를 들어서: `/프로젝트 디렉토리/`_

2. `YOUR_USER_NAME`을 여러분의 깃허브 아이디로 바꾼 다음에 freeCodeCamp의 복사본을 복제하세요.

    ```sh
    git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
    ```

이는 전체 freeCodeCamp 저장소를 여러분의 디렉토리로 다운로드되도록 할 것입니다.

노트: `--depth=1` 는 여러분이 복사한 저장소를 최근에 이루어진 히스토리와 커밋만을 겉핥기 식으로 복제합니다.


## 메인 저장소에 `upstream` 설치하기
지금까지 여러분은 fork의 복사본을 다운로드했고, 이제 `upstream`을 설치할 차례입니다.

이전에도 언급했듯이, `https://github.com/freeCodeCamp/freeCodeCamp`에 있는 메인 저장소는 종종 `upstream` 저장소로도 종종 불리웁니다. `https://github.com/YOUR_USER_NAME/freeCodeCamp`에 있는 여러분의 fork(역주: 복사본)은 `origin` 저장소로도 불리울 겁니다. 

`origin` 저장소 외에도 로컬 클론에서 `upstream` 저장소에 대한 참조가 필요합니다. 그럼으로써 여러분은 메인 저장소의 변경 사항을 번거롭게 복사와 복제를 매번 할 필요없이 동기화시킬 수 있습니다.


1. 방금 복사한 freeCodeCamp 디렉토리로 갑니다:

    ```sh
    cd freeCodeCamp
    ```

2. freeCodeCamp 메인 저장소로의 원격 참조를 추가합니다:

    ```sh
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3. 제대로 되었는지 확인합니다:

    ```sh
    git remote -v
    ```

    결과물이 아래와 비슷하여야 합니다:

    ```sh
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
    origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
    upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## freeCodeCamp를 개인 컴퓨터에서 사용하기
여러분은 freeCodeCamp 복사본을 가지고 있습니다. 아래 가이드를 따라 오시면 로컬(local)에서 이를 실행시킬 수 있습니다. 이는 여러분이 아래 사항들을 할 수 있도록 도와줍니다:

- 학습 플랫폼에 나타날 페이지의 편집 내용을 미리 보기
- UI 관련 문제 및 개선 작업
- 응용 프로그램 서버 및 클라이언트 응용 프로그램 관련 문제 디버깅 및 수정

단순히 파일을 편집하거나 `리베이스(rebase)`를 수행하거나 `병합(merge)` 충돌을 해결하는 경우 로컬(local, 역주: 내 컴퓨터)에서 freeCodeCamp 실행을 건너 뛸 수 있습니다. 나중에 언제든지 이 부분으로 돌아올 수 있습니다.

[내 컴퓨터에서의 freeCodeCamp 실행 건너뛰기](#making-changes-to-your-clone-of-freecodecamp-locally)

현재 freeCodeCamp를 로컬에서 실행하는 두 가지 방법이 있습니다.
- Docker (추천)
- Local

여러분에게 위의 방법 중 **하나를** 따를 것을 권해 드립니다.

Docker는 설치 과정에 오류가 적고 이상적인 개발자 환경을 제공합니다. Docker를 사용하여 우리에게 보여지지는 않지만 추가적으로 필요할 소프트웨어들을 설치합니다. 이는 대부분의 기계/운영체제 전반에 걸쳐 일관되고 안정적으로 지원될 겁니다.

만약에 여러분이 위의 한 방법을 사용하는데 문제가 생긴다면, 다른 방법을 시도해 보세요. 만약에 두 가지 방법에서 모두 문제가 발생한다면, 첫번째로 해당 문제에 관해서 인터넷 검색을 통해 해결 방법을 찾아 보세요. 찾지 못하셨다면 한 번 GitHub [issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) 페이지에 다른 개발자가 같은 문제를 제기한 건 없는지 보고 이도 없으면 문제점을 보고 해 주세요.

그리고 언제나 부담없이 [기여자 대화방](https://gitter.im/FreeCodeCamp/Contributors)에 들러 주세요. 빠른 질문과 답변이 오고 갑니다.

### 사전에 필요한 것들 설치하기
사전에 필요한 소프트웨어들을 설치하는 것으로 시작해 봅시다:

소프트웨어는 Doucker와 로컬에 모두 필요합니다:

| Prerequisite | Version | Notes |
| ------------ | ------- | ----- |
| [Node.js](http://nodejs.org)| `10.x`  | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm (comes bundled with Node)| `6.x`   | Does not have LTS releases, we use the version bundled with Node LTS |

**Docker에 추가적으로 필요한:**

| 사전에 필요한 소프트웨어 | 버전 | 노트 |
| ------------ | ------- | ----- |
| [Docker CE](https://docs.docker.com/install/) | `Stable` | - |
| [Docker Compose](https://docs.docker.com/compose/install/) | `Stable` | 운영체제가 macOS나 Windows가 아니면 따로 설치해 주셔야 합니다 |

**로컬에 추가적으로 필요한:**

| 사전에 필요한 소프트웨어 | 버전 | 노트 |
| ------------ | ------- | ----- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Release Notes](https://docs.mongodb.com/manual/release-notes/), 노트: 현재 `3.6` 버전을 사용중이며, [업그레이드가 필요하면](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

#### 중요:
위의 소프트웨어들을 항상 최신 버전으로 업데이트해서 사용하실 것을 권해드립니다. 이는 Long Term Support (LTS)로도 알려져 있습니다.
만약에 Node.js가 컴퓨터에 설치되어있다면, 아래 명령어를 통해 현재 버전을 확인하실 수 있습니다:

```sh
node -v
npm -v
```
 
만약 다른 버전을 가지고 있다면, 권해드리는 버전으로 설치해 주세요. 저희는 해당 버전에서 발생한 문제점만 도와드릴 수 있습니다.

윈도우스 사용자:
> 사용하시는 명령어 도구(예를 들어, cmd, PowerShell, Git Bash for Windows, WSL)에 올바른 사용자 권한으로 반드시 설정되어 있도록 하세요. 가능하다면, 해당 툴을 관리자 모드로 설정하셍. 윈도우스에서는 관리자 모드로 변경하려면 해당 프로그램에서 오른쪽 클릭 후에 `Launch as an Administrator`를 선택하시면 됩니다.

#### 사전에 필요한 소프트웨어를 설치하는데 어려움을 겪고 있습니다. 어떻게 해야 할까요?
저희는 macOS 10.12나 Ubuntu 16.04, Windows 10처럼 많이 사용하는 운영체제의 최신 버전에 대해서 주기적으로 개발을 진행하고 있습니다. 직면하신 해당 문제점을 Google이나 Stack Overflow, Stack Exchange 등에서 검색해 보실 것을 권해드립니다. 앞서 다른 이가 같은 문제점에 대해서 도움을 구해 답을 얻었을 확률이 높습니다.

만약 다른 운영체제를 사용하거나 여전히 문제를 해결하지 못했다면 [contributors community on our public forum](https://www.freeCodeCamp.org/forum/c/contributors)이나 [contributor's chat room](https://gitter.im/freeCodeCamp/Contributors)으로 연락주세요.

**사전에 필요한 소프트웨어들에 대한 문제점들을 GitHub issues화 하는 거는 삼가주세요. 이는 freeCodeCamp 프로젝트와는 무관하기 때문입니다.**

### Dependencies 환경 설정하기

#### 첫번째 단계: 환경(Environment Variable File) 설정하기
미리 설정된 API keys와 environmet variables는 `sample.env` 파일에 저장되어 있습니다. 이 파일은 설치단계에서 동적으로 접근할 수 있는 새로운 이름의 `.env` 파일로 복사되어야 합니다. 


```sh
# "sample.env"를 복사해서 ".env"라고 이름 지으세요.
# 필요한 API keys와 secrets으로 채우세요:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

`.env` 파일에 있는 keys는 app을 로컬하게 돌리기 위해 변경 될 필요가 *없습니다.* `sample.env`에서 복사된 미리 설정된 값들 그대로 두셔도 됩니다.

다만 명심하실 것은 추가적인 서비스를 이용하려 하실 대에는 해당 서비스에 대한 개별 API keys를 획득하신 이후에 `.env` 파일을 변경해 주셔야 합니다.

**Docker Build:** Docker build를 이용하는데 Docker 설치가 Docker Toolbox (macOS와 Windows 오랜 버전에 적용되는)를 사용하도록 지시한다면, `.env` 파일 안에 있는 `DOCKER_HOST_LOCATION` 를 `docker-machine ip` 명령어의 결과물로 변경해 주셔야 합니다. 만약 Linux처럼 Docker를 지원하는 운영체제를 사용하거나 Docker 데스크탑을 (macOS나 Windows 10의 최신 버전) 사용 중이라면 `DOCKER_HOST_LOCATION`를 이미 설정된 값으로 남겨 두셔도 됩니다.

#### 두번째 단계: Dependencies 설치하기

이 단계에서는 어플리케이션을 실행시키기 위해서 필요한 dependencies를 설치합니다.

**Docker Build:**
```shell
npm run docker:init
npm run docker:install
npm run docker:seed
```

위의 각 Docker 명령어는 실행을 완료하는데 시간이 좀 필요합니다. 다음 명령어를 실행하기 전에 각 명령어가 완전히 실행 완료될 때까지 기다리셔야 합니다.

Docker 외에도 npm packages 몇 가지를 설치하셔야 합니다. git을 사용하지 않고 local에서만 app을 실행하실 예정이라면 건너뛰셔도 됩니다.

```shell
npm ci
```

위의 모든 사항은 local 개발 환경을 설정할 때 한 번만 실행하시면 됩니다.

**Local Build:**

```sh
# Install NPM dependencies
npm ci
```

#### 세번째 단계: MongoDB 시작하기 & 데이터베이스 준비하기 (local build만)

이 단계는 local build시에만 해당되니 Docker build를 사용하시면 네번째 단계로 가주세요.

MongoDB가 설치될 때 자동으로 설정된 사항과 다르지 않은 한 `.env`파일에 있는 `MONGOHQ_URL`로 저장된 URL이 잘 작동되어야 합니다. 이전에 한 번 수정한 적이 있으면, 이 단계를 실행하기 위해서 필요한 값으로 재설정해 주셔야 합니다.

어플리케이션을 로컬에서 실행하기 전에, MongoDB를 먼저 시작해 주셔야 합니다:

각기 다른 터미널에서 MongoDB 서버 시작하기:
- On macOS & Ubuntu:

    ```sh
    mongod
    ```

- 윈도우스에서는 전체 경로를 'mongod' binary로 구체적으로 설정해 주셔야 합니다.

    ```sh
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

    `3.6`을 여러분의 컴퓨터에 설치된 버전으로 변경해 주세요.

> ProTip:
> 바탕화면에 MongoDB를 설치하면 매번 시작해야하는 수고로움을 피할 수 있습니다.
> [MongoDB 사이트에서 각 운영체제를 위한 문서 읽어보기](https://docs.mongodb.com/manual/administration/install-community/)

다음으로는 데이트베이스를 준비해 봅니다. 이 단계에서는 서비스에 필요한 초기 데이터로 MongDB 서버를 채울 명령어를 실행합니다. 다른 것들과 함께 몇 가지 schemas를 포함합니다.

```sh
npm run seed
```

#### 네번째 단계: freeCodeCamp client application와 API server 시작하기
이제 API server와 client applications를 시작할 수 있습니다.

**Docker Build:**
```shell
npm run docker:develop
```

**Local Build:**
```sh
npm run develop
```

이 명령어 한 줄은 API server와 client applications를 포함해 모든 서비스를 여러분이 사용할 수 있도록 시작합니다. 

일단 준비되면, 웹브라우저를 열어 <http://localhost:8000>로 방문하세요. app이 실행된다면 축하드립니다 - 다 하셨습니다!

> ProTip:
> API Server는 APIs를 `http://localhost:3000`에서 지원합니다.
> Gatsby app은 client application를 `http://localhost:8000`에서 지원합니다.

<http://localhost:3000/explorer>방문하시면 사용 가능한 APIs를 확인하실 수 있습니다.

축하드려요 🎉🎉🎉! 이제 여러분의 로컬 컴퓨터에서 freeCodeCamp 전체 학습 플랫폼의 복사본을 실행하실 수 있게 되었습니다.

## How to Sign in when working locally
Your local setup automatically populates a local user in the database. Clicking the `Sign In` button will automatically authenticate you into the local application.

However, accessing the user portfolio page is a little tricky. In development, Gatsby takes over serving the client-side pages and hence you will get a `404` page for the user portfolio when working locally.

Simply clicking the `Preview Custom 404 Page` button will forward you to the correct page.

![Image - How to sign in when working locally](https://user-images.githubusercontent.com/1884376/52650951-48922e80-2f11-11e9-9eee-360a25ad28ad.gif)

## Quick commands reference when working locally

A quick reference to the commands that you will need when working locally.

**Docker Build:**

| command | description |
| ------- | ----------- |
| `npm run docker:init` | Prepare containers for installation of dependencies. |
| `npm run docker:install` | Install / re-install all dependencies and bootstraps the different services. |
| `npm run docker:seed` | Parse all the challenge markdown files and inserts them into MongoDB. |
| `npm run docker:develop` | Start the freeCodeCamp API Server and Client Applications. |
| `npm run docker:test:init` | Bootstrap the test container, necessary for testing in docker. |
| `npm run docker:test -- -c "npm run test` | Run all JS tests in the system, including client, server, lint and challenge tests. |
| `npm run docker:test -- -c "npm run test:curriculum` | Run the curriculum test suite. |
| `npm run docker:test -- -c "npm run test:client` | Run the client test suite. |
| `npm run docker:test -- -c "npm run test:server` | Run the server test suite. |
| `npm run docker:clean` | Uninstall all dependencies and cleans up caches. |

**Local Build:**

| command | description |
| ------- | ----------- |
| `npm ci` | Installs / re-install all dependencies and bootstraps the different services. |
| `npm run seed` | Parses all the challenge markdown files and inserts them into MongoDB. |
| `npm run develop` | Starts the freeCodeCamp API Server and Client Applications. |
| `npm test` |  Run all JS tests in the system, including client, server, lint and challenge tests. |
| `npm run test:client` | Run the client test suite. |
| `npm run test:curriculum` | Run the curriculum test suite. |
| `npm run test:server` | Run the server test suite. |
| `npm run clean` | Uninstalls all dependencies and cleans up caches. |

## Making changes to your clone of freeCodeCamp locally
You can now make changes to files and commit your changes to your local clone of your fork.

Follow these steps:

1. Validate that you are on the `master` branch

    ```sh
    git status
    ```

    You should get an output like this:

    ```sh
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    If you are not on master or your working directory is not clean, resolve any outstanding files/commits and checkout `master`:

    ```sh
    git checkout master
    ```

2. Sync the latest changes from the freeCodeCamp upstream `master` branch to your local master branch

    **Note:** If you have any outstanding Pull Request that you made from the `master` branch of your fork, you will lose them at the end of this step. You should ensure your pull request is merged by a moderator before performing this step. To avoid this scenario, you should *always* work on a branch separate from master.

    This step **will sync the latest changes** from the main repository of freeCodeCamp. It is important that you rebase your branch on top of the latest `upstream/master` as often as possible to avoid conflicts later.

    Update your local copy of the freeCodeCamp upstream repository:
    ```sh
    git fetch upstream
    ```

    Hard reset your master branch with the freeCodeCamp master:

    ```sh
    git reset --hard upstream/master
    ```

    Push your master branch to your origin to have a clean history on your fork on GitHub:

    ```sh
    git push origin master --force
    ```

    You can validate your current master matches the upstream/master by performing a diff:

    ```sh
    git diff upstream/master
    ```

    The resulting output should be empty.

3. Create a fresh new branch

    Working on a separate branch for each issue helps you keep your local work copy clean. You should never work on the `master`. This will soil your copy of freeCodeCamp and you may have to start over with a fresh clone or fork.

    Check that you are on `master` as explained previously, and branch off from there:

    ```sh
    git checkout -b fix/update-guide-for-xyz
    ```

    Your branch name should start with a `fix/`, `feat/`, `docs/`, etc. Avoid using issue numbers in branches. Keep them short, meaningful and unique.

    Some examples of good branch names are:

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. Edit pages and work on code in your favorite text editor

5. Once you are happy with the changes you should optionally run freeCodeCamp locally to preview the changes

6. Make sure you fix any errors and check the formatting of your changes. We have style guides in the [docs](/docs/) section for the Guide articles and Coding challenges

7. Check and confirm the files you are updating

    ```sh
    git status
    ```

    This should show a list of `unstaged` files that you have edited.

    ```sh
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ...
    ```

8. Stage the changes and make a commit

    In this step, you should only mark files that you have edited or added yourself. You can perform a reset and resolve files that you did not intend to change if needed.

    ```sh
    git add path/to/my/changed/file.ext
    ```

    Or you can add all the `unstaged` files to the staging area:

    ```sh
    git add .
    ```

    Only the files that were moved to the staging area will be added when you make a commit.

    ```sh
    git status
    ```

    Output:
    ```sh
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-freecodecamp-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ```

    Now, you can commit your changes with a short message like so:

    ```sh
    git commit -m "fix: my short commit message"
    ```

    Some examples:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    Optional:

    We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

    Some examples of conventional commit messages are:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

    This does not take any additional time than an unconventional message like 'update file' or 'add index.md'

    You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realise that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

    ```sh
    git commit --amend
    ```

    This will open up a default text editor like `nano` or `vi` where you can edit the commit message title and add/edit the description.

10. Next, you can push your changes to your fork.

    ```sh
    git push origin branch/name-here
    ```

## Proposing a Pull Request (PR)
After you've committed your changes, check here for [how to open a Pull Request](/docs/how-to-open-a-pull-request.md).

## Getting Help
If you are stuck and need help, let us know by asking in the ['Contributors' category on our forum](https://www.freecodecamp.org/forum/c/contributors) or the [Contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) on Gitter.

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem. Provide this error message in your problem description so others can more easily identify the issue and help you find a resolution.

### Troubleshooting
If the app launches but you are encountering UI errors such as fonts not being loaded or the code editor not displaying properly, see the following depending on your local setup:

**Docker Build:**
```sh
# We use a mono repo and have multiple components (server, client, tools, plugins, etc.)
# Use this command to clean up all dependencies in all of the components
npm run docker:clean

# Reinstall npm packages
npm run docker:install

# Seed the database
npm run docker:seed

# Restart the application
npm run docker:develop
```

**Local Build:**
```sh
npm run clean
npm ci
npm run seed
npm run develop
```

If you can't sign in, and instead, you see a banner with an error message saying that it'll be reported to freeCodeCamp, please double-check that your local port 3000 is not in use by a different program.

If you get errors while installing the dependencies, please make sure that you are not in a restricted network or your firewall settings do not prevent you from accessing resources. One solution would be to use a VPN service if possible and allowed in your environment.
