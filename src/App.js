import { Layout, Breadcrumb, Button, Menu, Dropdown, Input} from 'antd';
import './stylesheets/aplication.css'
import  Options  from './components/Options.js'
import Usuario from './components/User.js'
import { DownOutlined,DownloadOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import './stylesheets/header.css'
import { Typography } from 'antd';
import ListTable from './components/Table.js'


const { Title } = Typography;
const { Header, Content } = Layout;
const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="1" >
      Columna 1
    </Menu.Item>
    <Menu.Item key="2" >
      Columna 2
    </Menu.Item>
    <Menu.Item key="3" >
      Columna 3
    </Menu.Item>
  </Menu>
);
const onSearch = value => console.log(value);
function App() {
  return (
    <Layout>
      <Header >
        <Options/>
        <Usuario/>
        
      </Header>
      <Content style={{backgroundColor: "white"}}>
        <Title  level={5}>
          Organización
        </Title>
        <div className="site-layout-top-content">
         <div>
            <Breadcrumb separator=" ">
              <Breadcrumb.Item href="">Divisiones</Breadcrumb.Item>
              <Breadcrumb.Item href="">Colaboradores</Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <div>
            <Button type="primary" icon={<PlusOutlined />} size={'large'} />
            <Button type="default" icon={<UploadOutlined />} size={'large'} />
            <Button type="default" icon={<DownloadOutlined />} size={'large'} />
         </div>
       </div>
      <div className="site-layout-content">
      <div>
      <Button>Listado</Button>
      <Button>Árbol</Button>
      </div>
      <Dropdown overlay={menu}>
        <Button >
          Columnas <DownOutlined />
        </Button>
      </Dropdown>
      <Search placeholder="Buscar" allowClear onSearch={onSearch} style={{ width: 200 }} />
      <ListTable />
      </div>
      </Content>
    </Layout>
  );
}

export default App;
