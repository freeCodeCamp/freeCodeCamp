type AssertionError<T = {}> = Error & T & {
    showDiff: boolean;
};

interface AssertionErrorConstructor {
    new<T = {}>(message: string, props?: T, ssf?: Function): AssertionError<T>;
}

declare const AssertionError: AssertionErrorConstructor;

export = AssertionError;
