<template>
  <div class="page-container">
    <div class="page-content" v-loading="table.loading">
      <el-button @click="onAdd">新建</el-button>
      <el-table :data="table.data" border stripe>
        <el-table-column label="账号" prop="account" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="状态" prop="stateName" />
        <el-table-column label="更新时间" prop="updateAt" />
        <el-table-column label="创建时间" prop="createAt" />
      </el-table>
    </div>

    <UserEdit
      v-if="dialog.userEdit.show"
      @close="dialog.userEdit.show = false"
    />
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
import { list } from '@/api/user'
import UserEdit from '@/views/Account/User/dialog/UserEdit.vue'
const table = reactive({
  loading: false,
  data: []
})
const dialog = reactive({
  userEdit: {
    show: false
  }
})

onBeforeMount(() => {
  table.loading = true
  list({})
    .then((res) => {
      if (res.data && res.data.list && res.data.list.length > 0) {
        table.data = res.data.list
      } else {
        throw new Error('暂无数据')
      }
    })
    .catch(() => {
      table.data = []
    })
    .finally(() => {
      table.loading = false
    })
})

const onAdd = () => {
  dialog.userEdit.show = true
}
</script>

<style lang="scss"></style>
