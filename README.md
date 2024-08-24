# Blog &middot;

Collection of thougs I thought would be useful sharig.

## Table of content

- [Setup](#setup)
- [Stack](#stack)
- [DevOps](#devops)
- [Scripts](#scripts)

## Setup

- [Node](https://nodejs.org/en/) - version specified in [.nvmrc](/.nvmrc) file.
- [corepack](https://github.com/nodejs/corepack) - loads package manager defined in project without installing it

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

### Prerequisites

```sh
# switch to correct node version
fnm use

# Setup correct version of npm using corepack
corepack enable
corepack install

# Install dependencies
pnpm i

# Start dev server
pnpm dev
```

## Stack

- [TypeScript](https://www.typescriptlang.org/),
- [SvelteKit](https://kit.svelte.dev)
- [zod](https://zod.dev)
- [mdsvex](https://mdsvex.pngwn.io)

### Tools

- [pnpm](https://pnpm.io),
- [vite](https://vitejs.dev/),
- [eslint](https://eslint.org),
- [prettier](https://prettier.io)

## Scripts

Summary of npm scripts.

### General

| Script    | Description                    |
| --------- | ------------------------------ |
| `dev`     | starts application in DEV mode |
| `build`   | builds app in PROD mode        |
| `preview` | previews build                 |
| `check`   | serves built application       |

### Checks

| Script          | Description                |
| --------------- | -------------------------- |
| `check:watch`   | ?                          |
| `check:types`   | validates TS types         |
| `check:format`  | validates code formatting  |
| `check:lint`    | validates linting rules    |
| `check:imports` | checks for unimported code |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |
