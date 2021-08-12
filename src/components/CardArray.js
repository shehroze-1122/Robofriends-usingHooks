import React from 'react';
import Card from './Card.js';
import LoadingSpinner from './LoadingSpinner.js';

const CardArray = ({robots, isPending, ifFailed})=>{

    if(ifFailed){
        return (<p className="tc white mt-10">Couldn't connect to the server. Please check your internet connection.</p>)
    }

    else if(!isPending & robots.length===0){
        return (<p className="tc white mt-10">No result found</p>)
    }

    return isPending? (<LoadingSpinner/>):(
        <div>
            {
                robots.map((user)=>{
                return <Card key={user.id} id={user.id} name={user.name} email = {user.email}/>;
                })
            }
        </div>

        );
};
export default CardArray;