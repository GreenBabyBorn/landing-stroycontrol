import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import GulpFormatHtml from "gulp-format-html";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      fileinclude({
        context: {
          isBuild: app.isBuild,
        },
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.gulpIf(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.gulpIf(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(GulpFormatHtml({ indent_with_tabs: true, preserve_newlines: false }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
