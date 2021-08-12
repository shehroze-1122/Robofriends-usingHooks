import React,{useEffect,useState} from 'react';
import CardArray from '../components/CardArray.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const App =() => {
    const [searchValue, setSearchValue] = useState(""); 
    const [robots, setRobots] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [ifFailed, setIfFailed] = useState(false)

    const searchEntry = (e) => setSearchValue(e.target.value) ;

    const fetchData = async ()=>{
        try{
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data =await resp.json();
            setRobots(data);
            setIsPending(false);
        }
        catch{
            setIfFailed(true);
        }

      }
    
      useEffect(()=>{
        fetchData();
      },[])
    

    const filteredRobots = robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });

   
   
    return(
        <React.Fragment>
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={searchEntry}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardArray robots={filteredRobots} isPending={isPending} ifFailed={ifFailed}/>
                    </ErrorBoundary>
                </Scroll>
            </div>   
        </React.Fragment>
    );


    
}

export default App;