import React, { Component } from 'react';

import SideBar from "../../components/Sidebar"
import CreateAppointment from "../../components/appointment/Create";
import AppointmentList from "../../components/appointment/List";
import TodayAppointments from "../../components/appointment/Today";
import { Container, Row, Col } from 'reactstrap';


class Dashboard extends Component {
  state = {
    view: "today"
  };

  renderView() {
    if (this.state.view === "create") return <CreateAppointment />
    else if (this.state.view === "list") return <AppointmentList />
    else return <TodayAppointments />;
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3"> 
            <SideBar onViewChange={ view => this.setState({ view })} />
          </Col>
          <Col xs="6">        
            { this.renderView() }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
