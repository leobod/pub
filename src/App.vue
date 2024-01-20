<template>
  <ConfigProvider :locale="locale" :theme="themeConfig">
    <RouterView></RouterView>
  </ConfigProvider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ConfigProvider } from 'ant-design-vue'

const locale = ref()
const themeConfig = computed(() =>
  Object.assign(
    {
      token: {
        colorPrimary: '#0960bd',
        colorSuccess: '#55D187',
        colorWarning: '#EFBD47',
        colorError: '#ED6F6F',
        colorInfo: '#0960bd'
      }
    },
    {}
  )
)
</script>
<style></style>
