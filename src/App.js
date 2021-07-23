import React, { useState } from "react";
import './App.css';

const GeoLocation = () => {
  const [details, setDetails] = useState(null);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    ) //got api key from geolocation website
      .then(response => response.json())
      .then(data => setDetails(data));
  };

  return (
    <>
    
      <div className="row">
        <div className="start ">
          <h1>&nbsp;&nbsp;&nbsp;Find my IP and Location</h1>
          <p className="para">
            <button
              className="btn btn-primary"
              onClick={getUserGeolocationDetails}
            >
              Find my details
            </button>

            <div className="down">
              <div className="yup">
                {details && (
                  <ul className="list-group">
                    <tr className="list-group-item">
                      <th>Location: </th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <th>{" "}
                      {`${details.city}, ${details.country_name}(${details.country_code})`}</th>
                    </tr>
                    <br></br>
                    <tr className="list-group-item">
                    <th>IP: </th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <th>{details.IPv4}</th>
                    </tr>
                    <br></br>
                    <tr className="list-group-item">
                    <th>longitude:</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <th>{details.longitude}</th>
                    </tr>
                    <br></br>
                    <tr className="list-group-item">
                    <th>latitude:</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <th>{details.latitude}</th>
                    </tr>
                    <br></br>
                    <tr className="list-group-item">
                    <th>state:</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <th>{details.state}</th>
                    </tr>
                    <br></br>
                    <tr className="list-group-item">
                    <th>postal:</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <th>{details.postal}</th>
                    </tr>
                    <br></br>
                  </ul>
                )}
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;