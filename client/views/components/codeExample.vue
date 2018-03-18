<template>
  <div class="bd-snippet">
    <a class="button is-small bd-copy" 
      v-clipboard:copy="code"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
        <span class="icon is-small">
          <i class="fa fa-copy"></i>
        </span>
      </a>
      <code  v-bind:class="classObject" style="white-space:pre-wrap; ">{{ code }}</code>
  </div>
</template>

<script>

export default {
  name: 'code-example',

  props: {
    code: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    classObject: function () {
      let className = 'language-' + this.lang
      return className
    }
  },
  methods: {
    newItem () {},
    onCopy: function (e) {
      this.alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      this.alert('Failed to copy texts')
    }
  }
}
</script>

<style lang="scss" scoped>

.bd-snippet:before {
  background: #5770ff;
  border-radius: 3px 3px 0 0;
  bottom: 100%;
  color: rgba(0, 0, 0, 0.7);
  content: "Code";
  display: inline-block;
  font-size: 7px;
  font-weight: bold;
  left: -1px;
  letter-spacing: 1px;
  padding: 4px 5px;
  position: absolute;
  text-transform: uppercase;
  vertical-align: top;
}

@media screen and (min-width: 769px), print {
  .bd-snippet.is-fullwidth {
    border-left: none;
    border-right: none;
    padding: 0;
  }
}

.bd-snippet {
  border: 1px solid #5770ff;
  margin-top: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.bd-copy {
  background: none;
  border: none;
  color: #4a4a4a;
  cursor: pointer;
  font-size: 0.625rem;
  outline: none;
  padding-bottom: 0;
  padding-top: 0;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
}

.bd-copy:hover {
  background-color: #5770ff;
  color: rgba(0, 0, 0, 0.7);
}

.bd-copy:focus, .bd-copy:active {
  -webkit-box-shadow: none;
          box-shadow: none;
}

</style>
