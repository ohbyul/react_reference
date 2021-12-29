import React from 'react';
import styled from 'styled-components'

const ImageBox = styled.article`

`

const GalleryItem = ({item}) => {
    const { webformatURL } = item 
    return (
        <ImageBox>
            <img src={webformatURL} alt="" />
        </ImageBox>
    );
};

export default GalleryItem;