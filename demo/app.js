var app = angular.module('testApp', ['tld.csvDownload']);

app.controller('Ctrl1', function($scope, $rootScope) {
    $scope.data = {};

    $scope.data.exportFilename = 'JetsonData.csv';
    $scope.data.displayLabel = 'Download Jetson CSV';
    $scope.data.myHeaderData = {
        id: 'User ID',
        name: 'User Name',
        alt: 'Nickname'
    };
    $scope.data.myInputArray = [{
        id: '0001',
        name: 'George Jetson'
    }, {
        id: '0002',
        name: 'Jane Jetson',
        alt: 'Jane, his wife.'
    }, {
        id: '0003',
        name: 'Judith Jetson',
        alt: 'Daughter Judy'
    }, {
        id: '0004',
        name: 'Elroy Jetson',
        alt: 'Boy Elroy'
    }, {
        id: 'THX1138',
        name: 'Rosie The Maid',
        alt: 'Rosie'
    }];

});