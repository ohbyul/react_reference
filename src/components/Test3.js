import React, { useRef } from 'react';

const Test3 = () => {
    const colorRef = useRef()

    const onSelect  = ()  => {
        const data = {
            color : colorRef.current.value 
        }
        console.log( data )
    }
    return (
        <div>
            <select ref={ colorRef }>
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

export default Test3;