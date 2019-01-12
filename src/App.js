import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem,
  InputGroup, Input, Card, CardTitle, FormGroup, Form, Button} from 'reactstrap';


class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      radius: props.radius,
      rotation: props.rotation,
      time: props.time,
      color: props.color,
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="planet sun" style={{
          width: this.state.radius*2,
          height: this.state.radius*2,
          borderRadius: '50%',
          left: 200 - this.state.rotation - this.state.radius,
          top: 200 - this.state.rotation - this.state.radius,
          backgroundColor: this.state.color,
        }}>{this.state.name}</div>
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPlanetName: '',
      inputPlanetRadius: 0,
      inputPlanetRotation: 0,
      inputPlanetTime: 0,

      activePlanet: 0,

      planets: [
        {
          name: 'Sun',
          radius: 20,
          rotation: 0,
          time: 10,
          sats: [
            {
              name: 'earth',
              radius: 10,
              rotation: 200,
              time: 5,
            }
          ],
        },
        {
          name: 'Mercury',
          radius: 10,
          rotation: 65,
          time: 20,
          sats: [
            {
              name: 'Messenger',
              radius: 70,
              rotation: 350,
              time: 15,
            }
          ],
        },
      ],
    };
  }

  updatePlanet() {
  }

  addPlanet() {
    var planets = this.state.planets;
    planets.push({
      inputPlanetName: '',
      inputPlanetRadius: 0,
      inputPlanetRotation: 0,
      inputPlanetTime: 0,
      name: this.state.inputPlanetName,
      sats: [],
      radius: this.state.inputPlanetRadius,
      rotation: this.state.inputPlanetRotation,
      time: this.state.inputPlanetTime,
    });
    this.setState({
      planets: planets
    })
  }

  deletePlanet(ind) {
    var planets = this.state.planets;
    planets.splice(ind, 1);
    console.log(ind, 'planets', planets);
    this.setState({
      activePlanet: 0,
      planets: planets,
    })
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs="xl-3">
            <ListGroup>
              {
                this.state.planets.map((it, ind) =>
                  <ListGroupItem key={ind}
                                 onClick={() => this.setState({activePlanet: ind})}>
                    <Form onSubmit={(event) => {
                      event.preventDefault();
                      this.updatePlanet(ind);
                    }}>
                      <Input type="text" name="name" placeholder="Name" bsSize="sm" value={this.state.planets[ind].name}/>
                      <InputGroup>
                        <Input type="text" name="radius" placeholder="Radius" bsSize="sm" value={this.state.planets[ind].radius}/>
                        <Input type="text" name="name" placeholder="Rotation" bsSize="sm" value={this.state.planets[ind].rotation}/>
                        <Input type="text" name="name" placeholder="Time" bsSize="sm" value={this.state.planets[ind].time}/>
                      </InputGroup>
                      <Button type="submit" size="sm">Update</Button>
                      <Button size="sm" onClick={() => this.deletePlanet(ind)}>Delete</Button>
                    </Form>
                  </ListGroupItem>)
              }

              <ListGroupItem>
                <Form onSubmit={(event) => {event.preventDefault(); this.addPlanet() }}>
                  <Input type="text" name="name" placeholder="Name" bsSize="sm" value={this.state.inputPlanetName} onChange={(e) => this.setState({ inputPlanetName: e.target.value })} />
                  <InputGroup>
                    <Input type="text" name="radius" placeholder="Radius" bsSize="sm" value={this.state.inputPlanetRadius} onChange={(e) => this.setState({ inputPlanetRadius: e.target.value })} />
                    <Input type="text" name="name" placeholder="Rotation" bsSize="sm" value={this.state.inputPlanetRotation} onChange={(e) => this.setState({ inputPlanetRotation: e.target.value })} />
                    <Input type="text" name="name" placeholder="Time" bsSize="sm" value={this.state.inputPlanetTime} onChange={(e) => this.setState({ inputPlanetTime: e.target.value })} />
                  </InputGroup>
                  <Button type="submit" size="sm">Add</Button>
                </Form>
              </ListGroupItem>
            </ListGroup>

          </Col>
          <Col xs="xl-3">
            <ListGroup>
              {
                this.state.planets.length > 0 ?
                this.state.planets[this.state.activePlanet].sats.map((it, ind) =>
                  <ListGroupItem key={ind}
                                 onClick={null}>
                    <Form onSubmit={(event) => {event.preventDefault(); console.log(ind)}}>
                      <Input type="text" name="name" placeholder="Name" bsSize="sm" value={this.state.planets[this.state.activePlanet].sats[ind].name} />
                      <InputGroup>
                        <Input type="text" name="radius" placeholder="Radius" bsSize="sm" value={this.state.planets[this.state.activePlanet].sats[ind].radius} />
                        <Input type="text" name="name" placeholder="Rotation radius" bsSize="sm" value={this.state.planets[this.state.activePlanet].sats[ind].rotation} />
                        <Input type="text" name="name" placeholder="Time" bsSize="sm" value={this.state.planets[this.state.activePlanet].sats[ind].time} />
                      </InputGroup>
                      <Button type="submit" size="sm">Update</Button>
                      <Button size="sm">Delete</Button>
                    </Form>
                  </ListGroupItem>)
                  : null
              }

              <ListGroupItem>
                <Form onSubmit={(event) => {event.preventDefault(); }}>
                  <Input type="text" name="name" placeholder="Name" bsSize="sm" value={''} />
                  <InputGroup>
                    <Input type="text" name="radius" placeholder="Radius" bsSize="sm" value={0} />
                    <Input type="text" name="name" placeholder="Rotation" bsSize="sm" value={0} />
                    <Input type="text" name="name" placeholder="Time" bsSize="sm" value={0} />
                  </InputGroup>
                  <Button type="submit" size="sm">Add</Button>
                </Form>
              </ListGroupItem>
            </ListGroup>

          </Col>
          <Col xs="xl-6" className="system">
            {
              this.state.planets.map((it, ind) => (
                <Planet name={it.name} radius={it.radius} rotation={it.rotation} color={intToRGB(hashCode(it.name))} />
              ))
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return '#' + "00000".substring(0, 6 - c.length) + c;
}