import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

class Create extends Component {
    state = {
        name: "",
        number: "",
        date: "",
        hour: "",
        symptoms: ""
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm = e => {
        e.preventDefault();

        ipcRenderer.send("appointment:create", this.state);
        this.setState(this.state)
    }
    render() {
        return(
            <div>
                <h3>Create Appointment</h3>
                <form id="form" onSubmit={this.submitForm}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required
                    />
                    <br />
                    <label htmlFor="number">Phone Number:</label>
                    <input 
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.onChange}
                        required
                    />
                    <br />
                    <label htmlFor="number">date:</label>
                    <input 
                        type="text"
                        name="date"
                        value={this.state.date}
                        onChange={this.onChange}
                        required
                    />
                    <br />
                    <label htmlFor="number">hours:</label>
                    <input 
                        type="text"
                        name="hour"
                        placeholder="hh:mm"
                        value={this.state.hour}
                        onChange={this.onChange}
                        required
                    />
                    <br />
                    <label htmlFor="number">Symptoms:</label>
                    <textarea 
                        type="text"
                        name="symptoms"
                        value={this.state.symptoms}
                        onChange={this.onChange}
                        required
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Create;