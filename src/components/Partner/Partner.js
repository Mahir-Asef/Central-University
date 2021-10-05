import React from 'react';
import './Partner.css'

const Partner = (props) => {
    const {img}=props.partner;
    return (
        <div className="img-div partner">
            <img className="img" src={img} alt="" srcset=""/>
        </div>
    );
};

export default Partner;