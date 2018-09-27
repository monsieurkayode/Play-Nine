import React from 'react';
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

const Game = () => (
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
        <Stars />
        <Button />
        <Answers />
      </div>
      <br />
      <Numbers />
    </Container>
  </Wrapper>
);

export default Game;