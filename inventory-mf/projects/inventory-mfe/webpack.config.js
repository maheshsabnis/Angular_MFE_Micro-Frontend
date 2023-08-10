const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'inventory-mfe',
  exposes: {
    './Module': './projects/inventory-mfe/src/app/inventory/inventory.module.ts',
  },

  shared: {
    ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }),
  },

});
