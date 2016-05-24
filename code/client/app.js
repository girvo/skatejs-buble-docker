/**
 * App entry-point
 */
'use strict'

const polyfill = require('./polyfill')
const skate = require('skatejs')
const render = require('skatejs-dom-diff').render
const el = require('skatejs-dom-diff').vdom.element

// Setup our web component definitions
skate('hello-world', {
    properties: {
        name: {
            attribute: true,
            required: true,
            // set: skate.render,
        }
    },

    // XXX: Is this the correct way? Or should we use property[x].set instead?
    attribute(ele, data) {
        skate.render(ele)
    },

    created(ele) {
        setTimeout(() => {
            ele.name = 'Yay'
        }, 2000)
    },

    render: render((ele) => {
        return el('div', `Hello, ${ele.name}!`)
    })
})
