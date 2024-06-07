import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('user123', {
    state: () => ({
        users: [],
        userCount: 0
    }),
    actions: {
        async fetchUsers() {
            const { data } = await axios.get(`${process.env.VUE_APP_API}/users`);
            this.users = data;
            this.userCount = data.length;
        }
    }
})