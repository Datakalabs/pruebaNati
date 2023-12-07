export default ({ app }, inject) => {
  // const vars = {
  //     key: '374f3c56c1mshd20fa3302637f9dp187329jsn63a5b9dab1b0',
  //     avatars_host: 'doppelme-avatars.p.rapidapi.com',
  // }
  const credentials = {
    key: '98b7abf5d1msh8f19ef6d3f82ef2p1c1ff2jsn6c6fffd2db74',
    spotify_host: 'spotify-web2.p.rapidapi.com',
  }
  inject('rapidapi', credentials)
}
