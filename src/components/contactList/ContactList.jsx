import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';
import { filterContacts } from '../../redux/contact/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filteredContacts = useSelector(filterContacts);
  if (filteredContacts.length) {
    return (
      <>
        {filteredContacts?.length && (
          <List>
            {filteredContacts &&
              filteredContacts.map(currentContact => {
                return (
                  <Item key={currentContact.id}>
                    <ItemContact currentContact={currentContact} />
                  </Item>
                );
              })}
          </List>
        )}
      </>
    );
  }
};

// import { useDispatch, useSelector } from 'react-redux';
// import { Delete, Item, List } from './Contacts.styled.js.js';
// import { deleteContact } from 'redux/user/operation.js';
// import { selectFilteredContacts } from 'redux/user/selectors.js';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);
//   return (
//     <>
//       <List>
//         {filteredContacts.map(({ name, id, number }) => {
//           return (
//             <Item key={id}>
//               <p>
//                 {name}&nbsp;: {number}
//               </p>
//               <Delete type="button" onClick={() => dispatch(deleteContact(id))}>
//                 Delete
//               </Delete>
//             </Item>
//           );
//         })}
//       </List>
//     </>
//   );
// };
// export default Contacts;
