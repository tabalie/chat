(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            //to display clean URLs to user without hashbang
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        //to allow ui-view to load template associated with landing, album, and collection states
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
            });

            // .state('collection', {
            //     url: '/',
            //     controller: 'CollectionCtrl as collection',
            //     templateUrl: '/templates/collection.html'
            // });
    }

    angular
    .module('chat', ['ui.router', 'firebase'])
    .config(config);
})();
