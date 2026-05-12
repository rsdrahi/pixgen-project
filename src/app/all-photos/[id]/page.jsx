import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const PhotoDetailsPage = async ({ params }) => {

  const { id } = await params;
  const res = await fetch('https://pixgen-project-zeta.vercel.app/data.json');
  const photos = await res.json();
  // console.log(photos, "photos");
  const photo = photos.find(p => p.id == id);
  // console.log(photo, "photo");

  return (
    <Card className='border rounded-xl my-8'>
      <div className='relative w-full aspect-square'>
        <Image
          src={photo.imageUrl}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          alt={photo.title}
          className='rounded-xl'
        />
        <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
      </div>

      <div>
        <h2 className='font-medium'>{photo.title}</h2>
      </div>

      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <p><FaHeart></FaHeart></p>
          <p>{photo.likes}</p>
        </div>

        <Separator orientation='vertical'></Separator>

        <div className='flex items-center gap-2'>
          <p><FiDownload></FiDownload></p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <p>{photo.prompt}</p>
        <p>{photo.createdAt}</p>
      </div>

      <Link href={'/'}>
        <Button variant='outline' className='btn w-full'>Back Home</Button>
      </Link>

    </Card>
  );
};

export default PhotoDetailsPage;