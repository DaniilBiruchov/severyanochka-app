<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@/shared/icon'
import { Typography } from '@/shared/typography'

interface Props {
  data: {
    label: string,
    icon: string,
    count: number,
    link: string
  }[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item in data" :key="item.label" class="navigation__item">
         <RouterLink :to="item.link" class="item">
            <Icon :type="item.icon" />
            <Typography tagName="span" size="xs">{{ item.label }}</Typography>
            <span v-if="item.count > 0" class="item__count">{{ item.count }}</span>
         </RouterLink> 
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation__list {
  display: flex;
  grid-gap: 24px;
}
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
}
.item__count {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px;
  color: var(--main-on-primary);
  background=color: var(--main-primary);
}
</style>