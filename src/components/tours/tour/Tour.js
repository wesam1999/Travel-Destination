import TourDetails from '../../TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from "react";
function Tour(props) {
    const [isLoggedIn, setLoggedin] = useState(false);
    const handleLoggin = () => {

        setLoggedin(!isLoggedIn) // inside the pracketes I will add the new state value 

    }

    if ({ isLoggedIn }) {
        return (
            <>


                <div key={props.tour.id}>
                    <img src={props.tour.image} alt={props.tour.name} />
                    <h3>Name : {props.tour.name}</h3>
                    <Link to={`/city/:id${props.tour.id}`} onClick={handleLoggin}>more detail about the city</Link>

                </div>


            </>
        );

    }
    else {
        return (
            <>


                <div key={props.tour.id}>
                    <img src={props.tour.image} alt={props.tour.name} />
                    <h3>Name : {props.tour.name}</h3>
                    <Routes>
                        <Route path={`/city/:id${props.tour.id}`} element={<TourDetails data={props.tour} ></TourDetails>} ></Route>
                    </Routes>

                </div>


            </>
        );
    }

    //         </div>


    //     </>
    // );
}

export default Tour;