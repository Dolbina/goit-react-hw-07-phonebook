import { useDispatch, useSelector } from 'react-redux';
import { ListWrap, ButtonWrap } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContactsFilter } from 'redux/selector';


export const ContactList = () => {

  const filteredContacts = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  if (!filteredContacts?.length) {
    return <p>No contacts found.</p>;
  }
  return (
    <ListWrap>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <ButtonWrap type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonWrap>
        </li>
      ))}
    </ListWrap>
  );
};

