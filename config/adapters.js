var path = require('path'),
  local = require(path.resolve('config','local.js'));

/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // If you leave the adapter config unspecified
  // in a model definition, 'default' will be used.
  'default': 'postgresql',

  postgresql: {
      module: 'sails-postgresql',
      host: process.env.PG_HOSTNAME || (local.postgresql.host || 'localhost'),
      user: process.env.PG_USER || (local.postgresql.user || 'root'),
      password: process.env.PG_PASSWORD || (local.postgresql.password || ''),
      database: process.env.PG_DATABASE || (local.postgresql.database || 'postgres'),
      port: process.env.PG_PORT || (local.postgresql.port || 5432),
      // heroku require ssl
      ssl: process.env.NODE_ENV === 'production' ? true : false
  },

  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  }

};
