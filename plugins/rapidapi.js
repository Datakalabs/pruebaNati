export default ({ app }, inject) => {
    const vars = {
        key: '374f3c56c1mshd20fa3302637f9dp187329jsn63a5b9dab1b0',
        avatars_host: 'doppelme-avatars.p.rapidapi.com',
        songs_host: 'spotify-web2.p.rapidapi.com',
        track_id_host: 'spotify-web2.p.rapidapi.com',
    }
    inject('rapidapi', vars)
}
