import React, { Component } from "react";
const { ipcRenderer } = window.require("electron")

class List extends Component {
    state = {
        appointments: [],
        filter: ""
    }

    componentDidMount() {
        ipcRenderer.send("appointment:request:list");
        ipcRenderer.on("appointment:response:list", (event, appointments) => {
            this.setState({ appointments })
        })
    }
    
    done = id => {
        ipcRenderer.send("appointment:done", id)
    }
    render() {
        return(
            <div>
                <h3>Appointments List</h3>
                <hr />
                <input 
                    type="text"
                    name="filter"
                    placeholder="Insert name"
                    value={this.state.filter}
                    onChange={ e => this.setState({ filter: e.target.value }) }
                />
                {
                    this.state.appointments.map(appointment => {
                        if(appointment.name.includes(this.state.filter))
                        return (
                            <div key={appointment.id}>
                                <p>Name: {appointment.name}</p>
                                <p>Phone Number: {appointment.number}</p>
                                <p>Date: {appointment.date} </p>
                                <p>Hour: {appointment.hour} </p>
                                <p>Symptoms: {appointment.symptoms} </p>
                                <p>Done: {appointment.done ? "Yes" : "No"} </p>
                                <button
                                    disabled={appointment.done}
                                    onClick={() => this.done(appointment.id)}
                                >
                                    Done
                                </button>
                                <hr />
                            </div>
                        )
                        else return null;
                    })
                }
            </div>
        )
    }
}

export default List;