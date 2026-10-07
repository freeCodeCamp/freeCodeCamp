const fs = require(`fs`)
const path = require(`path`)

exports.onPluginInit = ({ reporter }, options = {}) => {
  const filePath = path.resolve(options.path || `schema.gql`)
  try {
    if (fs.existsSync(filePath) && options.update) {
      fs.unlinkSync(filePath)
      reporter.info("Removed schema file")
    }
  } catch (error) {
    reporter.error(
      `The plugin \`gatsby-plugin-schema-snapshot\` encountered an error`,
      error
    )
  }
}

exports.createSchemaCustomization = ({ actions, reporter }, options = {}) => {
  const { createTypes, printTypeDefinitions } = actions

  if (!printTypeDefinitions) {
    reporter.error(
      `\`gatsby-plugin-schema-snapshot\` needs Gatsby v2.13.55 or above.`
    )
    return
  }

  const filePath = path.resolve(options.path || `schema.gql`)

  try {
    if (fs.existsSync(filePath)) {
      reporter.info(`Reading GraphQL type definitions from ${filePath}`)
      const schema = fs.readFileSync(filePath, { encoding: `utf-8` })

      createTypes(schema, { name: `default-site-plugin` })

      if (options.update) {
        printTypeDefinitions(options)
      }
    } else {
      printTypeDefinitions(options)
    }
  } catch (error) {
    reporter.error(
      `The plugin \`gatsby-plugin-schema-snapshot\` encountered an error`,
      error
    )
  }
}
