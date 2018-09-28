import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerButton = styled.button`
  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({
  selectedNumbers,
  checkAnswer,
  acceptAnswer,
  buttonProps,
  check
}) => {
  const { buttonText, buttonClass } = buttonProps();

  return (
    <div className="col-2 text-center">
      <AnswerButton
        type="button"
        className={`btn btn-lg btn-${buttonClass}`}
        onClick={check ? acceptAnswer : checkAnswer}
        disabled={selectedNumbers.length === 0}
      >
        {buttonText}
      </AnswerButton>
      <br />
      <br />
      <button type="button" className="btn btn-sm btn-warning text-white">
        <i className="fa fa-sm fa-sync"> 5</i>
      </button>
    </div>
  );
};

Button.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  checkAnswer: PropTypes.func.isRequired,
  acceptAnswer: PropTypes.func.isRequired,
  buttonProps: PropTypes.func.isRequired,
  check: PropTypes.oneOf([PropTypes.bool, PropTypes.object]).isRequired
};

export default Button;
