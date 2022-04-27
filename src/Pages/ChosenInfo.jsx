import React, { useContext, useState } from "react";
import Info from "../Components/Info";
import { userContext } from "../Components/Context";



const ChosenInfo = () => {
    const { infos } = useContext(userContext)
    const [searchInfo, setSearchInfo] = useState([])

    function search (e) {
        setSearchInfo(e.target.value)
    }
    return ( 
        <section className="wrapperInfo">
            <h2>SCRUM GUIDE</h2>
            <input className="input" type="text" onChange={search} />
           
           {
              infos.filter((info)=> {
                          
                if (searchInfo == ""){
                     return infos
                    }
                     else if (info.titel.toLowerCase().includes(searchInfo.toLowerCase())){
                     return info.titel }
           
                    })
                    .map((info) => (
    <section className="borderInfo"key={info.id}>
                <Info infos={info} img={info.img} titel={info.titel} desc={info.desc} />
                </section>
              
            ))}
        </section>
     )
}

export default ChosenInfo; 