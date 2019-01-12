import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem,
  InputGroup, Input, Card, CardTitle, FormGroup, Form, Button} from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'default',
      activePlanet: 0,
      planets: [
        {
          name: 'Sun',
          sats: [
            {
              'name': 'earth',
            }
          ],
        },
        {
          name: 'Mercury',
          sats: [
            {
              name: 'Messenger',
            }
          ],
        },
        {
          name: 'NEW',
          sats: [],
        }
      ],
      sats: [{
        name: 'default',
      }],
    };
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
                {it.name}
                <Form onSubmit={(event) => {event.preventDefault(); console.log(ind)}}>
                  <Input type="text" name="name" placeholder="Name" bsSize="sm" value={this.state.planets[this.state.activePlanet].name} />
                  <InputGroup>
                    <Input type="text" name="radius" placeholder="Radius" bsSize="sm" />
                    <Input type="text" name="name" placeholder="Rotation radius" bsSize="sm" />
                    <Input type="text" name="name" placeholder="Time" bsSize="sm" />
                  </InputGroup>
                  <Button type="submit" size="sm">Submit</Button>
                </Form>
              </ListGroupItem>)
            }
            </ListGroup>

          </Col>
          <Col xs="xl-3">
            <ListGroup>
              {
                this.state.planets[this.state.activePlanet].sats.map((it, ind) =>
                  <ListGroupItem key={ind}
                                 onClick={null}>
                    {it.name}
                    <Form onSubmit={(event) => {event.preventDefault(); console.log(ind)}}>
                      <Input type="text" name="name" placeholder="Name" bsSize="sm" value={this.state.planets[this.state.activePlanet].sats[ind].name} />
                      <InputGroup>
                        <Input type="text" name="radius" placeholder="Radius" bsSize="sm"  />
                        <Input type="text" name="name" placeholder="Rotation radius" bsSize="sm" />
                        <Input type="text" name="name" placeholder="Time" bsSize="sm" />
                      </InputGroup>
                      <Button type="submit" size="sm">Submit</Button>
                    </Form>
                  </ListGroupItem>)
              }
            </ListGroup>

          </Col>
          <Col xs="xl-6" className="system">
            <div className="frame">
              <div className="planet sun">sun</div>
              <div className="planet mars">mars</div>
              <div className="planet venus">venus</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
