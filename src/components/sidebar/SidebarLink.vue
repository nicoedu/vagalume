<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from './state';

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  }
};
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
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
  height: 2.5em;
  transition: 0.2s ease;

  color: white;
  text-decoration: none;
}

.link.collapsed {
  justify-content: center;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 4rem;
  height: 1.75rem;
}
</style>
