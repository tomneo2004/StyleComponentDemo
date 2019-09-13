import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30vw;
    height:30vh
    background-color:lightblue;
    border-radius:10px;
`;

const Card = ({children})=>{
    
    return (

       <CardStyle>
        {children}
       </CardStyle>
    );
}

export default Card;