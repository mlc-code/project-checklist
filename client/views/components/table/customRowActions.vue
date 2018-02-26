<template>
  <div class="custom-actions">
    <button class="ui basic button is-primary is-outlined" @click="itemAction('view-item', rowData, rowIndex)">
        <i class="fa fa-eye icon"></i>
      </button>
    <button class="ui basic button is-warning is-outlined" @click="itemAction('edit-item', rowData, rowIndex)">
      <i class="fa fa-edit icon"></i>
    </button>
    <button class="ui basic button is-danger is-outlined" @click="itemAction('delete-item', rowData, rowIndex)">
      <i class="fa fa-times-circle icon"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      },
      elementName: {
        type: String,
        required: true
      }
    },
    methods: {
      itemAction (action, data, index) {
        console.log('custom-actions: ' + action, data.name, index)
        if (action === 'view-item') {
          this.$router.push({
            name: this.elementName + ' View',
            params: {
              checkList: data,
              titleForm: this.elementName,
              viewMode: true
            }
          })
        } else if (action === 'edit-item') {
          this.$router.push({
            name: this.elementName + ' Edit',
            params: {
              checkList: data,
              titleForm: this.elementName,
              viewMode: false
            }
          })
        }
      }
    }
  }
</script>

<style>
  .custom-actions button.ui.button {
    padding: 8px 8px;
  }
  
  .custom-actions button.ui.button>i.icon {
    margin: auto !important;
  }
</style>
