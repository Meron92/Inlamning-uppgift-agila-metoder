
import {Link} from 'react-router-dom'

function Roller({titel,desc}) {

    return (
        <div>
          
     <h1>{titel}</h1>
    <Link to="/ChosenInfoPage" state={{from:{titel,desc}}}><button>More info</button></Link>

        </div>
      )
}

export default Roller