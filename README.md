# electron-utils
Electron quick functions  
works in both main and renderer process

[![npm version](https://badge.fury.io/js/%40wuild%2Felectron-utils.svg)](https://badge.fury.io/js/%40wuild%2Felectron-utils)

## TODO
* Write a better README

## Installation
```
npm install @wuild/electron-utils
```

## Usage
```javascript
const utils = require("@wuild/electron-utils");
````

#### Data

| Name                      | Description                  |
|---------------------------|------------------------------|
| name                      | Get project name             |
| version                   | Get project version          |
| platform                  | Get current platform         |
| arch                      | Get current arch             |
| env                       | Get node enviroment          |
| userData                  | Get appData location         |

#### Methods

| Name                      | Description                                       |
|---------------------------|---------------------------------------------------|
| isDev                     | Checks if the env is set to 'dev'                 |
| isPackaged                | Checks if app is packaged                         |
| isOSX                     | Checks if we are under Mac                        |
| isWindows                 | Checks if we are under Windows                    |
| isLinux                   | Checks if we are under Linux                      |
| isUnix                    | Checks OS is of type unix                         |
| x86                       | Checks if the processor's arch is x86             |
| x64                       | Checks if the processor's arch is x64             |


## Example

```javascript
const utils = require("@wuild/electron-utils");

console.log("name:", utils.name);
console.log("version:", utils.version);
console.log("platform:", utils.platform);
console.log("arch:", utils.arch);
console.log("env:", utils.env);
console.log("userData:", utils.userData);


console.log("isDev:", utils.isDev());
console.log("isPackaged:", utils.isPackaged());
console.log("isOSX:", utils.isOSX());
console.log("isWindows:", utils.isWindows());
console.log("isLinux:", utils.isLinux());
console.log("isUnix:", utils.isUnix());
console.log("x86:", utils.x86());
console.log("x64:", utils.x64());
```

#### License
Copyright © 2018, [Wuild](https://github.com/Wuild) Released under the [MIT license](https://opensource.org/licenses/MIT).