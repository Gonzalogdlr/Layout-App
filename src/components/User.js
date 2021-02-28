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
      <ShoppingFilled className="anticon-white"/>
      <QuestionCircleFilled  className="anticon-white"/>
      <div>
      <BellFilled className="anticon-white"/>
      <Badge count={5} size="small">
        <a href="Count" className="head-example">
        </a>
      </Badge>
      </div>
      <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
        U
      </Avatar>
      <Dropdown overlay={menu}>
        <Button className="ant-btn-options">
          Administrador <DownOutlined />
        </Button>
      </Dropdown>
      <Title style={{ color: "white" }} level={3}>
        mandü
      </Title>
    </>
  );
};
export default User;