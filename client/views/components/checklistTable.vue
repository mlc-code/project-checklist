<script>
import Vue from 'vue'
import VueEvents from 'vue-events'
import {VuetablePagination, VuetablePaginationInfo} from 'vuetable-2'
import CustomRowActions from './table/customRowActions'
import CustomTableActions from './table/customTableActions'

Vue.use(VueEvents)
Vue.component('checklist-table-action', CustomTableActions)

export default {
  name: 'checklist-vuetable',
  components: {
    'vuetable-pagination': VuetablePagination,
    'vuetable-pagination-info': VuetablePaginationInfo,
    'custom-row-actions': CustomRowActions,
    'custom-table-actions': CustomTableActions
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    sortOrder: {
      type: Array,
      default () {
        return []
      }
    },
    appendParams: {
      type: Object,
      default () {
        return {}
      }
    },
    detailRowComponent: {
      type: String
    },
    configuration: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$events.$on('filter-reset', e => this.onFilterReset())
  },
  render (h) {
    return h(
      'div',
      {
        class: { container: true }
      },
      [
        h('checklist-table-action',
          {
            props: {
              elementName: 'checklist',
              addElementTitle: 'Add new check item',
              addElementAction: {name: 'New Checklist', params: {titleForm: 'New Checklist'}}
            }
          }
        ),
        this.renderVuetable(h),
        this.renderPagination(h)
      ]
    )
  },
  methods: {
    // render related functions
    renderVuetable (h) {
      return h(
        'vuetable',
        {
          ref: 'vuetable',
          class: { 'container': true },
          props: {
            apiUrl: this.apiUrl,
            fields: this.fields,
            paginationPath: 'links.pagination',
            perPage: 10,
            multiSort: true,
            sortOrder: this.sortOrder,
            appendParams: this.appendParams,
            detailRowComponent: this.detailRowComponent
          },
          on: {
            'vuetable:cell-clicked': this.onCellClicked,
            'vuetable:pagination-data': this.onPaginationData
          },
          scopedSlots: this.$vnode.data.scopedSlots
        }
      )
    },
    renderPagination (h) {
      return h(
        'div',
        { class: {'vuetable-pagination': true, 'container': true, 'basic': true, 'segment': true, 'grid': true} },
        [
          h('vuetable-pagination-info', { ref: 'paginationInfo' }),
          h('vuetable-pagination', {
            ref: 'pagination',
            on: {
              'vuetable-pagination:change-page': this.onChangePage
            }
          })
        ]
      )
    },
    // ------------------
    allcap (value) {
      return value.toUpperCase()
    },
    projectLabels (value) {
      console.info('labes' + value)
      let text = '<div>'
      for (let i = 0; i < value.length; i++) {
        text += '<span class="tag is-info">' + value[i] + '</span> '
      }
      text += '</div>'
      return text
    },
    checkListTotalElements (value) {
      console.info('checkList object' + value)
      let text = '<div>'
      text += value.highPriority + value.mediumPriority + value.lowPriority
      text += '</div>'
      return text
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData = paginationData
      this.$refs.paginationInfo.setPaginationData = paginationData
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      this.$refs.vuetable.toggleDetailRow(data.id)
    },
    onFilterSet (filterText) {
      this.appendParams.filter = filterText
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    onFilterReset () {
      delete this.appendParams.filter
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    }
  }
}
</script>

<style>
.label {
    color: white;
    padding: 8px;
}

.info {background-color: #2196F3;} /* Blue */
</style>
