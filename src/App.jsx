import { useState } from "react"
import News from "./component/News"
import Navbar from "./component/Navbar"
import NewsBoard from "./component/NewsBoard"
import Overview from "./component/Overview"
import Footer from "./component/Footer"


function App() {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Overview/>
      <NewsBoard category={category} />
      <News />
      <Footer />
    </div>
  )
}

export default App
