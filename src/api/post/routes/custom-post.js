module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/posts/:slug',
      handler: 'post.findUid',
      config: {
        auth: false,
      },
    },
  ],
};