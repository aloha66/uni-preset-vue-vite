<script lang="ts">
export default defineComponent({
  name: 'testDemo',
  props: {
    visible: Boolean,
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    console.log('grandson props', props)

    watch(
      () => props.visible,
      (val) => {
        console.log('grandson trigger')
      }
    )

    return {}
  },
})
</script>
<template>
  <view>{{ visible }} </view>
</template>
