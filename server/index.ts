// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
    const app = express();
    const server = createServer(app);

    // For Vercel: compiled server is in dist/, and static files are also in dist/
    const staticPath = path.resolve(__dirname, "..");

    console.log('Static path:', staticPath);
    console.log('__dirname:', __dirname);

    app.use(express.static(staticPath));

    app.get("*", (_req, res) => {
        const indexPath = path.join(staticPath, "index.html");
        console.log('Attempting to serve:', indexPath);
        res.sendFile(indexPath);
    });

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Server running on http://localhost:${port}/`);
    });
}

startServer().catch(console.error);