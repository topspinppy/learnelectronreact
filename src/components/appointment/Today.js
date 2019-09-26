import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

class Today extends Component {
    state = {
        appointments: []
    }

    componentDidMount() {
        ipcRenderer.send("appointment:request:today");
        ipcRenderer.on("appointment:response:today", (event, appointments) => {
            this.setState({ appointments })
        })
    }
    render() {
        return(
            <div>
                <h3>Today</h3>
                {
                    this.state.appointments.map(appointment => {
                        // if(appointment.name.includes(this.state.filter))
                        return (
                            <div key={appointment.id}>
                                <p>Name: {appointment.name}</p>
                                <p>Phone Number: {appointment.number}</p>
                                <p>Date: {appointment.date} </p>
                                <p>Hour: {appointment.hour} </p>
                                <p>Symptoms: {appointment.symptoms} </p>
                                <p>Done: {appointment.done ? "Yes" : "No"} </p>
                                {/* <button
                                    disabled={appointment.done}
                                    onClick={() => this.done(appointment.id)}
                                >
                                    Done
                                </button> */}
                                <hr />
                            </div>
                        )
                        // else return null;
                    })
                }
            </div>
        )
    }
}

export default Today;