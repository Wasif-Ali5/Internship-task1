
import Navbar from './components/Navbar/Navbar'
import StudentCard from './components/Card/StudentCard'
import Footer from './components/Footer/Footer'
function App() {
 
  return (
  <div className="min-h-screen bg-blue-300 flex flex-col pt-24">
   
    <Navbar />
    <StudentCard />
    <Footer />

  </div>
  )
}

export default App
