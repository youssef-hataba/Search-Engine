const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=wfry6cpCNPKlaOPIHtj9cUw2ozhS8qBaCxGv3TEe7cI&per_page=18`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = '';
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        searchResult.appendChild(image);
    });

    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages();
});
