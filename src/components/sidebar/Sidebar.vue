<script>
import SidebarAvatar from './SidebarAvatar';
import SidebarLink from './SidebarLink';
import { collapsed, toggleSidebar, sidebarWidth } from './state';

export default {
  props: {},
  components: { SidebarLink, SidebarAvatar },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  }
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="logo-background" :style="{ width: sidebarWidth }">
      <img alt="Vue logo" src="../../assets/logo.png" />
    </div>
    <SidebarAvatar to="/profile">Username</SidebarAvatar>
    <SidebarLink to="/404" icon="fas fa-users">Funcionários</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-cog">Configurações</SidebarLink>
    <SidebarLink to="/" icon="fas fa-eye">Visão Geral</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-clipboard-list">Processos</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-film">Media</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-mobile-alt">Aparelhos</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-wifi">Conexão</SidebarLink>
    <span
      class="collapse-icon-wrapper"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="collapse-icon fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #424242;
  --sidebar-logo-bg-color: #212121;
  --sidebar-item-hover: #313131;
  --sidebar-item-active: #fc9603;
}
</style>

<style scoped lang="scss">
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  display: flex;

  flex-direction: column;
  h1 {
    height: 2.5em;
  }

  .logo-background {
    background-color: var(--sidebar-logo-bg-color);
    height: auto;
    transition: 0.3s ease;
  }
  img {
    margin-bottom: 0.5rem;
    width: 80%;
    height: 80%;
  }
}

.collapse-icon-wrapper {
  position: absolute;
  bottom: 0;
  padding: 0.75em 0;
  width: 100%;
  height: 2rem;
  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
  .collapse-icon {
    height: 2rem;
    width: 50px;
  }
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
