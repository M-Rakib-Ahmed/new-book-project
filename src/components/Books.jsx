import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks]=useState([])
    useEffect(()=>{
        fetch('book.json')
        .then(res=>res.json())
        .then(data=> setBooks(data))
    },[])
    console.log(books);
    
    return (
        <div>
           <h2 className='text-4xl font-bold text-center'>Books</h2> 
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 w-11/12 mx-auto'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </div>
    );
};

export default Books;