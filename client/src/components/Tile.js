import React from 'react';
import axios from 'axios';
import { Card, Image, Button } from 'semantic-ui-react';
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

  submit = (app) => {
    axios.put(`/api/apps/${app.id}`, { app })
      .then( res => this.setState({ app: res.data, edit: false }));
  }

  edit = () => (
    <Form {...this.state.app} submit={this.submit} />
  )

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
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
        </Card>
      </div>
    )
  }

  render() {
    const { edit } = this.state;
    const { id } = this.state.app;
    return(
      <div>
        { edit ? this.edit() : this.show() }
        <Button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </Button>
        <Button onClick={ () => this.deleteApp(id)}>Delete App</Button>
      </div>
    )
  }
}
export default Tile;
