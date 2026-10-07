/**
Returns the filename and line number of the caller in the call stack

@param depth - The distance from the location function in the call stack. Defaults to 1 (caller).

@return an object with the filename and line number.
*/
export function location(depth?: number): location.Location;

declare namespace location {

    interface Location {

        /**
        The fully qualified filename.
        */
        readonly filename: string;

        /**
        The file line number.
        */
        readonly line: number;
    }
}
