import './App.css';
import Layout from './components/wrappers/Layout';
import "./assets/style/App.css";
import "./assets/style/index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/style/custom-bootstrap.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import Home from 'components/pages/Home';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
