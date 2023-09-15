async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
}

// Call the function to fetch posts
fetchPosts();