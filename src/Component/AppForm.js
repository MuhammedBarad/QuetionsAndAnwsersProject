import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Data } from "./AppData";

const AppForm = ({ AddItem, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  const AddNewItem = () => {
    if (qu === "" || an === "") {
      notify("Please Enter The Missing Information", "error");
      return;
    }
    Data.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    AddItem();
  };
  return (
    <div>
      <Row className="text-center" style={{ paddingTop: "100px" }}>
        <Col sm="5">
          <Form.Control
            onChange={(e) => setQu(e.target.value)}
            type="text"
            placeholder="Enter Quesion"
            value={qu}
          />
        </Col>
        <Col sm="5">
          <Form.Control
            onChange={(e) => setAn(e.target.value)}
            type="text"
            placeholder="Enter Anwser"
            value={an}
          />
        </Col>
        <Col sm="2">
          <Button
            onClick={AddNewItem}
            className="w-100"
            variant="primary"
            type="submit"
          >
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AppForm;
