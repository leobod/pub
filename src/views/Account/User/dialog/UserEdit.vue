<template>
  <el-dialog v-model="dialog.show" title="用户管理" @close="onClose">
    <div>
      <div class="UserEdit-FormContainer">
        <el-form class="UserEdit-Form" :model="form">
          <el-form-item label="账号" prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passwd">
            <el-input v-model="form.passwd"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button @click="onSubmit">提交</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { save } from '@/api/user'

const emits = defineEmits(['close'])
const dialog = ref({
  show: true
})
const form = ref({
  code: '',
  account: ''
})

const onClose = () => {
  emits('close', null)
}

const onSubmit = () => {
  const finalParams = { ...form.value }
  save(finalParams).then((res) => {
    console.log(res)
  })
}
</script>
