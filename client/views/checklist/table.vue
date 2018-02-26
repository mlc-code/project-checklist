<template>
<div>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">Checklist</h4>
        <checklist-vuetable
          api-url="http://localhost:3000/checklist"
          :fields="fields"
          :sort-order="sortOrder"
          :append-params="moreParams"
          detail-row-component="checklist-detail-row"
        >
          <template slot="actions" slot-scope="props">
            <checklist-custom-row-action :elementName="'checklist'" :rowData="props.rowData" :rowIndex="props.rowIndex"></checklist-custom-row-action>
          </template>
          
          <template slot="distributionCheckList" slot-scope="props">
            <div class="column ">
              <checklist-distribution 
                :highPriority="props.rowData.metadata.highPriority" 
                :mediumPriority="props.rowData.metadata.mediumPriority" 
                :lowPriority="props.rowData.metadata.lowPriority" >
              </checklist-distribution>
            </div>
          </template>
        </checklist-vuetable>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import config from '../../config.js'
import Vue from 'vue'
import checklistTable from '../components/checklistTable'
import CheckListDetailRow from '../components/table/detailRow'
import ChartBarDistributionCheckList from '../components/table/chartRowDistribution'
import CustomRowActions from '../components/table/customRowActions'

Vue.component('checklist-detail-row', CheckListDetailRow)
Vue.component('checklist-custom-row-action', CustomRowActions)
Vue.component('checklist-distribution', ChartBarDistributionCheckList)

export default {
  components: {
    'checklist-vuetable': checklistTable
  },

  data () {
    return {
      fields: config.FRONTEND.checklist.column_fields,
      sortOrder: [
        {
          field: 'name',
          sortField: 'name',
          direction: 'asc'
        }
      ],
      moreParams: {
        elementName: 'checklist'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .styles-box .message-box {
//   margin-bottom: 20px;
// }
</style>
