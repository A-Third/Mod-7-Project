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
            <img src={artwork.thumbnail.lqip} alt="artworkPainting" />
            <button>Click me for details</button>
          </li>
        ))
      }
    </ul>
  )
}

export default ArtContainer