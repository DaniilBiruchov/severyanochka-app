<script lang="ts" setup>
import { useCatalogStore } from '@/entities/catalog'
import { Container } from '@/shared/container'
import { RouterLink} from 'vue-router'

const catalogStore = useCatalogStore()
const { getCatalogStore } = catalogStore

</script>
<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu__list">
        <li v-for="item in getCatalogStore" :key="item.label" class="list__item">
          <RouterLink :to="item.link">
            <Typography class="item__text" tagName="span" size="s" bold>{{ item.label }}</Typography>
          </RouterLink>
        </li>

      </ul>
    </Container>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: 72px;
  left: 0;
  background: var(--main-surface, #fff);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
}
.dropdown-menu__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 40px;
  padding: 40px 0;
}
.item__text:hover {
  color: var(--main-primary);
}
</style>
