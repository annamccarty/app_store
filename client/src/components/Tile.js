import React from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import Form from './Form';

class Tile extends React.Component {
  state = { app: {}, edit: false };

  componentDidMount() {
    axios.get(`/api/apps/${this.props.match.params.id}`)
      .then( res => this.setState({ app: res.data }));
  }

  deleteApp = (id) => {
  axios.delete(`/api/apps/${id}`)
    .then( () => {
      this.props.history.push('/');
    })
  }

  show = () => {
    const { name, logo, price, id, version, category, description } = this.state.app;
    return(
      <div>
        <Card>
          <Image src={logo} />
          <Card.Content>
            <Card.Header>
              {name}
            </Card.Header>
            <Card.Description>
              ${price}
            </Card.Description>
            <Card.Description>
              Version {version}
            </Card.Description>
            <Card.Description>
              Category: {category}
            </Card.Description>
            <Card.Description>
              {description}
            </Card.Description>
            </Card.Content>
            <button onClick={ () => this.deleteApp(id)}>Delete App</button>
        </Card>
      </div>
    )
  }

  render() {
      return(
        <div>
          {this.show()}
        </div>
      )
    }
  }
export default Tile;
