import React from 'react';
import spinner from '../spin-loader.gif';
const LoadingSpinner = ()=>{
    return (
        <img src={spinner} alt='Loading...' className="mx-auto d-block" style={{position:'relative' ,top:'0', margin:'auto'}} />
    );
}

export default LoadingSpinner;