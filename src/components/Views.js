import { Breadcrumb, Button } from 'antd';
import {DownloadOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Typography } from 'antd';
import "../stylesheets/views.css"
const { Title } = Typography;

const Views = () => {
  return (
    <div className="views">
       <Title  level={5}>Organización</Title>
       <div className="site-layout-top-content">
        <div>
           <Breadcrumb separator=" ">
             <Breadcrumb.Item  href="">Divisiones</Breadcrumb.Item>
             <Breadcrumb.Item className="selected" href="">Colaboradores</Breadcrumb.Item>
           </Breadcrumb>
        </div>
        <div className="group-button-icon">
           <Button type="primary" icon={<PlusOutlined />} size={'large'} />
           <Button type="default" icon={<UploadOutlined />} size={'large'} />
           <Button type="default" icon={<DownloadOutlined />} size={'large'} />
        </div>
      </div>
    </div>
  )  
}
export default Views