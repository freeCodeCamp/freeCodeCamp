#
# Configuration File for JavaScript Lint 
#
# This configuration file can be used to lint a collection of scripts, or to enable
# or disable warnings for scripts that are linted via the command line.
#

### Warnings
# Enable or disable warnings based on requirements.
# Use "+WarningName" to display or "-WarningName" to suppress.
#
+ambiguous_else_stmt          # the else statement could be matched with one of multiple if statements (use curly braces to indicate intent
+ambiguous_nested_stmt        # block statements containing block statements should use curly braces to resolve ambiguity
+ambiguous_newline            # unexpected end of line; it is ambiguous whether these lines are part of the same statement
+anon_no_return_value         # anonymous function does not always return value
+assign_to_function_call      # assignment to a function call
-block_without_braces         # block statement without curly braces
+comma_separated_stmts        # multiple statements separated by commas (use semicolons?)
+comparison_type_conv         # comparisons against null, 0, true, false, or an empty string allowing implicit type conversion (use === or !==)
+default_not_at_end           # the default case is not at the end of the switch statement
+dup_option_explicit          # duplicate "option explicit" control comment
+duplicate_case_in_switch     # duplicate case in switch statement
+duplicate_formal             # duplicate formal argument {name}
+empty_statement              # empty statement or extra semicolon
+identifier_hides_another     # identifer {name} hides an identifier in a parent scope
-inc_dec_within_stmt          # increment (++) and decrement (--) operators used as part of greater statement
+incorrect_version            # Expected /*jsl:content-type*/ control comment. The script was parsed with the wrong version.
+invalid_fallthru             # unexpected "fallthru" control comment
+invalid_pass                 # unexpected "pass" control comment
+jsl_cc_not_understood        # couldn't understand control comment using /*jsl:keyword*/ syntax
+leading_decimal_point        # leading decimal point may indicate a number or an object member
+legacy_cc_not_understood     # couldn't understand control comment using /*@keyword@*/ syntax
+meaningless_block            # meaningless block; curly braces have no impact
+mismatch_ctrl_comments       # mismatched control comment; "ignore" and "end" control comments must have a one-to-one correspondence
+misplaced_regex              # regular expressions should be preceded by a left parenthesis, assignment, colon, or comma
+missing_break                # missing break statement
+missing_break_for_last_case  # missing break statement for last case in switch
+missing_default_case         # missing default case in switch statement
+missing_option_explicit      # the "option explicit" control comment is missing
+missing_semicolon            # missing semicolon
+missing_semicolon_for_lambda # missing semicolon for lambda assignment
+multiple_plus_minus          # unknown order of operations for successive plus (e.g. x+++y) or minus (e.g. x---y) signs
+nested_comment               # nested comment
+no_return_value              # function {name} does not always return a value
+octal_number                 # leading zeros make an octal number
+parseint_missing_radix       # parseInt missing radix parameter
+partial_option_explicit      # the "option explicit" control comment, if used, must be in the first script tag
+redeclared_var               # redeclaration of {name}
+trailing_comma_in_array      # extra comma is not recommended in array initializers
+trailing_decimal_point       # trailing decimal point may indicate a number or an object member
+undeclared_identifier        # undeclared identifier: {name}
+unreachable_code             # unreachable code
-unreferenced_argument        # argument declared but never referenced: {name}
-unreferenced_function        # function is declared but never referenced: {name}
+unreferenced_variable        # variable is declared but never referenced: {name}
+unsupported_version          # JavaScript {version} is not supported
+use_of_label                 # use of label
+useless_assign               # useless assignment
+useless_comparison           # useless comparison; comparing identical expressions
-useless_quotes               # the quotation marks are unnecessary
+useless_void                 # use of the void type may be unnecessary (void is always undefined)
+var_hides_arg                # variable {name} hides argument
+want_assign_or_call          # expected an assignment or function call
+with_statement               # with statement hides undeclared variables; use temporary variable instead


### Output format
# Customize the format of the error message.
#    __FILE__ indicates current file path
#    __FILENAME__ indicates current file name
#    __LINE__ indicates current line
#    __COL__ indicates current column
#    __ERROR__ indicates error message (__ERROR_PREFIX__: __ERROR_MSG__)
#    __ERROR_NAME__ indicates error name (used in configuration file)
#    __ERROR_PREFIX__ indicates error prefix
#    __ERROR_MSG__ indicates error message
#
# For machine-friendly output, the output format can be prefixed with
# "encode:". If specified, all items will be encoded with C-slashes.
#
# Visual Studio syntax (default):
+output-format __FILE__(__LINE__): __ERROR__
# Alternative syntax:
#+output-format __FILE__:__LINE__: __ERROR__


### Context
# Show the in-line position of the error.
# Use "+context" to display or "-context" to suppress.
#
+context


### Control Comments
# Both JavaScript Lint and the JScript interpreter confuse each other with the syntax for
# the /*@keyword@*/ control comments and JScript conditional comments. (The latter is
# enabled in JScript with @cc_on@). The /*jsl:keyword*/ syntax is preferred for this reason,
# although legacy control comments are enabled by default for backward compatibility.
#
-legacy_control_comments


### Defining identifiers
# By default, "option explicit" is enabled on a per-file basis.
# To enable this for all files, use "+always_use_option_explicit"
-always_use_option_explicit

# Define certain identifiers of which the lint is not aware.
# (Use this in conjunction with the "undeclared identifier" warning.)
#
# Common uses for webpages might be:
+define __dirname
+define clearInterval
+define clearTimeout
+define console
+define exports
+define global
+define process
+define require
+define setInterval
+define setTimeout
+define Buffer
+define JSON
+define Math

### JavaScript Version
# To change the default JavaScript version:
#+default-type text/javascript;version=1.5
#+default-type text/javascript;e4x=1

### Files
# Specify which files to lint
# Use "+recurse" to enable recursion (disabled by default).
# To add a set of files, use "+process FileName", "+process Folder\Path\*.js",
# or "+process Folder\Path\*.htm".
#

