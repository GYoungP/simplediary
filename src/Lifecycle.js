import React, { useEffect, useState } from 'react';

const UnmountTest = () => {

    useEffect(() => {
        return () => {
            console.log("Unmount!")
        }
    },[])
    return <div>Unmount testing com.........</div>
}


const Lifecycle = () => {

    const[isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
    <div style={{padding: 20}}>
        <button onClick={toggle}>on/off</button>
        {isVisible && <UnmountTest />}
    </div>
    )
}

export default Lifecycle;