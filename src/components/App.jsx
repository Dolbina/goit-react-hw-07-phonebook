
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter'
import { Layout } from './Layout/Layout';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selector';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]
  );
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <div>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
   
  
