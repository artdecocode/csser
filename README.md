# @artdeco/csser

[![npm version](https://badge.fury.io/js/@artdeco/csser.svg)](https://npmjs.org/package/@artdeco/csser)

`@artdeco/csser` is The CSS Enhancer To Include Vendor Prefixes Automatically.

```sh
yarn add @artdeco/csser
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`csser(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@artdeco/csser.Config`](#type-_@artdeco/csserconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import csser from '@artdeco/csser'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `csser(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@artdeco/csserconfig">`_@artdeco/csser.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import csser from '@artdeco/csser'

(async () => {
  const res = await csser({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>