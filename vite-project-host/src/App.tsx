import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import { Home} from './feature'

import Home from 'remoteApp/Feature'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)

  const routes = [
    {
      path: '/home',
      element: <Home />
    },
  ]

  return (
    <>
      {/* <Home /> */}
      <Router>
        <div>
          <Routes>
            {routes.map(
              (route, index) => 
                <Route key={index} path={route.path} element={route.element} />
            )}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
