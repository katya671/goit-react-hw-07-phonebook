import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name} : {number}
      <button
        className={css['delete-btn']}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};
