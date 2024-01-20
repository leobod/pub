<template>
  <el-dialog
    v-model="dialog.show"
    title="用户管理"
    width="600px"
    class="UserEditDialog"
    @close="onClose"
  >
    <div class="UserEdit">
      <div class="UserEdit-FormContainer">
        <el-form
          class="UserEdit-Form"
          :model="form"
          :rules="formRules"
          label-width="100px"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passwd">
            <el-input
              v-model="form.passwd"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="UserEdit-BtnGroup">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
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
  account: '',
  passwd: '',
  name: '',
  description: ''
})
const formRules = ref({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  passwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const onCancel = () => {
  emits('close', null)
}
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

<style lang="scss" scoped>
.UserEdit {
  .UserEdit-BtnGroup {
    padding: 10px 0;
    text-align: right;
  }
}
</style>
