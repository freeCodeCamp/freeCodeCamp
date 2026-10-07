import * as React from "react"
import { css } from "../css-to-object"

export const Style = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: css`
        :host {
          --color-ansi-selection: rgba(95, 126, 151, 0.48);
          --color-ansi-bg: #fafafa;
          --color-ansi-fg: #545454;
          --color-ansi-white: #969896;
          --color-ansi-black: #141414;
          --color-ansi-blue: #183691;
          --color-ansi-cyan: #007faa;
          --color-ansi-green: #008000;
          --color-ansi-magenta: #795da3;
          --color-ansi-red: #d91e18;
          --color-ansi-yellow: #aa5d00;
          --color-ansi-bright-white: #ffffff;
          --color-ansi-bright-black: #545454;
          --color-ansi-bright-blue: #183691;
          --color-ansi-bright-cyan: #007faa;
          --color-ansi-bright-green: #008000;
          --color-ansi-bright-magenta: #795da3;
          --color-ansi-bright-red: #d91e18;
          --color-ansi-bright-yellow: #aa5d00;
          --importantLight: #ffffff;
          --importantDark: #000000;
          --backdrop: rgba(72, 67, 79, 0.5);
          --color: #454a53;
          --background: var(--color-ansi-bright-white);
          --primary: #663399;
          --primaryLight: #9158ca;
          --link: var(--primary);
          --line: #e0e0e0;
          --colorHeader: rgba(255, 255, 255, 0.8);
          --codeFrame-bg: #eeeeee;
          --codeFrame-color: #414141;
          --codeFrame-button-bg: white;
          --radii: 5px;
          --z-index-backdrop: 9000;
          --z-index-overlay: 10000;
          --space: 1.5em;
          --space-sm: 1em;
          --space-lg: 2.5em;
          --rootBoxShadowOpacity: 0.08;
          --ring-opacity: 0.65;
          --ring-color: rgba(138, 75, 175, var(--ring-opacity));
        }

        [data-gatsby-overlay="backdrop"] {
          background: var(--backdrop);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100%;
          width: 100%;
          backdrop-filter: blur(10px);
          z-index: var(--z-index-backdrop);
        }

        [data-gatsby-overlay="root"] {
          font: 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol" !important;
          background: var(--background);
          color: var(--color);
          position: fixed;
          width: 100%;
          max-width: 60%;
          min-width: 320px;
          max-height: 90%;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          box-shadow: rgba(46, 41, 51, var(--rootBoxShadowOpacity)) 0px 7px 19px
              11px,
            rgba(71, 63, 79, var(--rootBoxShadowOpacity)) 0px 2px 4px;
          border-radius: var(--radii);
          display: inline-flex;
          flex-direction: column;
          z-index: var(--z-index-overlay);
        }

        [data-gatsby-overlay="root"] a {
          color: var(--link);
          text-decoration: none;
          font-weight: 500;
          padding: 0.25em;
          border-radius: 4px;
        }

        [data-gatsby-overlay="root"] button:focus,
        [data-gatsby-overlay="root"] a:focus {
          outline: 4px solid transparent;
          box-shadow: 0 0 0 4px var(--ring-color);
        }

        [data-gatsby-overlay="root"] a:hover {
          text-decoration: underline;
        }

        [data-gatsby-overlay="header"] {
          display: grid;
          grid-gap: var(--space-sm);
          grid-template-columns: 1fr auto;
          color: var(--colorHeader);
          background: var(--primary);
          padding: var(--space);
          border-top-left-radius: var(--radii);
          border-top-right-radius: var(--radii);
        }

        [data-gatsby-error-type="build-error"][data-gatsby-overlay="header"] {
          grid-template-columns: 1fr;
        }

        [data-gatsby-overlay="body"] {
          padding: var(--space);
          overflow: auto;
        }

        [data-gatsby-overlay="body__describedby"] {
          margin-top: 0;
          margin-bottom: var(--space);
        }

        [data-gatsby-overlay="body"] h2 {
          margin-top: 0;
          font-weight: 500;
          font-size: 1.25em;
          color: var(--importantDark);
        }

        [data-gatsby-overlay="pre"] {
          margin: 0;
          color: var(--color-ansi-fg);
          background: var(--color-ansi-bg);
          padding: var(--space-sm);
          border-radius: 0 0 var(--radii) var(--radii);
          overflow: auto;
        }

        [data-gatsby-overlay="header__top"] {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        [data-gatsby-overlay="header__open-close"] {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }

        [data-gatsby-overlay="header__cause-file"] {
          word-break: break-word;
        }

        [data-gatsby-overlay="header__cause-file"] h1,
        [data-gatsby-overlay="header__top"] h1 {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 1.25em;
          font-weight: 400;
        }

        header[data-gatsby-error-type="runtime-error"]
          [data-gatsby-overlay="header__cause-file"]
          h1,
        header[data-gatsby-error-type="graphql-error"]
          [data-gatsby-overlay="header__cause-file"]
          h1 {
          color: var(--importantLight);
        }

        [data-gatsby-overlay="header__cause-file"] span {
          font-size: 1.25em;
          color: var(--importantLight);
          font-weight: 500;
        }

        [data-gatsby-overlay="primary-button"] {
          --ring-opacity: 0.9;
          --ring-color: rgba(54, 32, 102, var(--ring-opacity));
          align-items: center;
          border-radius: var(--radii);
          justify-content: center;
          line-height: 1;
          cursor: pointer;
          color: var(--importantLight);
          border: 1px solid var(--primary);
          background: var(--primaryLight);
          font-size: 0.9em;
          height: 32px;
          min-width: 2em;
          padding: 0.25em 0.75em;
          appearance: none;
        }

        [data-gatsby-overlay="codeframe__top"] {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          background: var(--codeFrame-bg);
          padding: 0.5em var(--space-sm);
          color: var(--codeFrame-color);
          word-break: break-word;
        }

        [data-gatsby-overlay="body__open-in-editor"] {
          align-items: center;
          border-radius: var(--radii);
          justify-content: center;
          cursor: pointer;
          color: var(--codeFrame-color);
          border: none;
          background: var(--codeFrame-button-bg);
          font-size: 0.9em;
          min-width: 2em;
          padding: 0.35em 0.75em;
          appearance: none;
          margin-right: var(--space-sm);
        }

        [data-gatsby-overlay="codeframe__top"]
          [data-gatsby-overlay="body__open-in-editor"] {
          margin-right: 0;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        [data-gatsby-overlay="close-button"] {
          --ring-opacity: 0.9;
          --ring-color: rgba(54, 32, 102, var(--ring-opacity));
          cursor: pointer;
          border: 0;
          padding: 0;
          background-color: var(--primaryLight);
          color: var(--importantLight);
          appearance: none;
          height: 32px;
          width: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radii);
        }

        [data-gatsby-overlay="body__graphql-error-message"] {
          margin-top: var(--space);
        }

        [data-gatsby-overlay="codeframe__top"]:first-of-type {
          border-radius: var(--radii) var(--radii) 0 0;
        }

        [data-gatsby-overlay="codeframe__bottom"] {
          margin-top: var(--space);
        }

        [data-gatsby-overlay="body__error-message-header"] {
          font-size: 1.2em;
          color: var(--importantDark);
          margin-bottom: 1em;
        }

        [data-font-weight="bold"] {
          font-weight: 600;
        }

        [data-gatsby-overlay="footer"] {
          padding-top: var(--space);
        }

        [data-gatsby-overlay="accordion"] {
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          border: 0;
        }

        [data-gatsby-overlay="accordion__item"] {
          overflow: visible;
          box-sizing: border-box;
          border-top: 1px solid var(--line);
          transition: all 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
          margin: 0;
          padding: 0;
          vertical-align: baseline;
          font-size: 100%;
        }

        [data-gatsby-overlay="accordion__item__heading"] {
          background: none;
          border: 0;
          position: relative;
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          min-height: 2.5em;
          margin: 0;
          padding: 1em 0;
          cursor: pointer;
          appearance: none;
          user-select: text;
        }

        [data-gatsby-overlay="accordion__item__heading"] svg {
          flex: 0 0 1em;
          width: 1em;
          height: 1em;
          margin: 2px 1em 0 0;
          color: var(--importantDark);
        }

        [data-gatsby-overlay="accordion__item__title"] {
          width: 100%;
          text-align: left;
          font-size: 18px;
          color: var(--importantDark);
        }

        [data-gatsby-overlay="accordion__item__content"] {
          display: none;
          padding-top: 0;
          padding-bottom: 0;
          transition: padding 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        [data-accordion-active="true"]
          [data-gatsby-overlay="accordion__item__content"] {
          display: block;
          padding-bottom: var(--space);
          transition: padding 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        [data-accordion-active="false"]
          [data-gatsby-overlay="accordion__item__content"] {
          display: none;
        }

        [data-gatsby-overlay="chevron-icon"] {
          transform: rotate(90deg);
          transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
        }

        [data-accordion-active="false"] [data-gatsby-overlay="chevron-icon"] {
          transform: rotate(90deg);
        }

        [data-accordion-active="true"] [data-gatsby-overlay="chevron-icon"] {
          transform: rotate(-90deg);
        }

        @media (min-width: 768px) {
          [data-gatsby-overlay="header"],
          [data-gatsby-error-type="build-error"][data-gatsby-overlay="header"] {
            grid-template-columns: 1fr auto;
          }
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --color-ansi-bg: #2b2b2b;
            --color-ansi-fg: #d1d5db;
            --color-ansi-white: #ffffff;
            --color-ansi-black: #d4d0ab;
            --color-ansi-blue: #4791ff;
            --color-ansi-cyan: #00e0e0;
            --color-ansi-green: #abe338;
            --color-ansi-magenta: #dcc6e0;
            --color-ansi-red: #ffa07a;
            --color-ansi-yellow: #ffd700;
            --color-ansi-bright-white: #ffffff;
            --color-ansi-bright-black: #d4d0ab;
            --color-ansi-bright-blue: #4791ff;
            --color-ansi-bright-cyan: #00e0e0;
            --color-ansi-bright-green: #abe338;
            --color-ansi-bright-magenta: #dcc6e0;
            --color-ansi-bright-red: #ffa07a;
            --color-ansi-bright-yellow: #ffd700;
            --importantDark: white;
            --backdrop: rgba(48, 48, 50, 0.75);
            --color: #d1d5db;
            --link: #d9bae8;
            --background: #232129;
            --primary: #452475;
            --primaryLight: #663399;
            --line: #464647;
            --codeFrame-bg: #18171d;
            --codeFrame-color: #d1d5db;
            --codeFrame-button-bg: #232129;
            --rootBoxShadowOpacity: 0.15;
            --ring-color: rgba(217, 186, 232, var(--ring-opacity));
          }

          [data-gatsby-overlay="close-button"],
          [data-gatsby-overlay="primary-button"] {
            --ring-color: rgba(177, 122, 204, var(--ring-opacity));
          }
        }
      `,
    }}
  />
)
