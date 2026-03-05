
import { Header } from './components/Header'
import { About } from './pages/About'
import { Careers } from './pages/careers'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
/* import { Home } from './pages/home' */

export const App = () => {
  return (
    <>
    <Header />
    <Home /> 
    <Careers/> 
    <About />  
    <Login /> 
    <Register /> 

    </>
  )
}
