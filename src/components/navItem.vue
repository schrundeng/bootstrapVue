<script>    
import { RouterLink, RouterView } from 'vue-router'
export default {
  props: {
    kelas: {
      type: String,
      required: true
    },
    link:{},
    tabel:{}
  }
}
</script>

<template>
  <li class="nav-item">
    <a :class="kelas" :href="`${link}`">Galeri</a>
  </li>
</template>
