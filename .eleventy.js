const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  return {
      // These are all optional, defaults are shown:
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "../mharley.dev"
      }
    };   
}