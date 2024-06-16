document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const posts = document.querySelectorAll('.one-post');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            posts.forEach(post => {
                if (filter === 'all') {
                    post.style.visibility = 'visible';
                    post.style.position = 'relative';
                } else {
                    const field = post.getAttribute('data-field');
                    if (field === filter) {
                        post.style.visibility = 'visible';
                        post.style.position = 'relative';
                    } else {
                        post.style.visibility = 'hidden';
                        post.style.position = 'absolute';
                    }
                }
            });
        });
    });
});
