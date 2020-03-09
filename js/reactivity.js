/** 
 * Original Vue source
 * https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js
 **/

 /** Vue target: https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js#L55 */
let target = null
let watcher = (currentTarget) => {
	target = currentTarget
	target()
	target = null
}

/** Vue Dep class: https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js#L13 */
class Dep {
	constructor() {
		this.subscribers = []
	}
	depend() {
		if (typeof target === 'function' &&
			!this.subscribers.includes(target)) {
			this.subscribers.push(target)
		}
	}
	notify() {
		this.subscribers.forEach((subscriber) => subscriber())
	}
}

export { watcher, Dep }
