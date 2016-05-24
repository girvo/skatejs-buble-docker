/**
 * App entry-point
 */
'use strict'

// Base dependencies
const polyfill = require('./polyfill')
const skate = require('skatejs')

// vdom-based rendering helpers
const {render} = require('skatejs-dom-diff')
const {div} = require('skatejs-dom-diff').vdom.element

// Setup our web component definitions
skate('hello-world', {
    properties: {
        name: {
            default: 'Josh',
            set: skate.render,
        }
    },

    created(ele) {
        setTimeout(() => {
            ele.name = 'Yay'
        }, 2000)
    },

    render: render((ele) => {
        return div(`Hello, ${ele.name}!`)
    })
})
