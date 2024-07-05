import { Component } from "react";
import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  ActionButton,
} from "@adobe/react-spectrum";
import Home from "../Home";
import Header from "../Header";
import "./index.css";

class Airports extends Component {
  render() {
    return (
      <div className="air_container">
        <>
          <Header />
        </>
        <div className="row_container">
          <Home />
          <>
            <div className="airports">
              <div className="row_airports">
                <h1>Airports</h1>
                <button className="button" type="button">
                  +Add new
                </button>
              </div>
              <div className="table_container">
                <TableView
                  aria-label="Example table with static contents"
                  selectionMode="multiple"
                >
                  <TableHeader>
                    <Column>All Airports</Column>
                    <Column>Country</Column>
                    <Column>Code</Column>
                    <Column align="end">Terminals</Column>
                  </TableHeader>
                  <TableBody>
                    <Row>
                      <Cell>Indra Gandhi International Airport</Cell>
                      <Cell>India</Cell>
                      <Cell>DEL</Cell>
                      <Cell>3</Cell>
                    </Row>
                    <Row>
                      <Cell>Dubai International Airport</Cell>
                      <Cell>UAE</Cell>
                      <Cell>DXB</Cell>
                      <Cell>5</Cell>
                    </Row>
                    <Row>
                      <Cell>Heathrow Airport</Cell>
                      <Cell>England</Cell>
                      <Cell>LHR</Cell>
                      <Cell>6</Cell>
                    </Row>
                    <Row>
                      <Cell>Istanbul Airport</Cell>
                      <Cell>Turkey</Cell>
                      <Cell>IST</Cell>
                      <Cell>3</Cell>
                    </Row>
                    <Row>
                      <Cell>Rajiv Gandhi International Airport</Cell>
                      <Cell>Texas</Cell>
                      <Cell>DFW</Cell>
                      <Cell>14</Cell>
                    </Row>
                  </TableBody>
                </TableView>
                <>
                  <ActionButton aria-label="Icon only">
                    <Edit />
                  </ActionButton>
                </>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
}

export default Airports;
