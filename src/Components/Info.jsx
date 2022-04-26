
import {Link} from 'react-router-dom'

function Info({titel,desc,img}) {

    return (
        <div>
          
     <h1>{titel}</h1>
    <Link to="/ChosenInfoPage" state={{from:{titel,desc,img}}}><button>More info</button></Link>

        </div>
      )
}

export default Info