import React, { useState } from 'react';

const Test4 = () => {
    //useState 이용 - color 
    const [ color , setColor ] = useState('tomato')
    const [ text , setText ] = useState('')

    const onSelect = ()  => {
        setColor( text )
    }
    const changeColor  = (e) => {
        const { value } = e.target 
        setText( value )
    }

    return (
        <div>
            <h2 style={{ color:color, fontSize:50 }}> color 변경하기 </h2>
             <select onChange = { changeColor }>
                <option value="red"> red </option>
                <option value="green"> green </option>
                <option value="blue"> blue </option>
                <option value="pink"> pink </option>
                <option value="lime"> lime </option>
            </select>
            <button  onClick={ onSelect }>선택</button>
        </div>
    );
};

export default Test4;