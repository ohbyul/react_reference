import React, { useState } from 'react';

const Test5 = () => {
    const [ isChecked , setIsChecked ] = useState( false )

    const changeCheck = (e)  => {
        const { checked } = e.target 
        setIsChecked( checked )
    }

    return (
        <div style={{color:isChecked ? 'red':'#000', margin:20}}>
            <input type="checkbox" checked={isChecked} onChange={ changeCheck } />
            오늘은 화요일 입니다.
        </div>
    );
};

export default Test5;