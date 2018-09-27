import React from 'react';
import styled from 'styled-components';

const Star = styled.i`
  margin: 0.5rem;
  font-size: 2rem;
  color: #4E515D;
`;

const Stars = () => (
  <div className="col-5">
    <Star className="fa fa-star" />
    <Star className="fa fa-star" />
    <Star className="fa fa-star" />
    <Star className="fa fa-star" />
    <Star className="fa fa-star" />
    <Star className="fa fa-star" />
  </div>
);

export default Stars;
