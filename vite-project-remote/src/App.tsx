import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Home, Dashboard} from './feature'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const routes = [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
  ]

  return (
    <>
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
