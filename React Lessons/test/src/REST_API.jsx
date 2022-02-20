import React,{useState, useEffect} from 'react'
import './index.css';

export const REST_API = () => {
    const [data, setData] = useState([]);
    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/posts').then((res)=> 
       res.json()
       ).then((res)=> setData(res)); 
    }, [])
  return (
    <div>
        {data.length > 0 ? data.map((value)=> 
            <div key={value.id} style={{border:'1px solid red'}}>
                <p>{value.id}</p>
                <p>{value.title}</p>
                <p>{value.body}</p>
            </div>
        ): <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    </div>
  )
}
