import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Main from './components/main'; 
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  );
}

export default App;
