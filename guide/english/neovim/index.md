---
title: Neovim
---
# Neovim

Neovim is a refactor, and sometimes redactor, in the tradition of Vim (which itself derives from <a href='https://en.wikipedia.org/wiki/Stevie_%28text_editor%29 "Stevie"' target='_blank' rel='nofollow'>Stevie</a>).
It is not a rewrite but a continuation and extension of Vim.
Many clones and derivatives exist, some very clever—but none are Vim.
Neovim is built for users who want the good parts of Vim, and more.
Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.
It is included as "vi" with most UNIX systems and with Apple OS X.

## Goals
- Provide a flexible, extensible Vim with a first-class, fast scripting alternative (lua/luajit)
- Provide a consistent user experience across platforms
- Leverage ongoing Vim development: harmony
- Maintain feature parity with Vim; avoid regressions
- Continue the Vim tradition of backwards compatibility, with few exceptions
- Keep the core small and fast
- Target all platforms supported by libuv
- Optimize out of the box, for new users but especially regular users
- Delegate to plugins, but preserve the utility of the editor core

## Non-Goals
- Turn Vim into an IDE
- Limit third-party applications (such as IDEs!) built with Neovim
- Deprecate VimL
- Vi-compatibility

## Principles
- Do not regress from origin
- Decide outcomes by weighing cost and benefit
- Use automation to solve problems
- Enable new contributors: remove barriers to entry
- Unblock third parties and plugin authors: allow progress
- In matters of taste or ambiguity, favor tradition/compatibility...
- ...but prefer usability over tradition if the benefits are overwhelming
- Give usability a chance™

For more information head to <a href='https://neovim.io/' target='_blank' rel='nofollow'>Neovim's homepage</a>
