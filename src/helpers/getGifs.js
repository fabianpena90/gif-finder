export const  getGifs = async (category) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=31Pn49ZazOvSXIHPXhaxxztBmmMAQBh3&q=$${encodeURI(category)}&limit=10`
    const res = await fetch(url)
    const data = await res.json()

    const gifs = data.data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}