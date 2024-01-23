import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type CatalogSection, type CatalogStore } from './type'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = reactive<CatalogStore>({
    sections: [
      { label: 'Молоко, сыр, яйцо', link: '/section' },
      { label: 'Напитки', link: '/section' },
      { label: 'Бакалея', link: '/section' },
      { label: 'Непродовольственные товары', link: '/section' },
      { label: 'Хлеб', link: '/section' },
      { label: 'Кондитерские изделия', link: '/section' },
      { label: 'Здоровое питание', link: '/section' },
      { label: 'Детское питание', link: '/section' },
      { label: 'Фрукты и овощи', link: '/section' },
      { label: 'Чай, кофе', link: '/section' },
      { label: 'Зоотовары', link: '/section' },
      { label: 'Мясо, птица, колбаса', link: '/section' },
      { label: 'Замороженные продукты', link: '/section' },
    ]
  })
  const getCatalogStore = computed(() => catalog.sections)
  const setCatalogSections = (value: CatalogSection[]) => catalog.sections = value

  return { setCatalogSections, getCatalogStore }
})
