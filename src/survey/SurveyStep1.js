import React from 'react';

const SurveyStep1 = ({form, chanageInput ,onNext}) => {
   const {username, age, addr, tel} = form
    return (
        <>
         <p>
            <label>이름: </label>
            <input type="text" value={username} name="username"  onChange={chanageInput} />
         </p>   
         <p>
            <label>나이: </label>
            <input type="text" value={age} name="age" onChange={chanageInput}/>
         </p>   
         <p>
            <label>주소: </label>
            <input type="text" value={addr} name="addr" onChange={chanageInput}/>
         </p>   
         <p>
            <label>연락처: </label>
            <input type="text" value={tel} name="tel" onChange={chanageInput}/>
         </p>   
         <p>
             <button onClick={ onNext }>다음</button>
         </p>
        </>
    );
};

export default SurveyStep1;