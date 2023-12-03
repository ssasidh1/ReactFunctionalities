
import './App.css';
import CreateCakeComponent from './components/createCakeComponent';
import {Provider} from 'react-redux'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateCakeComponent />
      </div>
    </Provider>
  );
}


export default App;
