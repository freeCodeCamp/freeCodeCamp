import { Context, HrTime, Span, Attributes } from '@opentelemetry/api';
import { SemconvStability } from '@opentelemetry/instrumentation';
import { Connection, Channel, ConfirmChannel, Options } from './amqplib-types';
import { ConsumeMessage, Message } from './types';
export declare const MESSAGE_STORED_SPAN: unique symbol;
export declare const CHANNEL_SPANS_NOT_ENDED: unique symbol;
export declare const CHANNEL_CONSUME_TIMEOUT_TIMER: unique symbol;
export declare const CONNECTION_ATTRIBUTES: unique symbol;
export type InstrumentationConnection = Connection & {
    [CONNECTION_ATTRIBUTES]?: Attributes;
};
export type InstrumentationPublishChannel = (Channel | ConfirmChannel) & {
    connection: InstrumentationConnection;
};
export type InstrumentationConsumeChannel = Channel & {
    connection: InstrumentationConnection;
    [CHANNEL_SPANS_NOT_ENDED]?: {
        msg: ConsumeMessage;
        timeOfConsume: HrTime;
    }[];
    [CHANNEL_CONSUME_TIMEOUT_TIMER]?: NodeJS.Timeout;
};
export type InstrumentationMessage = Message & {
    [MESSAGE_STORED_SPAN]?: Span;
};
export type InstrumentationConsumeMessage = ConsumeMessage & {
    [MESSAGE_STORED_SPAN]?: Span;
};
export declare const normalizeExchange: (exchangeName: string) => string;
export declare const getConnectionAttributesFromServer: (conn: Connection) => Attributes;
export declare const getConnectionAttributesFromUrl: (url: string | Options.Connect, netSemconvStability: SemconvStability) => Attributes;
export declare const markConfirmChannelTracing: (context: Context) => Context;
export declare const unmarkConfirmChannelTracing: (context: Context) => Context;
export declare const isConfirmChannelTracing: (context: Context) => boolean;
//# sourceMappingURL=utils.d.ts.map
