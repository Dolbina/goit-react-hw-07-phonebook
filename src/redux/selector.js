export const getContacts = state => state.contacts;

export const getContactsFilter = state => {
    const { contacts, filter } = state;
    console.log(contacts);
    if (!filter) {
        return contacts;
    }
    const filterContacts = contacts?.filter(
        ({ name, number }) =>
            name?.trim().toLowerCase().includes(filter.toLowerCase()) ||
            number?.trim().includes(filter.toLowerCase())
    );
    
    return filterContacts;
};

export const getFilter = state => state.filter;
