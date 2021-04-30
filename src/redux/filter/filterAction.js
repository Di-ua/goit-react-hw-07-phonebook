import { createAction } from '@reduxjs/toolkit';
// import types from '../action-types';

// без redux toolkit
// const filterContacts = value => ({
//   type: types.FILTER_CONTACTS,
//   payload: {
//     value,
//   },
// });
const filterContacts = createAction('FILTER_CONTACTS');

export default filterContacts;