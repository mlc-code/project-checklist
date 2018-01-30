<template>
<div>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child box">
        <h1 class="title">Controls</h1>
        <div class="block">
          <label class="label">Name</label>
          <p class="control field">
            <input class="input" type="text" placeholder="Text input">
          </p>
          <label class="label">Username</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small">
                <i class="fa fa-check"></i>
              </span>
            <span class="help is-success">This username is available</span>
          </p>
          <label class="label">Email</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
            <span class="icon is-small">
                <i class="fa fa-warning"></i>
              </span>
            <span class="help is-danger">This email is invalid</span>
          </p>
          <label class="label">Subject</label>
          <p class="control field">
            <span class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
          </p>
          <label class="label">Message</label>
          <p class="control field">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>
          <p class="control field">
            <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
          </p>
          <p class="control field">
            <label class="radio">
                <input type="radio" name="question">
                Yes
              </label>
            <label class="radio">
                <input type="radio" name="question">
                No
              </label>
          </p>
          <p class="control field">
            <button class="button is-primary">Submit</button>
            <button class="button is-link">Cancel</button>
          </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent is-5 is-vertical">
      <article class="tile is-child box">
        <h1 class="title">Colors</h1>
        <div class="block">
          <p class="control field">
            <input class="input is-primary" type="text" placeholder="Primary input">
          </p>
          <p class="control field">
            <input class="input is-info" type="text" placeholder="Info input">
          </p>
          <p class="control field">
            <input class="input is-success" type="text" placeholder="Success input">
          </p>
          <p class="control field">
            <input class="input is-warning" type="text" placeholder="Warning input">
          </p>
          <p class="control field">
            <input class="input is-danger" type="text" placeholder="Danger input">
          </p>
        </div>
      </article>
      <article class="tile is-child box">
        <h1 class="title">Sizes</h1>
        <div class="block">
          <p class="control field">
            <input class="input is-small" type="text" placeholder="Small input">
          </p>
          <p class="control field">
            <input class="input" type="text" placeholder="Normal input">
          </p>
          <p class="control field">
            <input class="input is-medium" type="text" placeholder="Medium input">
          </p>
          <p class="control field">
            <input class="input is-large" type="text" placeholder="Large input">
          </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">States</h1>
        <div class="block">
          <h2 class="subtitle">Loading</h2>
          <p class="control field is-loading">
            <input class="input" type="text" placeholder="Loading input">
          </p>
          <p class="control field is-loading">
            <textarea class="textarea" placeholder="Loading textarea"></textarea>
          </p>
        </div>
        <div class="block">
          <h2 class="subtitle">Disabled</h2>
          <p class="control field">
            <input class="input" type="text" placeholder="Disabled input" disabled>
          </p>
          <p class="control field">
            <textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>
          </p>
          <p class="control field">
            <label class="checkbox is-disabled">
                <input type="checkbox" disabled>
                Remember me
              </label>
          </p>
          <p class="control field">
            <label class="radio is-disabled">
                <input type="radio" name="question" disabled>
                Yes
              </label>
            <label class="radio is-disabled">
                <input type="radio" name="question" disabled>
                No
              </label>
          </p>
          <p class="control field">
            <button class="button is-primary" disabled>Submit</button>
            <button class="button" disabled>Cancel</button>
          </p>
        </div>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">

    <div class="tile is-parent is-3">
      <article class="tile is-child box">
        <h1 class="title">With Icon</h1>
        <h2 class="subtitle"><a href="http://fontawesome.io/">Font Awesome Icons</a></h2>
        <div class="block">
          <p class="control field has-icon">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small">
                <i class="fa fa-envelope"></i>
              </span>
          </p>
          <p class="control field has-icon">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small">
                <i class="fa fa-lock"></i>
              </span>
          </p>
          <p class="control field">
            <button class="button is-success">
                Login
              </button>
          </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Cleave.js</h1>
        <h2 class="subtitle">Format your &lt;input/&gt; content when you are typing</h2>
        <div class="columns">
          <div class="column">
            <div class="control field">
              <label class="label">Credit card number</label>
              <cleave class="input" placeholder="Enter credit card number" :options="{ creditCard: true }"></cleave>
            </div>
            <div class="control field">
              <label class="label">Phone number</label>
              <cleave class="input" type="tel" placeholder="Enter phone number" :options="{ phone: true, phoneRegionCode: 'cn' }"></cleave>
            </div>
            <div class="control field">
              <label class="label">Numeral</label>
              <cleave class="input" placeholder="Enter numeral" :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"></cleave>
            </div>
          </div>
          <div class="column">
            <div class="control field">
              <label class="label">Date</label>
              <cleave class="input" placeholder="YYYY/MM/DD" :value="'20160901'" :options="{ date: true, datePattern: ['Y', 'm', 'd'] }"></cleave>
            </div>
            <div class="control field">
              <cleave class="input" placeholder="MM/YY" :options="{ date: true, datePattern: ['m', 'y'] }"></cleave>
            </div>
            <div class="control field">
              <label class="label">Raw Value</label>
              <cleave class="input" v-model="demo.value" @rawValueChanged="onRawValueChanged" placeholder="Enter phone number" :options="{ blocks: [0, 3, 3, 4], numericOnly: true, delimiters: ['(', ') ', '-'], maxLength: 14 }">
              </cleave>
            </div>
          </div>
          <div class="column">
            <div class="control field">
              <label class="label">Custom options</label>
              <cleave class="input" placeholder="Blocks: [4, 3, 3, 4]" :options="{ blocks: [4, 3, 3, 4], uppercase: true }"></cleave>
            </div>
            <div class="control field">
              <cleave class="input" placeholder="Delimiter: '·'" :options="{ delimiter: '·', blocks: [3, 3, 3, 3], uppercase: true }"></cleave>
            </div>
            <div class="control field">
              <cleave class="input" :options="{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }"></cleave>
            </div>
          </div>
        </div>
      </article>
    </div>

  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Addons</h1>
        <div class="block">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
              <a class="button is-info">
      Search
    </a>
            </div>
          </div>
          <div class="field has-addons">
            <p class="control">
              <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button">
      Transfer
    </a>
            </p>
          </div>
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
            </p>
            <p class="control">
              <input class="input" type="text" placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button is-primary">
      Transfer
    </a>
            </p>
          </div>
          <div class="field has-addons has-addons-right">
            <p class="control">
              <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
            </p>
            <p class="control">
              <input class="input" type="text" placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button is-primary">
      Transfer
    </a>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Find a repository">
            </p>
            <p class="control">
              <a class="button is-info">
                Search
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h1 class="title">Horizontal form</h1>
        <div class="block">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">From</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Name">
                  <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
                  <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
                  <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
            +44
          </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" type="tel" placeholder="Your phone number">
                  </p>
                </div>
                <p class="help">Do not enter the first zero</p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Department</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Already a member?</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
          <input type="radio" name="member">
          Yes
        </label>
                  <label class="radio">
          <input type="radio" name="member">
          No
        </label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
                </div>
                <p class="help is-danger">
                  This field is required
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Question</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
          Send message
        </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

export default {
  components: {
    Cleave
  },

  data () {
    return {
      demo: {
        value: '',
        rawValue: ''
      }
    }
  },

  methods: {
    onRawValueChanged (newVal) {
      this.demo.rawValue = newVal
    }
  },

  watch: {
    'demo.value' (newVal, oldVal) {
      console.log('value: new ->', newVal, 'old ->', oldVal)
    },
    'demo.rawValue' (newVal, oldVal) {
      console.log('rawValue: new ->', newVal, 'old ->', oldVal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}

.control.has-addons {
  @include mobile() {
    input {
      width: 100%;
    }

    input.is-expanded {
      flex-shrink: 1;
    }
  }
}
</style>
