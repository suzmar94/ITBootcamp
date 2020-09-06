import React from 'react';
import Emoji from './Emoji';
import Description from './Description';


const Card = ({description, url}) => {
    return (
        <>
            <Emoji url = {url}/>
            <Description description = {description}/>
        </>
    )
};
export default Card;