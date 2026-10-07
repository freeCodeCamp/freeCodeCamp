/**
 * Number of exceptions caught by exception handling middleware.
 *
 * @note Meter name: `Microsoft.AspNetCore.Diagnostics`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS: "aspnetcore.diagnostics.exceptions";
/**
 * Number of requests that are currently active on the server that hold a rate limiting lease.
 *
 * @note Meter name: `Microsoft.AspNetCore.RateLimiting`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES: "aspnetcore.rate_limiting.active_request_leases";
/**
 * Number of requests that are currently queued, waiting to acquire a rate limiting lease.
 *
 * @note Meter name: `Microsoft.AspNetCore.RateLimiting`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS: "aspnetcore.rate_limiting.queued_requests";
/**
 * The time the request spent in a queue waiting to acquire a rate limiting lease.
 *
 * @note Meter name: `Microsoft.AspNetCore.RateLimiting`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE: "aspnetcore.rate_limiting.request.time_in_queue";
/**
 * The duration of rate limiting lease held by requests on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.RateLimiting`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION: "aspnetcore.rate_limiting.request_lease.duration";
/**
 * Number of requests that tried to acquire a rate limiting lease.
 *
 * @note Requests could be:
 *
 *   - Rejected by global or endpoint rate limiting policies
 *   - Canceled while waiting for the lease.
 *
 * Meter name: `Microsoft.AspNetCore.RateLimiting`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS: "aspnetcore.rate_limiting.requests";
/**
 * Number of requests that were attempted to be matched to an endpoint.
 *
 * @note Meter name: `Microsoft.AspNetCore.Routing`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS: "aspnetcore.routing.match_attempts";
/**
 * Duration of database client operations.
 *
 * @note Batch operations **SHOULD** be recorded as a single operation.
 */
export declare const METRIC_DB_CLIENT_OPERATION_DURATION: "db.client.operation.duration";
/**
 * The number of .NET assemblies that are currently loaded.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`AppDomain.CurrentDomain.GetAssemblies().Length`](https://learn.microsoft.com/dotnet/api/system.appdomain.getassemblies).
 */
export declare const METRIC_DOTNET_ASSEMBLY_COUNT: "dotnet.assembly.count";
/**
 * The number of exceptions that have been thrown in managed code.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as counting calls to [`AppDomain.CurrentDomain.FirstChanceException`](https://learn.microsoft.com/dotnet/api/system.appdomain.firstchanceexception).
 */
export declare const METRIC_DOTNET_EXCEPTIONS: "dotnet.exceptions";
/**
 * The number of garbage collections that have occurred since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric uses the [`GC.CollectionCount(int generation)`](https://learn.microsoft.com/dotnet/api/system.gc.collectioncount) API to calculate exclusive collections per generation.
 */
export declare const METRIC_DOTNET_GC_COLLECTIONS: "dotnet.gc.collections";
/**
 * The *approximate* number of bytes allocated on the managed GC heap since the process has started. The returned value does not include any native allocations.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`GC.GetTotalAllocatedBytes()`](https://learn.microsoft.com/dotnet/api/system.gc.gettotalallocatedbytes).
 */
export declare const METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED: "dotnet.gc.heap.total_allocated";
/**
 * The heap fragmentation, as observed during the latest garbage collection.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`GC.GetGCMemoryInfo().GenerationInfo.FragmentationAfterBytes`](https://learn.microsoft.com/dotnet/api/system.gcgenerationinfo.fragmentationafterbytes).
 */
export declare const METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE: "dotnet.gc.last_collection.heap.fragmentation.size";
/**
 * The managed GC heap size (including fragmentation), as observed during the latest garbage collection.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`GC.GetGCMemoryInfo().GenerationInfo.SizeAfterBytes`](https://learn.microsoft.com/dotnet/api/system.gcgenerationinfo.sizeafterbytes).
 */
export declare const METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE: "dotnet.gc.last_collection.heap.size";
/**
 * The amount of committed virtual memory in use by the .NET GC, as observed during the latest garbage collection.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`GC.GetGCMemoryInfo().TotalCommittedBytes`](https://learn.microsoft.com/dotnet/api/system.gcmemoryinfo.totalcommittedbytes). Committed virtual memory may be larger than the heap size because it includes both memory for storing existing objects (the heap size) and some extra memory that is ready to handle newly allocated objects in the future.
 */
export declare const METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE: "dotnet.gc.last_collection.memory.committed_size";
/**
 * The total amount of time paused in GC since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`GC.GetTotalPauseDuration()`](https://learn.microsoft.com/dotnet/api/system.gc.gettotalpauseduration).
 */
export declare const METRIC_DOTNET_GC_PAUSE_TIME: "dotnet.gc.pause.time";
/**
 * The amount of time the JIT compiler has spent compiling methods since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`JitInfo.GetCompilationTime()`](https://learn.microsoft.com/dotnet/api/system.runtime.jitinfo.getcompilationtime).
 */
export declare const METRIC_DOTNET_JIT_COMPILATION_TIME: "dotnet.jit.compilation.time";
/**
 * Count of bytes of intermediate language that have been compiled since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`JitInfo.GetCompiledILBytes()`](https://learn.microsoft.com/dotnet/api/system.runtime.jitinfo.getcompiledilbytes).
 */
export declare const METRIC_DOTNET_JIT_COMPILED_IL_SIZE: "dotnet.jit.compiled_il.size";
/**
 * The number of times the JIT compiler (re)compiled methods since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`JitInfo.GetCompiledMethodCount()`](https://learn.microsoft.com/dotnet/api/system.runtime.jitinfo.getcompiledmethodcount).
 */
export declare const METRIC_DOTNET_JIT_COMPILED_METHODS: "dotnet.jit.compiled_methods";
/**
 * The number of times there was contention when trying to acquire a monitor lock since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`Monitor.LockContentionCount`](https://learn.microsoft.com/dotnet/api/system.threading.monitor.lockcontentioncount).
 */
export declare const METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS: "dotnet.monitor.lock_contentions";
/**
 * The number of processors available to the process.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as accessing [`Environment.ProcessorCount`](https://learn.microsoft.com/dotnet/api/system.environment.processorcount).
 */
export declare const METRIC_DOTNET_PROCESS_CPU_COUNT: "dotnet.process.cpu.count";
/**
 * CPU time used by the process.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as accessing the corresponding processor time properties on [`System.Diagnostics.Process`](https://learn.microsoft.com/dotnet/api/system.diagnostics.process).
 */
export declare const METRIC_DOTNET_PROCESS_CPU_TIME: "dotnet.process.cpu.time";
/**
 * The number of bytes of physical memory mapped to the process context.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`Environment.WorkingSet`](https://learn.microsoft.com/dotnet/api/system.environment.workingset).
 */
export declare const METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET: "dotnet.process.memory.working_set";
/**
 * The number of work items that are currently queued to be processed by the thread pool.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`ThreadPool.PendingWorkItemCount`](https://learn.microsoft.com/dotnet/api/system.threading.threadpool.pendingworkitemcount).
 */
export declare const METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH: "dotnet.thread_pool.queue.length";
/**
 * The number of thread pool threads that currently exist.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`ThreadPool.ThreadCount`](https://learn.microsoft.com/dotnet/api/system.threading.threadpool.threadcount).
 */
export declare const METRIC_DOTNET_THREAD_POOL_THREAD_COUNT: "dotnet.thread_pool.thread.count";
/**
 * The number of work items that the thread pool has completed since the process has started.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`ThreadPool.CompletedWorkItemCount`](https://learn.microsoft.com/dotnet/api/system.threading.threadpool.completedworkitemcount).
 */
export declare const METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT: "dotnet.thread_pool.work_item.count";
/**
 * The number of timer instances that are currently active.
 *
 * @note Meter name: `System.Runtime`; Added in: .NET 9.0.
 * This metric reports the same values as calling [`Timer.ActiveCount`](https://learn.microsoft.com/dotnet/api/system.threading.timer.activecount).
 */
export declare const METRIC_DOTNET_TIMER_COUNT: "dotnet.timer.count";
/**
 * Duration of HTTP client requests.
 */
export declare const METRIC_HTTP_CLIENT_REQUEST_DURATION: "http.client.request.duration";
/**
 * Duration of HTTP server requests.
 */
export declare const METRIC_HTTP_SERVER_REQUEST_DURATION: "http.server.request.duration";
/**
 * Number of classes currently loaded.
 */
export declare const METRIC_JVM_CLASS_COUNT: "jvm.class.count";
/**
 * Number of classes loaded since JVM start.
 */
export declare const METRIC_JVM_CLASS_LOADED: "jvm.class.loaded";
/**
 * Number of classes unloaded since JVM start.
 */
export declare const METRIC_JVM_CLASS_UNLOADED: "jvm.class.unloaded";
/**
 * Number of processors available to the Java virtual machine.
 */
export declare const METRIC_JVM_CPU_COUNT: "jvm.cpu.count";
/**
 * Recent CPU utilization for the process as reported by the JVM.
 *
 * @note The value range is [0.0,1.0]. This utilization is not defined as being for the specific interval since last measurement (unlike `system.cpu.utilization`). [Reference](https://docs.oracle.com/en/java/javase/17/docs/api/jdk.management/com/sun/management/OperatingSystemMXBean.html#getProcessCpuLoad()).
 */
export declare const METRIC_JVM_CPU_RECENT_UTILIZATION: "jvm.cpu.recent_utilization";
/**
 * CPU time used by the process as reported by the JVM.
 */
export declare const METRIC_JVM_CPU_TIME: "jvm.cpu.time";
/**
 * Duration of JVM garbage collection actions.
 */
export declare const METRIC_JVM_GC_DURATION: "jvm.gc.duration";
/**
 * Measure of memory committed.
 */
export declare const METRIC_JVM_MEMORY_COMMITTED: "jvm.memory.committed";
/**
 * Measure of max obtainable memory.
 */
export declare const METRIC_JVM_MEMORY_LIMIT: "jvm.memory.limit";
/**
 * Measure of memory used.
 */
export declare const METRIC_JVM_MEMORY_USED: "jvm.memory.used";
/**
 * Measure of memory used, as measured after the most recent garbage collection event on this pool.
 */
export declare const METRIC_JVM_MEMORY_USED_AFTER_LAST_GC: "jvm.memory.used_after_last_gc";
/**
 * Number of executing platform threads.
 */
export declare const METRIC_JVM_THREAD_COUNT: "jvm.thread.count";
/**
 * Number of connections that are currently active on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_ACTIVE_CONNECTIONS: "kestrel.active_connections";
/**
 * Number of TLS handshakes that are currently in progress on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES: "kestrel.active_tls_handshakes";
/**
 * The duration of connections on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_CONNECTION_DURATION: "kestrel.connection.duration";
/**
 * Number of connections that are currently queued and are waiting to start.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_QUEUED_CONNECTIONS: "kestrel.queued_connections";
/**
 * Number of HTTP requests on multiplexed connections (HTTP/2 and HTTP/3) that are currently queued and are waiting to start.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_QUEUED_REQUESTS: "kestrel.queued_requests";
/**
 * Number of connections rejected by the server.
 *
 * @note Connections are rejected when the currently active count exceeds the value configured with `MaxConcurrentConnections`.
 * Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_REJECTED_CONNECTIONS: "kestrel.rejected_connections";
/**
 * The duration of TLS handshakes on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_TLS_HANDSHAKE_DURATION: "kestrel.tls_handshake.duration";
/**
 * Number of connections that are currently upgraded (WebSockets). .
 *
 * @note The counter only tracks HTTP/1.1 connections.
 *
 * Meter name: `Microsoft.AspNetCore.Server.Kestrel`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_KESTREL_UPGRADED_CONNECTIONS: "kestrel.upgraded_connections";
/**
 * Number of connections that are currently active on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Http.Connections`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS: "signalr.server.active_connections";
/**
 * The duration of connections on the server.
 *
 * @note Meter name: `Microsoft.AspNetCore.Http.Connections`; Added in: ASP.NET Core 8.0
 */
export declare const METRIC_SIGNALR_SERVER_CONNECTION_DURATION: "signalr.server.connection.duration";
//# sourceMappingURL=stable_metrics.d.ts.map