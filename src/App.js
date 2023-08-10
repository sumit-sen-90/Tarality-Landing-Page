import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import store from "./redux/Store/store";
import Main from "./components/body";

function App() {
  return (
    <Provider store={store}>
      <div >
        <Navbar />
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
