import { Link } from 'react-router-dom';
import Tour from './tour/Tour';
function Tours(props) {

    return (
        <>
            {props.data.map(meme => {
                return (
                
  
                             <Link to={`/city/${meme.id}`}><Tour tour={meme}/></Link> );
            })}
        </>
    );
}

export default Tours;
