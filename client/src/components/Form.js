import React from 'react';

class Form extends React.Component {
  defaultValue = { name: '', price: '', version: '' };
  state = { ...this.defaultValue };

  componentDidMount() {
    if(this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const app = { ...this.state };
    this.props.submit(app);
    this.setState({ ...this.defaultValue });
  }

  render() {
    const { name, description, price, category, version } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          id='name'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id='price'
          placeholder='Price'
          type='number'
          value={price}
          onChange={this.handleChange}
        />
        <input
          id='version'
          placeholder='Version'
          value={version}
          onChange={this.handleChange}
        />
        <input
          id='category'
          placeholder='Category'
          value={category}
          onChange={this.handleChange}
        />
        <input
          id='description'
          placeholder='Description'
          value={description}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form;
