import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main'; 
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
