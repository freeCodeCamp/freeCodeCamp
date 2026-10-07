/**
 * This event indicates that the application has detected substandard UI rendering performance.
 *
 * @note Jank happens when the UI is rendered slowly enough for the user to experience some disruption or sluggishness.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_APP_JANK: "app.jank";
/**
 * This event represents an instantaneous click on the screen of an application.
 *
 * @note The `app.screen.click` event can be used to indicate that a user has clicked or tapped on the screen portion of an application. Clicks outside of an application's active area **SHOULD NOT** generate this event. This event does not differentiate between touch/mouse down and touch/mouse up. Implementations **SHOULD** give preference to generating this event at the time the click is complete, typically on touch release or mouse up. The location of the click event **MUST** be provided in absolute screen pixels.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_APP_SCREEN_CLICK: "app.screen.click";
/**
 * This event indicates that an application widget has been clicked.
 *
 * @note Use this event to indicate that visual application component has been clicked, typically through a user's manual interaction.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_APP_WIDGET_CLICK: "app.widget.click";
/**
 * Deprecated. Use `azure.resource.log` instead.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Replaced by `azure.resource.log`.
 */
export declare const EVENT_AZ_RESOURCE_LOG: "az.resource.log";
/**
 * Describes Azure Resource Log event, see [Azure Resource Log Top-level Schema](https://learn.microsoft.com/azure/azure-monitor/essentials/resource-logs-schema#top-level-common-schema) for more details.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_AZURE_RESOURCE_LOG: "azure.resource.log";
/**
 * This event describes the website performance metrics introduced by Google, See [web vitals](https://web.dev/vitals).
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_BROWSER_WEB_VITAL: "browser.web_vital";
/**
 * This event represents an exception that occurred during a database client operation, such as connection failures, query errors, timeouts, or other errors that prevent the operation from completing successfully.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during database client operations.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding database client span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_DB_CLIENT_OPERATION_EXCEPTION: "db.client.operation.exception";
/**
 * This event represents an occurrence of a lifecycle transition on Android or iOS platform.
 *
 * @note The event body fields **MUST** be used to describe the state of the application at the time of the event.
 * This event is meant to be used in conjunction with `os.name` [resource semantic convention](/docs/resource/os.md) to identify the mobile operating system (e.g. Android, iOS).
 * The `android.app.state` and `ios.app.state` fields are mutually exclusive and **MUST NOT** be used together, each field **MUST** be used with its corresponding `os.name` value.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_DEVICE_APP_LIFECYCLE: "device.app.lifecycle";
/**
 * This event represents an exception that occurred during FaaS function invocation, such as application errors, internal failures, or other exceptions that prevent the function from completing successfully.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during FaaS function invocation.
 * Instrumentations **SHOULD** set the severity to ERROR (severity number 17) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding FaaS span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_FAAS_INVOCATION_EXCEPTION: "faas.invocation.exception";
/**
 * Defines feature flag evaluation as an event.
 *
 * @note A `feature_flag.evaluation` event **SHOULD** be emitted whenever a feature flag value is evaluated, which may happen many times over the course of an application lifecycle. For example, a website A/B testing different animations may evaluate a flag each time a button is clicked. A `feature_flag.evaluation` event is emitted on each evaluation even if the result is the same.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_FEATURE_FLAG_EVALUATION: "feature_flag.evaluation";
/**
 * This event describes the assistant message passed to GenAI system.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Chat history is reported on `gen_ai.input.messages` attribute on spans or `gen_ai.client.inference.operation.details` event.
 */
export declare const EVENT_GEN_AI_ASSISTANT_MESSAGE: "gen_ai.assistant.message";
/**
 * This event describes the Gen AI response message.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Chat history is reported on `gen_ai.output.messages` attribute on spans or `gen_ai.client.inference.operation.details` event.
 */
export declare const EVENT_GEN_AI_CHOICE: "gen_ai.choice";
/**
 * Describes the details of a GenAI completion request including chat history and parameters.
 *
 * @note This event is opt-in and could be used to store input and output details independently from traces.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_GEN_AI_CLIENT_INFERENCE_OPERATION_DETAILS: "gen_ai.client.inference.operation.details";
/**
 * This event represents an exception that occurred during a Generative AI client operation, such as API errors, rate limiting, model errors, timeouts, or other errors that prevent the operation from completing successfully.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during Generative AI client operations.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding Generative AI client span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_GEN_AI_CLIENT_OPERATION_EXCEPTION: "gen_ai.client.operation.exception";
/**
 * This event captures the result of evaluating GenAI output for quality, accuracy, or other characteristics. This event **SHOULD** be parented to GenAI operation span being evaluated when possible or set `gen_ai.response.id` when span id is not available.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_GEN_AI_EVALUATION_RESULT: "gen_ai.evaluation.result";
/**
 * This event describes the system instructions passed to the GenAI model.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Chat history is reported on `gen_ai.system_instructions` attribute on spans or `gen_ai.client.inference.operation.details` event.
 */
export declare const EVENT_GEN_AI_SYSTEM_MESSAGE: "gen_ai.system.message";
/**
 * This event describes the response from a tool or function call passed to the GenAI model.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Chat history is reported on `gen_ai.input.messages` attribute on spans or `gen_ai.client.inference.operation.details` event.
 */
export declare const EVENT_GEN_AI_TOOL_MESSAGE: "gen_ai.tool.message";
/**
 * This event describes the user message passed to the GenAI model.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Chat history is reported on `gen_ai.input.messages` attribute on spans or `gen_ai.client.inference.operation.details` event.
 */
export declare const EVENT_GEN_AI_USER_MESSAGE: "gen_ai.user.message";
/**
 * This event represents an exception that occurred during an HTTP client request, such as network failures, timeouts, or other errors that prevent the request from completing successfully.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during HTTP client operations.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Some HTTP client frameworks generate artificial exceptions for non-successful HTTP status codes (e.g., 404 Not Found). When possible, instrumentations **SHOULD NOT** record these artificial exceptions, or **SHOULD** set the severity to DEBUG (severity number 5).
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding HTTP client span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_HTTP_CLIENT_REQUEST_EXCEPTION: "http.client.request.exception";
/**
 * This event represents an exception that occurred during HTTP server request processing, such as application errors, internal failures, or other exceptions that prevent the server from successfully handling the request.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during HTTP server request processing.
 * Instrumentations **SHOULD** set the severity to ERROR (severity number 17) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding HTTP server span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_HTTP_SERVER_REQUEST_EXCEPTION: "http.server.request.exception";
/**
 * This event represents an exception that occurred during a messaging create operation.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during a messaging create operation.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding messaging create span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_MESSAGING_CREATE_EXCEPTION: "messaging.create.exception";
/**
 * This event represents an exception that occurred during messaging process operations.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during messaging process operations.
 * Instrumentations **SHOULD** set the severity to ERROR (severity number 17) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding messaging process span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_MESSAGING_PROCESS_EXCEPTION: "messaging.process.exception";
/**
 * This event represents an exception that occurred during a messaging receive operation.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during a messaging receive operation.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding messaging receive span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_MESSAGING_RECEIVE_EXCEPTION: "messaging.receive.exception";
/**
 * This event represents an exception that occurred during a messaging send operation.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during a messaging send operation.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding messaging send span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_MESSAGING_SEND_EXCEPTION: "messaging.send.exception";
/**
 * This event represents an exception that occurred during a messaging settle operation.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during a messaging settle operation.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding messaging settle span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_MESSAGING_SETTLE_EXCEPTION: "messaging.settle.exception";
/**
 * This event represents an exception that occurred during an outgoing RPC call, such as network failures, timeouts, serialization errors, or other errors that prevent the call from completing successfully.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during RPC client call operations.
 * Instrumentations **SHOULD** set the severity to WARN (severity number 13) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding RPC client span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_RPC_CLIENT_CALL_EXCEPTION: "rpc.client.call.exception";
/**
 * Describes a message sent or received within the context of an RPC call.
 *
 * @note In the lifetime of an RPC stream, an event for each message sent/received on client and server spans **SHOULD** be created. In case of unary calls message events **SHOULD NOT** be recorded.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 *
 * @deprecated Deprecated, no replacement at this time.
 */
export declare const EVENT_RPC_MESSAGE: "rpc.message";
/**
 * This event represents an exception that occurred during incoming RPC call processing, such as application errors, internal failures, or other exceptions that prevent the server from successfully handling the call.
 *
 * @note This event **SHOULD** be recorded when an exception occurs during RPC server call processing.
 * Instrumentations **SHOULD** set the severity to ERROR (severity number 17) when recording this event.
 * Instrumentations **MAY** provide a configuration option to populate exception events with the attributes captured on the corresponding RPC server span.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_RPC_SERVER_CALL_EXCEPTION: "rpc.server.call.exception";
/**
 * Indicates that a session has ended.
 *
 * @note For instrumentation that tracks user behavior during user sessions, a `session.end` event **SHOULD** be emitted every time a session ends. When a session ends and continues as a new session, this event **SHOULD** be emitted prior to the `session.start` event.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_SESSION_END: "session.end";
/**
 * Indicates that a new session has been started, optionally linking to the prior session.
 *
 * @note For instrumentation that tracks user behavior during user sessions, a `session.start` event **MUST** be emitted every time a session is created. When a new session is created as a continuation of a prior session, the `session.previous_id` **SHOULD** be included in the event. The values of `session.id` and `session.previous_id` **MUST** be different.
 * When the `session.start` event contains both `session.id` and `session.previous_id` fields, the event indicates that the previous session has ended. If the session ID in `session.previous_id` has not yet ended via explicit `session.end` event, then the consumer **SHOULD** treat this continuation event as semantically equivalent to `session.end(session.previous_id)` and `session.start(session.id)`.
 *
 * @experimental This event is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const EVENT_SESSION_START: "session.start";
//# sourceMappingURL=experimental_events.d.ts.map