import { ShoppingFilled, QuestionCircleFilled, BellFilled, DownOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Button } from 'antd';
import { Typography } from 'antd';
import { Menu } from "antd";



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
export const User = () => {
  return (
    <>
      <ShoppingFilled className="anticon-white"/>
      <QuestionCircleFilled  className="anticon-white"/>
      <BellFilled className="anticon-white"/>
      <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
        U
      </Avatar>
      <Dropdown overlay={menu}>
        <Button className="ant-btn-options">
          Administrador <DownOutlined />
        </Button>
      </Dropdown>
      <Title style={{ color: "white" }} level={5}>
        mandü
      </Title>
    </>
  );
};
export default User;