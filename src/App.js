import React from "react";
import "./App.css";
import {default as data} from "./app.json";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const TIMESTAMP = 1500000000;

function App() {

  // should fetch data from API
  // using dummy TIMESTAMP and dummy data
  console.log('data :', data);

  if (TIMESTAMP in data) {
    let cat = Object.keys(data[TIMESTAMP]);
    return (
      <>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey={cat[0]}>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {getNav(cat)}                 
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {getPane(cat)}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function getNav(cat) {
  // console.log('getNav cat :', cat);
  let NavArr = [];
  cat.forEach(element => {
    NavArr.push(
      <Nav.Item key={element}>
        <Nav.Link eventKey={element}>{element}</Nav.Link>
      </Nav.Item>
    )
  });
  return NavArr;
}

function getPane(cat) {
  // console.log('getPane cat :', cat);
  let NavPane = [];
  cat.forEach(element => {
    NavPane.push(
      <Tab.Content key={element}>
        <Tab.Pane eventKey={element}>{getSinglePane(element)}</Tab.Pane>
      </Tab.Content>
    )
  });
  return NavPane;
}

function getSinglePane(singleCat) {
  // console.log('singleCat :', singleCat);
  return (
    <div>
      <h2>{singleCat} value: {data[TIMESTAMP][singleCat].acc_value}</h2>
      <ul>
        {getDrug(singleCat)}
      </ul>
    </div>
  )
}

function getDrug(singleCat) {
  // console.log('getDrug singleCat :', singleCat);
  let drugList = [];
  let currentDrugObject = data[TIMESTAMP][singleCat]["drug"]
  let drugInThisCat = Object.keys(currentDrugObject);
  drugInThisCat.forEach(element => {
    drugList.push(
    <li key={element}>{JSON.stringify(currentDrugObject[element])}</li>
    )
  });
  return drugList;
}

export default App;
