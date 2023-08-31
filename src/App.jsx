import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"

function App() {

  useEffect(() => {
    ApiTesting();
  }, [])

  const ApiTesting = ()=>{
    fetchDataFromApi("/movie/popular").then((response)=>{
      console.log(response)
    })
  }
  

  return (
    <>
     <div className="App">App</div>
    </>
  )
}

export default App
