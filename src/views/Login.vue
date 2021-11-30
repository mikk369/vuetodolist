<template>
  <div class="container">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="col-4">
        <div class="card">
          <h3>Login</h3>
          <div class="card-body">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="email"
                v-model="email"
                placeholder="exmaple@test.ee"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="login" class="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import router from "./../router";

export default defineComponent({
  setup() {
    let email = ref("");
    let password = ref("");

    async function login() {
      const { data } = await axios.post("/api/auth/login", {
        email: email.value,
        password: password.value,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      router.push("/");
    }

    return {
      email,
      password,
      login,
    };
  },
});
</script>
