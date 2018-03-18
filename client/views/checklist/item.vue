<template>
<div class="panel">
  <div class="panel-heading control is-horizontal ">
    <div class="block">
      <p class="left-align">Checklist single Item </p>
    </div>
    <div class="control"></div>
    <div class="right-align">
      <button class="delete" aria-label="delete"></button>
    </div>
  </div>
  <div class="panel-block ">
    <tabs type="boxed">
      <tab-pane label="General Data">
        <div class="control is-expanded">
          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input is-medium" type="text" placeholder="Title">
            </p>
            <p class="control is-expanded">
              <multiselect v-model="rawData.priority" deselect-label="Can't remove this value" track-by="id" label="name" placeholder="Select Priority" :options="priorityOptions" :searchable="false" :allow-empty="false"></multiselect>
            </p>
          </div>
          <textarea class="textarea" placeholder="Add description" rows="2"></textarea>
        </div>
      </tab-pane>
      <tab-pane label="Documentation">
        <input-links listTitle="Documentacion"></input-links>
      </tab-pane>
      <tab-pane label="Tools">
        <input-links listTitle="Tools"></input-links>
      </tab-pane>
    </tabs>
  </div>
</div>
</template>

<script>

import { Tabs, TabPane } from 'vue-bulma-tabs'
import config from '../../config.js'
import Multiselect from 'vue-multiselect'
import InputLinks from '../components/InputLinks'

export default {
  name: 'checklist-item',
  components: {
    Tabs,
    TabPane,
    Multiselect,
    'input-links': InputLinks
  },

  data () {
    return {
      rawData: {},
      priorityOptions: config.FRONTEND.checklist.form.priorities
    }
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

.tabs {
  margin: 20px;
  .tab-content {
    min-height: 50px;
  }
}

</style>
