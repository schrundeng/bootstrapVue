<!-- <template>
  <div class="modal fade" id="alert" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ message }}
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
  name: 'modal',
  props: ['title', 'message']
}
</script> -->

<!-- <script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Kritik dan Saran:</slot>
        </div>

        <div class="modal-body">
          <slot name="body"
            >Kritik dan Saran:
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Apa yang dapat ditingkatkan?"
                aria-label="Search"
              />
            </form>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button, btn btn-outline-success" @click="$emit('close')">
              Kirim!
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
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

</style> -->

<script setup>
import { useModalStatus } from '@/stores/modal_status'
const modal_status = useModalStatus()
const props = defineProps({
  title: String,
});
  </script>
<template>
    <div>
      <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': modal_status.getModalStatus }">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ title }}</h5>
              <button type="button" class="btn-close" @click="modal_status.setModalStatus (false)"></button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="modal_status.setModalStatus(false)">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
