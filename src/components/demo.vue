<script lang="ts">
import TestDemo from './demo2.vue'
export default defineComponent({
  props: {
    visible: Boolean,
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    console.log('props', props)
    const visible = ref(false)

    watch(
      () => props.visible,
      (val) => {
        visible.value = val
        emit('update:visible', val)
        console.log('trigger')
      }
    )

    return {
      visible,
    }
  },
  components: {
    TestDemo,
  },
})
</script>
<template>
  <view>
    <TestDemo v-model:visible="visible" />
  </view>
</template>
