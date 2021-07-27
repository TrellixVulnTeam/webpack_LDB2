// {
//     "presets": ["@babel/preset-env"]
//     // "presets": ["es2015", "stage-2"]
// }
module.exports = function(api) {
    api.cache(true);
    const presets = ["@babel/preset-env"];
    return {
        presets
    }
}