import { useState } from "react"
import News from "./component/News"
import Navbar from "./component/Navbar"
import NewsBoard from "./component/NewsBoard"

function App() {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <News />
    </div>
  )
}

export default App
