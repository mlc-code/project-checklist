<template>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="block">
            <h1 class="title is-1">{{ checkList.name }}</h1>
           
              <div class="columns is-gapless">
                <div class="column is-2 ">
                  <label class="label">Project types:</label>
                </div>
                <div class="column">
                  <div class="tags">
                    <span class="tag is-primary" v-for="item in checkList.metadata.projectTypes" >{{ item.name }} </span>
                  </div>
                </div>
              </div>
              <div class="columns is-gapless">
                <div class="column is-2 ">
                  <label class="label">Items distribution:</label>
                </div>
                <div class="column">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                    <div class="tags has-addons">
                      <span class="tag">higth items</span>
                      <span class="tag is-danger">10%</span>
                    </div>
                    </div>
                    <div class="control">
                    <div class="tags has-addons">
                      <span class="tag">normal items</span>
                      <span class="tag is-warning">10%</span>
                    </div>
                    </div>
                    <div class="control">
                    <div class="tags has-addons">
                      <span class="tag">low items</span>
                      <span class="tag is-success">10%</span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="panel-list">
              <div v-for="entry in checkList.checklist" :key="entry.title">
                  <div class="control">
                    <checklist-item-view v-bind:element="entry"></checklist-item-view>
                  </div>
              </div>
            </div>

          </div>
        </article>
      </div>
</template>

<script>

import checklistItemView from './itemView'

export default {
  components: {
    'checklist-item-view': checklistItemView
  },
  data () {
    return {
      // checkList: this.$route.params.checkList || {},
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
            'lang': 'javascript',
            'code': 'function prueba(){\n\t println\n}',
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
      }
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
