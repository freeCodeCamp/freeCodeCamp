type _If<Test, Then, Else> = Test extends true ? Then : Else;

export type Features = {
  lookbehind?: boolean;
  namedGroups?: boolean;
  unicodePropertyEscape?: boolean;
  unicodeSet?: boolean;
  modifiers?: boolean;
};

export type AstNodeType =
  | "alternative"
  | "anchor"
  | "characterClass"
  | "characterClassEscape"
  | "characterClassRange"
  | "disjunction"
  | "dot"
  | "group"
  | "quantifier"
  | "reference"
  | "unicodePropertyEscape"
  | "value";

export type Base<T extends AstNodeType> = {
  range: [number, number];
  raw: string;
  type: T;
};

export type AstNode<F extends Features = {}> =
  | Alternative<F>
  | Anchor
  | CharacterClass<F>
  | CharacterClassEscape
  | CharacterClassRange
  | Disjunction<F>
  | Dot
  | Group<F>
  | Quantifier<F>
  | Reference<F>
  | _If<F["unicodePropertyEscape"], UnicodePropertyEscape, never>
  | Value;

export type RootNode<F extends Features = {}> = Exclude<
  AstNode<F>,
  CharacterClassRange
>;

export type Anchor = Base<"anchor"> & {
  kind: "boundary" | "end" | "not-boundary" | "start";
};

export type CharacterClassEscape = Base<"characterClassEscape"> & {
  value: string;
};

export type Value = Base<"value"> & {
  codePoint: number;
  kind:
    | "controlLetter"
    | "hexadecimalEscape"
    | "identifier"
    | "null"
    | "octal"
    | "singleEscape"
    | "symbol"
    | "unicodeCodePointEscape"
    | "unicodeEscape";
};

export type Identifier = Base<"value"> & {
  value: string;
};

export type Alternative<F extends Features = {}> = Base<"alternative"> & {
  body: RootNode<F>[];
};

export type CharacterClassRange = Base<"characterClassRange"> & {
  max: Value;
  min: Value;
};

export type UnicodePropertyEscape = Base<"unicodePropertyEscape"> & {
  negative: boolean;
  value: string;
};

export type CharacterClassBody =
  | CharacterClassEscape
  | CharacterClassRange
  | UnicodePropertyEscape
  | Value;

export type CharacterClass<F extends Features = {}> = Base<"characterClass"> & {
  body: CharacterClassBody[];
  negative: boolean;
  kind: "union" | _If<F["unicodeSet"], "intersection" | "subtraction", never>;
};

export type ModifierFlags = {
  enabling: string,
  disabling: string
}

export type NonCapturingGroup<F extends Features = {}> = Base<"group"> &
  (
    | {
        behavior:
          | "lookahead"
          | "lookbehind"
          | "negativeLookahead"
          | "negativeLookbehind";
        body: RootNode<F>[];
      }
    | ({
        behavior: "ignore";
        body: RootNode<F>[];
      } & _If<
        F["modifiers"],
        {
          modifierFlags?: ModifierFlags;
        },
        {
          modifierFlags: undefined;
        }
      >)
  );


export type CapturingGroup<F extends Features = {}> = Base<"group"> & {
  behavior: "normal";
  body: RootNode<F>[];
} & _If<
    F["namedGroups"],
    {
      name?: Identifier;
    },
    {
      name: undefined;
    }
  >;

export type Group<F extends Features = {}> =
  | CapturingGroup<F>
  | NonCapturingGroup<F>;

export type Quantifier<F extends Features = {}> = Base<"quantifier"> & {
  body: [RootNode<F>];
  greedy: boolean;
  max?: number;
  min: number;
  symbol?: '?' | '*' | '+';
};

export type Disjunction<F extends Features = {}> = Base<"disjunction"> & {
  body: [RootNode<F>, RootNode<F>, ...RootNode<F>[]];
};

export type Dot = Base<"dot">;

export type NamedReference = Base<"reference"> & {
  matchIndex: undefined;
  name: Identifier;
};

export type IndexReference = Base<"reference"> & {
  matchIndex: number;
  name: undefined;
};

export type Reference<F extends Features = {}> = _If<
  F["namedGroups"],
  NamedReference,
  IndexReference
>;

export function parse<F extends Features = {}>(
  str: string,
  flags: string,
  features?: F
): RootNode<F>;
