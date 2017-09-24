import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import Tile from './Tile';
import { Card, Image } from 'semantic-ui-react';

const styles = {
  imageStyle:{
    maxWidth: "200px",
  }
}

class Home extends Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/apps')
      .then( res => this.setState({ apps: res.data }) )
  }

  render() {
    // loop over apps and render an clickable image for it
    // when user clicks on the image it will redirect the user to a new Route
    // const images = this.state.apps.map( app => app.logo);
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
                <h3>{app.category}</h3>
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
