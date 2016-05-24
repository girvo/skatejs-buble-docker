/**
 * Simple static server entry-point using Koa and a couple of middlewares
 */
'use strict'

const koa = require('koa')
const serve = require('koa-static')
const mount = require('koa-mount')

// Serving the web folder for HTML
const web = koa()
web.use(serve('web'))

// Serving the built javascript
const js = koa()
js.use(serve('build'))

// Top-level app entry and routes
const app = koa()

app.use(mount('/assets/js', js))
app.use(mount('/', web))

app.listen(8080)
console.log('App listening on port 8080')
