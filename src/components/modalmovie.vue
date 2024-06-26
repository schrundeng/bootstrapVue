<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modalTemplate',
  props: ['title']
}
</script>

<!-- <script setup>
const props = defineProps({
  show: Boolean
})

const simpan = async () => {
  const formData = new FormData()
  formData.append('title', state.title)
  formData.append('overview', state.overview)
  formData.append('voteaverage', state.voteaverage)
  formData.append('posterpath', state.posterpath)
  let simpan = await insertMovie(formData)

  if (simpan.data.status == true) {
    modal_status.setModalStatus(false)
    getMovie()
  } else {
    let data = Object.values(simpan.data)
    alert(data.join('\n'))
  }
}
</script>

<template>
  <Transition @submit.prevent="simpan">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Kritik dan Saran:</slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <form action="">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Judul</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Deskripsi</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Rating</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Poster</label>
                <input type="file" class="form-control" id="inputGroupFile01" />
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <button
                    type="submit"
                    class="modal-default-button"
                  >
                    Kirim!
                  </button>
                </slot>
              </div>
            </form>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template> -->

<!-- <style>
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      transition: opacity 0.3s ease;
    }

    .modal-container {
      width: 400px;
      margin: auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
    }

    .modal-header h3 {
      margin-top: 0;
      color: #42b983;
    }

    .modal-body {
      margin: 20px 0;
    }

    .modal-default-button {
      float: right;
    }

    /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

    .modal-enter-from {
      opacity: 0;
    }

    .modal-leave-to {
      opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  </style>
</template> -->
