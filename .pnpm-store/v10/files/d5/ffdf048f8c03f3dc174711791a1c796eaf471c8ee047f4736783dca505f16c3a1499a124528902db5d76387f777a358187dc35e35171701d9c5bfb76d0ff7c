const chalk = require(`chalk`);

const showSuccessMessage = () => {
  console.log(chalk.green(`Success!\n`));
  console.log(chalk.cyan(`Welcome to the Gatsby CLI! Please visit `) +
    chalk.underline(`https://www.gatsbyjs.com/docs/gatsby-cli/`) +
    chalk.cyan(` for more information.\n`));
}

try {
  // check if it's a global installation of gatsby-cli
  const npmArgs = JSON.parse(process.env[`npm_config_argv`]);
  if (npmArgs.cooked && npmArgs.cooked.includes(`--global`)) {
    const createCli = require(`../lib/create-cli`);
    showSuccessMessage();
    createCli(`--help`);
  }
} catch (e) {
}
