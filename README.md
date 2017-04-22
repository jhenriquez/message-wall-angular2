# Sample Angular 2 Application

A very basic Angular 2 application, a visual interface for the [messages-wall-api][1].
The main purpose of the project is for me explore Angular 2 concepts and typescript.

## Tools

Most of the code is static, except for the typescript code which is compiled and bundled using [Webpack](https://webpack.js.org/).

## Backend

This functionality is provided by the [messages-wall-api][1] module, which is also OSS. You can learn more about it from it's readme.
As for its use in this project it is limited to requiring and starting the already pre-configured server provided by the package.
This happens [here](../blob/master/index.js).

By default the application is served on port 8180. But this can be changed either with the PORT environment variable or directly in the code.

The [messages-wall-api][1] requires some settings to start properly. Please review them on its README.md file.


## Useful scripts

`npm start` Starts up the backend which incidintely serves the app as static content.

`npm build` Compiles and bundles the typescript file in the `src` directory and saves the output on `public/scripts`

`npm build:watch` Builds the files currently on the `src` directory and starts a watcher for file changes.

[1]:https://github.com/jhenriquez/messages-wall-api
