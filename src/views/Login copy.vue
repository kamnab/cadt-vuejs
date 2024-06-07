<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="formGroupExampleInput">Username</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              v-model="formData.name"
              placeholder=""
              required
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              type="email"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              required
              v-model="formData.password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "@/store/login";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useLoginStore, ["isLogin"]),
  },
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["login"]),

    async handleSubmit() {
      // var response = await login(
      //   this.formData.username,
      //   this.formData.password
      // );
      // if (response.pass) {
      //   this.$router.push("/user");
      // }
    },
  },
};
</script>