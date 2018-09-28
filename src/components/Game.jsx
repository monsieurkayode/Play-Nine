import React, { Component } from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Buttons from './Buttons';
import Answers from './Answers';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';
import Onboarding from './Onboarding';

import possibleCombinationSum from '../helpers/possibleCombinationSum';
import range from '../helpers/range';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: linear-gradient(#CEDDE8, #84A3BD) fixed;
  height: 100vh;
  font-family: 'Josefin Sans', sans-serif;

  .overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 2;
  
    .popup {
      background: #FFF;
      width: 35%;
      min-width: 400px;
      margin: 8% auto;
      overflow: auto;
  
      header {
        background: #6A96D8;
        text-align: center;
        color: #FFF;
  
        h5 {
          padding: 0.5em 1em;
          margin: 0;
  
          span {
            float: right;
            cursor: pointer;
          }
        }
      }
  
      .content {
        padding: 0.5em 1em;
        text-align: center;
      }
    }
  }

  input {
    display: none;
  }
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Header = styled.header`
  background: #6A96D8;
  color: #fff;
  box-shadow: 0 2px 20px 4px rgba(0,0,0,0.2);

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.25em 0;

    h3 {
      margin: 0;
      span {
        text-decoration: underline;
      }
  
      sup, span {
        color: #FFB2C1;
      }
    }

    .link {
      margin-left: 40px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

class Game extends Component {
  static randomNumber = () => Math.floor(Math.random() * 9) + 1;

  static numberList = () => range(1, 9);

  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    check: null,
    redraws: 5,
    doneStatus: null,
    displayModal: false,
  });

  state = Game.initialState();

  resetGame = () => this.setState(Game.initialState());

  selectNumber = (clickedNumber) => {
    const { selectedNumbers, usedNumbers } = this.state;
    if (selectedNumbers.includes(clickedNumber)
      || usedNumbers.includes(clickedNumber)) { return; }

    this.setState(prevState => ({
      check: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
    }));
  }

  removeNumber = (clickedNumber) => {
    this.setState(({ selectedNumbers }) => ({
      check: null,
      selectedNumbers: selectedNumbers.filter(
        number => number !== clickedNumber
      )
    }));
  }

  checkAnswer = () => {
    this.setState(({
      randomNumberOfStars,
      selectedNumbers
    }) => ({
      check: randomNumberOfStars === selectedNumbers.reduce((acc, n) => acc + n)
    }));
  }

  acceptAnswer = () => {
    this.setState(({ selectedNumbers, usedNumbers }) => ({
      check: null,
      usedNumbers: usedNumbers.concat(selectedNumbers),
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber()
    }), this.updateDoneStatus);
  }

  redraw = () => {
    const { redraws } = this.state;
    if (redraws === 0) { return; }

    this.setState(prevState => ({
      check: null,
      randomNumberOfStars: Game.randomNumber(),
      redraws: prevState.redraws - 1
    }), this.updateDoneStatus);
  }

  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = Game.numberList().filter(
      number => !usedNumbers.includes(number)
    );

    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }

  updateDoneStatus = () => {
    this.setState((prevState) => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Nicely Done! :-)' };
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: 'Game Over! :-(' };
      }
    });
  }

  buttonProps = () => {
    const { check } = this.state;
    switch (check) {
      case true:
        return {
          buttonText: <i className="fa fa-check" />,
          buttonClass: 'success'
        };
      case false:
        return {
          buttonText: <i className="fa fa-times" />,
          buttonClass: 'danger'
        };
      default:
        return {
          buttonText: '=',
          buttonClass: 'primary'
        };
    }
  }

  showModal = () => {
    this.setState(({ displayModal }) => ({ displayModal: !displayModal }));
  }

  render() {
    const {
      selectedNumbers,
      randomNumberOfStars,
      usedNumbers,
      check,
      redraws,
      doneStatus,
      displayModal,
    } = this.state;
    return (
      <Wrapper>
        {displayModal && (
          <Onboarding
            showModal={this.showModal}
            displayModal={displayModal}
          />)}
        <Header>
          <div className="container">
            <h3>
              <span>Play</span>
              Nine
              <sup>9</sup>
            </h3>
            <div>
              <span onClick={this.showModal} className="link">How To Play</span>
              <span className="link">Leaderboard</span>
            </div>
          </div>
        </Header>
        <Container className="container">
          <div className="row">
            {!doneStatus && <Stars numberOfStars={randomNumberOfStars} />}
            {!doneStatus && (
            <Buttons
              selectedNumbers={selectedNumbers}
              buttonProps={this.buttonProps}
              checkAnswer={this.checkAnswer}
              acceptAnswer={this.acceptAnswer}
              check={check}
              redraw={this.redraw}
              redraws={redraws}
            />
            )}
            <Answers
              selectedNumbers={selectedNumbers}
              removeNumber={this.removeNumber}
            />
          </div>
          <br />
          {doneStatus ? (
            <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} />
          ) : (
            <Numbers
              selectNumber={this.selectNumber}
              selectedNumbers={selectedNumbers}
              usedNumbers={usedNumbers}
            />)
          }
        </Container>
      </Wrapper>
    );
  }
}

export default Game;
