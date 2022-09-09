import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import configureStore from "./store/store.js";
import Users from "./components/Users";

const store = configureStore();

function App() {

  return (  
    <Provider store={store}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      <Users />
    </Provider>
  );
}

export default App;
