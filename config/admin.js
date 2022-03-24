module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5ea7fe69edd1244f9c59f5e0d744563'),
  },
});
