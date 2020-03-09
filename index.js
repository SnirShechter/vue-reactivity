import { init } from './js/init.js'

let options = {
	beforeCreate() {
		console.log('beforeCreate', this.$el)
	},
	created() {
		console.log('created', this.$el)
	},
	beforeMount() {
		console.log('beforeMount', this.$el)
	},
	mounted() {
		console.log('mounted', this.$el)
	},
	el: '#app',
	render() {
		return /*html*/ `
		<div class="card">
			<div>
				<span>Price</span>
				<span>
					<button onclick="component.price -= 1">-</button>
					${(this.price + '').padStart(2, 0)} 
					<button onclick="component.price += 1">+</button>
				</span>
			</div>
			<div>
				<span>Quantity</span>
				<span>
					<button onclick="component.quantity -= 1">-</button>
					${(this.quantity + '').padStart(2, 0)} 
					<button onclick="component.quantity += 1">+</button>
				</span>
			</div>
			<div>
				<span>Discount</span>
				<span>
					<button onclick="component.discount -= 1">-</button>
					${(this.discount + '').padStart(2, 0)} 
					<button onclick="component.discount += 1">+</button>
				</span>
			</div>
			<div>
				<span>VAT (%)</span>
				<span>
					<button onclick="component.vat -= 1">-</button>
					${(this.vat + '').padStart(2, 0)} 
					<button onclick="component.vat += 1">+</button>
				</span>
			</div>
			<div class="totals">
				<span>Total</span>
				<span>${this.total}<span>
			</div>
			<div>
				<span>Total After Discount</span>
				<span>${this.totalWithDiscount.toFixed(2)}<span>
			</div>
			<div>
				<span>Total With Vat</span>
				<span>${this.totalWithVat.toFixed(2)}<span>
			</div>
		</div>
		`
	},
	state: {
		price: 10,
		quantity: 5,
		discount: 10,
		vat: 10
	},
	computed: {
		total() {
			return this.price * this.quantity
		},
		totalWithDiscount() {
			return this.total * (1 - this.discount / 100)
		},
		totalWithVat() {
			return this.totalWithDiscount * (1 + this.vat / 100)
		}
	}
}
let component = init(options)

window.component = component
