const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Custom Middleware: Log requests
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

let blogs = [
    { id: 1, title: 'My First Blog', content: 'Hello World!' },
    { id: 2, title: 'Learning Backend', content: 'Node.js is great.' }
];

app.get('/', (req, res) => {
    res.send('Server is running on Port 5000!');
});

// Blog Endpoints
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

app.get('/blogs/:id', (req, res) => {

    const blogId = parseInt(req.params.id);

    const blog = blogs.find(b => b.id === blogId);

    if (blog) {

        res.json(blog);
    } else {

        res.status(404).json({ message: "Error 404: Blog not found!" });
    }
});

app.post('/blogs', (req, res) => {
    const { title, content } = req.body;

    // Data Validation
    if (!title || !content) {
        return res.status(400).json({ message: "Title and Content are required!" });
    }

    const newBlog = { id: blogs.length + 1, title, content };
    blogs.push(newBlog);


    res.status(201).json(newBlog);
});

app.put('/blogs/:id', (req, res) => {
    res.json({ message: `Update blog with id ${req.params.id}` });
});

app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const initialLength = blogs.length;
    blogs = blogs.filter(b => b.id !== blogId);

    if (blogs.length === initialLength) {
        return res.status(404).json({ message: "Blog not found!" });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Mock authentication check
    if (username === 'admin' && password === '1234') {
        res.json({ token: 'mock-jwt-token-abc-123' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

if (require.main === module) {
  
  app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
}

module.exports = app;