/** 
 * Original Vue source
 * https://github.com/vuejs/vue/blob/dev/src/core/instance/init.js
 **/

import { Dep, watcher } from './reactivity.js'

function init(options) {
	let component = {}

	options.beforeCreate.call(component)
	initState(options.state, component)
	initComputed(options.computed, component)
	options.created.call(component)

	options.beforeMount.call(component)
	initRender({ el: options.el, render: options.render }, component)
	options.mounted.call(component)

	return component
}

/** Vue initRender: https://github.com/vuejs/vue/blob/dev/src/core/instance/render.js#L19 */
function initRender({ el, render }, component) {
	watcher(() => {
		component.$el = document.querySelector(el)
		component.$el.innerHTML = render.call(component)		
	})
}

/** Vue initComputed: https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L169 */
function initComputed(computed, component) {
	Object.keys(computed) // ['total','totalWithVat']
		.forEach((key) => {
			let internalValue
			let dep = new Dep()
			watcher(() => {
				internalValue = computed[key].call(component)
				dep.notify()
			})
			Object.defineProperty(component, key, {
				get() {
					dep.depend()
					return internalValue
				}
			})
		})
}

/** Vue initState: https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L48 */
function initState(state, component) {
	Object.keys(state) // ['price','quantity']
		.forEach((key) => {
			let internalValue = state[key]
			let dep = new Dep()
			Object.defineProperty(component, key, {
				get() {
					dep.depend()
					return internalValue
				},
				set(newValue) {
					internalValue = newValue
					dep.notify()
				}
			})
		})
}
export { init }
