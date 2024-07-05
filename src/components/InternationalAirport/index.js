import { Component } from "react";
import { Item, TabList, TabPanels, Tabs } from "@adobe/react-spectrum";
import { BsThreeDots } from "react-icons/bs";
import Header from "../Header";
import "./index.css";

class InternationalAirport extends Component {
  render() {
    return (
      <div className="international_container">
        <Header />
        <h1>Indira Gandhi International Airport</h1>
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="FoR">Terminals</Item>
            <Item key="MaR">Transport</Item>
            <Item key="Emp">Contact details</Item>
          </TabList>
          <TabPanels>
            <Item key="FoR">
              <div className="terminal">
                <div className="terminal_container">
                  <img
                    src="international-design_photography_people@2x_3AA0peUAov4K32tb8uSNnP_1611635171296.png"
                    alt="pic"
                  />
                  <div className="sub_terminal">
                    <h1>Terminal 1</h1>
                    <p>International</p>
                    <p>Airport</p>
                  </div>
                  <BsThreeDots />
                </div>
                <div className="terminal_container">
                  <img
                    src="international-design_photography_people@2x_3AA0peUAov4K32tb8uSNnP_1611635171296.png"
                    alt="pic"
                  />
                  <div className="sub_terminal">
                    <h1>Terminal 1</h1>
                    <p>International</p>
                    <p>Airport</p>
                  </div>
                  <BsThreeDots />
                </div>
                <button>+Add Terminal</button>
              </div>
            </Item>
            <Item key="MaR">Senatus Populusque Romanus.</Item>
            <Item key="Emp">Alea jacta est.</Item>
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}
