// Regexps to match html elements

const attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*'

const unquoted      = '[^"\'=<>`\\x00-\\x20]+'
const single_quoted = "'[^']*'"
const double_quoted = '"[^"]*"'

const attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')'

const attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)'

const open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>'

const close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>'
const comment     = '<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->'
const processing  = '<[?][\\s\\S]*?[?]>'
const declaration = '<![A-Za-z][^>]*>'
const cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'

const HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')')
const HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')')

export { HTML_TAG_RE, HTML_OPEN_CLOSE_TAG_RE }
