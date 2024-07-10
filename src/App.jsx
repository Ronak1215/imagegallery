import { useEffect, useState } from "react"
import Imagescard from "./assets/components/Imagescard"
import ImageSearch from "./assets/components/ImageSearch"
// import conf from "../config/conf"


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=${conf.Url}&q=${term}&image_type=photo&pretty=true`)
    fetch(`https://pixabay.com/api/?key=24368506-b6f74eab1c40612d2aeb24f6f&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term])
  

  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)}/>
        {isLoading ? <h1 className="text-center text-6xl mx-auto mt-10">Loading...</h1> :<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
           {images.map(image => (
          <Imagescard key={image.id} image={image} />
        ))}
        </div>}
      </div>
    </>
  )
}

export default App
