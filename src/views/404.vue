<template>
  <div class="wrapper">
    <div class="not-found">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1 class="title">404</h1>
      <h2 class="subtitle">Página não encontrada</h2>
      <router-link to="/" class="link">
        <p>Voltar para home</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.not-found {
  padding-bottom: 10rem;
}

.title {
  font-size: 4rem;
  margin: 0;
  font-weight: 900;
}
.subtitle {
  font-size: 2rem;
  margin: 0;
}
.link {
  font-size: 1.5rem;
  color: black;
}
</style>
