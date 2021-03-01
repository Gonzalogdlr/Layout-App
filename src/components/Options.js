import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import "./../stylesheets/aplication.css";
import "./../stylesheets/header.css";
import logoMandu from "../assets/logoBlanco.svg";

const menuSeguimiento = (
  <Menu>
    <Menu.Item key="1">Seguimiento 1</Menu.Item>
    <Menu.Item key="2">Seguimiento 2</Menu.Item>
    <Menu.Item key="3">Seguimiento 3</Menu.Item>
  </Menu>
);
const menuModelos = (
  <Menu>
    <Menu.Item key="1">Modelos 1</Menu.Item>
    <Menu.Item key="2">Modelos 2</Menu.Item>
    <Menu.Item key="3">Modelos 3</Menu.Item>
  </Menu>
);
export const Options = () => {
  return (
    <div className="head-options">
      <img src={logoMandu} alt="logoMandu" />
      <Button className="ant-btn-options">
        Dashboard
      </Button>
      <Button className="ant-btn-options">
        Organización
      </Button>
      <Dropdown overlay={menuModelos}>
        <Button className="ant-btn-options">
          Modelos <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={menuSeguimiento}>
        <Button className="ant-btn-options">
          Seguimiento <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};
export default Options;
