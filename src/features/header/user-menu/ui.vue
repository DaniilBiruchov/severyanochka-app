<script lang="ts" setup>
import { Avatar } from '@/shared/avatar'
import { Typography } from '@/shared/typography'
import { Button } from '@/shared/button'
import { Icon } from '@/shared/icon'

interface Props {
  data: {
    avatar: string,
    name: string,
    menu: any[]
  }
}
const { data } = defineProps<Props>()
</script>

<template>
  <div class="user-menu">
    <Avatar :img="data.avatar" />
    <Typography tagName="p" size="s">{{ data.name }}</Typography>
    <Button decoration="none">
      <template #leftIcon>
        <Icon type="user-menu" />
      </template>
    </Button>
  </div>
</template>

<style scoped>
.user-menu {
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 8px;
  cursor: pointer;
}
</style>