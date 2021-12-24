import React from 'react';
import './Test4.css'
import myStyle from './Test4.module.css'

const Test4 = () => {
    return (
        <div className='wrap'>
            {/* css module */}
            <div className='box'></div>
            <div className={ myStyle.box }></div>

            {/* 다중 클래스 */}
            <div className='size bg'></div>
            <div className={ `${myStyle.size} ${myStyle.bg}` }></div>
            <div className={`size ${myStyle.bg}`}></div>

            {/* 다중 클래스 */}
            <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
            <div className={["size" , myStyle.bg].join(' ')}></div>

            {/* 독립 클래스  */}
            <div className='mybox'></div>            
        </div>
    );
};

export default Test4;

/*
   파일명.module.css
   클래스이름의 중첩을 제거하기 위해서 사용 
   import 참조변수 form './파일명.module.css' 

   클래스명 : 파일명_클래스명__아무거나
   .box {}
   Test4.box__xxx 
*/