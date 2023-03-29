import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'sentry-chrome-bug/config/environment';
import * as Sentry from '@sentry/ember';

Sentry.init({
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
  debug: true,
  integrations: [
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ]
});


export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
