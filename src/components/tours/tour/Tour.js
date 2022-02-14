import TourDetails from '../../TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from "react";
function Tour(props) {
    const [isLoggedIn, setLoggedin] = useState(false);
    const handleLoggin = () => {

        setLoggedin(!isLoggedIn) // inside the pracketes I will add the new state value 

    }
    return (
        <>


            <div key={props.tour.id}>
                <img src={props.tour.image} alt={props.tour.name} />
                <h3>Name : {props.tour.name}</h3>
                 if ({isLoggedIn}){
                    <Link to={`/city/${props.tour.id}`} onClick={handleLoggin}>more detail about the city</Link>
                }
                else {
                    <Routes>
                        <Route path={`/city/${props.tour.id}`} element={<TourDetails data={props.tour} ></TourDetails>} ></Route>
                    </Routes>
                }
            
            </div>


        </>
    );
}

export default Tour;