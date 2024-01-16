<template>
  <div>Home</div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { list } from '@/api/user'

const table = reactive({
  data: []
})

onBeforeMount(() => {
  list({}).then((res) => {
    table.data = res.data
  })
})
</script>

<style lang="scss"></style>
