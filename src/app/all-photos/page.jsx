import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {

  const res = await fetch('https://pixgen-project-zeta.vercel.app/data.json');
  const photos = await res.json();
  console.log(photos, "photos");

  return (
    <div>
      <h2 className='font-bold text-2xl text-center my-8'>All Photos</h2>

      <div className='grid grid-cols-4 gap-5'>
        {
          photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>

    </div>
  );
};

export default AllPhotosPage;