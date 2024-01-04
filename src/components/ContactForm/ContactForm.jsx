import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Label } from './ContactForm.styled';
import { selectContacts, selectLoading } from '../../redux/contact/selectors';
import { addContact } from '../../redux/contact/operations';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { ...form };

    if (checkContactNameRepeat(form.name)) {
      alert(`${form.name} already exists`);
      return;
    } else {
      dispatch(addContact(newContact));
    }
    setForm({ name: '', number: '' });
  };

  const checkContactNameRepeat = name => {
    const temporaryNameArray = contacts.map(item => item.name.toLowerCase());
    return temporaryNameArray.includes(name.toLowerCase());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Tel
        <input
          type="tel"
          name="number"
          value={form.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">{isLoading ? 'Loading...' : 'Add contact'}</Button>
    </Form>
  );
};
