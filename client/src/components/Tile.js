import React from 'react';
import axios from 'axios';
import { Image, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Tile = ({ app }) => {
  const { name, logo, description, price, version, category, id} = app;
  return (
    <Card fluid>
      <Image src={logo} />
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Description>
          ${price}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Tile;
