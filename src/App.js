import React,{useState,useEffect}from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'
import Pagination from './Pagination';

function App() {
  const[pokemon,setPokemon] =useState([])//usestate here is default state//returns two var so destructure
  const [currentPageUrl,setCurrentPageUrl]=useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl,setNextPageUrl]=useState()
  const [prevPageUrl,setPrevPageUrl]=useState()
  const [loading,setLoading]=useState(true);
  
  
  //pokemon is current state
  
  //setPokemon is the method used to update state
  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currentPageUrl,{cancelToken:new axios.CancelToken(c=>cancel=c)}).then(res=>{

      setLoading(false)//will return false when data is already  loaded ie.request becomes true
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      
      setPokemon(res.data.results.map(p=>p.name))
      //res.data will resturn in json and results are the array of pokemons
      //map will give us the name of pokemon
    })
    //if useeffect is loaded before the request then race condition will occur 
  //so useeffect has a function 
  return() =>  cancel()
    //will help us to cancel a previous request when we make new request   
  },[currentPageUrl])
 function gotoNextPage(){
  setCurrentPageUrl(nextPageUrl)
 }
 function gotoPrevPage(){
  setCurrentPageUrl(prevPageUrl)
 }
  if (loading) return "loading"
  
  return (
    
    <div >
    <center style={{color: "black",width:'auto'}}>
     
    <PokemonList pokemon={pokemon}/>
    <Pagination
    gotoNextPage={ nextPageUrl? gotoNextPage:null}
    gotoPrevPage={prevPageUrl?gotoPrevPage:null}
    />
    </center>
    </div>
   
    
   

  );
}

export default App;
