declare namespace addressparser {
    interface Address {
        name: string;
        address: string;
    }

    interface Group {
        name: string;
        group: AddressOrGroup[];
    }

    type AddressOrGroup = Address | Group;
}

/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    'Name <address@domain>'
 *
 * will be converted to
 *
 *     [{name: 'Name', address: 'address@domain'}]
 *
 * @return An array of address objects
 */
declare function addressparser(address: string, options: { flatten: true }): addressparser.Address[];
declare function addressparser(address: string, options?: { flatten: false }): addressparser.AddressOrGroup[];

export = addressparser;
