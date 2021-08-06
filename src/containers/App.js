import React,{useEffect,useState} from 'react';
import CardArray from '../components/CardArray.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const App =() => {
    const [searchValue, setSearchValue] = useState(""); 
    const [robots, setRobots] = useState([]);

    const searchEntry = (e) => setSearchValue(e.target.value) ;

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => setRobots(robots))
    },[]);

    const filteredRobots = robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });


    if(robots.length===0 || robots===undefined){
        return (<div className="center">
                    <CircularProgress color="secondary" />
                </div>);
    }

    else{
        return(
            <React.Fragment>
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={searchEntry}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardArray robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>   
            </React.Fragment>
        );
    }

    
}

export default App;