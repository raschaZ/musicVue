import { defineStore } from 'pinia';
import { auth, userCollection } from '@/includes/firebase';

export default defineStore('user', {
    state: () => ({
        isLoggedIn: false
    }),
    actions: {
        async register(values) {
            const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password);
            await userCollection.doc(userCred.user.uid).set({
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country,
                userType: values.userType
            });

            await userCred.user.updateProfile({
                displayName: values.name
            });

            this.isLoggedIn = true;
        },
        async authenticate(values) {
            await auth.signInWithEmailAndPassword(values.email, values.password);
            this.isLoggedIn = true;
        },
        async signout() {
            await auth.signOut();
            this.isLoggedIn = false;
        }
    }
});
