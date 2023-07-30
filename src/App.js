import { Container, Row, Col, Button } from "react-bootstrap";

import AppForm from "./Component/AppForm";
import AppAccordion from "./Component/AppAccordion";
import { useState } from "react";
import { Data } from "./Component/AppData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNavbar from "./Component/AppNavbar";
import { Pagination } from "antd";
function App() {
  const [question, setQuestion] = useState(Data);
  const notify = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        break;
    }
  };
  // To Add Item
  const AddItem = () => {
    localStorage.setItem("items", JSON.stringify([...Data]));
    setQuestion([...Data]);
    notify("Question Add Successfly", "success");
  };

  // To Delete All Questions
  const deleteAllItems = () => {
    Data.splice(0, Data.length);
    localStorage.removeItem("items");
    setQuestion([]);
    notify("Questions Deleted Successfly", "success");
  };

  // To Delete One Quetion
  const deleteOneQuetion = (Data) => {
    localStorage.setItem("items", JSON.stringify([...Data]));
    setQuestion([...Data]);
    notify("Question Deleted Successfly", "success");
    if (Data.length <= 0) {
      deleteAllItems();
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <AppNavbar />
        </Row>
        <Row>
          <Col sm="12">
            <AppForm AddItem={AddItem} notify={notify} />
            <AppAccordion data={question} deleteOneQuetion={deleteOneQuetion} />
            {localStorage.getItem("items") != null ? (
              <Button onClick={deleteAllItems} className="w-100">
                Delete All Questions
              </Button>
            ) : null}
          </Col>
        </Row>
        {Data.length >= 8 ? (
          <Row>
            <Col sm="12">
              <Pagination
                defaultCurrent={1}
                total={50}
                className="w-100 text-center my-3"
              />
            </Col>
          </Row>
        ) : null}
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
