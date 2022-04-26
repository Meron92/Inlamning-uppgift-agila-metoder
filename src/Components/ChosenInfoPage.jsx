import { useLocation,Link } from "react-router-dom";

function ChosenInfoPage() {
const location = useLocation()
const { from } = location.state

    return ( 
        <section>
            <header><h2>{from.titel}</h2></header>
            <div>
            <p>{from.desc}</p>
            </div>
            <Link to="/ChosenInfo"><button>Tillbaka</button></Link>
        </section>
     );
}

export default ChosenInfoPage;