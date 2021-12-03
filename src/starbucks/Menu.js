import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({memulist, onView}) => {
    return (
        <ul className="menu">
            {
                memulist.map( (item,index )=> <MenuItem key={index} item={item} onView={onView} />)
            }
        </ul>
    );
};

export default Menu;