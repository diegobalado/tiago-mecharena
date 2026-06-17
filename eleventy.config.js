export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addFilter("sortBy", (arr, key) =>
    [...arr].sort((a, b) => (a[key] ?? 0) - (b[key] ?? 0))
  );

  eleventyConfig.addFilter("slugify", (str) =>
    String(str).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  );

  const isCI = process.env.CI === "true";

  return {
    pathPrefix: isCI ? "/tiago-mecharena/" : "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
