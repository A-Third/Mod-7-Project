import { useContext } from "react"
import ArtContext from "../context/ArtContext"
function ArtContainer() {
  const { artData } = useContext(ArtContext);
  console.log('TEST: ', artData)

  return (
    <ul>
      {
        artData?.map((artwork) => (
          <li key={artwork.id}>
            <h1>{artwork.title}</h1>
            <img style={{ width: 300 }} src={artwork['image_id'] ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt="artworkPainting" />
            <button>Click me for details</button>
          </li>
        ))
      }
    </ul>
  )
}

export default ArtContainer