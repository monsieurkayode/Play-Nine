import React from 'react';
import PropTypes from 'prop-types';
import { Number } from './Numbers';

const Answers = ({ selectedNumbers, removeNumber }) => (
  <div className="col-5 text-center">
    { selectedNumbers.map(number => (
      <Number
        onClick={() => removeNumber(number)}
        key={number}
      >
        {number}
      </Number>))}
  </div>
);

Answers.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  removeNumber: PropTypes.func.isRequired,
};

export default Answers;
