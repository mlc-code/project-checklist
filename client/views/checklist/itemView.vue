<template>
  <section class="accordions">
    <article class="accordion">
      <div class="accordion-header toggle ">
        <div class="left-align ">
          <flag-priority :priority='element.priority'></flag-priority>
          <span class="has-text-weight-bold">{{ element.title }}:</span>
          <span class="has-text-weight-light">{{ element.description }}</span>
        </div>
      </div>
      <div class="accordion-body">
        <div class="accordion-content content is-small">
          <div v-if="element.detail">{{element.detail}}</div>
          <div v-if="element.code" >
            <code-example :code="element.code" :lang="element.lang"></code-example>
          </div> 
          <div v-if="element.documentation">
            <h2>Documentation</h2>
            <ul v-for="item in element.documentation">
              <li><a :href="item.url" class="has-text-info">{{item.title}}</a></li>
            </ul>
          </div>
          <div v-if="element.tools">
            <h2>Tools</h2>
            <ul v-for="item in element.tools">
              <li><a :href="item.url" class="has-text-info">{{item.title}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>

import { Tabs, TabPane } from 'vue-bulma-tabs'
import config from '../../config.js'
import Multiselect from 'vue-multiselect'
import InputLinks from '../components/InputLinks'
import BulmaAccordion from 'bulma-accordion.js'
import FlagPriority from '../components/flagPriority'
import CodeExample from '../components/codeExample'

export default {
  name: 'checklist-item',
  components: {
    Tabs,
    TabPane,
    Multiselect,
    'input-links': InputLinks,
    BulmaAccordion,
    FlagPriority,
    CodeExample
  },
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rawData: {},
      priorityOptions: config.FRONTEND.checklist.form.priorities,
      codeExample: ' print l;'
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

.accordions .accordion .accordion-header {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	background-color: #e1e1e1;
	border-radius: 3px 3px 0 0;
	color: #000;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	line-height: 1.25;
	padding: .5em .75em;
	position: relative;
}


</style>
