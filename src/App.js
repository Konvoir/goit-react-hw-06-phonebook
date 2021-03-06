import React from 'react';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  )
}