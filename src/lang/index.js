import { createI18n } from 'vue-i18n'
import zh from './zh'
// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  allowComposition: false,
  locale: 'zh',
  messages: {
    zh
  }
})

export default i18n
