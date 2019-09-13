import React from 'react';
import Card from './card/card.component';
import styled from 'styled-components';
import './App.css';

const Text = styled.div`
  color: red;
  fonst-size: 28px;
  border: ${({active})=>active?'5px solid black':'5px dotted green'};
`;

const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Text active={false}>{'I am a component'}</Text>
        </Card>
      </Container>
      
    </div>
  );
}

export default App;
