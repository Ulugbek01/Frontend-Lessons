import React,{useState, useReducer} from 'react'
import  {Buyurtmalar}  from '../Buyurtmalar';

export const Mijozlar = () => {
  const [x, setX] = useState(0);
  const reducer = (state, action)=> {
    // console.log(state, action);
    switch(action.type){
      case 'plus': localStorage.setItem('count', state + 1); return state + 1;
      case 'doubleplus': localStorage.setItem('count', state + x); return state + action.peylod.x;
      case 'minus': localStorage.setItem('count', state - 1); return state - 1;
      default : return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, parseInt(localStorage.getItem('count')) || 0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <input type="number" onChange={(e)=> setX(parseInt(e.target.value))}/>
      <button onClick={()=> dispatch({type:'plus'})}>+</button>
      <button onClick={()=> dispatch({type:'doubleplus', peylod: {x: x}})}>{x}x</button>
      <button onClick={()=> dispatch({type:'minus'})}>-</button><br />
      <Buyurtmalar dispatch={dispatch}/>
    </div>
  )
}
/* dispatchni qayerda ishlatishimizdan qattiy 
nazar reducer degan functionni yurgazib beradi va dispatchga parametr 
berganimizda reducer funcsiymizda action atributi orqali tutub olamiz 

state va count bir xil narsa reducer function qiymati nimaga return
 bo'lsa count o'shanga teng bo'ladi
*/ 