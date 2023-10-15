import logo from './logo.svg';
import './App.css';
import Hooksprac from './components/Hooksprac';
import Reduxprac from './redux/Reduxprac';
import { Provider } from 'react-redux';
import store from './redux/cakes/store';
import Dropdown from './dropdown';
import Checkbox from './Checkbox';
import Radiobtn from './Radiobtn';
import Gridprac from './Gridprac';
import Vscodefilestru from './roadside/Vscodefilestru';
import explorer from './roadside/data/Data'
function App() {
  return (
    <Provider store={store}>
    <div className='App'>
    {/* //<Hooksprac></Hooksprac> */}
    {/* <Reduxprac></Reduxprac> */}
    </div>
    {/* <Dropdown></Dropdown> */}
    {/* <Checkbox></Checkbox>
    <Radiobtn></Radiobtn> */}
    <Gridprac></Gridprac>
    {/* <Vscodefilestru explorer={explorer}></Vscodefilestru> */}
    </Provider>
  );
}

export default App;
