import lazyLoading from './lazyLoading'

export default {
  name: 'Check List',
  path: '/CheckList',
  sidebarRouteTarget: '/CheckList/table',
  meta: {
    icon: 'fa-list',
    expanded: false
  },
  component: lazyLoading('checklist', true),

  children: [
    {
      name: 'Table',
      path: 'table',
      hideSidebarMenu: true,
      component: lazyLoading('checklist/table', false),
      meta: {
        link: 'checklist/table.vue'
      }
    },
    {
      name: 'New Checklist',
      path: 'new',
      hideSidebarMenu: true,
      component: lazyLoading('checklist/form', false),
      meta: {
        link: 'checklist/checklistForm.vue'
      }
    },
    {
      name: 'Checklist View',
      path: 'view',
      hideSidebarMenu: true,
      component: lazyLoading('checklist/form', false),
      meta: {
        link: 'checklist/checklistForm.vue'
      }
    }
  ]
}
