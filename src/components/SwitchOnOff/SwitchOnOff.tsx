/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/09/2023 10:07:37
*/
import React, { FC, useEffect, useState } from 'react';
import './SwitchOnOff.css';


interface SwitchOnOffProps {
  status?: boolean,
  setStatus?: (bool: boolean)=>void
}


const SwitchOnOff: FC<SwitchOnOffProps> = ({ status, setStatus }) => {


  const [isOn, setIsOn] = useState<boolean | undefined>(status)

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const handleChange = () => {
    const newStatus = !isOn
    setIsOn(newStatus)
    if(setStatus)
      setStatus(newStatus)
  }

  return (
    <div className="SwitchOnOff" onClick={handleChange}>
      {
        isOn ?
          <i className="fa-solid fa-toggle-on"></i>
          :
          <i className="fa-solid fa-toggle-off"></i>
      }
    </div>
  );
}

export default SwitchOnOff;