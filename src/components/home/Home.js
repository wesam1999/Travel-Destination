import Header from '../header/Header';
import data from '../../data/db.json';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

import { Routes, Route } from 'react-router-dom';
function Home() {
    return (

        <>

            <Header />
            <Routes> <Route path='/'element={<Tours data={data}></Tours>} ></Route>  
            
            </Routes>
       
                <Footer />
            </>
            );
}
            export default Home;