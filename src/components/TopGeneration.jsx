import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {

  const res = await fetch('https://pixgen-project-zeta.vercel.app/data.json');
  const photos = await res.json();
  console.log(photos, 'photos');
  const topPhotos = photos.slice(0, 8);
  console.log(topPhotos, "topPhotos");

  return (
    <div>
      <h2 className='text-2xl font-bold text-center my-8'>Top Generation</h2>

      <div className='grid grid-cols-4 gap-5'>
        {
          topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>

    </div>
  );
};

export default TopGeneration;