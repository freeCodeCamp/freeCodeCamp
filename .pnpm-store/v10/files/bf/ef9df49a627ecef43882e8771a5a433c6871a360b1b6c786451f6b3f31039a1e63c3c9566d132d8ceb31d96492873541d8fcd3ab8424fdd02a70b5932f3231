/**
 * The cloud account ID the resource is assigned to.
 *
 * @example 111111111111
 * @example opentelemetry
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CLOUD_ACCOUNT_ID: "cloud.account.id";
/**
 * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
 *
 * @example us-east-1c
 *
 * @note Availability zones are called "zones" on Alibaba Cloud and Google Cloud.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone";
/**
 * Name of the cloud provider.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CLOUD_PROVIDER: "cloud.provider";
/**
 * The geographical region the resource is running.
 *
 * @example us-central1
 * @example us-east-1
 *
 * @note Refer to your provider's docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/global-infrastructure/geographies/), [Google Cloud regions](https://cloud.google.com/about/locations), or [Tencent Cloud regions](https://www.tencentcloud.com/document/product/213/6091).
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CLOUD_REGION: "cloud.region";
/**
 * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/containers/run/#container-identification). The UUID might be abbreviated.
 *
 * @example a3bf90e006b2
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CONTAINER_ID: "container.id";
/**
 * Name of the image the container was built on.
 *
 * @example gcr.io/opentelemetry/operator
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CONTAINER_IMAGE_NAME: "container.image.name";
/**
 * Container image tags. An example can be found in [Docker Image Inspect](https://docs.docker.com/engine/api/v1.43/#tag/Image/operation/ImageInspect). Should be only the `<tag>` section of the full name for example from `registry.example.com/my-org/my-image:<tag>`.
 *
 * @example ["v1.27.1", "3.5.7-0"]
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CONTAINER_IMAGE_TAGS: "container.image.tags";
/**
 * Container name used by container runtime.
 *
 * @example opentelemetry-autoconf
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_CONTAINER_NAME: "container.name";
/**
 * The CPU architecture the host system is running on.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_ARCH: "host.arch";
/**
 * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider. For non-containerized systems, this should be the `machine-id`. See the table below for the sources to use to determine the `machine-id` based on operating system.
 *
 * @example fdbf79e8af94cb7f9e8df36789187052
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_ID: "host.id";
/**
 * VM image ID or host OS image ID. For Cloud, this value is from the provider.
 *
 * @example ami-07b06b442921831e5
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_IMAGE_ID: "host.image.id";
/**
 * Name of the VM image or OS install the host was instantiated from.
 *
 * @example infra-ami-eks-worker-node-7d4ec78312
 * @example CentOS-8-x86_64-1905
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_IMAGE_NAME: "host.image.name";
/**
 * The version string of the VM image or host OS as defined in [Version Attributes](/docs/resource/README.md#version-attributes).
 *
 * @example 0.1
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_IMAGE_VERSION: "host.image.version";
/**
 * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
 *
 * @example opentelemetry-test
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_NAME: "host.name";
/**
 * Type of host. For Cloud, this must be the machine type.
 *
 * @example n1-standard-1
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_HOST_TYPE: "host.type";
/**
 * The name of the cluster.
 *
 * @example opentelemetry-cluster
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_K8S_CLUSTER_NAME: "k8s.cluster.name";
/**
 * The name of the Deployment.
 *
 * @example opentelemetry
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_K8S_DEPLOYMENT_NAME: "k8s.deployment.name";
/**
 * The name of the namespace that the pod is running in.
 *
 * @example default
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_K8S_NAMESPACE_NAME: "k8s.namespace.name";
/**
 * The name of the Pod.
 *
 * @example opentelemetry-pod-autoconf
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_K8S_POD_NAME: "k8s.pod.name";
/**
 * The operating system type.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_OS_TYPE: "os.type";
/**
 * The version string of the operating system as defined in [Version Attributes](/docs/resource/README.md#version-attributes).
 *
 * @example 14.2.1
 * @example 18.04.1
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_OS_VERSION: "os.version";
/**
 * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
 *
 * @example cmd/otelcol
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_COMMAND: "process.command";
/**
 * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
 *
 * @example ["cmd/otecol", "--config=config.yaml"]
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_COMMAND_ARGS: "process.command_args";
/**
 * The name of the process executable. On Linux based systems, this **SHOULD** be set to the base name of the target of `/proc/[pid]/exe`. On Windows, this **SHOULD** be set to the base name of `GetProcessImageFileNameW`.
 *
 * @example otelcol
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_EXECUTABLE_NAME: "process.executable.name";
/**
 * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
 *
 * @example /usr/bin/cmd/otelcol
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_EXECUTABLE_PATH: "process.executable.path";
/**
 * The username of the user that owns the process.
 *
 * @example root
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_OWNER: "process.owner";
/**
 * Process identifier (PID).
 *
 * @example 1234
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_PID: "process.pid";
/**
 * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
 *
 * @example "Eclipse OpenJ9 Eclipse OpenJ9 VM openj9-0.21.0"
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description";
/**
 * The name of the runtime of this process.
 *
 * @example OpenJDK Runtime Environment
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_RUNTIME_NAME: "process.runtime.name";
/**
 * The version of the runtime of this process, as returned by the runtime without modification.
 *
 * @example "14.0.2"
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_PROCESS_RUNTIME_VERSION: "process.runtime.version";
/**
 * The string ID of the service instance.
 *
 * @example 627cc493-f310-47de-96bd-71410b7dec09
 *
 * @note **MUST** be unique for each instance of the same `service.namespace,service.name` pair (in other words
 * `service.namespace,service.name,service.instance.id` triplet **MUST** be globally unique). The ID helps to
 * distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled
 * service).
 *
 * Implementations, such as SDKs, are recommended to generate a random Version 1 or Version 4 [RFC
 * 4122](https://www.ietf.org/rfc/rfc4122.txt) UUID, but are free to use an inherent unique ID as the source of
 * this value if stability is desirable. In that case, the ID **SHOULD** be used as source of a UUID Version 5 and
 * **SHOULD** use the following UUID as the namespace: `4d63009a-8d0f-11ee-aad7-4c796ed8e320`.
 *
 * UUIDs are typically recommended, as only an opaque value for the purposes of identifying a service instance is
 * needed. Similar to what can be seen in the man page for the
 * [`/etc/machine-id`](https://www.freedesktop.org/software/systemd/man/latest/machine-id.html) file, the underlying
 * data, such as pod name and namespace should be treated as confidential, being the user's choice to expose it
 * or not via another resource attribute.
 *
 * For applications running behind an application server (like unicorn), we do not recommend using one identifier
 * for all processes participating in the application. Instead, it's recommended each division (e.g. a worker
 * thread in unicorn) to have its own instance.id.
 *
 * It's not recommended for a Collector to set `service.instance.id` if it can't unambiguously determine the
 * service instance that is generating that telemetry. For instance, creating an UUID based on `pod.name` will
 * likely be wrong, as the Collector might not know from which container within that pod the telemetry originated.
 * However, Collectors can set the `service.instance.id` if they can unambiguously determine the service instance
 * for that telemetry. This is typically the case for scraping receivers, as they know the target address and
 * port.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_SERVICE_INSTANCE_ID: "service.instance.id";
/**
 * A namespace for `service.name`.
 *
 * @example Shop
 *
 * @note A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_SERVICE_NAMESPACE: "service.namespace";
/**
 * Additional description of the web engine (e.g. detailed version and edition information).
 *
 * @example WildFly Full 21.0.0.Final (WildFly Core 13.0.1.Final) - 2.2.2.Final
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_WEBENGINE_DESCRIPTION: "webengine.description";
/**
 * The name of the web engine.
 *
 * @example WildFly
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_WEBENGINE_NAME: "webengine.name";
/**
 * The version of the web engine.
 *
 * @example 21.0.0
 *
 * @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
 */
export declare const ATTR_WEBENGINE_VERSION: "webengine.version";
//# sourceMappingURL=semconv.d.ts.map