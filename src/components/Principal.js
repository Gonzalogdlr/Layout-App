import { Button, Dropdown, Menu, Input, Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ListTable from "./Table.js";

const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="1">Columna 1</Menu.Item>
    <Menu.Item key="2">Columna 2</Menu.Item>
    <Menu.Item key="3">Columna 3</Menu.Item>
  </Menu>
);
export const Principal = () => {
  return (
    <div className="site-layout-content">
      <div style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
        <div>
          <Radio.Group value="listado">
            <Radio.Button value="listado">Listado</Radio.Button>
            <Radio.Button value="arbol">Arbol</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Dropdown overlay={menu}>
            <Button style={{color: "#A6A6A6", width: "200px"}}>
              Columnas <DownOutlined />
            </Button>
          </Dropdown>
          <Search placeholder="Buscar" allowClear style={{ width: 200 }} />
        </div>
      </div>
      <ListTable />
    </div>
  );
};
export default Principal;
