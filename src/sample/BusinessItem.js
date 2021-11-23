import React from 'react';

const BusinessItem = ({ item }) => {
    //구조분해
    const {image , title, titleeng, des } = item 

    return (
        <li>
            <a href="#">
                <div><img src={image} alt={title} /></div>
                <h3> {title}<span>{titleeng}</span></h3>
                <p>{des} </p>
            </a>
    </li>
    );
};

export default BusinessItem;