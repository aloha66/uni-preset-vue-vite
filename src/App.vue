<script>
export default {
  data() {
    return {
      color: '#ee2f30',
    }
  },
  setup() {
    console.log(33333333333333)
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */

view,
button,
text {
  --primary-color: v-bind(color);
}

.color {
  color: v-bind(color);
}
</style>
