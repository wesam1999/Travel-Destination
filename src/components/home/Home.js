import Header  from '../header/Header'; 
import data from '../../data/db.json';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
function Home()
{
    return (

        <>
          <Header />
      <Tours data={data} />
      <Footer />
        </>
    );
}
export default Home;