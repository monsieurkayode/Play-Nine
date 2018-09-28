import React from 'react';
import PropTypes from 'prop-types';

const DoneFrame = ({ doneStatus, resetGame }) => (
  <div className="text-center">
    <h2>{doneStatus}</h2>
    <button
      type="button"
      onClick={resetGame}
      className="btn btn-secondary"
    >
      Play Again
    </button>
  </div>
);

DoneFrame.propTypes = {
  doneStatus: PropTypes.oneOfType(
    [PropTypes.bool, PropTypes.string]
  ).isRequired,
  resetGame: PropTypes.func.isRequired
};

export default DoneFrame;
