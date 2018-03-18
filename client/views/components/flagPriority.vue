<template>
  <span>
    <span v-if="priority=='High'" class="icon has-text-danger">
      <i class="fa fa-flag"></i>
    </span>
    <span v-if="priority=='Medium'" class="icon has-text-warning">
      <i class="fa fa-flag"></i>
    </span>
    <span v-if="priority=='Low'" class="icon has-text-success">
      <i class="fa fa-flag"></i>
    </span>
  </span>
</template>

<script>

export default {
  name: 'flag-priority',
  props: {
    priority: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
