<template>
  <div class="columns is-mobile">
    <div class="block">
      <div class="field has-addons right-align">
          <button class="ui button is-success" @click="addElement">Add {{ elementName }}</button>
      </div>
    </div>
    <div class="column">
    </div>
    <div class="block">
      <div class="field has-addons">
          <div class="control">
            <input type="text" v-model="filterText" class="input" @keyup.enter="doFilter" placeholder="name, label...">
          </div>
          <div class="control">
            <button class="ui button is-success" @click="doFilter">Search</button>
          </div>
          <div class="control">
            <button class="ui button is-info " @click="resetFilter">Reset</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementName: {
      type: String,
      required: true
    },
    addElementTitle: {
      type: String,
      required: true
    },
    addElementAction: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
    addElement () {
      console.log('Add new element: ' + this.elementName)
      this.$router.push(this.addElementAction)
    },
    doFilter () {
      console.log('filtering element: ' + this.elementName)
      this.$events.fire('filter-set', this.filterText)
    },
    resetFilter () {
      console.log('reset filter of element: ' + this.elementName)
      this.filterText = ''
      this.$events.fire('filter-reset')
    }
  }
}
</script>
