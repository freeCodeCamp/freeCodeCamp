import type { Instrumentation } from '@opentelemetry/instrumentation';
import { PrismaInstrumentation } from './vendored/instrumentation';
interface PrismaOptions {
    /**
     * @deprecated This is no longer used, v5 works out of the box.
     */
    prismaInstrumentation?: Instrumentation;
    /**
     * Configuration passed through to the {@link PrismaInstrumentation} constructor.
     */
    instrumentationConfig?: ConstructorParameters<typeof PrismaInstrumentation>[0];
}
export declare const instrumentPrisma: ((options?: PrismaOptions | undefined) => Instrumentation<import("@opentelemetry/instrumentation").InstrumentationConfig>) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for the [prisma](https://www.npmjs.com/package/prisma) library.
 * For more information, see the [`prismaIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/prisma/).
 *
 * NOTE: By default, this integration works with Prisma version 6.
 * To get performance instrumentation for other Prisma versions,
 * 1. Install the `@prisma/instrumentation` package with the desired version.
 * 1. Pass a `new PrismaInstrumentation()` instance as exported from `@prisma/instrumentation` to the `prismaInstrumentation` option of this integration:
 *
 *    ```js
 *    import { PrismaInstrumentation } from '@prisma/instrumentation'
 *
 *    Sentry.init({
 *      integrations: [
 *        prismaIntegration({
 *          // Override the default instrumentation that Sentry uses
 *          prismaInstrumentation: new PrismaInstrumentation()
 *        })
 *      ]
 *    })
 *    ```
 *
 *    The passed instrumentation instance will override the default instrumentation instance the integration would use, while the `prismaIntegration` will still ensure data compatibility for the various Prisma versions.
 * 1. Depending on your Prisma version (prior to version 6), add `previewFeatures = ["tracing"]` to the client generator block of your Prisma schema:
 *
 *    ```
 *    generator client {
 *      provider = "prisma-client-js"
 *      previewFeatures = ["tracing"]
 *    }
 *    ```
 */
export declare const prismaIntegration: (options?: PrismaOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=index.d.ts.map