---
title: Super Globals
---
## Super Globals

## List of Super Globals and what are they
Super globals are variables defined in the core of PHP, and they are available in all scopes throughout the script. This means that you do not need to define them as **global $variable** .

These superglobal variables are:

$GLOBALS
$_SERVER
$_GET
$_POST
$_FILES
$_COOKIE
$_SESSION
$_REQUEST
$_ENV

They all have their use cases, but mostly to beginners _$_GET_ and _$_POST_ are the most used. **$_GET**_ Pulls data from the url, while **$_POST**_ pulls data from the post request. Both of these are arrays. **$_REQUEST**_ is a collection of GET and POST. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
