import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import ChosenInfoPage from './ChosenInfoPage';
import { userContext } from './Context';
function Roller(titel,desc) {
  const {infos} = useContext(userContext)

 
    return (
        <div>
              {
        
      infos.map((info) => (
      <section info={info} key={info.id} className="wrapper">
        <h1>{info.titel}</h1>
        <ChosenInfoPage info={info}  key={info.id} />
        <Link to="/ChosenInfoPage" state={{ from:{titel,desc}}}>  <button>Mer info</button> </Link>
      </section>
     
    
      ))
    }

        </div>
      );
}

export default Roller;