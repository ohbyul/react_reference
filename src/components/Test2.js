import React, { useRef, useState } from 'react';

const Test2 = () => {
    const no = useRef(1)
    const [data ,setData] = useState([])
    //[{id:1, text:전지현}]
    const names ='전지현,유재석,강호동,고길동,고민지,김도윤,송소희,이지아,이정재,이승기,이효리,김나은,엄정화,화사,송혜교'.split(',')

    const onAdd = ()  => {
        //data에 이름이 랜덤으로 출력하기  mdn : String 객체 
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data ,
            {
                id: no.current++ ,
                text :  names[ ran ]
            }
        ])
    }

    return (
        <div>
            <h2>고유번호처리</h2>
            <button onClick={ onAdd }>추가</button>
            <hr />
            {
                data.map( item => <p key={item.id}>
                    {item.id} / {item.text}
                </p>)
            }
        </div>
    );
};

export default Test2;