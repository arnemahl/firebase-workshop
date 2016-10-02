import Pockito from 'pockito';

const {Listenable} = Pockito.Reactito;
const {string} = Pockito.Validators;

const store = new Listenable({
    initialState: {
        currentUserId: ''
    },
    validators: {
        currentUserId: string
    },

    auth: new Listenable({
        initialState: {
            email: '',
            password: '',
            passwordRepeat: ''
        },
        validators: {
            email: string,
            password: string,
            passwordRepeat: string
        }
    })
});

export default store;
