<script lang="ts" setup>
import { useSlots } from 'vue';
import { Typography } from '@/shared/typography'

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'L' | 'M' | 'S'
  disabled?: boolean
};
const props = defineProps<Props>();
const slots = useSlots()

const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props;
const  classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]; 
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"></slot>
    <Typography v-if="slots.default" tagName="p" size="s" class="button__text"><slot></slot></Typography>
    <slot name="rightIcon"></slot>
  </button>
</template>
 
<style scoped>
.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 4px;
}
.button__text {
  width: 100%;
  text-align: center;
}
.button.size_L {
  grid-gap: 8px;
  padding: 16px;
}
.button.size_M {
  padding: 8px;
  grid-gap: 8px;
}
.button.size_s {
  width: 157px;
  height: 32px;
  padding: 8px;
}
.button.color_secondary {
  background-color: var(--main-secondary);
  color: var(--main-on-secondary);
}
.button.color_primary {
  background-color: var(--main-primary);
  color: var(--main-on-secondary);
}
.button.decoration_none {
  background-color: unset;
  border-color: unset;
}
.button.decoration_none:deep(path) {
  fill: var(--main-on-surface);
}
</style>