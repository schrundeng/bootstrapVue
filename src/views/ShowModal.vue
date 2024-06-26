<script setup>
import modal_store from '../components/modal_store.vue'
import { useModalStatus } from '@/stores/modal_status'
const modal_status = useModalStatus()
const showModal = () => {
  modal_status.setModalStatus(true)
}
</script>
<template>
  <div>
    <button @click="showModal" class="btn btn-success">Show Modal</button>
    <modal_store title="modal coba"><div class="input-group mb-3">
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
              </div></modal_store>
  </div>
</template>
