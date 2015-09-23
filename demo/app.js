var app = angular.module('testApp', ['tld.csvDownload']);

app.controller('Ctrl1', function($scope, $rootScope) {
    $scope.data = {};

    $scope.data.exportFilename = 'JetsonData.csv';
    $scope.data.displayLabel = 'Download Jetson CSV';
    $scope.data.myHeaderData = {
        id: 'User ID',
        name: 'User Name (Last, First)',
        alt: 'Nickname'
    };
    $scope.data.myInputArray = [{
        id: '0001',
        name: 'Jetson, George'
    }, {
        id: '0002',
        name: 'Jetson, Jane',
        alt: 'Jane, his wife.'
    }, {
        id: '0003',
        name: 'Jetson, Judith',
        alt: 'Daughter Judy'
    }, {
        id: '0004',
        name: 'Jetson, Elroy',
        alt: 'Boy Elroy'
    }, {
        id: 'THX1138',
        name: 'Rosie The Maid',
        alt: 'Rosie'
    }];

});