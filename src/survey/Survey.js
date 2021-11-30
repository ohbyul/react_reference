import React, { useState } from 'react';
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {
    const [ step , setStep ] = useState(1)
    const [ form , setForm ] = useState({
        username:'',
        age:'',
        addr:'',
        tel:'',
        job:'',
        email:'',
        sex:'',
        interests:''
    })
    const { username, age, addr, tel, job, email, sex, interests} = form 


    const chanageInput = (e) => {
        const { value , name } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    }

    //다음
    const onNext = ()  => {
        setStep( step + 1 )
    }
    //이전
    const onPrev = ()  => {
        setStep( step - 1 )
    }

    return (
        <div className="wrap">
            {   step === 1 &&  
                <SurveyStep1 form={form} chanageInput={ chanageInput } onNext={onNext} />
            }

            {  step === 2 &&  
                <SurveyStep2  form={form} chanageInput={ chanageInput } 
                onNext = { onNext }   onPrev = { onPrev }
                />
            }

            {  step === 3 && 
                <SurveyStep3 { ...form }
                onNext = { onNext } onPrev = { onPrev }/>
            }

            {  step === 4 &&
                <SurveyStep4  username={ username } />
            } 
        </div>
    );
};

export default Survey;