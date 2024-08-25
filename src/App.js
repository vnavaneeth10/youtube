import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

const appRouter = createBrowserRouter([ {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },

      {
        path: "watch",
        element: <WatchPage/>
      },

      {
        path: "demo",
        element: <>
                  <Demo/> 
                  <Demo2/>
                  </>
      }
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
    <div className='overflow-x-scroll no-scrollbar'>
      <Head/>
      <RouterProvider router={appRouter}/>
      
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
