# 🧩 Node Module Template

[![CI](https://github.com/jakejarvis/node-module-template/actions/workflows/ci.yml/badge.svg)](https://github.com/jakejarvis/node-module-template/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@jakejarvis/my-module?logo=npm)](https://www.npmjs.com/package/@jakejarvis/my-module)
[![MIT License](https://img.shields.io/github/license/jakejarvis/node-module-template?color=violet)](LICENSE)

Just a personal boilerplate to my liking for a Node and/or browser module w/ ESM, CommonJS, and UMD outputs (plus TypeScript support) via the awesome [Microbundle](https://github.com/developit/microbundle). Ready to publish on NPM and/or GitHub Packages and distibute via [unpkg](https://unpkg.com/), [skypack.dev](https://www.skypack.dev/), etc.

Probably not very useful to anybody else. 😊

The rest of the readme from now on is placeholder crap...

## Install

```sh
npm install @jakejarvis/my-module --save-dev
# or...
yarn add @jakejarvis/my-module --dev
```

## Usage

```js
import { something } from "@jakejarvis/my-module";

something({ doSomething: true });
```

## API

### something(options?)

#### options

Type: `object`

##### doSomething

Type: `boolean`\
Default: `false`

Makes it do something.

## Examples

- [dark-mode-switcheroo](https://github.com/jakejarvis/dark-mode)
- [simple-anchor](https://github.com/jakejarvis/simple-anchor)
- [get-canonical-url](https://github.com/jakejarvis/get-canonical-url)
- [imagemoji](https://github.com/jakejarvis/imagemoji)

## License

MIT
