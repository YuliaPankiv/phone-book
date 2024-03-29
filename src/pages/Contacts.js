import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectLoading } from '../redux/contact/selectors';
import { fetchContacts } from '../redux/contact/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import Filter from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <>
        <h1>Phone book</h1>
        <ContactForm />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>

        <ContactList />
      </>
    </>
  );
}
