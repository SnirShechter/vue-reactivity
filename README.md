# Vue.js Reactivity
This repo is a result of a Vue.js reactivity talk & live coding from the 08/03/2020 on Basmach.

**Demo**: https://snirshechter.github.io/vue-reactivity/
## File Structure
The project is divided into 3 main parts:
* **Browser boilerplate** - index.html & the css folder
* **Component usage** - index.js
* **Reactivity & component initialization implementation** - js folder

## Features
The project features several main implementations of the Vue core:
* **Reactive State**
* **Component Initialization**
* **Computed Values** (with value caching)
* **Render & Mount** (Including a this.$el variable)
* **Lifecycle Hooks** - only the first four hooks: beforeCreate, created, beforeMount, mounted.

## Vue Source Reference
The implementations' original source files are:
* **init.js**
    * **init** - https://github.com/vuejs/vue/blob/dev/src/core/instance/init.js
    * **initRender** - https://github.com/vuejs/vue/blob/dev/src/core/instance/render.js
    * **initState & initComputed** - https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js
* **reactivity.js** - https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js

## Credit
This repo is inspired by a [Vue Mastery](https://www.vuemastery.com/) class.
