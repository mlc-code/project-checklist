<template>
  <div class="panel ">
    <div class="columns ">
      <div class="block">
        <div class="grid control is-grouped right-align">
          <h class="title">Chek list items</h>
        </div>
      </div>
      <div class="column"></div>
      <div class="block">
        <div class="grid control left-align">
          <button class="ui button is-info" @click="newItem">New Item</button>
        </div>
      </div>
    </div>
    <div class="panel-list">
      <div v-for="entry in entries">
          <div class="control">
            <checklist-item-form></checklist-item-form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import checklistItem from './item'

export default {
  name: 'checklist-item',
  components: {
    'checklist-item-form': checklistItem
  },

  data () {
    return { }
  },

  methods: {
    newItem () {}
  }
}
</script>

<style lang="scss" scoped>

.label{
  color: black
}


.control:not(:last-child) {
	margin-bottom: 0rem; 
}
</style>
