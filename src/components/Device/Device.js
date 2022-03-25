import React from 'react';
// import DeviceDetails from '../DeviceDetails/DeviceDetails';


const Device = (props) => {
    props.price = 15000; 
    return (
        <div>
            <h2>I have : {props.name}</h2>
           
        </div>
    );
};

export default Device;