<template>
  <div class="doc" >
    <prop-doc :component="ModalDoc"></prop-doc>
    <h2 class="subtitle">Eventos</h2>
    <p>Esses eventos servem pra chamar outros métodos de callback, oferecendo um maior controle de interação do usuário com o componente</p>
    <table class="doc-table">
      <thead>
        <tr>
          <th>Eventos</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>@modal-opened</td>
          <td>É disparado quando o componente é aberto</td>
        </tr>
        <tr>
          <td>@modal-closed</td>
          <td>É disparado quando o componente é fechado</td>
        </tr>
        <tr>
          <td>@modal-send</td>
          <td>É disparado quando o usuário interage com o botão primário do footer</td>
        </tr>
      </tbody>
    </table>
    <h2 class="subtitle">Usabilidade e acessibilidade</h2>
    <p>O componente quando aberto mantém o foco do teclado somente nele. É possível fechar usando a tecla <code>ESC</code></p>
    <div class="demo">
      <p class="">Chamando o componente</p>
      <button @click="showModal" class="ls-btn-primary">Chamar modal</button>
      <lw-modal
        :visible="isVisible"
        :animate="true"
        :title="title"
        :labelClose="txtClose"
        :labelSend="txtSend"
        @modal-closed="hideModal"
        @modal-send="sendModal"
        >
        Conteúdo do modal
      </lw-modal>
      <hr>
      <p class="">Aplicando a prop <code>:footer="false"</code></p>
      <button @click="showModal2" class="ls-btn-primary">Modal sem footer</button>
      <lw-modal
        :visible="isVisible2"
        :footer="false"
        :animate="true"
        :title="title2"
        :labelClose="txtClose"
        :labelSend="txtSend"
        @modal-closed="hideModal"
        @modal-send="sendModal"
        >
        Conteúdo do modal
      </lw-modal>
    </div>
  </div>
</template>

<script>
  import propDoc from 'propdoc'
  import LwModal from '../components/LwModal'

  export default {
    name: 'doc-modal',
    components: { propDoc, LwModal },
    data () {
      return {
        ModalDoc: LwModal,
        isVisible: false,
        isVisible2: false,
        title: 'Meu título do modal',
        title2: 'Modal sem footer',
        txtClose: 'Fechar',
        txtSend: 'Enviar'
      }
    },
    methods: {
      showModal () {
        this.isVisible = true
      },
      showModal2 () {
        this.isVisible2 = true
      },
      hideModal () {
        this.isVisible = false
        this.isVisible2 = false
      },
      sendModal () {
        this.isVisible = false
      }
    }
  }
</script>


