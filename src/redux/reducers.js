import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from './actions';

const contactsInitialState = {
    items: [],
    filter: '',
};

const items = createReducer(contactsInitialState.items, {
    [addContact]: (state, { payload }) => {
        const namesArray = state.map(item => item.name);
        if (namesArray.includes(payload.name)) {
            window.alert(`${payload.name} is already in contacts`);
            return state;
        } else {
            return [...state, payload];
        }
    },
    [deleteContact]: (state, { payload }) => {
        return state.filter(({ id }) => id !== payload);
    },
});

const filter = createReducer(contactsInitialState.filter, {
    [filterContact]: (_, { payload }) => {
        return payload.toLowerCase();
    },
});

export default combineReducers({
    items,
    filter,
});