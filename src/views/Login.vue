<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <Form @submit="handleSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <Field
              type="email"
              name="email"
              v-model="email"
              :rules="emailRule"
            />
            <ErrorMessage name="email" />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else. {{ data }}</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <Field
              type="password"
              name="password"
              v-model="password"
              :rules="passwordRule"
            />
            <ErrorMessage name="password" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="file"
              @change="onFileChange"
              ref="fileUpload"
              multiple
            />
          </div>
          <button class="btn btn-primary">Submit</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "@/store/login";
import { mapState, mapActions } from "pinia";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
export default {
  computed: {
    ...mapState(useLoginStore, ["isLogin", "data"]),
  },
  components: { Form, Field, ErrorMessage },
  data() {
    return {
      email: "",
      password: "",
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),

      selectedFiles: [],
      validExtensions: ["jpg", "jpeg", "png", "gif"],
      maxSize: 2 * 1024 * 1024, // 2 MB
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["login"]),

    onFileChange(event) {
      const myLists = [...event.target.files];
      console.log(myLists);
      myLists.forEach((file) => {
        if (file) {
          // check extension
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (!this.validExtensions.includes(fileExtension)) {
            //alert(`${file.name} not allowed`);
            this.$refs.fileUpload.value = "";
            return;
          } else if (file.size > this.maxSize) {
            //alert(`${file.name} exceeded file size 2MB`);
            this.$refs.fileUpload.value = "";
            return;
          }
          this.selectedFiles.push(file);
          // this.file = file;
          // console.log(file);
        }
        alert(file.name);
      });
    },

    async handleSubmit() {
      await this.uploadMultipleFiles(
        this.email,
        this.password,
        this.selectedFiles
      );
    },
  },
};
</script>
