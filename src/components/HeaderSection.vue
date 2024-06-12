<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> Finexo {{ userCount }} </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">{{
                $t("navbar.home")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="why.html">Why Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                ><i class="fa fa-user" aria-hidden="true"></i>
                Login</router-link
              >
            </li>
            <li class="nav-item">
              <button @click="changeLocale(this.$i18n.locale)" class="nav-link">
                {{ this.$i18n.locale == "en" ? "km" : "en" }}
              </button>
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { onMounted } from "vue";
import { useUsersStore } from "@/store/usersjs";
const store = useUsersStore();

onMounted(async () => {
  await store.fetchUsers();
});

const changeLocale = (locale) => {
  this.$i18n.locale = locale == "en" ? "km" : "en";
};

// import { mapState, mapActions } from "pinia";
// export default {
//   computed: {
//     ...mapState(useUsersStore, ["users", "userCount"]),
//   },
//   async mounted() {
//     //await this.fetchUsers();
//   },
//   methods: {
//     ...mapActions(useUsersStore, ["fetchUsers"]),

//     ,

//   },
// };
</script>