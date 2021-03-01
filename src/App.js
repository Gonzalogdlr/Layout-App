import { Layout } from "antd";
import Options from "./components/Options.js";
import Usuario from "./components/User.js";
import Views from "./components/Views.js";
import Principal from "./components/Principal.js";
import "./stylesheets/header.css";
import "./stylesheets/aplication.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="head">
        <Options />
        <Usuario />
      </Header>
      <Content style={{ backgroundColor: "white" }}>
        <Views />
        <Principal />
      </Content>
    </Layout>
  );
}

export default App;
