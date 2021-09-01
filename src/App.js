import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css';
import './assets/css/style.css';

import Navbar from './Navbar';
import Banner from './Banner/Banner';
//import Home from './Home';



function App() {
  
  return (
   <>
   <Navbar />
   <Banner  />
   {/* <Home /> */}
   </>
  );
}

export default App;
