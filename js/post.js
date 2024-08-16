fetch('post.json')
.then(response => response.json())
.then(data => {
  const postsContainer = document.querySelector('.row.gutter-v4');

  data.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('col-sm-6', 'col-md-6', 'col-lg-4', 'blog-post-entry', 'data-aos', 'fade-up');
    postElement.dataset.id = index;

    postElement.innerHTML = `
      <a href="templatetexto.html?id=${index}" class="grid-item blog-item w-100 h-100">
        <div class="overlay">
          <div class="portfolio-item-content">
            <h3>${post.title}</h3>
            <p class="post-meta">${post.content}</p>
            <p class="post-meta">por ${post.author}</p>
          </div>
        </div>
        <img src="${post.image}" class="lazyload" alt="${post.title}" />
      </a>
    `;

    postsContainer.appendChild(postElement);
  });
});
