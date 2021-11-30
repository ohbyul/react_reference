import React from 'react';
import m0 from '../assets/img/m0.jpg'

const Test4 = () => {
    return (
        <div>
          <p>
              <img src={ m0 } alt="" />
          </p>  
          <p>
              <img src="./images/cat0.jpg" alt="" />
          </p>
        </div>
    );
};

export default Test4;

/*
    1. src 안에 이미지를 가지고 올경우 
    import 참조변수 form '경로'
    <img src={ 참조변수} />

    2. public 안에 이미지 가져올경우 
    <img src="./이미지경로" />

*/