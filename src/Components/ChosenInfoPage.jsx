import { useLocation,Link } from "react-router-dom";

function ChosenInfoPage() {
const location = useLocation()
const { from } = location.state

    return ( 
        <section>
            <h1>{from.titel}</h1>
            <p>{from.desc}</p>
            <Link to="/ChosenInfo"><button>Tillbaka</button></Link>
        </section>
     );
}

export default ChosenInfoPage;