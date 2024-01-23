<script lang="ts" setup>
import { ref, isRef, toValue } from 'vue';
import { Avatar } from '@/shared/avatar';
import { Typography } from '@/shared/typography';
import { Button } from '@/shared/button';
import { Icon } from '@/shared/icon';
import { RouterLink } from 'vue-router';
import { usePersonStore } from '@/entities/person'

interface Props {
  data: {
    avatar: string,
    name: string,
    menu: {label: string, link?: string, action?: string}[]
  }
}
const { data } = defineProps<Props>()

const personStore = usePersonStore()
const { setIsAuth } = personStore

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const onClickItem = (value: string) => {
  switch(value) {
    case 'logout':
      setIsAuth(false);
      break;
    default:
      return setIsAuth(false);
  }
}
</script>

<template>
  <div :class="['user-menu', `is-open_${isOpen}`]">
    <Avatar :img="data.avatar" @click="toggleMenu" />
    <Typography @click="toggleMenu" tagName="p" size="s">{{ data.name }}</Typography>
    <Button @click="toggleMenu" decoration="none">
      <template #leftIcon>
        <Icon type="user-menu" />
      </template>
    </Button>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="list__item" @click="onClickItem(item.link)"> 
        <RouterLink v-if="item.link" :to="item.link" class="item__link">
          <Typography tag-name="span" size="m" class="item__text">{{ item.label }}</Typography>
        </RouterLink>
        <Typography v-else tag-name="span" size="m" class="item__text">{{ item.label }}</Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  grid-gap: 10px;
  padding: 8px;
  border-radius: 4px;
}
.user-menu.is-open_true {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-m);
}
.list__item {
  padding: 8px;
}
.user-menu__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>