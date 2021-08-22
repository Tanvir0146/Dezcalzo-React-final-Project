// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Home from "../Pages/Home";
const ViewHotel = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    
    name: "",
    username:"",
    password: "",
    email: "",
    phone: "",
    address: "",
    account: "",
    status: "",
   
  });
  const { name,username,password,email,phone,address,account,status } = user;
  //   const onInputChange = (e) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  useEffect(() => {
    loadUser();
    },[]);
  //   const loadUser = async (e) => {
  //     const result = await axios.get(`http://localhost:3001/users/${id}`);
  //     // console.log(result);
  //     setUser(result.data);
  //   };

  const loadUser = async (e) => {
    let result = await fetch(`http://127.0.0.1:8000/api/AllHotel/singleShow/${id}`, {
      method: "GET",
    });

    result = await result.json();
    console.log(result);
    setUser(result.data);
  };
  return (
    <>
      


      <div className="row">
        <div className="col-sm-2">
        <Home/>
        </div>
        <div className="col-sm-10">
      
        <h1 className="mb-5">View Guide</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  name="name"
                  value={name}
                  class="form-control"
                  placeholder="Enter Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="address"
                  value={username}
                  class="form-control"
                  placeholder="Enter User Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="address"
                  value={password}
                  class="form-control"
                  placeholder="Enter User Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="email"
                  value={email}
                  class="form-control"
                  placeholder="Enter Email"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  class="form-control"
                  placeholder="Enter Phone Number"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="address"
                  value={address}
                  class="form-control"
                  placeholder="Enter User Name"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="email"
                  value={account}
                  class="form-control"
                  placeholder="Enter Email"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="phone"
                  value={status}
                  class="form-control"
                  placeholder="Enter Phone Number"
                  readOnly
                  // onChange={(e) => onInputChange(e)}
                />
              </div>
              
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ViewHotel;
