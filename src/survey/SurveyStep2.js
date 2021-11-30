import React from 'react';

const SurveyStep2 = ({job, email, sex, interests , chanageInput, onNext, onPrev}) => {
    return (
        <>
         <p>
            <label>직업: </label>
            <input type="text" value={job} name="job" onChange={chanageInput}/>
         </p>   
         <p>
            <label>이메일: </label>
            <input type="text" value={email} name="email" onChange={chanageInput} />
         </p>   
         <p>
            <label>성별: </label>
            <input type="text" value={sex} name="sex"  onChange={chanageInput}/>
         </p>   
         <p>
            <label>관심분야: </label>
            <input type="text" value={interests} name="interests"  onChange={chanageInput}/>
         </p>   
         <p>
             <button onClick={ onPrev }>이전</button>
             <button onClick={ onNext}>다음</button>
         </p>
        </>
    );
};

export default SurveyStep2;