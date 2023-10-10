import React, { useEffect } from 'react';
import BOOK_DATA from '../../data/Book';
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { SetBooks, fetchBooks } from '../../redux/actions/book-action';

function BookList() {
    const books = useSelector(state => state.allBooks.books);
    const dispatch = useDispatch();

    useEffect(() => {
        // Assuming SetBooks action sets the 'books' state in Redux.
        // dispatch(SetBooks(BOOK_DATA));
        dispatch(fetchBooks())
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">All Books</h1>
            <div className="row">
                {books.map((book, index) => (
                    <Book key={index} data={book} />
                ))}
            </div>
        </div>
    );
}

export default BookList;
