<script lang="ts" setup>

  interface Props {
    tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    bold?: boolean;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  }
  const props = defineProps<Props>();
</script>

<template>
  <component :is="props.tagName" :class="['typography', size ?? size , bold ? 'bold' : '', tagName]"><slot></slot></component>
</template>

<style scoped>
.typography {
  font-size: normal;
  line-height: 150%;
}
.bold { font-weight: 700 }
.xs {font-size: 12px}
.xs { font-size: 16px }

.m { font-size: 18px }

.l { font-size: 24px }

.xl { font-size: 36px }
.h1 { font-size: 64px }
.h2 { font-size: 48px }
.h3 { font-size: 36px }
.h4 { font-size: 24px }
.h5 { font-size: 18px }

@media screen and (max-width: 768px) {
.xs {font-size: 8px}
.xs { font-size: 12px }

.m { font-size: 14px }

.l { font-size: 20px }

.xl { font-size: 32px }
.h1 { font-size: 48px }
.h2 { font-size: 36px }
.h3 { font-size: 24px }
.h4 { font-size: 20px }
.h5 { font-size: 16px }
}
</style>