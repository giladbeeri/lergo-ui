'use strict';

angular.module('lergoApp')
    .controller('HomepageCtrl', function ($scope, LessonService) {

        $scope.filters = [
            { 'label' : 'age range', 'options':['1-6','6-10','10-15','15-20','Custom'], 'select':null},
            { 'label' : 'language', 'options':['languages.en','languages.he','languages.ru'], 'translate':true, 'select':null},
            { 'label' : 'subject', 'options':['subject.spelling','subject.math','subject.art'], 'translate':true, 'select':null}
        ];

        $scope.tags = [ 'confusing words', 'tricks', 'visual', 'fun' ];


        // true == next, false == prev
        $scope.flipSection = function (section, direction) {

            if (direction) {
                section.index++;
            } else {
                if (section.index > 0) {
                    section.index--;
                }
            }


        };

        $scope.getLessons = function(section){
            if ( !section.hasOwnProperty('index')){
                section.index = 0;
            }

            var l = section.lessons;
            var i = section.index;
            var ll = section.lessons.length;
            return [ l[i%ll], l[(i+1)%ll], l[(i+2)%ll]];
        };

        LessonService.getHomepageLessons().then(function(data){ $scope.sections = data; });






    });
