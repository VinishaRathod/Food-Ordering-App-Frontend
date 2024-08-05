import React, { useContext } from 'react'
import './verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
const Verify = () => {
  const[searchParams,setSearchParams]= useSearchParams();
  const success= searchParams.get("success");
  const orderId= searchParams.get("orderId");
   const {url}= useContext(StoreContext);

   
  console.log(success,orderId);
  


  return (
    <div>
      
    </div>
  )
}

export default Verify
