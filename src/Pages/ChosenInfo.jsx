import { useContext } from "react";
import Info from "../Components/Info";
import { userContext } from "../Components/Context";



const ChosenInfo = () => {
    const { infos } = useContext(userContext)
    
    return ( 
        <section className="wrapperInfo">
            <h2>SCRUM GUIDE</h2>
           
           { infos.map((info, i) => (
    <section className="borderInfo">
                <Info infos={info} img={info.img} titel={info.titel} desc={info.desc} key={i}/>
                </section>
              
            ))}
        </section>
     )
}

export default ChosenInfo 