import React from 'react';
import PropTypes from 'prop-types';

const Onboarding = ({ showModal }) => (
  <div className="overlay">
    <div className="popup">
      <header>
        <h5>
          How To Play
          <span onClick={showModal} className="fa fa-times" />
        </h5>
      </header>
      <section className="content">
        <p>
          The aim of the game is to select all the numbers displayed
          on the card to match the number of randomly generated stars
          on the left.
        </p>
        <hr />
        <p>
          You can select any possible combinations of number that sums
          to the number of stars displayed. Check if your selection is
          correct by clicking the blue button.
        </p>
        <hr />
        <p>
          The button is marked green for correct answers and red for
          wrong answers. You can accept a correct answer by clicking
          the button again to start another round. Used numbers will
          no longer be available for selection once answer is accepted
        </p>
        <hr />
        <p>
          You are provided with 5 redraws shown on the yellow button.
          You may use this when the numbers available for selection
          cannot combine to satisfy the number of stars displayed.
          This will generate a set of random stars again.
        </p>
        <hr />
        <p>
          You lose the game if there are no more redraws and the
          unused numbers cannot combine to match number of stars.
          Note that you can unselect a number by clicking on it in
          the answer pane.
        </p>
      </section>
    </div>
  </div>
);

Onboarding.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Onboarding;
