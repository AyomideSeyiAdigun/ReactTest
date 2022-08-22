 
import { Routes, Route} from "react-router-dom";
import Topbar from './components/topbar/Topbar'
import BillingPage from "./pages/billingPage/BillingPage";
import Coviidpage from "./pages/coviidpage/Coviidpage";
import FigmaCode from "./pages/personalInfoPage/FigmaCode";
import BillPage from "./pages/billingPage2/BillPage.jsx";
import Payment from "./pages/payment/PaymentDone.jsx";
import Home from "./pages/home/Home";

function App() {
    return ( 
    <>
        <Topbar/>
        <Routes >
        <Route exact path = '/' element = {  <Home /> }/>
        <Route exact path = '/covid' element = { <Coviidpage /> }/>
        <Route exact path = '/figma' element = { <FigmaCode /> }/>
        <Route exact path = '/figma/billing' element = { <BillingPage /> }/>
        <Route exact path = '/figma/billing2' element = { <BillPage /> }/>
        <Route exact path = '/figma/payment' element = { <Payment /> }/>
         
      </Routes> 
    </>
    );
}

export default App;