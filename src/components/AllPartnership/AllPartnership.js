import React, { useEffect, useState } from 'react';
import Partner from '../Partner/Partner';

const AllPartnership = () => {
    const [partnerships,setPartnership]=useState([])
    useEffect(()=>{
        fetch('./partnership.JSON')
        .then(res=>res.json())
        .then(data=>setPartnership(data))
    },[])
    return (
        <div className=" text-center">
            <h1 className="mb-4">Partnership</h1>
            <div className="partner">
            {   
                partnerships.map(partner=><Partner key={partner.id} partner={partner}></Partner>)
            }
            </div>
            <div className="mt-5">
    
          </div>
        </div>
    );
};

export default AllPartnership;