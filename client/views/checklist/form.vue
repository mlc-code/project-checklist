<template>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="block">
            <h1 class="title is-1">{{ checkList.name }}</h1>
           
              <div class="columns is-gapless is-3">
                <div class="column is-1 ">
                  <label class="label">Project types:</label>
                </div>
                <div class="column">
                  <div class="tags">
                    <span class="tag is-primary" v-for="item in checkList.metadata.projectTypes" >{{ item.name }} </span>
                  </div>
                </div>
              </div>
            <checklist-item></checklist-item>

            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label"></label>
              </div>
              <div class="control">
                <button class="button is-primary">Submit</button>
                <button class="button is-link">Cancel</button>
              </div>
            </div>
          </div>
        </article>
      </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import checklistItemList from './itemList'

export default {
  components: {
    Multiselect,
    'checklist-item': checklistItemList
  },
  data () {
    return {
      // titleForm: this.$route.params.titleForm,
      // operation: this.$route.name,
      // viewMode: this.$route.viewMode,
      // checkList: this.$route.params.checkList || {},
      titleForm: 'ejemplo',
      operation: 'view-item',
      viewMode: true,
      checkList: {
        'id': 2,
        'name': 'webfont',
        'metadata': {
          'highPriority': 2,
          'mediumPriority': 0,
          'lowPriority': 1,
          'projectTypes': [{ name: 'war', code: 'vu' }, { name: 'war', code: 'vu' }]
        },
        'checklist': [
          {
            'title': 'Webfont format',
            'priority': 'High',
            'description': 'WOFF, WOFF2 and TTF are supported by all modern browsers.',
            'documentation': [{
              'title': 'WOFF - Web Open Font Format - Caniuse',
              'url': 'https://caniuse.com/#feat=woff'
            },
            {
              'title': 'WOFF 2.0 - Web Open Font Format - Caniuse',
              'url': 'https://caniuse.com/#feat=woff2'
            },
            {
              'title': 'TTF/OTF - TrueType and OpenType font support',
              'url': 'https://caniuse.com/#feat=ttf'
            },
            {
              'title': 'Using @font-face - CSS-Tricks',
              'url': 'https://css-tricks.com/snippets/css/using-font-face/'
            }
            ],
            'tags': ['all', 'webfont']
          },
          {
            'title': 'Webfont size',
            'priority': 'High',
            'description': 'Webfont sizes don\'t exceed 2 MB (all variants included).',
            'tags': ['all', 'webfont']
          },
          {
            'title': 'Webfont loader',
            'priority': 'Low',
            'description': 'Control loading behavior with a webfont loader.',
            'documentation': [{
              'title': 'Typekit Web Font Loader',
              'url': 'https://github.com/typekit/webfontloader'
            }],
            'tags': ['all', 'webfont']
          }
        ]
      },
      projectList: [
        { name: 'war', code: 'vu' },
        { name: 'jar', code: 'js' },
        { name: 'web', code: 'web' },
        { name: 'java', code: 'os' }
      ]
    }
  },
  methods: {
    created () {
      console.log('route', this.$router.params)
    },
    submit (action, data, index) {
      console.log('custom-actions: ' + action, data.name, index)
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  },
  watch: {
    $route (route) {
      console.info('=====================')
      console.info(route)
    }
  }
}
</script>

<style lang="scss" scoped>

.label{
  color: black
}

</style>
