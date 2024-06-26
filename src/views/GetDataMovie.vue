<script setup>
import { insertMovie, updateMovie, hapusMovie } from '../httpService'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import Modal from '../components/modal_store.vue'
import { useModalStatus } from '@/stores/modal_status'

onMounted(() => {
  getMovie()
})
const getMovie = async () => {
  let movie = await axios.get('https://movie.tukanginyuk.com/api/getmovie')
  state.dataMovie = movie.data
  console.log(movie)
}
const state = reactive({
  dataMovie: []
})

const modal_status = useModalStatus()
const showModal = () => {
  modal_status.setModalStatus(true)
}

const simpanUbah = async () => {
  const formData = new FormData()
  formData.append('title', state.title)
  formData.append('overview', state.overview)
  formData.append('voteaverage', state.voteaverage)
  formData.append('posterpath', state.posterpath)
  let update = await updateMovie(formData, state.id)
  if (update.data.status == true) {
    modal_status.setModalStatus(false)
    getMovie()
  } else {
    let data = Object.values(update.data)
    alert(data.join('\n'))
  }
}

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

  const state = reactive({
    dataMovie: [],
    modal_title: '',
    title: '',
    overview: '',
    voteaverage: '',
    posterpath: null,
    id: ''
  })

  const modal_status = useModalStatus()
  const showModal = () => {
    state.modal_title = 'Tambah Movie'
    state.id = ''
    state.title = ''
    state.overview = ''
    state.voteaverage = ''
    state.posterpath = null
    modal_status.setModalStatus(true)
  }
}
const addFile = (e) => {
  state.posterpath = e.target.files[0]
}
const showModalUbah = (item) => {
  state.modal_title = 'Ubah Movie'
  state.id = item.id
  state.title = item.title
  state.overview = item.overview
  state.voteaverage = item.voteaverage
  state.posterpath = null
  modal_status.setModalStatus(true)
}

const hapus = async (id) => {
  if (confirm('Apakah anda yakin?')) {
    let hapus = await hapusMovie(id)
    if (hapus.data.status == true) {
      getMovie()
    } else {
      alert(hapus.data.message)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div>
        <button @click="showModal" class="btn btn-success mb-4">Tambah Movie</button>
      </div>
      <Modal title="Tambah Movie"> </Modal>

      <Modal :title="state.modal_title">
        <form @submit.prevent="state.id == '' ? simpan() : simpanUbah()">
          <div class="input-group mb-3">
            <span class="input-group-text">Title</span>
            <input type="text" aria-label="Title" class="form-control" v-model="state.title" />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text">Overview</span>
            <input
              type="text"
              aria-label="Overview"
              class="form-control"
              v-model="state.overview"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text">Vote Average</span>
            <input
              type="text"
              aria-label="Vote Average"
              class="form-control"
              v-model="state.voteaverage"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text">Upload Poster</span>
            <input type="file" aria-label="Poster" class="form-control" @change="addFile" />
          </div>
          <div class="input-group">
            <input type="submit" value="Tambah" class="btn btn-warning" />
          </div>
        </form>
      </Modal>

      <div class="col-md-3" v-for="(movie, index) in state.dataMovie.data" :key="index">
        <div class="card" style="width: 100%">
          <img :src="movie.posterpath" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
            <div class="alert alert-success p-2" style="margin-bottom: 10px !important">
              {{ movie.voteaverage }}
            </div>
            <a href="#" @click="showModalUbah(movie)" class="btn btn-warning">Edit</a>
            <a href="#" @click="hapus(movie.id)" class="btn btn-danger">Hapus</a>
            <a href="#" class="btn btn-primary" style="width: 100%">Pesan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
