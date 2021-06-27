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

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-chart-bar">Analytics</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-users">Friends</SidebarLink>
    <SidebarLink to="/404" icon="fas fa-image">Images</SidebarLink>

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
    transition: 0.3s ease;
  }
  img {
    margin: 0.5rem 0;
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
