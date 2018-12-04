import React from "react";

class ToBuyForm extends React.Component {
    state = { name: "" };

    handleSubmit = (e) => {
        e.preventDefault(); //means do not refresh when form is submitted
        this.props.addItem(this.state.name);
        this.setState({ name: "" });
    };//end handleSubmit

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };//end handleChange

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    required 
                    placeholder="Add Item"
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                />
                <i class="far fa-plus-square"></i>
            </form>
        );//end return
    };//end render
};//end of ToBuyForm class

export default ToBuyForm;