import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BookDetail from '../../components/BookDetail/BookDetail';
import BOOK_DATA from '../../data/Book';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddBooks, RemoveBooks } from '../../redux/actions/book-action';

function BookDeatailPage() {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(AddBooks(BOOK_DATA[id]));

    return () => {
      dispatch(RemoveBooks());
    };
  }, [id]); 

  return (
    <>
      <Navbar />
      <BookDetail data={book} />
    </>
  );
}

export default BookDeatailPage;
