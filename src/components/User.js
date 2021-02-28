import { ShoppingFilled, QuestionCircleFilled, BellFilled, DownOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, Button, Badge } from 'antd';
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
      <div>
      <ShoppingFilled className="anticon-white"/>
      <Badge count={5} size="small">
        <a href="Count" className="head-example" />
      </Badge>
      </div>
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
      <Title style={{ color: "black", backgroundColor: "white" }} level={3}>
        mandü
      </Title>
    </>
  );
};
export default User;