import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true)

  const searchCache = useSelector((store)=>store.search);

  

  const dispatch = useDispatch();

  useEffect(()=>{

    

    const timer =  setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else {
        getSearchSuggest();
      }
      

    },200);

    return () => clearTimeout(timer);
    //make an API call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call

  },[searchQuery]);

  const getSearchSuggest = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    
    setSuggestions(json[1]);

    //update cache

    dispatch(cacheResults({
      [searchQuery] : json[1],
    })
  );
  }

  const toggleMenuHandler = () => {
      dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>

        <div className='flex col-span-1'>

        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-8 cursor-pointer'
        src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' 
        alt='Menu-icon' 
        />

        
        <img 
        className='h-8 mx-2'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' 
        alt='Youtube-Logo'
        />
        

        </div>

        <div className='col-span-10 place-items-center'>
          <div>
            <input 
            type='text' 
            placeholder='Search'
            className='w-3/4 border border-gray-500 py-2 px-4 rounded-s-full font-semibold text-center'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            />
          

            <button 
            className='border border-gray-500 py-2 px-4 rounded-e-full bg-gray-100'>
              🔍 
            </button>
          </div>
         {showSuggestions&& 
          <div className='fixed bg-white py-2 px-5 w-[41rem] rounded-lg shadow-lg border border-gray-100'>
            
            <ul>

              {
                suggestions.map((sugg)=> 
                (<li key={sugg} 
                className='py-1 shadow-sm font-medium hover:bg-gray-100'>🔍 {sugg}</li>
                ))
                }
              
            </ul>

          </div>
          }
        </div>

        <div className='col-span-1'>

            <img
            className='h-8'
            alt='user-icon'
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />

        </div>

    </div>
  )
}

export default Head
