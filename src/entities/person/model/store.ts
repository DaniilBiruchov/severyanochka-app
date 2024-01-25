import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Person } from './type'
import avatar from '@/assets/avatar.png'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true)
  const person = reactive<Person>({
    name: "Алексей",
    avatar: avatar,
  })
  const setIsAuth = (value: boolean) => isAuth.value = value

  return { isAuth, person, setIsAuth }
})
