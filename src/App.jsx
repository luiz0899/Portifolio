import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar";
import "./style/components/app.sass";
import  Fundo from '../src/img/fund.png'
import MainRoutes from "./routes/routes";

function App() {

  return (
      <div id ="portifolio">
        <Sidebar/>
        <MainRoutes/>
      </div>
  )
}

export default App
