import axios from 'axios'

export const insertMovie = async (request) => {
  let simpan = await axios.post('https://movie.tukanginyuk.com/api/insertmovie', request, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return simpan
}

export const updateMovie = async (request, id) => {
    let url = "https://movie.tukanginyuk.com/api/updatemovie/" + id
    let data = await axios.post(url, request, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}

export const hapusMovie = async (id) => {
    let url = "https://movie.tukanginyuk.com/api/hapusmovie/" + id
    let data = await axios.delete(url)
    return data
}
