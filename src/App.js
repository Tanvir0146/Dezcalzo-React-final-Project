import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Add from "./components/Pages/Add";
import Edit from "./components/Pages/Edit";
import View from "./components/Pages/View";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import GuideList from "./components/guide/GuideList";
import EditGuide from "./components/guide/EditGuid";
import GuideView from "./components/guide/GuideView";
import SalesDetailslist from "./components/SalesDetails/SalesDetailslist";
import EditSalesDetails from "./components/SalesDetails/EditSalesDetails";
import SalesDetailsView from "./components/SalesDetails/SalesDetailsView";
import HotelList from "./components/AllHotel/HotelList";
import EditHotel from "./components/AllHotel/EditHotel";
import ViewHotel from "./components/AllHotel/ViewHotel";
// import EmployeeList from "./components/Pages/EmployeeList";
import AddHotelCategories from "./components/HotelCategories/AddHotelCategories";
import HotelCategoriesList from  "./components/HotelCategories/HotelCategoriesList";
import EditHotelCategories from "./components/HotelCategories/EditHotelCategories"
import ViewHotelCategories from "./components/HotelCategories/ViewHotelCategories";
import MantainanceList from "./components/Mantanaince/MantainanceList";
import EditMantainance from "./components/Mantanaince/EditMantainance";
import ViewMantainance from "./components/Mantanaince/ViewMantainance";

import  BookingList from "./components/AddressBook/BookingList";
import EditBookings from "./components/AddressBook/EditBookings";
import ViewBookings from "./components/AddressBook/ViewBookings"
import TouristList from "./components/tourist/TouristList";
import EditTourist from "./components/tourist/EditTourist";
import TouristView from "./components/tourist/TouristView";

function App() {
  return (
    <Router>
    <div>
      
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Login}/>
        {/* <Route exact path="/register" component={Register}/> */}
        {/* <Route exact path="/user/add" component={Add}/> */}
  
        <Route exact path="/home" component={Home}/>
       
        {/* <Route exact path="/employees/list" component={EmployeeList}/> */}
        <Route exact path="/guide/show" component={GuideList}/>
        <Route exact path="/guide/edit/:id" component={EditGuide}/>
        <Route exact path="/guide/:id" component={GuideView}/>
        <Route exact path="/SalesDetails/show" component={SalesDetailslist}/>
        <Route exact path="/SalesDetails/edit/:id" component={EditSalesDetails}/>
        <Route exact path="/SalesDetails/:id" component={SalesDetailsView}/>
        <Route exact path="/AllHotel/show" component={HotelList}/>
        <Route exact path="/AllHotel/edit/:id" component={EditHotel}/>
        <Route exact path="/AllHotel/:id" component={ViewHotel}/>
        <Route exact path="/adHotel/show" component={HotelCategoriesList}/>
        <Route exact path="/adHotel/edit/:id" component={EditHotelCategories}/>
        <Route exact path="/adHotel/:id" component={ViewHotelCategories}/>
        <Route exact path="/maintaince/show" component={MantainanceList}/>
        <Route exact path="/maintaince/edit/:id" component={EditMantainance}/>
        <Route exact path="/maintaince/:id" component={ViewMantainance}/>
        
        <Route exact path="/AllHotel/show" component={BookingList}/>
        <Route exact path="/AllHotel/edit/:id" component={EditBookings}/>
        <Route exact path="/AllHotel/:id" component={ViewBookings}/>
        <Route exact path="/maintaince/show" component={TouristList}/>
        <Route exact path="/maintaince/edit/:id" component={EditTourist}/>
        <Route exact path="/maintaince/:id" component={TouristView}/>
       
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
