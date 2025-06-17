import fs from "fs";
import { minify as html_minifier } from "html-minifier";

// Read the template index file for KidsGo
const templatePath = "src/kidsgo-index.html";
let rawHtml;
try {
    rawHtml = fs.readFileSync(templatePath, { encoding: "utf-8" });
} catch (err) {
    console.error(`Unable to read ${templatePath}:`, err.message);
    process.exit(1);
}

// Ensure the environment variable required for substitution is present
if (!process.env["KIDSGO_VERSION_HASH"]) {
    console.error("KIDSGO_VERSION_HASH environment variable is not set");
    process.exit(1);
}

const VERSION_HASH = process.env["KIDSGO_VERSION_HASH"];
const VERSION = process.env["VERSION"]; // optional, may be provided by caller

// Replace template parameters demarcated with {{ }}
const processedHtml = rawHtml.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, parameter) => {
    switch (parameter) {
        case "KIDSGO_VERSION_HASH_DOTJS":
            return `${VERSION_HASH}.js`;
        case "KIDSGO_VERSION_HASH":
            return VERSION_HASH;
        case "KIDSGO_VERSION_DOTCSS":
            // If VERSION env var available use it, otherwise leave token untouched
            return VERSION ? `${VERSION}.css` : `{{${parameter}}}`;
        default:
            return `{{${parameter}}}`; // leave untouched for later processing
    }
});

// Minify the resulting HTML for smaller payloads
const minifiedHtml = html_minifier(processedHtml, {
    minifyJS: true,
    minifyCSS: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
});

// Output to stdout so calling scripts can pipe/redirect as needed
console.log(minifiedHtml);
