# Development

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Run project with Electron

[Electron](http://electron.atom.io/) can build desktop application based on web project without being tangled up in compatibility issue.

Command for running Project Checklist as an Electron app is provided, but you need to install electron globally by executing

> `npm install electron -g`

Here is a way that can accelerate Electron installation on Windows.

> Download the compatible zip file from [electron release](https://github.com/electron/electron/releases) or [electron mirror](https://npm.taobao.org/mirrors/electron)

> Put the file under directory C:\Users\YOURUSERNAME\.electron

> execute `npm install electron -g` now.

Once the process ends, execute `electron` and an Electron form will be opened. Then you can run this command under project directory

> `npm run electron` will build the project and show you an desktop application with Vue Admin.
