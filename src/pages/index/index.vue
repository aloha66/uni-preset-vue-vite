<script lang="ts">
// import Demo from '../../components/demo.vue'
export default {
  setup() {
    const visible = ref(false)
    watch(visible, () => {
      console.log('parent visible change')
    })

    return {
      visible,
    }
  },
  // components: { Demo },
}
</script>

<template>
  <view>
    <button @click="visible = true">sss</button>
    <demo v-model:visible="visible" />
  </view>
</template>
