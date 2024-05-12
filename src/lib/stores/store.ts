import { writable } from 'svelte/store';

function userStore(user: { name: string, email: string, mobile: string, address: string }) {
    const { subscribe, update, set } = writable(user);
    let currentState = user;

    subscribe(state => {
        currentState = state;
    })

    function setName(name: string) {
        update((user) => {
            return { ...user, name };
        });
    }

    function setEmail(email: string) {
        update((user) => {
            return { ...user, email };
        });
    }

    function setMobile(mobile: string) {
        update((user) => {
            return { ...user, mobile };
        });
    }

    function setAddress(address: string) {
        update((user) => {
            return { ...user, address };
        });
    }
    
    function deleteInfo() {
        set({
            name: '',
            email: '',
            mobile: '',
            address: '',
        });
    }

    return {
        subscribe,
        setName,
        setAddress,
        setMobile,
        setEmail,
        deleteInfo,
        get currentUser() { return currentState}
    };
}

export const user = userStore({
    name: '',
    email: '',
    mobile: '',
    address: '',
});