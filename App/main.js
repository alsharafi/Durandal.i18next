requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator'],
  function (app, system, viewLocator) {

      system.debug(true);

      app.title = 'Durandal Samples';
      app.start().then(function () {
          //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
          //Look for partial views in a 'views' folder in the root.
          viewLocator.useConvention();

          var option = {
              lng: 'en-US',
              fallbackLang: 'en',
              ns: { namespaces: ['app'], defaultNs: 'app' },
              resGetPath: 'locales/__lng__/__ns__.json'
          };
          $.i18n.init(option, function () {
              app.adaptToDevice();
              app.setRoot('samples/shell');
          });
      });
  });