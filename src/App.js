import { Layout } from "antd";
import "./stylesheets/aplication.css";
import Options from "./components/Options.js";
import Usuario from "./components/User.js";
import Views from "./components/Views.js";
import Principal from "./components/Principal.js"
import "./stylesheets/header.css"

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
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
