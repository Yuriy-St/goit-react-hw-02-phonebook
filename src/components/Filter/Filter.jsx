import { Component } from 'react';
import { FilterStyled } from './Filter.styled';

export default class Filter extends Component {
  handleChange = ({ target }) => {
    this.props.onChange(target.value);
  };

  render() {
    return (
      <FilterStyled>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </FilterStyled>
    );
  }
}
