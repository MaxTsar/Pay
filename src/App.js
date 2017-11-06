import React, { Component } from 'react';
import './App.css';

// data
import paymentsMethods from './paymentsMethods.js';
import howLong from './howLong.js';

// components
import TopLine from './components/TopLine.jsx';
import Decor from './components/Decor.jsx';
import Club from './components/Club.jsx';
import PaymentCard from './components/PaymentCard.jsx';
import CheckSubscribe from './components/CheckSubscribe.jsx';
import CheckProlong from './components/CheckProlong.jsx';
import AutoDesc from './components/AutoDesc.jsx';
import AutoSubs from './components/AutoSubs.jsx';
import Total from './components/Total.jsx';
import PreFooter from './components/PreFooter.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
	constructor() {
		super();
// global app state
		this.state = {
			paymentsMethods: paymentsMethods,
			buySubscribe: {
				active: true,
				checked: false
			},
			autoSubs: {
				show: false,
				active: true,
				checked: false
			},
			prolongSection: false,
			total: {
				show: false,
				time: null,
				perMonth: null,
				price: null,
				discount: false
			},
			howLong: howLong,
		};

// bindings all methods in app
		this.changeStatus = this.changeStatus.bind(this);
		this.setStateCheckBoxSubscribe = this.setStateCheckBoxSubscribe.bind(this);
		this.toggleCheckBoxSubscribe = this.toggleCheckBoxSubscribe.bind(this);
		this.toggleTimeSection = this.toggleTimeSection.bind(this);
		this.changeProlongTime = this.changeProlongTime.bind(this);
		this.clearActiveProlongTime = this.clearActiveProlongTime.bind(this);
		this.toggleAutoSubs = this.toggleAutoSubs.bind(this);
		this.disabledAutoSubs = this.disabledAutoSubs.bind(this);
		this.setTotal = this.setTotal.bind(this);
		this.changeDiscount = this.changeDiscount.bind(this);
	}
// toggle time section. using in changeStatus-method
	toggleTimeSection() {
		const toggle = this.state.paymentsMethods.find((item) => {
			return item.state.active;
		});
		this.setState({prolongSection: !!toggle});
	}

	setStateCheckBoxSubscribe() {
		const buySubscribe = Object.assign({}, this.state.buySubscribe);
		buySubscribe.checked = !buySubscribe.checked;
		this.setState({buySubscribe});
		const paymentsMethods = this.state.paymentsMethods.map((item) => {
			if(item.type === 'code') {
				item.state.prolongSection = !item.state.prolongSection;
				item.state.active = false;
			}
			return item;
		});
		this.setState({paymentsMethods});
	}

// using in changeStatus-method and toggle checkbox in CheckSubscribe - component
	toggleCheckBoxSubscribe(item) {
		const buySubscribe = Object.assign({}, this.state.buySubscribe);
		if(item.type === 'code') {
			buySubscribe.active = item.state.active;
			buySubscribe.checked = false;
		} else {
			buySubscribe.active = true;
		}
		this.setState({buySubscribe});
	}

// toggle payment card status(and all logic in app)
	changeStatus(id) {
		const paymentsMethods = [...this.state.paymentsMethods];
		const isActive = paymentsMethods.find((item) => {
			return item.state.active;
		});
		
		paymentsMethods.map((item) => {
			if(item.id === id) {
				this.toggleCheckBoxSubscribe(item);
				item.state.active = !item.state.active;
				item.state.gray = false;
			} else {
				if(isActive && isActive.id === id) {
					item.state.active = false;
					item.state.gray = false;
				} else {
					item.state.active = false;
					item.state.gray = true;
				}
			}
			return item;
		});
		this.setState({paymentsMethods}, () => {
			this.clearActiveProlongTime();
			this.toggleTimeSection();
			this.disabledAutoSubs();
		});
	}

// set active prop on target card 
	changeProlongTime(id) {
		const howLong = this.state.howLong.map((item) => {
			if(item.id === id) {
				item.active = !item.active;
			} else {
				item.active = false;
			}
			return item;
		});
		this.setState({howLong}, () => {
			this.setTotal();
		});
	}

// clear active prop on all prolong cards
	clearActiveProlongTime() {
		const show = this.state.paymentsMethods.find((item) => {
			return item.state.active
		});
		if(!show) {
			const howLong = this.state.howLong.map((item) => {
				item.active = false;
				return item;
			});
			this.setState({howLong});
		}
	}

	toggleAutoSubs() {
		const autoSubs = Object.assign({}, this.state.autoSubs);
		autoSubs.checked = !autoSubs.checked;
		this.setState({autoSubs});
	}

	disabledAutoSubs() {
		const autoSubs = Object.assign({}, this.state.autoSubs);
		const payment = this.state.paymentsMethods;
		let show = false;
		for(let i = 0; i < payment.length; i++) {
			if(payment[i].name === 'Yandex' || payment[i].name === 'PayPal' || payment[i].name === 'SMS') {
				if(payment[i].state.active) {
					show = true;
					break;
				}
			}
		}
		if(!show) {
			autoSubs.checked = false;
		}
		autoSubs.show = show;
		this.setState({autoSubs});
	}

	setTotal() {
		const total = Object.assign({}, this.state.total);
		const prolongIsActive = this.state.howLong.find((item) => {
			return item.active;
		});
		if(!!prolongIsActive) {
			total.show = !!prolongIsActive;
			total.price = prolongIsActive.price;
			total.time = prolongIsActive.time;
			total.perMonth = prolongIsActive.perMonth;
		} else {
			total.show = false;
			total.price = null;
			total.time = null;
			total.perMonth = null;
		}
		this.setState({total});
	}

	changeDiscount() {
		const total = Object.assign({}, this.state.total);
		total.discount = !total.discount;
		this.setState({total});
	}

  	render() {
		return (
			<div className="app">
				<TopLine />
				<Decor />
				<Club />
				<main>
					<section className="logic-section">
						<div className="payments-wrap">
							{
								this.state.paymentsMethods.map((item) => {
									return <PaymentCard
												changeStatus={this.changeStatus}
												key={item.id}
												data={item} />
								})
							}
						</div>
						<CheckSubscribe
								check={this.setStateCheckBoxSubscribe}
								data={this.state.buySubscribe} />
					</section>
					{
						this.state.prolongSection ?
						<section className="logic-section">
							<h2 className="section-title">На какой срок</h2>
							<div className="prolong-wrap">
								{
									this.state.howLong.map((item) => {
										return <CheckProlong
													setProlongTime={this.changeProlongTime}
													key={item.id}
													data={item}/>
									})
								}
							</div>
							<AutoDesc show={this.state.autoSubs.show} />
							<AutoSubs
								data={this.state.autoSubs}
								toggleAutoSubs={this.toggleAutoSubs} />
						</section>
						:
						''
					}
					{
						this.state.total.show ?
						<section className="logic-section">
							<Total
								changeDiscount={this.changeDiscount}
								showDiscount={this.state.discount}
								data={this.state.total}
								every={this.state.buySubscribe.checked} />
						</section>
						:
						''
					}
					<PreFooter show={this.state.total.show} />
				</main>
				<Footer />
			</div>
		);
  	}
}

export default App;