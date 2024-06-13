import './App.css'
import UserContextProvider from './context/Usercontext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
     <h1> react with chai </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
