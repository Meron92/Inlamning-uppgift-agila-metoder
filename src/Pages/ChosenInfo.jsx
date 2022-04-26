import { useContext } from "react";
import Roller from "../Components/Roller";
import { userContext } from "../Components/Context";


const ChosenInfo = () => {
    const { infos } = useContext(userContext)
    
    return ( 
        <section>
           { infos.map((info, i) => (
    
                <Roller infos={info}  titel={info.titel} desc={info.desc} key={i}/>
                
              
            ))}
        </section>
     )
}

export default ChosenInfo 