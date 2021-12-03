import React, { useState } from 'react';
import CoffeeList from './CoffeeList';
import Menu from './Menu';
import dataList from '../assets/api/coffeedata'
import './style.css'

// const memulist = ['all','coldbrew', 'espresso','frappuccino','fizzio']
const memulist = ['all', ...new Set( dataList.map( item => item.name ))]

const Starbucks = () => {
    const [data, setData] = useState(dataList)
    // const [menu] = useState(menulist)

    const onView = ( name )  => {
        if( name === 'all'){
            setData( dataList )
        }else{
            setData( dataList.filter( item => item.name === name ))
        }
    }

    return (
        <div className="wrap">
            <h1>STARBUCKS MENU</h1>
            <Menu memulist={memulist}  onView={onView} />
            <CoffeeList data={data} />
        </div>
    );
};

export default Starbucks;