# skatejs-buble-docker

An example project/scaffold for a [Skate](https://github.com/skatejs/skatejs/tree/0.15.3#examples) based web-component setup, using [Koa](http://koajs.com/) for serving, and [Bublé](https://buble.surge.sh/guide/) for ES6 to ES5 compilation. All wrapped up with Browserify and Docker.

## Building

1. Clone the repository
1. Build the image for production or development: `docker build [--build-arg env=dev] -t skate:latest .`

## Running

a) Run the container for production: `docker run --rm -p 8080:8080 skate:latest`

b) Run the container for development: `docker run --rm -p 8080:8080 -v $PWD/code:/app skate:latest`

For actual development, you'll want to use [`dup`](https://github.com/girvo/dup) instead.

Keep in mind, you'll want to use `dup` v0.3.7 as that is what supports defaulting the `--build-arg env=dev` for you.
