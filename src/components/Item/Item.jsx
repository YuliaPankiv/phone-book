import { SlUserUnfollow } from 'react-icons/sl';
import { Delete } from 'components/contactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contact/options';
import { TodoWrapper } from './Item.styled';

export const ItemContact = ({ currentContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <TodoWrapper>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
      <div>
        <Delete onClick={() => dispatch(deleteContact(id))}>
          <SlUserUnfollow />
        </Delete>
      </div>
    </TodoWrapper>
  );
};
