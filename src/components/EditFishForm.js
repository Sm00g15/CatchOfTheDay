import React from "react";

class EditFishForm extends React.Component {
	handleChange = event => {
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};
		this.props.updateFish(this.props.index, updatedFish)
	};
	render() {
		return (
			<div className="fish-edit">
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={this.handleChange}
					value={this.props.fish.name}
				/>
				<input
					type="text"
					name="price"
					placeholder="Price"
					onChange={this.handleChange}
					value={this.props.fish.price}
				/>
				<select
					name="status"
					onChange={this.handleChange}
					value={this.props.fish.status}
					id=""
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					type="text"
					name="desc"
					placeholder="Desc"
					onChange={this.handleChange}
					value={this.props.fish.desc}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image"
					onChange={this.handleChange}
					value={this.props.fish.image}
				/>
				<button onClick={() => this.props.deleteFish(this.props.index)} type="submit">Remove Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
