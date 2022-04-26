import { useLocation,Link } from "react-router-dom";

function ChosenInfoPage() {
const location = useLocation()
const { from } = location.state

    return ( 
        <section>
            <header className="headerChosenInfo"><h2>{from.titel}</h2></header>
            <div className="chosenInfoBorder">
          <img src={from.img} alt="" />
            <p>{from.desc}</p>
            </div>
            <div>
            </div>
            <Link to="/"><img className="backBtn" src="https://cdn-icons-png.flaticon.com/512/709/709624.png" alt="" /></Link>
        </section>
     );
}

export default ChosenInfoPage;