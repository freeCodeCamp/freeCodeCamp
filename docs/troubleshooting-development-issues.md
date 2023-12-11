If you are facing an issue, there is a high chance that the resolution is in this documentation.

## Issues with Installing the Recommended Prerequisites

We regularly develop on the latest or most popular operating systems like macOS 10.15 or later, Ubuntu 18.04 or later, and Windows 10 (with WSL2).

It is recommended to research your specific issue on resources such as Google, Stack Overflow, and Stack Exchange. There is a good chance that someone has faced the same issue and there is already an answer to your specific query.

If you are on a different OS or are still facing issues, see [getting help](#getting-help).

> [!WARNING]
>
> Please avoid creating GitHub issues for problems with the prerequisite technologies. They are out of the scope of this project.

## Issues with Missing UI, Fonts, Language Strings, or Build Errors

When you build the client, Gatsby will cache the Fonts, language strings, and UI. If one of them isn't cached, run the following:

```bash
pnpm run clean
pnpm install
pnpm run seed
pnpm run develop
```

OR

Use the shortcut

```
pnpm run clean-and-develop
```

If you continue to face issues with the build, cleaning up the workspace is recommended.

Use `git clean` in interactive mode:

```
git clean -ifdX
```

<details>
   <summary>
      How to clean git untracked files (screenshot)
   </summary>
   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="How to clean git untracked files">
</details>

## Issues with API, login, Challenge Submissions, etc.

If you can't sign in, and instead you see a banner with an error message saying that the error will be reported to freeCodeCamp, please double-check that your local port `3000` is not in use by a different program.

#### **From Terminal:**
```bash
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```


## Issues Signing Out while Navigating

While in development, your session is stored as cookies. Clearing them will sign you out of your development account.

Running `pnpm run seed:certified-user` will log you out, too. It will overwrite the development user in your local database.

## Issue Getting 404 when Navigating Profile Page

When you try to navigate to http://localhost:8000/developmentuser to view the profile page, Gatsby takes over serving the client-side pages and hence you will get a 404 page for the user profile when working.

There is a "Preview Custom 404 Page" button, click it to see the profile.

## Issues Installing Dependencies

If you get errors while installing the dependencies, please make sure that you are not in a restricted network or your firewall settings do not prevent you from accessing resources.

The first time setup can take a while depending on your network bandwidth. Be patient, and if you are still stuck we recommend using Gitpod instead of an offline setup.

> [!NOTE]
> If you are using Apple Devices with M1 Chip to run the application locally, it is suggested to use Node v14.7 or above. You might run into issues with dependencies like Sharp otherwise.

## Working With Other Languages

To see how the client renders in another language go to [testing the client app in a world language.](how-to-work-on-localized-client-webapp.md#Testing-the-Client-App-in-a-World-Language)

## Getting Help

If you are stuck and need help, feel free to ask questions in the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).

There might be an error in the console of your browser or in Bash / Terminal / Command Line that will help identify the problem. Provide this error message in your problem description so others can more easily identify the issue and help you find a resolution.
