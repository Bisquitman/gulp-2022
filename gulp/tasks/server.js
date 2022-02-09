export const server = (done) => {
  app.plugins.browsersync.init({
    tunnel: true,
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};