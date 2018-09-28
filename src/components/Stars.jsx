import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import range from '../helpers/range';

const Star = styled.i`
  margin: 0.5rem;
  font-size: 2rem;
  color: #4E515D;
`;

const Stars = ({ numberOfStars }) => (
  <div className="col-5">
    {range(1, numberOfStars)
      .map(number => <Star key={number} className="fa fa-star" />)}
  </div>
);

Stars.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
};

export default Stars;
