import React from 'react';
import styled from 'styled-components'

const Test7 = () => {
    return (
        <SContainer>
            <Stitle> styled components </Stitle>
            <Sbutton> 버튼 </Sbutton>
        </SContainer>
    );
};

const SContainer = styled.div`
    width:400px; border:1px solid #999; border-radius: 20px;
    padding:10px; margin:10px;
    display:flex; justify-content: space-around;
    align-items: center;
`
const Stitle = styled.p`
    color:#aaa; font-size:18px;
`
const Sbutton = styled.button`
    background:#333; border:none; color:#fff; padding:10px 20px; border-radius: 10px;
    transition:0.3s; cursor: pointer;
    &:hover{
        background:tomato; color:#000; 
    }
`


export default Test7;