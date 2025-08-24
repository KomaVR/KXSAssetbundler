import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const tmpPath = path.join('/tmp', 'modassets');

    // Check if the file exists in the /tmp directory
    if (!fs.existsSync(tmpPath)) {
        return res.status(404).send("AssetBundle not found");
    }

    // Read the file from the /tmp directory
    const fileBuffer = fs.readFileSync(tmpPath);

    // Set headers for file download
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", "attachment; filename=modassets");
    res.status(200).send(fileBuffer);
}
