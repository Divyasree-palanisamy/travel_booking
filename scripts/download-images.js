const https = require('https');
const fs = require('fs');
const path = require('path');

const destinations = [
    { name: 'maldives', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8' },
    { name: 'dubai', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
    { name: 'tokyo', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf' },
    { name: 'paris', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' }
];

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

destinations.forEach(({ name, url }) => {
    const filePath = path.join(imagesDir, `${name}.jpg`);

    https.get(`${url}?w=800&q=80`, (response) => {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
            console.log(`Downloaded ${name}.jpg`);
            fileStream.close();
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${name}.jpg:`, err.message);
    });
}); 