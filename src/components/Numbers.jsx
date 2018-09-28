import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import range from '../helpers/range';

export const Number = styled.span`
  display: inline-block;
  margin: 0.5rem;
  background-color: #6A96D8;
  color: #fff;
  width: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  &.selected {
    background-color: #CCC;
    cursor: not-allowed;
  }

  &.used {
    background-color: #ADA;
    cursor: not-allowed;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 5px 40px 4px rgba(0,0,0,0.1);
`;

const Numbers = ({
  selectNumber,
  selectedNumbers,
  usedNumbers
}) => (
  <Card className="card text-center">
    <div>
      { range(1, 9).map(number => (
        <Number
          key={number}
          onClick={() => selectNumber(number)}
          className={`${selectedNumbers.includes(number) && 'selected'}
          ${usedNumbers.includes(number) && 'used'}`}
        >
          {number}
        </Number>))
      }
    </div>
  </Card>
);

Numbers.propTypes = {
  selectNumber: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  usedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Numbers;
