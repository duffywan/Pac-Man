/**
 * Created by zelengzhuang on 4/27/15.
 */
window.angularTranslationLanguages = ['en', 'zh'];

angular.module('myApp', [])
    .run(['$translate',
        function ($translate, realTimeSimpleService, resizeGameAreaService) {
            var node=document.createTextNode($translate.instant ("NEW_GAME") );
            document.getElementById("newGame").appendChild (node);
            node=document.createTextNode($translate.instant ("HIGH_SCORE") );
            document.getElementById("highscore").appendChild (node);
            node=document.createTextNode($translate.instant ("INSTRUCTION") );
            document.getElementById("instructions").appendChild (node);
            node=document.createTextNode($translate.instant ("INFO") );
            document.getElementById("info").appendChild (node);
            //resizeGameAreaService.setWidthToHeight(1);
            //window.setRealTimeSimpleService(realTimeSimpleService);
        }]).config(['$translateProvider', function($translateProvider) {
        'use strict';

        $translateProvider.init(['en', 'zh']);
    }]);