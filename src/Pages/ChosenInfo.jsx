import { useContext } from "react";
import Roller from "../Components/Roller";
import { userContext } from "../Components/Context";
import {Link} from "react-router-dom"


const ChosenInfo = () => {
    const { infos } = useContext(userContext)
    
    return ( 
        <section>
            <Link to="/"><button>Tillbaka</button></Link>
           { infos.map((info, i) => (
    
                <Roller infos={info}  titel={info.titel} desc={info.desc} key={i}/>
                
              
            ))}
        </section>
     )
}

export default ChosenInfo 