import React from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

class Tile extends React.Component {
  state = { app: {} }

  componentDidMount() {
    axios.get(`/api/apps/${this.props.match.params.id}`)
      .then( res => this.setState({ app: res.data }) )
  }

  render() {
    let { app: { name, description, category, price, version }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>category</h3>
        <h3>${price}</h3>
        <h3>{version}</h3>
      </div>
    )
  }
}

export default Tile;
