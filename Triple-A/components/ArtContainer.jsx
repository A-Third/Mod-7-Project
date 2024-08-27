import { useContext } from "react"
import { useNavigate } from "react-router";
import ArtContext from "../context/ArtContext"

function ArtContainer() {
  const { artData } = useContext(ArtContext);
  const { searchData } = useContext(ArtContext)
  console.log('TEST: ', artData)

  const navigate = useNavigate()
  let data;
  if (searchData.length > 0) data = searchData
  else data = artData

  return (
    <div className="artworks-container">
      <ul className="artworks">
        {
          data?.map((artwork) => (
            <li key={artwork.id} className="artLi">
              <h1>{artwork.title}</h1>
              <img style={{ width: 300 }} src={artwork['image_id'] ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt="artworkPainting" />
              <button onClick={() => navigate(`/${artwork.id}`)}>Click me for details</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ArtContainer