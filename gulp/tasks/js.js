import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: app.isBuild ? "app.min.js" : "app.js",
        },

        module: {
          rules: [
            {
              test: /\.(scss|css)$/,
              exclude: `${app.path.webpackPath}/fonts`,
              use: [
                "style-loader",
                {
                  loader: "string-replace-loader",
                  options: {
                    search: "@img",
                    replace: "../img",
                    flags: "g",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,
                    importLoaders: 1,
                    modules: false,
                    url: {
                      filter: (url, resourcePath) => {
                        if (url.includes("img/") || url.includes("fonts/")) {
                          return false;
                        }
                        return true;
                      },
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true,
                  },
                },
              ],
            },
          ],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
