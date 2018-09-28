import React, { Component } from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Button from './Button';
import Answers from './Answers';
import Numbers from './Numbers';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: linear-gradient(#CEDDE8, #84A3BD) fixed;
  height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
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
  height: 70px;
  box-shadow: 0 2px 20px 4px rgba(0,0,0,0.2);

  h3 {
    padding: 0.7em 4em;

    span {
      text-decoration: underline;
    }

    sup, span {
      color: #FFB2C1;
    }
  }
`;

class Game extends Component {
  static randomNumber = () => Math.floor(Math.random() * 9) + 1;

  state = {
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    check: null,
  }

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
    }));
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

  render() {
    const {
      selectedNumbers,
      randomNumberOfStars,
      usedNumbers,
      check
    } = this.state;
    return (
      <Wrapper>
        <Header>
          <h3>
            <span>Play</span>
            Nine
            <sup>9</sup>
          </h3>
        </Header>
        <Container className="container">
          <div className="row">
            <Stars numberOfStars={randomNumberOfStars} />
            <Button
              selectedNumbers={selectedNumbers}
              buttonProps={this.buttonProps}
              checkAnswer={this.checkAnswer}
              acceptAnswer={this.acceptAnswer}
              check={check}
            />
            <Answers
              selectedNumbers={selectedNumbers}
              removeNumber={this.removeNumber}
            />
          </div>
          <br />
          <Numbers
            selectNumber={this.selectNumber}
            selectedNumbers={selectedNumbers}
            usedNumbers={usedNumbers}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default Game;
