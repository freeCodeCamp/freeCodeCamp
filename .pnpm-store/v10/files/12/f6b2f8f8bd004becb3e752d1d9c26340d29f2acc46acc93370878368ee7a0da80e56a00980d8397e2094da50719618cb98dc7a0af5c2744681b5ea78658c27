// Type definitions for http-errors 2.0
// Project: https://github.com/jshttp/http-errors
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = createHttpError;

declare const createHttpError: createHttpError.CreateHttpError & createHttpError.NamedConstructors & {
    isHttpError: createHttpError.IsHttpError;
};

declare namespace createHttpError {
    interface HttpError<N extends number = number> extends Error {
        status: N;
        statusCode: N;
        expose: boolean;
        headers?: {
            [key: string]: string;
        } | undefined;
        [key: string]: any;
    }

    type UnknownError = Error | string | { [key: string]: any };

    interface HttpErrorConstructor<N extends number = number> {
        (msg?: string): HttpError<N>;
        new(msg?: string): HttpError<N>;
    }

    interface CreateHttpError {
        <N extends number = number>(arg: N, ...rest: UnknownError[]): HttpError<N>;
        (...rest: UnknownError[]): HttpError;
    }

    type IsHttpError = (error: unknown) => error is HttpError;

    type NamedConstructors =
        & {
            HttpError: HttpErrorConstructor;
        }
        & Record<"BadRequest" | "400", HttpErrorConstructor<400>>
        & Record<"Unauthorized" | "401", HttpErrorConstructor<401>>
        & Record<"PaymentRequired" | "402", HttpErrorConstructor<402>>
        & Record<"Forbidden" | "403", HttpErrorConstructor<403>>
        & Record<"NotFound" | "404", HttpErrorConstructor<404>>
        & Record<"MethodNotAllowed" | "405", HttpErrorConstructor<405>>
        & Record<"NotAcceptable" | "406", HttpErrorConstructor<406>>
        & Record<"ProxyAuthenticationRequired" | "407", HttpErrorConstructor<407>>
        & Record<"RequestTimeout" | "408", HttpErrorConstructor<408>>
        & Record<"Conflict" | "409", HttpErrorConstructor<409>>
        & Record<"Gone" | "410", HttpErrorConstructor<410>>
        & Record<"LengthRequired" | "411", HttpErrorConstructor<411>>
        & Record<"PreconditionFailed" | "412", HttpErrorConstructor<412>>
        & Record<"PayloadTooLarge" | "413", HttpErrorConstructor<413>>
        & Record<"URITooLong" | "414", HttpErrorConstructor<414>>
        & Record<"UnsupportedMediaType" | "415", HttpErrorConstructor<415>>
        & Record<"RangeNotSatisfiable" | "416", HttpErrorConstructor<416>>
        & Record<"ExpectationFailed" | "417", HttpErrorConstructor<417>>
        & Record<"ImATeapot" | "418", HttpErrorConstructor<418>>
        & Record<"MisdirectedRequest" | "421", HttpErrorConstructor<421>>
        & Record<"UnprocessableEntity" | "422", HttpErrorConstructor<422>>
        & Record<"Locked" | "423", HttpErrorConstructor<423>>
        & Record<"FailedDependency" | "424", HttpErrorConstructor<424>>
        & Record<"TooEarly" | "425", HttpErrorConstructor<425>>
        & Record<"UpgradeRequired" | "426", HttpErrorConstructor<426>>
        & Record<"PreconditionRequired" | "428", HttpErrorConstructor<428>>
        & Record<"TooManyRequests" | "429", HttpErrorConstructor<429>>
        & Record<"RequestHeaderFieldsTooLarge" | "431", HttpErrorConstructor<431>>
        & Record<"UnavailableForLegalReasons" | "451", HttpErrorConstructor<451>>
        & Record<"InternalServerError" | "500", HttpErrorConstructor<500>>
        & Record<"NotImplemented" | "501", HttpErrorConstructor<501>>
        & Record<"BadGateway" | "502", HttpErrorConstructor<502>>
        & Record<"ServiceUnavailable" | "503", HttpErrorConstructor<503>>
        & Record<"GatewayTimeout" | "504", HttpErrorConstructor<504>>
        & Record<"HTTPVersionNotSupported" | "505", HttpErrorConstructor<505>>
        & Record<"VariantAlsoNegotiates" | "506", HttpErrorConstructor<506>>
        & Record<"InsufficientStorage" | "507", HttpErrorConstructor<507>>
        & Record<"LoopDetected" | "508", HttpErrorConstructor<508>>
        & Record<"BandwidthLimitExceeded" | "509", HttpErrorConstructor<509>>
        & Record<"NotExtended" | "510", HttpErrorConstructor<510>>
        & Record<"NetworkAuthenticationRequire" | "511", HttpErrorConstructor<511>>;
}
