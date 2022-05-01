export const buildPerson = (name: string, surname: string) => {
    if (!name || !surname) {
        throw new Error('Name and surname cannot be blank');
    }

    return {
        name,
        surname,
    };
};