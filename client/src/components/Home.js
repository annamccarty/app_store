import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

class Home extends Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/apps')
      .then( res => this.setState({ apps: res.data }) )
  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>App Store</Header>
        <Card.Group className="cards-root">
          { this.state.apps.map( app =>
              <Link to={`/apps/${app.id}`}><Card key={app.id} >
                <h2>{app.name}</h2>
                <Image src={app.logo} />
                <h3>$ {app.price}</h3>
                <h3>Version {app.version}</h3>
                <h3>Category: {app.category}</h3>
                <p>{app.description}</p>
              </Card></Link>
            )
          }
        </Card.Group>
      </div>
    );
  }
}

export default Home;
