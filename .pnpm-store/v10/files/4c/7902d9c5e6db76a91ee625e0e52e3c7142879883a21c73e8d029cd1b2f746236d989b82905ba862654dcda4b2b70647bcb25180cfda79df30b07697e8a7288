/** @module CustomPrefixProvider */
interface CustomPrefixProviderProps {
    customPrefix: string;
}
/**
 * React component that provides a custom CSS prefix for Font Awesome icons.
 *
 * Use this if your React application uses server-side rendering (e.g. NextJS, Vite/Remix, Astro, etc.)
 * to ensure the `cssPrefix` is set correctly in the client-side prior to hydration.
 *
 * To ensure this works correctly, be sure to render this provider at the top level of your application.
 * It has been built with `"use client"` but not as a typical provider that would wrap the application.
 * This means you don't have to worry about turning your whole application into a client component when using this provider
 * at the top level.
 *
 * @example
 * ```tsx
 * // In Next.js App Router - `app/layout.tsx`
 * import '@fortawesome/fontawesome-svg-core/styles.css'
 * import { config } from '@fortawesome/fontawesome-svg-core'
 * import { CustomPrefixProvider } from '@fortawesome/react-fontawesome/CustomPrefixProvider'
 *
 * const CUSTOM_FA_CSS_PREFIX = 'my-custom-prefix'
 *
 * config.autoAddCss = false
 * // First set the prefix here so it is used during server-side rendering
 * config.cssPrefix = CUSTOM_FA_CSS_PREFIX
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       {
 *         // Render the component in isolation before the opening <body> tag
 *       }
 *       <CustomPrefixProvider customPrefix={CUSTOM_FA_CSS_PREFIX} />
 *       <body>
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 *
 * @param props
 * @returns null - This is a "void" component used purely for side effects.
 */
declare const CustomPrefixProvider: ({ customPrefix, }: CustomPrefixProviderProps) => null;

export { CustomPrefixProvider, type CustomPrefixProviderProps };
