import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async ({ searchParams }) => {

  // const { category } = searchParams;
  // console.log(category, "category");
  const params = await searchParams;
  const category = params.category
  console.log(category, "category");

  const res = await fetch('https://pixgen-project-zeta.vercel.app/data.json');
  const photos = await res.json();
  // console.log(photos, "photos");
  const filteredPhotos = category ? photos.filter(photo =>
    photo.category.toLowerCase() == category.toLowerCase()) : photos

  return (
    <div>
      <h2 className='font-bold text-2xl text-center my-8'>
        All Photos
      </h2>
      <Category></Category>

      <div className='grid grid-cols-4 gap-5'>
        {
          filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>

    </div>
  );
};

export default AllPhotosPage;