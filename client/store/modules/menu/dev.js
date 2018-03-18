import view from 'views/checklist/view'
export default {
  name: 'Checklist Item',
  path: '/CheckListItem',
  sidebarRouteTarget: '/CheckListItem',
  meta: {
    icon: 'fa-list',
    expanded: false
  },
  component: view
}
