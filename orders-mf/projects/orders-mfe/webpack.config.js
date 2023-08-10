const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'orders-mfe',

  exposes: {
    './Module': './projects/orders-mfe/src/app/orders/orders.module.ts',
  },

  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },

});
