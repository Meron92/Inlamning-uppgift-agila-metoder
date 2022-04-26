import { useLocation } from "react-router-dom";

function ChosenInfoPage() {
const location = useLocation()
const { from } = location.state

    return ( 
        <section>
            <h1>{from.titel}</h1>
            <p>{from.desc}</p>
        </section>
     );
}

export default ChosenInfoPage;