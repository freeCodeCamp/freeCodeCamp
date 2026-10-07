export = F;

/**
 * When called without any options, or with a zero length paths array, @pinojs/redact will return JSON.stringify or the serialize option, if set.
 * @param redactOptions
 * @param redactOptions.paths An array of strings describing the nested location of a key in an object.
 * @param redactOptions.censor This is the value which overwrites redacted properties.
 * @param redactOptions.remove The remove option, when set to true will cause keys to be removed from the serialized output.
 * @param redactOptions.serialize The serialize option may either be a function or a boolean. If a function is supplied, this will be used to serialize the redacted object.
 * @param redactOptions.strict The strict option, when set to true, will cause the redactor function to throw if instead of an object it finds a primitive.
 * @returns Redacted value from input
 */
declare function F(
  redactOptions: F.RedactOptionsNoSerialize
): F.redactFnNoSerialize;
declare function F(redactOptions?: F.RedactOptions): F.redactFn;

declare namespace F {
  /** Redacts input */
  type redactFn = <T>(input: T) => string | T;

  /** Redacts input without serialization */
  type redactFnNoSerialize = redactFn & {
    /** Method that allowing the redacted keys to be restored with the original data. Supplied only when serialize option set to false. */
    restore<T>(input: T): T;
  };

  interface RedactOptions {
    /** An array of strings describing the nested location of a key in an object. */
    paths?: string[] | undefined;

    /** This is the value which overwrites redacted properties. */
    censor?: string | ((v: any) => any) | undefined;

    /** The remove option, when set to true will cause keys to be removed from the serialized output. */
    remove?: boolean | undefined;

    /**
     * The serialize option may either be a function or a boolean. If a function is supplied, this will be used to serialize the redacted object.
     * The default serialize is the function JSON.stringify
     */
    serialize?: boolean | ((v: any) => any) | undefined;

    /** The strict option, when set to true, will cause the redactor function to throw if instead of an object it finds a primitive. */
    strict?: boolean | undefined;
  }

  /** RedactOptions without serialization. Instead of the serialized object, the output of the redactor function will be the mutated object itself. */
  interface RedactOptionsNoSerialize extends RedactOptions {
    serialize: false;
  }
}
