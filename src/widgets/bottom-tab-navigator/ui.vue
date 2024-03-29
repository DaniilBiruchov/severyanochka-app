<script lang="ts" setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { usePersonStore } from '@/entities/person'
import { Button } from '@/shared/button'
import { Icon } from '@/shared/icon'
import { Navigation } from '@/features/header/navigation'
import { UserMenu } from '@/features/header/user-menu'
import { Container } from '@/shared/container'

const personStore = usePersonStore()
const { setIsAuth } = personStore
const { person, isAuth } = storeToRefs(personStore)

const navItems = reactive([
  { label: 'Каталог', icon: 'menu', count: 0, link: '/catalog' },
  { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorite' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'basket', count: 1, link: '/basket' }
])
const infUser = reactive({
  avatar: person.value.avatar,
  name: person.value.name,
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: 'logout' }
  ]
})

const onIsAuth = () => setIsAuth(true)
</script>

<template>
  <div class="bottom-tab-navigator">
    <Container>
      <div class="bottom-tab-navigator__content">
        <Navigation :data="navItems"></Navigation>
        <UserMenu v-if="isAuth" :data="infUser" />
        <Button v-else size="M" @click="onIsAuth" class="content__login-btn">
          <template #rightIcon>
            <Icon type="entrance" />
          </template>
          Войти
        </Button>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.bottom-tab-navigator {
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.bottom-tab-navigator__content {
   display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 7%;
  align-items: center;
  padding-top: 3px;
}
.bottom-tab-navigator:deep(.navigation__item path) {
  fill: var(--main-on-surface);
}
.bottom-tab-navigator:deep(.item__count) {
  top: -3px;
  right: -2px;
}
.bottom-tab-navigator:deep(.item) {
  grid-gap: 4px;
}
.bottom-tab-navigator:deep(.user-menu) {
  position: relative;
  padding: 5px;
} 
.bottom-tab-navigator:deep(.user-menu__list) {
  position: absolute;
  bottom: 58px;
  right: 0;
  box-shadow: var(--shadow-default-s);
  border-radius: 5px;
  padding: 8px;
}
.bottom-tab-navigator:deep(.user-menu.is-open_true) {
  box-shadow: unset;
}

@media screen and (max-width: 767px) {
  .bottom-tab-navigator {
    display: flex;
  }
}
</style>
