# gatsby-script

An enhanced script component for Gatsby sites with support for various loading strategies.

You do not need to install this package directly, it is available in the main Gatsby package since `gatsby@4.15.0`.

See the [documentation](https://gatsby.dev/gatsby-script) for full details.

## Usage

```tsx
import * as React from "react"
import { Script, ScriptStrategy } from "gatsby" // Re-exported from core

const GTM = `G-XXXXXXXXXX` // Example Google Analytics 4 identifier

// Example script sources for illustration
const scripts = {
  three: "https://unpkg.com/three@0.139.1/build/three.js",
  marked: "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
  gtag: `https://www.googletagmanager.com/gtag/js?id=${GTM}`,
}

// Strategy prop is optional, defaults to post-hydrate
function IndexPage() {
  return (
    <main>
      <h1>Script component example</h1>
      <Script src={scripts.three} strategy={ScriptStrategy.postHydrate} />
      <Script src={scripts.marked} strategy={ScriptStrategy.idle} />
      <Script
        src={scripts.gtag}
        strategy={ScriptStrategy.offMainThread}
        forward={[`gtag`]}
      />
      <Script id="gtag-config" strategy={ScriptStrategy.offMainThread}>
        {`
          // Example configuration of Google Analytics for use in Partytown
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', ${GTM}, { send_page_view: false })
        `}
      </Script>
      <Script
        id="my-unique-id"
        dangerouslySetInnerHTML={{ __html: `alert('Hello world')` }}
      />
      <Script id="my-unique-id-2">{`alert('Hello world')`}</Script>
    </main>
  )
}

export default IndexPage
```
