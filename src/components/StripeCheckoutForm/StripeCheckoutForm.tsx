/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/09/2023 10:23:55
*/
import React, { FC, useEffect } from 'react';
import './StripeCheckoutForm.css';


interface StripeCheckoutFormProps {
 
}


const StripeCheckoutForm : FC<StripeCheckoutFormProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="StripeCheckoutForm">
          StripeCheckoutForm Component
      </div>
  );
}

export default StripeCheckoutForm;