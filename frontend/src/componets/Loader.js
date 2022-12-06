import React from "react";
import { Spinner } from "react-bootstrap";
function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center">
        {/* <span className="sr-only">Loading...</span> */}

        <Spinner
          animation="border"
          style={{
            width: "50px",
            height: "50px",
            display: "inline-block",
            marginTop:'25%'
          }}
          variant="secondary"
        />
        <span></span>
        <Spinner
          animation="border"
          style={{
            width: "50px",
            height: "50px",
            marginTop:'25%',
            display: "inline-block",
          }}
          variant="success"
        />
        <span></span>
        <Spinner
          animation="border"
          style={{
            width: "50px",
            height: "50px",
            marginTop:'25%',
            display: "inline-block",
          }}
          variant="danger"
        />
        <Spinner
          animation="border"
          style={{
            width: "50px",
            height: "50px",
            marginTop:'25%',
            display: "inline-block",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="warning"
        />
        <span></span>
        <Spinner
          animation="border"
          style={{
            width: "50px",
            height: "50px",
            marginTop:'25%',
            display: "inline-block",
          }}
          variant="info"
        />
      </div>
    </>
  );
}

export default Loader;
