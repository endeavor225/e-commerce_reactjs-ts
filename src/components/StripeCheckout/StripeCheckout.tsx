/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/09/2023 10:23:55
*/
import React, { FC, useEffect } from 'react';
import './StripeCheckout.css';


interface StripeCheckoutProps {
 
}


const StripeCheckout : FC<StripeCheckoutProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="StripeCheckout">
          StripeCheckout Component
      </div>
  );
}

export default StripeCheckout;