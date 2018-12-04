---
title: Command-line Interface
---

## Command-line Interface

#### Motivation

Angular is closely associated with its command-line interface (CLI). The CLI streamlines generation of the Angular file system. It deals with most of the configuration behind the scenes so developers can start coding. The CLI also has a low learning curve recommendable for any newcomer wanting to jump right in. Heck, even experienced Angular developers rely on the CLI!

#### Installation

The Angular CLI requires [Node.js and Node Package Manager (NPM)](https://nodejs.org/en/). You can check for these programs with the terminal command: `node -v; npm -v`. Once installed, open a terminal and install the Angular CLI with this command: `npm install -g @angular/cli` or `npm install -g @angular/cli@latest` to install the latest version of angular cli. This can be executed from anywhere on your system. The CLI is configured for global use with the `-g` flag.

Verify the CLI is there with the command: `ng -v`. This outputs several lines of information about the angular cli installed in your machine. One of these lines state the version of the installed CLI.

Recognize that `ng` is the basic building block of the CLI. All your commands will begin with `ng`. Time to take a look at four of the most common commands prefixed with `ng`.

#### Key Commands

* ng new

* ng serve

* ng generate

* ng build

* ng update

The key terms for each of these are quite telling. Together, they comprise what you will need to hit the ground running with Angular. Of course, there are many more. All commands are outlined in the [CLI's GitHub Documentation<sup>1</sup>](https://github.com/angular/angular-cli/wiki#additional-commands). You will likely find that the commands listed above will cover the necessary bases.

#### ng new

`ng new` creates a *new* Angular file system. This is a surreal process. Please navigate to a file location desirable for *new* application generation. Type this command as follows, replacing `[name-of-app]` with whatever you want: `ng new [name-of-app]`. For Example `ng new myapp` here `myapp` the name which I've given to my app. Which will generate your app with a default folder structure. There wil be a lot of generated files, Don't consider every file. You'll be mostly working with the src folder.

But Feel free to explore other files within. Try to not make any changes yet. All of what you need to run your first Angular application comes packaged together in this generated file system.

#### ng serve

To get the application running, the `ng serve` command must execute within the `[name-of-app]` folder. Anywhere within the folder will do. The Angular CLI must recognize that it is within an environment generated with  `ng new`. It will run provided this one condition. Go ahead and try it: `ng serve`.

The application runs on port 4200 by default. You can view the Angular application by navigating to `localhost:4200` in any web browser. Angular works across all browsers. Unless you are using an old version of Internet Explorer, the application will pop up. It displays the official Angular logo alongside a list of helpful links.

Ok, the application runs. It hopefully functions, but you need to know what is going on under the hood. Refer back to the `[name-of-app]` file system. Navigate `[name-of-app] -> src -> app`. Therein lies the files responsible for what you saw on `localhost:4200`.

Okay, What if you are running 2 Angular app which runs on PORT 4200 by default or let me say that the PORT 4200 has been busy? You can change your default PORT by using a cli commang `ng serve --port 4000` here 4000 is the PORT that I want to run. You can change it to a PORT that ypu wnat to run your app.

#### ng generate

The `.component` files define an Angular component including its logic (`.ts`), style (`.css`), layout (`.html`), and testing (`.spec.ts`). The `app.module.ts` particularly stands out. Together, these two groups of files work together as `component` and `module`. Both `component` and `module` are two separate examples of Angular schematics. Schematics classify the different purpose-driven blocks of code *generatable* with `ng generate`.

For the sake of this article, understand that a `module` exports and imports assets to and from an underlying component tree. A `component` concerns itself with one section of the user interface. That unit's logic, style, layout, and testing stays encapsulated within the various `.component` files.

As for `ng generate`, this command can generate skeletons for each of the available [Angular schematics<sup>2</sup>](https://github.com/angular/angular-cli/wiki/generate#available-schematics). Navigate to `[name-of-app -> src -> app]`. Try generating a new `component` by executing: `ng generate component [name-of-component]`. Replace `[name-of-component]` with whatever you would like. A new file `[name-of-component]` will pop up along with its necessary `component` files.

You can see that `ng generate`expedites Angular’s [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code). `ng generate` also wires things up. Schematics created within context of an Angular file system connect with the system’s root module. In this case, that would be `app.module.ts` file inside `[name-of-app -> src -> app]`.

#### ng build

Angular is a front end tool. The CLI performs its operations on behalf of the front end. `ng serve` takes care of the back end server setup. This keeps development entirely focused on the front end. That said, connecting your own back end to the Angular application must also be possible.

`ng build` fulfills this need. Before trying it out inside of the file system. Navigate to `[name-of-app] -> angular.json`. Look for this single line of code: `"outputPath": "dist/my-app"`.

This one line of configuration determines where `ng build` dumps its results. The results being the entire Angular application compiled into one folder `dist/my-app`. Inside of that folder, there exists `index.html`. The whole Angular application can run with `index.html`. No `ng serve` is necessary from here. With this file, you can easily wire up your back end.

Give it a go: `ng build`. Again, this must execute within the Angular file system. Based of the key value of `“outputPath:”` in `angular.json`. A file will generate wherein the original application is fully compiled. If you kept `“outputPath:”` the same, the compiled application will be in: `[name-of-app] -> dist -> [name-of-app]`.

#### ng update

In angular cli ng update do automatic updation on all the angular and npm packages to latest versions.

Here is the syntax and options can be used with `ng update`.

`ng update [package]`

**Options**
- dry-run
`--dry-run (alias: -d)`

  Run through without making any changes.

- force
`--force`

  If false, will error out if installed packages are incompatible with the update.

- all
`--all`

  Whether to update all packages in package.json.

- next
`--next`

  Use the largest version, including beta and RCs.

- migrate-only
`--migrate-only`

  Only perform a migration, does not update the installed version.

- from
`--from`

  Version from which to migrate from. Only available with a single package being updated, and only on migration only.

- to
`--to`

  Version up to which to apply migrations. Only available with a single package being updated, and only on migrations only.   Requires from to be specified. Default to the installed version detected.

- registry
`--registry`

  The NPM registry to use.
  
- style
`--style`

  The file extension to be used for style files. (Ex. ng new app --style=scss)

#### Conclusion

These commands fulfill the basics. Angular’s CLI is an incredible convenience that expedites application generation, configuration, and expansion. It does all this while maintaining flexibility, allowing the developer to make necessary changes.

Please check out those links on `localhost:4200` if you have not already. Do not forget to run `ng serve` before opening it up. With a better understanding of the CLI, you are now ready to learn more about what is generated by its most essential commands.

### Sources

1. [Google. “angular/angular-cli/wiki#additional-commands.” GitHub.](https://github.com/angular/angular-cli/wiki#additional-commands)

2. [Google. “angular/angular-cli/wiki/generate#available-schematics.” GitHub.](https://github.com/angular/angular-cli/wiki/generate#available-schematics)

### Resources

- [Angular CLI Website](https://cli.angular.io)

- [Angular CLI README](https://github.com/angular/angular-cli#angular-cli)

- [Angular CLI Documentation](https://github.com/angular/angular-cli/wiki)
