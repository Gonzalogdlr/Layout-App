import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import "./../stylesheets/aplication.css";
import { Typography } from "antd";
import "./../stylesheets/example.css"

const { Title } = Typography;
const menu = (
  <Menu>
    <Menu.Item key="1" >
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" >
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" >
      3rd menu item
    </Menu.Item>
  </Menu>
);
export const Options = () => {
  return (
    <>
      <Title style={{ color: "white" }} level={5}>
        mandü
      </Title>
      <Button className="ant-btn-options">Dashboard</Button>
      <Button className="ant-btn-options">Organización</Button>
      <Dropdown overlay={menu}>
        <Button className="ant-btn-options">
          Modelos <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Button className="ant-btn-options">
          Seguimiento <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default Options;
