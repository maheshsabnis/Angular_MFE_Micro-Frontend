const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'customer-mfe',
  exposes: {
    './Module': './projects/customer-mfe/src/app/customer/customer.module.ts',
  },
  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },

});
