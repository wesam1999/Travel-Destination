import  useParams  from 'react-router-dom';
import { Link } from 'react-router-dom';
function TourDetails(props)
{
    let {id} = useParams();
    

    const result = props.data.filter((value) => value.id==={id});
    console.log(result);
return (
<>
<h1>{result[0]}</h1>
<Link to='/'>  Home </Link>
</>

);
}
export default TourDetails;