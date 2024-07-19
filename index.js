class ReactRefreshHotfixPlugin {
  apply(compiler) {
    if (compiler.options.mode !== "development" || (process.env.NODE_ENV && process.env.NODE_ENV === "production")) {
      return;
    }
    compiler.options.module.rules.push({
      test: /\.[m|c]?[jt]sx?$/,
      exclude: /node_modules/,
      use: ["react-refresh-hotfix/loader"],
    })
    if (!compiler.options.resolve.alias) {
      compiler.options.resolve.alias = {};
    }
    compiler.options.resolve.alias['react$'] = "react-refresh-hotfix/react"
  }
}

module.exports = ReactRefreshHotfixPlugin;
