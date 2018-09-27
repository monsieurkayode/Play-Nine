import React from 'react';
import PropTypes from 'prop-types';
import { Number } from './Numbers';

const Answers = ({ selectedNumbers }) => (
  <div className="col-5 text-center">
    { selectedNumbers.map(number => <Number key={number}>{number}</Number>)}
  </div>
);

Answers.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Answers;
