<script lang="ts" setup>
  import { Header } from '@/widgets/header'
  import { Footer } from '@/widgets/footer'
  import { BottomTabNavigator } from '@/widgets/bottom-tab-navigator'
  import { Content } from '@/shared/content'


</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content />
  <Footer />
</template>