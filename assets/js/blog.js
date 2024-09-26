document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Render blog posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>By: ${post.username}</small>
      `;

        postsContainer.appendChild(postElement);
    });

    // Back button
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        console.log("hi")
        window.location.href = 'index.html';
    });
});
