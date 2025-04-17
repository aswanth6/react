import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './App.css'

//This is the main component where all the components will come together
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='dashboard'>
<Sidebar/>
<div className="main-wrapper">
  <Navbar/>
</div>
   </div>
   </>
  )
}

export default App
