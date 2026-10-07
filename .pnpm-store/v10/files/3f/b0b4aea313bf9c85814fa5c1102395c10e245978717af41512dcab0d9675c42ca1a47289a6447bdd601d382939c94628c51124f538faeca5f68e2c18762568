import { FeatureFlag } from '../utils/featureFlags';
import { SpanLinkJSON } from './link';
import { Primitive } from './misc';
import { SpanOrigin } from './span';
export type Context = Record<string, unknown>;
export interface Contexts extends Record<string, Context | undefined> {
    app?: AppContext;
    device?: DeviceContext;
    os?: OsContext;
    culture?: CultureContext;
    response?: ResponseContext;
    trace?: TraceContext;
    cloud_resource?: CloudResourceContext;
    state?: StateContext;
    profile?: ProfileContext;
    flags?: FeatureFlagContext;
}
export interface StateContext extends Record<string, unknown> {
    state: {
        type: string;
        value: Record<string, unknown>;
    };
}
export interface AppContext extends Record<string, unknown> {
    app_name?: string;
    app_start_time?: string;
    app_version?: string;
    app_identifier?: string;
    build_type?: string;
    app_memory?: number;
    free_memory?: number;
}
export interface DeviceContext extends Record<string, unknown> {
    name?: string;
    family?: string;
    model?: string;
    model_id?: string;
    arch?: string;
    battery_level?: number;
    orientation?: 'portrait' | 'landscape';
    manufacturer?: string;
    brand?: string;
    screen_resolution?: string;
    screen_height_pixels?: number;
    screen_width_pixels?: number;
    screen_density?: number;
    screen_dpi?: number;
    online?: boolean;
    charging?: boolean;
    low_memory?: boolean;
    simulator?: boolean;
    memory_size?: number;
    free_memory?: number;
    usable_memory?: number;
    storage_size?: number;
    free_storage?: number;
    external_storage_size?: number;
    external_free_storage?: number;
    boot_time?: string;
    processor_count?: number;
    cpu_description?: string;
    processor_frequency?: number;
    device_type?: string;
    battery_status?: string;
    device_unique_identifier?: string;
    supports_vibration?: boolean;
    supports_accelerometer?: boolean;
    supports_gyroscope?: boolean;
    supports_audio?: boolean;
    supports_location_service?: boolean;
}
export interface OsContext extends Record<string, unknown> {
    name?: string;
    version?: string;
    build?: string;
    kernel_version?: string;
}
export interface CultureContext extends Record<string, unknown> {
    calendar?: string;
    display_name?: string;
    locale?: string;
    is_24_hour_format?: boolean;
    timezone?: string;
}
export interface ResponseContext extends Record<string, unknown> {
    type?: string;
    cookies?: string[][] | Record<string, string>;
    headers?: Record<string, string>;
    status_code?: number;
    body_size?: number;
}
export interface TraceContext extends Record<string, unknown> {
    data?: {
        [key: string]: any;
    };
    op?: string;
    parent_span_id?: string;
    span_id: string;
    status?: string;
    tags?: {
        [key: string]: Primitive;
    };
    trace_id: string;
    origin?: SpanOrigin;
    links?: SpanLinkJSON[];
}
export interface CloudResourceContext extends Record<string, unknown> {
    ['cloud.provider']?: string;
    ['cloud.account.id']?: string;
    ['cloud.region']?: string;
    ['cloud.availability_zone']?: string;
    ['cloud.platform']?: string;
    ['host.id']?: string;
    ['host.type']?: string;
}
export interface ProfileContext extends Record<string, unknown> {
    profile_id: string;
}
export interface MissingInstrumentationContext extends Record<string, unknown> {
    package: string;
    ['javascript.is_cjs']?: boolean;
}
/**
 * Used to buffer flag evaluation data on the current scope and attach it to
 * error events. `values` should be initialized as empty ([]), and modifying
 * directly is not recommended. Use the functions in @sentry/browser
 * src/utils/featureFlags instead.
 */
export interface FeatureFlagContext extends Record<string, unknown> {
    values: FeatureFlag[];
}
//# sourceMappingURL=context.d.ts.map
