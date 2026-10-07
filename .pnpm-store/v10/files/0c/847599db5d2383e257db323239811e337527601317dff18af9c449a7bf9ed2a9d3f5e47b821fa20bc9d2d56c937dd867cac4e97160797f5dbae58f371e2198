export interface Connection {
    connection: {
        serverProperties: {
            product?: string;
            [key: string]: any;
        };
    };
    [key: string]: any;
}
export interface Channel {
    connection: Connection;
    [key: string]: any;
}
export interface ConfirmChannel extends Channel {
}
export declare namespace Options {
    interface Connect {
        protocol?: string;
        hostname?: string;
        port?: number;
        username?: string;
        vhost?: string;
    }
    interface Consume {
        consumerTag?: string;
        noLocal?: boolean;
        noAck?: boolean;
        exclusive?: boolean;
        priority?: number;
        arguments?: any;
    }
    interface Publish {
        headers?: any;
        [key: string]: any;
    }
}
export declare namespace Replies {
    interface Empty {
    }
    interface Consume {
        consumerTag: string;
    }
}
//# sourceMappingURL=amqplib-types.d.ts.map
