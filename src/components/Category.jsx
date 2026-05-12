import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {

  const res = await fetch('https://pixgen-project-zeta.vercel.app/category.json');
  const categories = await res.json();
  // console.log(categories, "categories");

  return (
    <div className='my-5 space-x-4'>
      {
        categories.map(category =>
          <Link
            key={category.id} href={`?category=${category.name.toLowerCase()}`}>
            <Button
              size='sm' variant='outline'>
              {category.name}
            </Button>
          </Link>
        )
      }
    </div>
  );
};

export default Category;