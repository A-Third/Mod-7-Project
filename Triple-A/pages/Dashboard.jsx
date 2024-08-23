import { useParams } from "react-router"
import ArtContainer from "./ArtContainerAndii"


const Dashboard = () => {

    const params = useParams()
    
    const art = [
        {
            "id": 194155,
            "title": "Lid with Lion-Dog, probably for Incense Burner",
            "image_id": "2839ccc3-8fbb-73d4-54fc-4fe640b4da3e"
        }]
        
        const displayArt = art.find((e) => e.id === Number(params.id))
    console.log(params)
    console.log(displayArt)
   return (
    <>
      <h1>Dashboard</h1>
      <ArtContainer />
      {/* Check if displayArt exists before trying to access its properties */}
      {displayArt ? (
        <div>
          <h2>{displayArt.title}</h2>
          <p>ID: {displayArt.id}</p>
          <img style={{ width: 300 }} src={displayArt['image_id'] ? `https://www.artic.edu/iiif/2/${displayArt.image_id}/full/843,/0/default.jpg` : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt="artworkPainting" />
        </div>
      ) : (
        <p>Art not found</p>
      )}
    </>
   ) 
}





export default Dashboard