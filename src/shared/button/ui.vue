<script lang="ts" setup>
import { Typography } from '@/shared/typography'

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'L' | 'M' | 'S'
  disabled?: boolean
};
const props = defineProps<Props>();
const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props;
const  classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]; 
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"></slot>
    <Typography tagName="p" size="s" class="button__text"><slot></slot></Typography>
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
</style>