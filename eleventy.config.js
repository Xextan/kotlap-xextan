import { feedPlugin } from "@11ty/eleventy-plugin-rss"
import { IdAttributePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import { outdent } from "outdent";
import { minify } from "terser";

export default function (eleventyConfig) {
	/** @type markdownIt.Options */
	const mdOptions = {
		linkify: true,
		html: true,
	}
	//eleventyConfig.setTemplateFormats("html,liquid,njk,md");
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPassthroughCopy({
		static: "/",
	});
	eleventyConfig.addPairedShortcode("float", content => {
		return outdent`<div class="float">
			${content}
			</div>`
	})
	//eleventyConfig.addPassthroughCopy("not_found.md", "not_found.html");
    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.post`
			limit: 20,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Pobbuk Xextan",
			subtitle: "",
			base: "https://xextan.org/",
			author: {
				name: "C.Ezra.M",
				email: "",
			}
		}
    });
	eleventyConfig.setLibrary("md", markdownIt(mdOptions));
	eleventyConfig.addFilter("jsmin", async function (code) {
		try {
			const minified = await minify(code);
			return minified.code;
		} catch (err) {
			console.error("Terser error: ", err);
			// Fail gracefully.
			return code;
		}
	});
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
}