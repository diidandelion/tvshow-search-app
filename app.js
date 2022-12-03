const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const input = form.elements.query.value;
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${input}`);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let i of shows) {
        if (i.show.image) {
            const img = document.createElement('img');
            img.src = i.show.image.medium;
            document.body.appendChild(img);
        }
    }
}