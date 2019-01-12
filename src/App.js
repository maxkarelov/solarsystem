import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem,
  InputGroup, Input} from 'reactstrap';


class List extends React.Component {
  constructor(props){
    super(props);

    this.click = props.click

    this.state = {
      items: props.items
    };
  }

  render() {
    var items = this.state.items.map((it, ind) => (
      <ListGroupItem key={it.name}
                     onClick={() => this.click(ind)}>
        {it.name}
      </ListGroupItem>
    ));

    return(
      <ListGroup>{items}</ListGroup>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlanet: 0,
      planets: [
        {
          name: 'Sun',
          sats: [],
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
          name: 'Venus',
          sats: [
            {
              name: 'Venus 1'
            },
            {
              name: 'Venus 2'
            },
            {
              name: 'Venus 3'
            },
          ],
        },
        {
          name: 'Earth',
          sats: []
        },
        {
          name: 'Mars',
          sats: [],
        },
        {
          name: 'Jupiter',
        }
      ],
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="xl-2">
            <List
              items={this.state.planets}
              click={(ind) => this.setState({ activePlanet: ind })} />

            <InputGroup>
              <Input placeholder="username" />
            </InputGroup>
          </Col>
          <Col xs="xl-2">
            <List items={this.state.planets[this.state.activePlanet].sats} />
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
