<template>
    <div class="block">
      <div class="control is-horizontal is-expanded">
        <div class="control">Title</div>
        <div class="control">Url</div>
      </div>
      <div v-for="entry in entries">
        <div class="control is-horizontal is-expanded">
          <div class="control"> {{ entry.title }} </div>
          <div class="control"> {{ entry.url }} </div>
          <a class="button is-danger is-outlined" v-on:click="removeEntry($index)">
            <span class="icon is-small">
              <i class="fa fa-remove"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="control is-horizontal is-expanded">
        <input class="input" type="text" v-model="title" v-on:keyup.enter="addEntry" placeholder="Title">
        <input class="input" type="text" v-model="url" v-on:keyup.enter="addEntry" placeholder="URL">
        <a class="button is-primary is-outlined" v-on:click="addEntry()">
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    listTitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: '',
      url: '',
      entries: []
    }
  },
  methods: {
    addEntry () {
      var title = this.title.trim()
      var url = this.url.trim()
      this.entries.push({
        title: title,
        url: url
      })
      this.title = ''
      this.url = ''
    },
    removeEntry (index) {
      this.entries.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
