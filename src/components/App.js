import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};
	addFish = fish => {
		// 1) take a copy of existing state
		const fishes = { ...this.state.fishes };
		// 2) add new fish to fishes variable
		fishes[`fish${Date.now()}`] = fish;
		// 3) Set the new fishes object to state
		this.setState({ fishes: fishes });
		// 4) clear form
	};
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};
	addToOrder = (key) => {
		// take a copy of state
		const order = {...this.state.order};
		// either add or update number in order
		order[key] = order[key] + 1 || 1;
		//set state
		this.setState({order: order})
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header age="100" tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish index={key} addToOrder={this.addToOrder} key={key} details={this.state.fishes[key]} />
						))}
					</ul>
				</div>
				<Order />
				<Inventory
					loadSampleFishes={this.loadSampleFishes}
					addFish={this.addFish}
				/>
			</div>
		);
	}
}

export default App;
