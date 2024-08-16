import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className='overflow-x-scroll no-scrollbar'>
      <Head/>
      <Body/>
        {/* {
        *
        *Head
        * Body
        * Sidebar
        *   MenuItems
        * Main Container
        *     Buttons List
        *     Video Container
        *       Video Card
        * 
        } */}
    </div>
    </Provider>
  );
}

export default App;
