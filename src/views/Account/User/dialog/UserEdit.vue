<template>
  <AModal
    v-model:open="dialog.open"
    title="用户管理"
    width="600px"
    class="UserEditDialog"
    cancel-text="取消"
    ok-text="确定"
    :mask-closable="false"
    @cancel="onCancel"
    @ok="onSubmit"
  >
    <div class="UserEdit">
      <div class="UserEdit-FormContainer">
        <a-form
          class="UserEdit-Form"
          :model="form"
          :rules="formRules"
          :label-col="{ style: { width: '100px' } }"
        >
          <a-form-item label="账号" name="account">
            <a-input v-model="form.account"></a-input>
          </a-form-item>
          <a-form-item label="密码" name="passwd">
            <a-input
              v-model="form.passwd"
              type="password"
              show-password
            ></a-input>
          </a-form-item>
          <a-form-item label="名称" name="name">
            <a-input v-model="form.name"></a-input>
          </a-form-item>
          <a-form-item label="描述" name="description">
            <a-input v-model="form.description"></a-input>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </AModal>
</template>

<script setup>
import { ref } from 'vue'
import { save } from '@/api/user'

const emits = defineEmits(['close'])
const dialog = ref({
  open: true
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
