<template>
  <el-table :data="table.data">
    <el-table-column label="账号" prop="account" />
    <el-table-column label="名称" prop="name" />
    <el-table-column label="状态" prop="stateName" />
    <el-table-column label="更新时间" prop="updateAt" />
    <el-table-column label="创建时间" prop="createAt" />
  </el-table>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { list } from '@/api/user'

const table = reactive({
  data: []
})

onBeforeMount(() => {
  list({}).then((res) => {
    table.data = res.data.list
  })
})
</script>

<style lang="scss"></style>
