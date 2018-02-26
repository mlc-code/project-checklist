'use strict'

export default {
  BACKEND: {
    url_base: 'http://localhost:3000',
    projects_api: {
      url_base: '/projects'
    }
  },
  FRONTEND: {
    checklist: {
      form: {
        priorities: [
          {name: 'High', id: 1},
          {name: 'Medium', id: 2},
          {name: 'Low', id: 3}
        ]
      },
      column_fields: [
        {
          name: 'name',
          sortField: 'name'
        },
        {
          name: 'metadata.projectTypes',
          title: 'projects associated',
          callback: 'projectLabels'
        },
        {
          name: '__slot:distributionCheckList',
          title: 'Checklist distribution',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          title: 'total elements',
          name: 'metadata',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'checkListTotalElements'
        },
        {
          name: '__slot:actions',
          title: 'Actions',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }
      ]
    },
    project: {
      checklist: {
        progress: {
          caution: 40,
          warning: 60,
          info: 90
        }
      },
      column_fields: [
        {
          name: 'name',
          sortField: 'name'
        },
        {
          name: 'type',
          sortField: 'type'
        },
        {
          name: 'language',
          sortField: 'language'
        },
        {
          name: '__slot:progressCheckList',
          title: 'Checklist',
          sortField: 'checklist',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'labels',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'projectLabels'
        },
        {
          name: '__slot:actions',
          title: 'Actions',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }
      ]
    }
  }
}
