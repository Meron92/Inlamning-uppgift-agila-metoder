import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { userContext } from "./Context";


function ChosenInfoPage() {
const location = useLocation()
const { from } = location.state
// const {infos} = useContext(userContext)

    return ( 
        <section>
            <h1>{from.titel}</h1>
        </section>
     );
}

export default ChosenInfoPage;