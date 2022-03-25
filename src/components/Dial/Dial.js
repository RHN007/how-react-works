import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: "5px solid maroon", margin:'20px', padding: '20px'}}>
            <h3>This is dial </h3>
            <p>Steps so far : {props.steps}</p>
        </div>
    );
};

export default Dial;