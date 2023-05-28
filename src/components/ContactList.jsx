import React from "react";
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={css.contact_list}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li className={css.contact_item} key={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <button
                        className={css.btn}
                        onClick={() => deleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>

                );
            })}
            
        </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    deleteContact: PropTypes.func,
}