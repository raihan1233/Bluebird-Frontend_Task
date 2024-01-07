import { createAction } from '@reduxjs/toolkit';

export const DataRequest = () => ({
    type: 'REQUEST',
});

export const DataSuccess=(data) => ({
    type : 'SUCCESS',
    payload : data,
});

export const DataFailure= (error) =>({
    type : 'FAILURE',
    payload : error,
});

export const LikedCar = createAction('LIKE', (like) => ({
    payload: like,
}));
  
export const BookCar = createAction('BOOK', (book) => ({
    payload: book,
}));