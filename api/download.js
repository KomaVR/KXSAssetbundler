import fs from "fs";
import path from "path";

export default function handler(req, res) {
    // Path relative to project root
    const bundlePath = path.join(process.cwd(), "AssetBundles", "modassets");

    if (!fs.existsSync(bundlePath)) {
        return res.status(404).send("AssetBundle not found");
    }

    const fileBuffer = fs.readFileSync(bundlePath);

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", "attachment; filename=modassets");
    res.status(200).send(fileBuffer);
}
