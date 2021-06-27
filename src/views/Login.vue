<template>
  <div class="container">
    <div class="form">
      <img alt="Vagalume logo" src="../assets/logo.png" />
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Username</label>
          <input
            autocomplete="username"
            type="text"
            id="username"
            v-model.trim="formValues.username"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            autocomplete="current-password"
            type="password"
            id="password"
            v-model.trim="formValues.password"
          />
        </div>
        <div v-if="error">
          <p class="invalid">Usuário ou senha incorretos</p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Api from "../api/handler";
import Cookies from "js-cookie";
export default {
  name: "Login",
  data() {
    return {
      formValues: {
        username: "",
        password: ""
      },
      error: false
    };
  },
  methods: {
    submitForm() {
      Api()
        .post("/login", this.formValues)
        .then(response => {
          if (response.data.success) {
            Cookies.set("token", response.data.token);
            this.$router.push("/");
          } else {
            this.error = true;
            this.formValues.password = "";
          }
        })
        .catch(() => {
          this.error = true;
          this.formValues.password = "";
        });
    }
  }
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: url(../assets/background.jpg) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding: 10px 30px;
  border-radius: 8px;
  margin: 0 5px;
}

.invalid {
  color: red;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
}

input {
  min-width: 300px;
  border-radius: 7px;
  border-color: lightgray;
  border-width: 1px;
  margin-bottom: 10px;
  height: 25px;
}

button {
  color: white;
  background-color: #7957d5;
  border-radius: 3px;
  padding: 7px 15px;
  border-width: 0;
  font-size: 1rem;
}
</style>
