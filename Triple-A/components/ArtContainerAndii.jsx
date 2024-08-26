import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArtContainerAndii = () => {
  const { id } = useParams(); // Get the artwork ID from the URL
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const data = await response.json();
        setArtwork(data.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchArtwork();
  }, [id]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Artwork Details</h1>
      {artwork ? (
        <div>
          <button onClick={() => navigate('/')}>Go Home</button>
          <p>ID: {artwork.id}</p>
          <h2>Title: {artwork.title}</h2>
          <h2>Artist: {artwork.artist_title}</h2>
          <p>Medium: {artwork.medium_display}</p>
          <p>Place of Origin: {artwork.place_of_origin}</p>
          <img
            style={{ width: 300 }}
            src={
                artwork.image_id
                ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt={artwork.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ArtContainerAndii;
