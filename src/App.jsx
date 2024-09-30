import {Route, Routes} from "react-router-dom"


import Calculator from "./pages/Calculator"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"



function App (){
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<Calculator />} />
       

    </Routes>

}
export default App  