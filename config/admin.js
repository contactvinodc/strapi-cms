module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7698f8515fe2ab4b2225b7397538b23f'),
  },
});
