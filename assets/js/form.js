document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html';
});
// Because the inputs are required in the index.html, there is no need for any extra logic to check if they have content.