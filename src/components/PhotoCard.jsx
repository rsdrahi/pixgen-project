import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const PhotoCard = ({ photo }) => {

  console.log(photo);

  return (
    <Card className='border rounded-xl'>
      <div className='relative w-full aspect-square'>
        <Image
          src={photo.imageUrl}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          alt={photo.title}
          className='rounded-xl object-cover'
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

      <Button variant='outline' className={'w-full'}>View</Button>

    </Card>
  );
};

export default PhotoCard;