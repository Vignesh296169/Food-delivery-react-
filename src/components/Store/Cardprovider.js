import React from 'react'
import Cardcontext from './card-contexet'
function Cardprovider(prop) {

   const Cardvalue={
    items:[],
    totalamount:0,
    additem:(item)=>{},
    removeitem:(id)=>{}
   }


  return (
        <Cardcontext.Provider value={Cardvalue}>
            {prop.children}
        </Cardcontext.Provider>
  )
}

export default Cardprovider