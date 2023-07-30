import React from "react";
import { Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <div>
      <Nav variant="underline" defaultActiveKey="/home" style={{
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
      }}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#000",fontWeight:"700",textDecoration:"none"}}>Frequently asked questions & answers</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AppNavbar;
