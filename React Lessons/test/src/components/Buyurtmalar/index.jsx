import React from 'react'

export const Buyurtmalar = ({dispatch}) => {
  return (
    <div>
      <button onClick={()=> dispatch({type:'plus'})}>add</button>
      Buyurtmalar
    </div>
  )
}
