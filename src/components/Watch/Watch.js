import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = ()=> {
        const newSteps = steps + 1; 
        setSteps(newSteps); 
        console.log(steps)
    }

    useEffect(()=>{

    },[steps])

    return (
        <div style={{border:'3px solid tomato', padding: '30px', margin:'20px'}}>
            <h1>This is my smart Watch</h1>
            <h3>My Current Steps : {steps}</h3>
            <button onClick={increaseSteps}>De Dour ........</button>
        <Display name = 'garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;