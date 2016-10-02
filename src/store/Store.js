import Pockito from 'pockito';

const {Listenable} = Pockito.Reactito;
const {string} = Pockito.Validators;

const store = new Listenable({
    auth: new Listenable({
        initialState: {
            email: '',
            password: '',
            passwordRepeat: ''
        },
        Validators: {
            email: string,
            password: string,
            passwordRepeat: string
        }
    })
});

export default store;
