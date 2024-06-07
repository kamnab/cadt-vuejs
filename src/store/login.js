import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore('login', {
    state: () => ({
        isAuthenticated: false,
        data: {

        }
    }),
    actions: {
        async login(email, password, file) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('file', file);

            const { data } = await axios.post("http://172.23.128.93:3000/upload-single", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // const { data } = await axios.post("http://172.23.128.93:3000/register", {
            //     email: email,
            //     password: password,
            // });

            // const { data } = await axios.post('http://172.23.128.253:3000/login', {
            //     username, password
            // });
            this.data = data;
        },

        async uploadMultipleFiles(email, password, files) {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            for (let i = 0; i < files.length; i++) {
                formData.append("files", this.files[i]);
            }
            const { data } = await axios.post(
                "http://172.23.128.93:3000/upload-multiple",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(data);
        }

    }
})