<script setup>
import { RouterView } from 'vue-router'
// import modal from './components/modal.vue'
// let myModal
// onMounted(() => {
//   myModal = new bootstrap.Modal(document.getElementById('alert'))
// })
// const popupShow = () => {
//   myModal.show()
// }

import Modal from '../src/components/modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <!-- <button @click="popupShow">tampil modal</button>
  <modal title="hello" message="tes"></modal> -->

  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Nganu</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Beranda</a>
            </li>
            <navItem kelas="nav-link" link="/about" label="Beranda"></navItem>
            <li class="nav-item">
              <a class="nav-link" href="/gallery">Galeri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">Tentang</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Kontak</a>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/getdatamovie">Get Data Movie</RouterLink>
            </li>
          </ul>
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Cari..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Cari!</button>
          </form> -->
        </div>
        <button class="btn btn-outline-success" id="show-modal" @click="showModal = true">
          Masukan
        </button>

        <Teleport to="body">
          <!-- use the modal component, pass in the prop -->
          <modal :show="showModal" @close="showModal = false">
            <template #header>
              <h3>Masukan</h3>
            </template>
          </modal>
        </Teleport>
      </div>
    </nav>
    <!--     
    <div class="row">
      <div class="col-12">
        <img src="../src/assets/genteng.jpg" class="img-fluid" alt="..." />
      </div>
    </div> -->
    <br />
    <!-- <div class="row">
      <div class="col-3">
        <div class="card" style="width: 100%">
          <img src="../src/assets/awan.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Awan Sore</h5>
            <p class="card-text">Langit pada hari sore jam 5</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1/160s</li>
            <li class="list-group-item">ISO 40</li>
            <li class="list-group-item">f/2.4</li>
          </ul>
        </div>
      </div>
      <div class="col-3">
        <div class="card" style="width: 100%">
          <img src="../src/assets/awan2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Awan Sore</h5>
            <p class="card-text">Langit pada hari sore jam 4</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1/64s</li>
            <li class="list-group-item">ISO 320</li>
            <li class="list-group-item">f/2.4</li>
          </ul>
        </div>
      </div>
      <div class="col-3">
        <div class="card" style="width: 100%">
          <img src="../src/assets/awan3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Awan Sore</h5>
            <p class="card-text">Langit pada hari sore jam 6</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1/125s</li>
            <li class="list-group-item">ISO 40</li>
            <li class="list-group-item">f/2.4</li>
          </ul>
        </div>
      </div>
      <div class="col-3">
        <div class="card" style="width: 100%">
          <img src="../src/assets/bulan.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Awan Sore</h5>
            <p class="card-text">Penampakan bulan saat jam 6 sore</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">1/160s</li>
            <li class="list-group-item">ISO 40</li>
            <li class="list-group-item">f/2.4</li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
  <RouterView />
  <br />
</template>

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
