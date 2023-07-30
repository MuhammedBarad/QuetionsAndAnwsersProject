import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

const AppAccordion = ({ data, deleteOneQuetion}) => {
  const localData = JSON.parse(localStorage.getItem("items"));

  const delteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      const index = data.findIndex((item) => item.id === ID);
      data.splice(index, 1);
      deleteOneQuetion(data);
      
    }
  };
  return (
    <div>
      {localStorage.getItem("items") != null ? (
        localData.map((item, index) => {
          return (
            <Accordion pagination={{ pageSize: 1 }} className="my-3">
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>{item.q}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-inline mx-2">{item.a}</div>
                  <Button onClick={delteItem}>Delet</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      ) : (
        <h2 className="text-center fs-4 my-5 w-100">No Found Any Question</h2>
      )}
    </div>
  );
};

export default AppAccordion;
