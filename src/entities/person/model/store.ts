import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type Person } from './type'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true)
  const person = reactive<Person>({
    name: "Алексей"
  })
  const setIsAuth = (value: boolean) => isAuth.value = value

  return { isAuth, person, setIsAuth }
})
