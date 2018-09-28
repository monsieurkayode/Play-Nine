import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({
  selectedNumbers,
  checkAnswer,
  acceptAnswer,
  buttonProps,
  check,
  redraw,
  redraws
}) => {
  const { buttonText, buttonClass } = buttonProps();

  return (
    <div className="col-2 text-center">
      <StyledButton
        type="button"
        className={`btn btn-lg btn-${buttonClass}`}
        onClick={check ? acceptAnswer : checkAnswer}
        disabled={selectedNumbers.length === 0}
      >
        {buttonText}
      </StyledButton>
      <br />
      <br />
      <StyledButton
        type="button"
        onClick={redraw}
        className="btn btn-sm btn-warning text-white"
        disabled={redraws === 0}
      >
        <i className="fa fa-sm fa-sync">
          {` ${redraws}`}
        </i>
      </StyledButton>
    </div>
  );
};

Button.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  checkAnswer: PropTypes.func.isRequired,
  acceptAnswer: PropTypes.func.isRequired,
  redraw: PropTypes.func.isRequired,
  redraws: PropTypes.number.isRequired,
  buttonProps: PropTypes.func.isRequired,
  check: PropTypes.oneOf([PropTypes.bool, PropTypes.object]).isRequired
};

export default Button;
