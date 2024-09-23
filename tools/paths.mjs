import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(dirname, "..");
export const client = path.resolve(root, "dist/ecomas/browser");
export const ssr = path.resolve(root, "dist/ecomas/server");
export const cloudflare = path.resolve(root, "dist/ecomas/cloudflare");
export const worker = path.resolve(cloudflare, "_worker.js");
