<template>
  <transition name="modal" @after-enter="afterEnter">
    <div
      class="ls-modal"
      :class="{ 'ls-animated': hasAnimate }"
      v-if="isVisible"
      role="dialog"
      tabindex="-1"
      aria-live="assertive"
      @keyup.esc="close"
      >
      <div :class="styleClass" class="ls-modal-box">
        <div class="ls-modal-header">
          <button aria-label="Fechar Modal" data-dismiss="modal" @click="close">&times;</button>
          <h4 class="ls-modal-title">{{title}}</h4>
        </div>
        <div class="ls-modal-body">
          <slot></slot>
        </div>
        <div class="ls-modal-footer" v-if="hasFooter">
          <button type="submit" @click.enter="send" class="ls-btn-primary">{{labelSend}}</button>
          <button class="ls-btn" @click="close">{{labelClose}}</button>
        </div>
        <input type="checkbox" class="hide-access" @focus="forceFocus">
      </div>
    </div>
  </transition>
</template>

<style lang="sass">
  @import '../styles/dependencies/config'
  @import '../styles/dependencies/button'

  $defaultWidth: 600px
  $largeWidth: 850px
  $smallWidth: 450px
  $paddingDefault: 20px

  .ls-modal-opened
    overflow: hidden

  .ls-animated
    &.modal-enter,
    &.modal-leave-active
      opacity: 0

    &.modal-enter .ls-modal-box,
    &.modal-leave-active .ls-modal-box
      transform: scale(1.15)

    .ls-modal-box
      transition: all .3s ease

  .hide-access
    position: absolute
    top: -1000px
    height: 0
    width: 0
    opacity: 0
    visible: hidden

  .ls-modal
    transform: scale(1)
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    text-align: center
    overflow: auto
    overflow-y: scroll
    z-index: 16
    backface-visibility: hidden
    background: rgba(0, 0, 0, 0.8)

    &.ls-opened
      display: block

    &.popover
      .ls-modal-footer
        display: none

    .ls-btn-primary
      float: right


  .ls-modal-box
    display: inline-block
    width: 90%
    margin: 5% auto 0
    text-align: left
    background-color: #fff
    border-radius: $default-radius
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7)

  .ls-modal-large,
  .ls-modal-small
    @extend .ls-modal-box

  [data-modal-blocked]
    [data-dismiss]
      display: none

  .ls-modal-header
    padding: $paddingDefault
    border-bottom: 1px solid $gray1
    position: relative

    [data-dismiss]
      position: absolute
      right: 20px
      top: 14px
      border: none
      background: none
      color: #212121
      text-align: center
      font-size: 24px
      font-weight: bold
      cursor: pointer
      opacity: .3

      &:hover,
      &:focus,
      &:active
        opacity: 1

    .ls-modal-title
      padding: 0
      margin: 0
      font-size: remtopx(1)
      width: calc(100% - 20px)

  .ls-modal-body
    padding: $paddingDefault

    p
      margin-bottom: 10px

  .ls-modal-footer
    padding: $paddingDefault
    border-top: 1px solid $gray1

  .ls-modal-feedbackr
    .ls-modal-box
      width: 627px
      height: 600px

      .ls-modal-header
        padding: 0
        border: none

        [data-dismiss]
          top: 0px
          right: 3px

      .ls-modal-body
        width: 100%
        height: 600px

  @media screen and (min-width: $screen-sm)
    .ls-modal-box
      width: $defaultWidth
      margin: 10% 20px 0

    .ls-modal-large
      width: $largeWidth

    .ls-modal-small
      width: $smallWidth


</style>

<script>
  export default {
    name: 'Modal',
    description: 'Caixa de diálogo que recebe exibem textos e eventos de callback em suas ações ao abrir/fechar e na interação com o botão de envio.',
    token: '<modal :visible="true" :animate="true" :title="variavel">Conteúdo do Modal</modal>',
    props: {
      visible: {
        type: Boolean,
        default: false,
        required: true,
        note: 'É obrigatório, quando true exibe o modal e dispara evento modal-opened, quando falso esconde o modal e dispara o evento modal-closed'
      },
      footer: {
        type: Boolean,
        default: true,
        note: 'É opcional, quando falso remove o footer'
      },
      animate: {
        type: Boolean,
        default: false,
        note: 'É opcional, quando true adiciona uma animação ao exibir componente'
      },
      full: {
        type: Boolean,
        default: false,
        note: 'É opcional e quando true o componente é criado como filho direto do body'
      },
      title: {
        type: String,
        default: '',
        note: 'É opcional, e exibe o título do modal'
      },
      type: {
        type: String,
        default: '',
        note: 'É opcional e recebe 2 valores são eles: small (exibe o componente menor) e large (exibe o componente maior)'
      },
      labelClose: {
        type: String,
        default: 'Cancelar',
        note: 'É opcional, define o texto do botão de ação secundária do footer'
      },
      labelSend: {
        type: String,
        default: 'Salvar',
        note: 'É opcional, define o texto do botão de ação primária do footer'
      }
    },
    data () {
      return {
        isVisible: this.visible,
        hasFooter: this.footer,
        hasAnimate: this.animate
      }
    },
    methods: {
      close () {
        this.$emit('modal-closed', true)
        this.isVisible = false
      },
      afterEnter (el) {
        this.$emit('modal-opened', true)
        el.focus()
      },
      forceFocus () {
        this.$el.focus()
      },
      appendBody () {
        window.document.body.appendChild(this.$el)
      },
      send () {
        this.$emit('modal-send', true)
      }
    },
    watch: {
      visible (value) {
        this.isVisible = value
        let bodyClass = document.body.classList
        value ? bodyClass.add('ls-modal-opened') : bodyClass.remove('ls-modal-opened')
      }
    },
    computed: {
      styleClass () {
        switch (this.type) {
          case 'small': { return 'ls-modal-small' }
          case 'large': { return 'ls-modal-large' }
          default: { return 'ls-modal-box' }
        }
      }
    },
    mounted () {
      this.full && this.appendBody()
    }
  }
</script>
