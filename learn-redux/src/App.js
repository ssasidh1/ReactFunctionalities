
import './App.css';
import CreateCakeComponent from './components/createCakeComponent';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeComponent from './components/hooksCakeComponent';
import HooksIcecreamComponent from './components/hooksIcecreamComponent';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeComponent />
        <HooksIcecreamComponent />
        <CreateCakeComponent />
      </div>
    </Provider>
  );
}


export default App;
