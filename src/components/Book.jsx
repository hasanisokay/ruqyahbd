import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <Link to={`/book/${book.isbn13}`}>
            <div className='mx-10 shadow-lg relative rounded hover:-translate-y-4 transform hover:shadow-2xl transition duration-500'>
                <img src={book.image} alt="" className='object-cover w-full md:h-64 lg:h-96'  />
            <div className='bg-black rounded transition-opacity duration-1000 px-8 py-8 bg-opacity-80 text-lg text-white inset-0 opacity-0 hover:opacity-100 flex flex-col absolute'>
                <p>{book.title}</p>
                <p className='mt-6'>{book.subtitle.substring(0,40)}...</p>
                <p className='mt-auto'>Price: {book.price}</p>
            </div>




            </div>
        </Link>
    );
};

export default Book;