import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/add', ({ name, number }) => ({
    payload: {
        id: nanoid(),
        name,
        number,
    },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');