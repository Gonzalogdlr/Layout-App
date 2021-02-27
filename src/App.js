import { Layout, Breadcrumb, Button } from 'antd';
import './stylesheets/aplication.css'
import  Options  from './components/Options.js'
import Usuario from './components/User.js'
import { DownloadOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import './stylesheets/header.css'
import { Typography } from 'antd';
import Tolon from './components/Table.js'

const { Title } = Typography;
const { Header, Content } = Layout;


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
      <Tolon />
      </div>
      </Content>
    </Layout>
  );
}

export default App;
