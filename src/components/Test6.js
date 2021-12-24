import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 300px; padding:20px; margin: 10px; border:1px solid #000;
`
const Box1 = styled.section`
    padding:20px; background:pink; transition:0.3s; margin-bottom:15px;
    cursor: pointer;
    &:hover {
        background:skyblue;
    }
`
const Box2 = styled.article`
    padding: 15px; background:tomato; transition:1s; box-sizing: border-box; margin-bottom:15px; width:100%;
    &:hover{
        background:yellow; width:150%;
    }
`
const Box3 = styled('article')``
const Box4 = styled('button')`
    width:100%; height:40px; background:#333; color:#fff; border:none;
`


const Test6 = () => {
    return (
        <Container>
            <Box1>안녕하세요</Box1>
            <Box2>안녕하세요</Box2>
            <Box3>안녕하세요</Box3>
            <Box4>안녕하세요</Box4>
        </Container>
    );
};

export default Test6;

/*
    const 컴포넌트명 = styled.태그``
    const 컴포넌트명 = styled.div``

    const 컴포넌트명 = styled('태그')``
    const 컴포넌트명 = styled('div')``

    스타일  위 /아래 
*/