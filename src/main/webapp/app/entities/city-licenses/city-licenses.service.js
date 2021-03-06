(function() {
    'use strict';
    angular
        .module('permitmeApp')
        .factory('CityLicenses', CityLicenses);

    CityLicenses.$inject = ['$resource'];

    function CityLicenses ($resource) {
        var resourceUrl =  'api/city-licenses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'getCityLicenseForContractorLicense': {
            	method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                },
            	url: '/api/city-licenses/license-number/:licenseNumber'
            },
            'update': { method:'PUT' }
        });
    }
})();
