import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import Tile from './Tile';
import { Image } from 'semantic-ui-react';

const styles = {
  imageStyle:{
    maxWidth: "100px"
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
        <ul>
          { this.state.apps.map( a =>
              <li key={a.id}>
                <Link to={`/apps/${a.id}`}><img style={styles.imageStyle} src={a.logo} alt={"a.logo"} /></Link>

              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Home;
