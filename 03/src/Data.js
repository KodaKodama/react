import React, { useState } from 'react'
import data from './data.json'
function Data() {
    const [nData, setnData] = useState(data);
    const handleRemove = (Itemid) => {
      setnData(nData.filter(item => item.id !== Itemid))
    }
    const handleUpdate = (Itemid)=> {
      setnData(nData.map(items => {
        if(items.id == Itemid){
          return {name: "new name"}
        }else{
          return items;
        }
      }))
    }
  return (
    <div>
        <ul>
          {nData.map(items => 
            <li key={items.id}>{items.name} <button onClick={()=>handleUpdate(items.id)}>Update</button> <button onClick={() => handleRemove(items.id)}>remove</button></li>
          )}
        </ul>
    </div>
  )
}

export default Data