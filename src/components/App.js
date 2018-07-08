import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
// Depolyed to Netlify

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	componentDidMount() {
		//reinstate localstorage
		const localStorageRef = localStorage.getItem(
			this.props.match.params.storeId
		);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
			context: this,
			state: "fishes"
		});
	}
	componentDidUpdate() {
		localStorage.setItem(
			this.props.match.params.storeId,
			JSON.stringify(this.state.order)
		);
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}
	addFish = fish => {
		// 1) take a copy of existing state
		const fishes = { ...this.state.fishes };
		// 2) add new fish to fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// 3) Set the new fishes object to state
		this.setState({ fishes: fishes });
		// 4) clear form
	};
	updateFish = (key, updatedFish) => {
		// take a copy of current fish state
		const fishes = { ...this.state.fishes };
		// update that state
		fishes[key] = updatedFish;
		// set that to state
		this.setState({ fishes: fishes });
	};
	deleteFish = key => {
		// take a copy of state
		const fishes = { ...this.state.fishes };
		// delete fish
		fishes[key] = null;
		// update state
		this.setState({ fishes: fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};
	addToOrder = key => {
		// take a copy of state
		const order = { ...this.state.order };
		// either add or update number in order
		order[key] = order[key] + 1 || 1;
		//set state
		this.setState({ order: order });
	};
	removeFromOrder = key => {
		// get a copy of the state
		const order = { ...this.state.order };
		// delete a fish
		delete order[key];
		// update the state
		this.setState({ order: order });
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								index={key}
								addToOrder={this.addToOrder}
								key={key}
								details={this.state.fishes[key]}
							/>
						))}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					removeFromOrder={this.removeFromOrder}
					order={this.state.order}
				/>
				<Inventory
					loadSampleFishes={this.loadSampleFishes}
					addFish={this.addFish}
					fishes={this.state.fishes}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
				/>
			</div>
		);
	}
}

export default App;
