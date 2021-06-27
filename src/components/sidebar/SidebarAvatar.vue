<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<template>
  <router-link :to="to" class="link">
    <span class="avatar-wrapper">
      <img alt="User Avatar" src="../../assets/avatar.jpg" class="avatar" />
    </span>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em;
  padding: 0.4em;
  border-radius: 0.25em;
  //   height: 2.5em;
  transition: 0.2s ease;

  color: white;
  text-decoration: none;
}
.avatar-wrapper {
  padding: 0 0.5rem;
  .avatar {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
</style>
