/**
 * @typedef {Map<string, Map<string, (string|boolean)>>} TagStructure
 */
/**
 * @param {import('./jsdocUtils.js').ParserMode} mode
 * @returns {TagStructure}
 */
const getDefaultTagStructureForMode = (mode) => {
  const isJsdoc = mode === 'jsdoc';
  const isClosure = mode === 'closure';
  const isTypescript = mode === 'typescript';
  const isPermissive = mode === 'permissive';

  const isJsdocOrPermissive = isJsdoc || isPermissive;
  const isJsdocOrTypescript = isJsdoc || isTypescript;
  const isTypescriptOrClosure = isTypescript || isClosure;
  const isClosureOrPermissive = isClosure || isPermissive;
  const isJsdocTypescriptOrPermissive = isJsdocOrTypescript || isPermissive;

  // Properties:
  // `namepathRole` - 'namepath-referencing'|'namepath-defining'|'namepath-or-url-referencing'|'text'|false
  // `typeAllowed` - boolean
  // `nameRequired` - boolean
  // `typeRequired` - boolean
  // `typeOrNameRequired` - boolean

  // All of `typeAllowed` have a signature with "type" except for
  //  `augments`/`extends` ("namepath")
  //  `param`/`arg`/`argument` (no signature)
  //  `property`/`prop` (no signature)
  //  `modifies` (undocumented)

  // None of the `namepathRole: 'namepath-defining'` show as having curly
  //  brackets for their name/namepath

  // Among `namepath-defining` and `namepath-referencing`, these do not seem
  //  to allow curly brackets in their doc signature or examples (`modifies`
  //  references namepaths within its type brackets and `param` is
  //  name-defining but not namepath-defining, so not part of these groups)

  // Todo: Should support special processing for "name" as distinct from
  //   "namepath" (e.g., param can't define a namepath)

  // Todo: Should support a `tutorialID` type (for `@tutorial` block and
  //  inline)

  /**
   * @type {TagStructure}
   */
  return new Map([
    [
      'alias', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples)
        [
          'namepathRole', 'namepath-defining',
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'arg', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        // See `param`
        [
          'nameRequired', true,
        ],

        // Has no formal signature in the docs but shows curly brackets
        //   in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'argument', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        // See `param`
        [
          'nameRequired', true,
        ],

        // Has no formal signature in the docs but shows curly brackets
        //   in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'augments', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples)
        [
          'namepathRole', 'namepath-referencing',
        ],

        // Does not show curly brackets in either the signature or examples
        [
          'typeAllowed', true,
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'borrows', new Map(/** @type {[string, string|boolean][]} */ ([
        // `borrows` has a different format, however, so needs special parsing;
        //   seems to require both, and as "namepath"'s
        [
          'namepathRole', 'namepath-referencing',
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'callback', new Map(/** @type {[string, string|boolean][]} */ ([
        // Seems to require a "namepath" in the signature (with no
        //   counter-examples); TypeScript does not enforce but seems
        //   problematic as not attached so presumably not useable without it
        [
          'namepathRole', 'namepath-defining',
        ],

        // "namepath"
        [
          'nameRequired', true,
        ],
      ])),
    ],

    [
      'class', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        // Not in use, but should be this value if using to power `empty-tags`
        [
          'nameAllowed', true,
        ],

        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'const', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'typeAllowed', true,
        ],
      ])),
    ],
    [
      'constant', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'typeAllowed', true,
        ],
      ])),
    ],
    [
      'constructor', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'constructs', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'nameRequired', false,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'define', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'typeRequired', isClosure,
        ],
      ])),
    ],

    [
      'emits', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "name" (of an event) and no counter-examples
        [
          'namepathRole', 'namepath-referencing',
        ],

        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'enum', new Map(/** @type {[string, string|boolean][]} */ ([
        // Has example showing curly brackets but not in doc signature
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'event', new Map(/** @type {[string, string|boolean][]} */ ([
        // The doc signature of `event` seems to require a "name"
        [
          'nameRequired', true,
        ],

        // Appears to require a "name" in its signature, albeit somewhat
        //  different from other "name"'s (including as described
        //  at https://jsdoc.app/about-namepaths.html )
        [
          'namepathRole', 'namepath-defining',
        ],
      ])),
    ],

    [
      'exception', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    // Closure
    [
      'export', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'exports', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'nameRequired', isJsdoc,
        ],

        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'extends', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples)
        [
          'namepathRole', 'namepath-referencing',
        ],

        // Does not show curly brackets in either the signature or examples
        [
          'typeAllowed', isTypescriptOrClosure || isPermissive,
        ],

        [
          'nameRequired', isJsdoc,
        ],

        // "namepath"
        [
          'typeOrNameRequired', isTypescriptOrClosure || isPermissive,
        ],
      ])),
    ],

    [
      'external', new Map(/** @type {[string, string|boolean][]} */ ([
        // Appears to require a "name" in its signature, albeit somewhat
        //  different from other "name"'s (including as described
        //  at https://jsdoc.app/about-namepaths.html )
        [
          'namepathRole', 'namepath-defining',
        ],

        // "name" (and a special syntax for the `external` name)
        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'fires', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "name" (of an event) and no
        //  counter-examples
        [
          'namepathRole', 'namepath-referencing',
        ],

        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'function', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'nameRequired', false,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],
    [
      'func', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],
      ])),
    ],

    [
      'host', new Map(/** @type {[string, string|boolean][]} */ ([
        // Appears to require a "name" in its signature, albeit somewhat
        //  different from other "name"'s (including as described
        //  at https://jsdoc.app/about-namepaths.html )
        [
          'namepathRole', 'namepath-defining',
        ],

        // See `external`
        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'interface', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name" in signature, but indicates as optional
        [
          'namepathRole',
          isJsdocTypescriptOrPermissive ? 'namepath-defining' : false,
        ],

        // Not in use, but should be this value if using to power `empty-tags`
        [
          'nameAllowed', isClosure,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'internal', new Map(/** @type {[string, string|boolean][]} */ ([
        // https://www.typescriptlang.org/tsconfig/#stripInternal
        [
          'namepathRole', false,
        ],
        // Not in use, but should be this value if using to power `empty-tags`
        [
          'nameAllowed', false,
        ],
      ])),
    ],

    [
      'implements', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the doc signature and examples
        // "typeExpression"
        [
          'typeRequired', true,
        ],
      ])),
    ],

    [
      'lends', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples)
        [
          'namepathRole', 'namepath-referencing',
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'link', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a namepath OR URL and might be checked as such.
        [
          'namepathRole', 'namepath-or-url-referencing',
        ],

      ])),
    ],

    [
      'linkcode', new Map(/** @type {[string, string|boolean][]} */ ([
        // Synonym for "link"
        // Signature seems to require a namepath OR URL and might be checked as such.
        [
          'namepathRole', 'namepath-or-url-referencing',
        ],
      ])),
    ],

    [
      'linkplain', new Map(/** @type {[string, string|boolean][]} */ ([
        // Synonym for "link"
        // Signature seems to require a namepath OR URL and might be checked as such.
        [
          'namepathRole', 'namepath-or-url-referencing',
        ],
      ])),
    ],

    [
      'listens', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "name" (of an event) and no
        //  counter-examples
        [
          'namepathRole', 'namepath-referencing',
        ],

        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'member', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        // Has example showing curly brackets but not in doc signature
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'memberof', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples),
        //  though it allows an incomplete namepath ending with connecting symbol
        [
          'namepathRole', 'namepath-referencing',
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],
    [
      'memberof!', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples),
        //  though it allows an incomplete namepath ending with connecting symbol
        [
          'namepathRole', 'namepath-referencing',
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'method', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],
      ])),
    ],
    [
      'mixes', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "OtherObjectPath" with no
        //   counter-examples
        [
          'namepathRole', 'namepath-referencing',
        ],

        // "OtherObjectPath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'mixin', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        [
          'nameRequired', false,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'modifies', new Map(/** @type {[string, string|boolean][]} */ ([
        // Has no documentation, but test example has curly brackets, and
        //  "name" would be suggested rather than "namepath" based on example;
        //  not sure if name is required
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'module', new Map(/** @type {[string, string|boolean][]} */ ([
        // Optional "name" and no curly brackets
        //  this block impacts `no-undefined-types` and `valid-types` (search for
        //  "isNamepathDefiningTag|tagMightHaveNamepath|tagMightHaveEitherTypeOrNamePosition")
        [
          'namepathRole', isJsdoc ? 'namepath-defining' : 'text',
        ],

        // Shows the signature with curly brackets but not in the example
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'name', new Map(/** @type {[string, string|boolean][]} */ ([
        // Seems to require a "namepath" in the signature (with no
        //   counter-examples)
        [
          'namepathRole', 'namepath-defining',
        ],

        // "namepath"
        [
          'nameRequired', true,
        ],

        // "namepath"
        [
          'typeOrNameRequired', true,
        ],
      ])),
    ],

    [
      'namespace', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        // Shows the signature with curly brackets but not in the example
        [
          'typeAllowed', true,
        ],
      ])),
    ],
    [
      'package', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows the signature with curly brackets but not in the example
        // "typeExpression"
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'param', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        // Though no signature provided requiring, per
        //  https://jsdoc.app/tags-param.html:
        // "The @param tag requires you to specify the name of the parameter you
        //  are documenting."
        [
          'nameRequired', true,
        ],

        // Has no formal signature in the docs but shows curly brackets
        //   in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'private', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows the signature with curly brackets but not in the example
        // "typeExpression"
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'prop', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        // See `property`
        [
          'nameRequired', true,
        ],

        // Has no formal signature in the docs but shows curly brackets
        //   in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'property', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', 'namepath-defining',
        ],

        // No docs indicate required, but since parallel to `param`, we treat as
        //   such:
        [
          'nameRequired', true,
        ],

        // Has no formal signature in the docs but shows curly brackets
        //   in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'protected', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows the signature with curly brackets but not in the example
        // "typeExpression"
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'public', new Map(/** @type {[string, string|boolean][]} */ ([
        // Does not show a signature nor show curly brackets in the example
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'requires', new Map(/** @type {[string, string|boolean][]} */ ([
        // <someModuleName>
        [
          'namepathRole', 'namepath-referencing',
        ],

        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'returns', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],
    [
      'return', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'satisfies', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the doc signature and examples
        [
          'typeRequired', true,
        ],
      ])),
    ],

    [
      'see', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature allows for "namepath" or text, so user must configure to
        //  'namepath-referencing' to enforce checks
        [
          'namepathRole', 'text',
        ],
      ])),
    ],

    [
      'static', new Map(/** @type {[string, string|boolean][]} */ ([
        // Does not show a signature nor show curly brackets in the example
        [
          'typeAllowed', isClosureOrPermissive,
        ],
      ])),
    ],

    [
      'suppress', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', !isClosure,
        ],
        [
          'typeRequired', isClosure,
        ],
      ])),
    ],

    [
      'template', new Map(/** @type {[string, string|boolean][]} */ ([
        [
          'namepathRole', isJsdoc ? 'text' : 'namepath-referencing',
        ],

        [
          'nameRequired', !isJsdoc,
        ],

        // Though defines `namepathRole: 'namepath-defining'` in a sense, it is
        //   not parseable in the same way for template (e.g., allowing commas),
        //   so not adding
        [
          'typeAllowed', isTypescriptOrClosure || isPermissive,
        ],
      ])),
    ],

    [
      'this', new Map(/** @type {[string, string|boolean][]} */ ([
        // Signature seems to require a "namepath" (and no counter-examples)
        // Not used with namepath in Closure/TypeScript, however
        [
          'namepathRole', isJsdoc ? 'namepath-referencing' : false,
        ],

        [
          'typeRequired', isTypescriptOrClosure,
        ],

        // namepath
        [
          'typeOrNameRequired', isJsdoc,
        ],
      ])),
    ],

    [
      'throws', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'tutorial', new Map(/** @type {[string, string|boolean][]} */ ([
        // (a tutorial ID)
        [
          'nameRequired', true,
        ],

        [
          'typeAllowed', false,
        ],
      ])),
    ],

    [
      'type', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the doc signature and examples
        // "typeName"
        [
          'typeRequired', true,
        ],
      ])),
    ],

    [
      'typedef', new Map(/** @type {[string, string|boolean][]} */ ([
        // Seems to require a "namepath" in the signature (with no
        //  counter-examples)
        [
          'namepathRole', 'namepath-defining',
        ],

        // TypeScript may allow it to be dropped if followed by @property or @member;
        //   also shown as missing in Closure
        // "namepath"
        [
          'nameRequired', isJsdocOrPermissive,
        ],

        // Is not `typeRequired` for TypeScript because it gives an error:
        // JSDoc '@typedef' tag should either have a type annotation or be followed by '@property' or '@member' tags.

        // Has example showing curly brackets but not in doc signature
        [
          'typeAllowed', true,
        ],

        // TypeScript may allow it to be dropped if followed by @property or @member
        // "namepath"
        [
          'typeOrNameRequired', !isTypescript,
        ],
      ])),
    ],

    [
      'var', new Map(/** @type {[string, string|boolean][]} */ ([
        // Allows for "name"'s in signature, but indicated as optional
        [
          'namepathRole', 'namepath-defining',
        ],

        // Has example showing curly brackets but not in doc signature
        [
          'typeAllowed', true,
        ],
      ])),
    ],

    [
      'yields', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],
    [
      'yield', new Map(/** @type {[string, string|boolean][]} */ ([
        // Shows curly brackets in the signature and in the examples
        [
          'typeAllowed', true,
        ],
      ])),
    ],
  ]);
};

export default getDefaultTagStructureForMode;
