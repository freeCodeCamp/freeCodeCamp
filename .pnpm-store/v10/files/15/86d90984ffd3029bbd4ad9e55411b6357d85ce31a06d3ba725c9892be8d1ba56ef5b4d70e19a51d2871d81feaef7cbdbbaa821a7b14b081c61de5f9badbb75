import Typography from 'typography'
import theme from 'typography-theme-lawton'
import CodePlugin from 'typography-plugin-code'
theme.plugins = [new CodePlugin()]

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  //const designTools = require('typography-design-tools')
  //designTools(typography)
  typography.injectStyles()
}

export default typography
