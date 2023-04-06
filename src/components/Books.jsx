import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Spinner from './Spinner';

const Books = () => {
    const {books}= useLoaderData()
    const navigation = useNavigation()
    if(navigation.state !="idle"){
        return <Spinner></Spinner>
    }
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mb-8 mt-8'>
            {books.map(book => <Book book={book} key={book.isbn13
}></Book>)}
        </div>
    );
};

export default Books;