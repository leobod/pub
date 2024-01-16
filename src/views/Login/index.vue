<template>
  <div>
    <el-form>
      <el-form-item label="账户">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.passwd" />
      </el-form-item>
      <div>
        <el-button @click="onSubmit">提交</el-button>
        <el-button @click="onGoto">跳转</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/login'
import { setKey, setVal } from '@/utils/auth'

const $router = useRouter()

const form = ref({
  account: '',
  passwd: ''
})

const onSubmit = () => {
  const finalParams = Object.assign({}, form.value)
  finalParams.passwd = btoa(finalParams.passwd)
  login(finalParams).then((res) => {
    const { code, token } = res.data
    setKey(code)
    setVal(token)
    $router.push({
      path: '/'
    })
    console.log(res)
  })
}

const onGoto = () => {
  $router.push({
    path: '/Home'
  })
}
</script>

<style lang="scss"></style>
