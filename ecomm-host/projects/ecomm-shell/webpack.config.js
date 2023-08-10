const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "customer-mfe": "http://localhost:4200/remoteEntry.js",
    "inventory-mfe": "http://localhost:4300/remoteEntry.js",
    "orders-mfe": "http://localhost:4400/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
  },

});
