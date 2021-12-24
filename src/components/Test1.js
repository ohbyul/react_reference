import React, { useEffect, useState } from 'react';

const dataList = [
    {id:1, name:'홍길동'},
    {id:2, name:'dog'},
    {id:3, name:'DOg'},
    {id:4, name:'Cat'},
    {id:5, name:'cat'},
    {id:6, name:'김철수'},
    {id:7, name:'Kim'},
    {id:8, name:'eun'},
    {id:9, name:'송혜교'},
    {id:10, name:'이효리'},
    {id:10, name:'이젠 컴퓨터'},
]

const Test1 = () => {
    const [data, setData] = useState( dataList )
    const [text, setText] = useState('')

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }

    const onShow = ()  => {
        
        // setData( dataList.filter( item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 ))   

        // setData( dataList.filter( item => item.name.toLowerCase().includes( text.toLowerCase()) ))

        setData( dataList.filter( item => {
            const re = new RegExp( text, 'ig')
            return item.name.match( re )
        }))
    }

    useEffect( () => {
        setData( dataList.filter( item => {
            const re = new RegExp( text, 'ig')
            return item.name.match( re )
        }))
    },[text])
    // sql 초성검사 
    return (
        <div>
            <input type="text" placeholder='검색어를 입력하세요' value={text} onChange={changeInput}/>
            <button onClick={ onShow }>검색</button>
            <hr/>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / { item.name }
                </p>)
            }
        </div>
    );
};

export default Test1;