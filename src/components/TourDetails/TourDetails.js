import { Link, useParams } from 'react-router-dom';

function TourDetails(props)
{
    let {id} = useParams();
    console.log({id});

    const result = props.data.filter((value) => value.id==={id});
    
return (
<>
<h1>{result[0]}</h1>
<Link to='/'>  Home </Link>
</>

);
}
export default TourDetails;