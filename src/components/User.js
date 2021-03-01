import {
  ShoppingFilled,
  QuestionCircleFilled,
  BellFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Avatar, Button, Badge } from "antd";
import { Menu } from "antd";
import logoMandu from '../assets/logoNegro.svg'; 

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
export const User = () => {
  return (
    <div className="grid-user">
      <div className="group-icon">
        <ShoppingFilled className="anticon-white" />
        <QuestionCircleFilled className="anticon-white" />
        <div>
          <BellFilled className="anticon-white" />
          <Badge count={5} size="small">
            <a href="Count" className="head-example">
            </a>
          </Badge>
        </div>
      </div>
      <Avatar style={{ color: "white", backgroundColor: "#fde3cf" }}>
        A
      </Avatar>
      <Dropdown overlay={menu}>
        <Button className="ant-btn-options">
          Administrador <DownOutlined />
        </Button>
      </Dropdown>
      <img style={{height: '35px'}}src={logoMandu} alt="logoMandu"/>
    </div>
  );
};
export default User;
