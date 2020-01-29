function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-extra/about-extra.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-extra/about-extra.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutExtraAboutExtraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure rem rerum saepe sed sit? Ad adipisci, alias animi architecto beatae blanditiis cum delectus, deserunt dicta eaque est et neque nihil, obcaecati perferendis porro quaerat ratione reiciendis rem repellat similique sunt tempora? Consectetur cupiditate debitis earum hic perspiciatis repudiandae tempora?</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure rem rerum saepe sed sit? Ad adipisci, alias animi architecto beatae blanditiis cum delectus, deserunt dicta eaque est et neque nihil, obcaecati perferendis porro quaerat ratione reiciendis rem repellat similique sunt tempora? Consectetur cupiditate debitis earum hic perspiciatis repudiandae tempora?</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>About me:</h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col1\">\n           <img src=\"https://sun9-56.userapi.com/c624521/v624521717/129cc/lXC4tvRisss.jpg\" >\n        </div>\n        <div class=\"col2\">\n            <p>My name is Anna Korotkova and I want to become an Angular developer! This blog is created to show examples of my work.\n            Particle physics and High Energy Physics were for me the main course of my life.\n                Nevertheless, now, I feel that I want to change my career path dramatically.\n            </p>\n        </div>\n    </div>\n    <div class=\"row\">\n<div class=\"card\">\n    <strong>PERSONAL SKILLS AND COMPETENCES:</strong>\n    <ul>\n        <li>C++/STL</li>\n        <li>HTML, CSS   </li>\n        <li>JavaScript , PHP,  MySQL </li>\n        <li>Ajax, Joomla, Angular 8, bash </li>\n    </ul>\n</div>\n    <div class=\"card\">\n        <strong>LANGUAGES:</strong>\n        <ul>\n            <li>Russian Native (C2)</li>\n            <li>English\t(B2, TOEFL 2019 certificate, 80 marks)</li>\n            <li>Bulgarian Beginner (A1)  </li>\n        </ul>\n    </div>\n    </div>\n    <div class=\"mat-body\">\n        <p>EDUCATION:</p>\n        <strong>2001-2006 Faculty Physics and Computer Science,  Smolensk State University, Russia</strong>\n        <hr>\n        <p>   EMPLOYMENT HISTORY:</p>\n        <strong>Joint Institute for Nuclear Research</strong><br>\n        <span>Researcher\t\t\t2013-2019</span>\n        <ul><li>• Developing scientific applications in C ++, bash, Python (Ubuntu/Debian OS)</li>\n            <li>• Developing website for monitoring main trigger values, accelerator beam intensity and others\n                <br> (<a href=\"http://gibsdata.jinr.ru/\" target=\"_blank\">http://gibsdata.jinr.ru/</a>, <a href=\"http://sqm.jinr.ru\" target=\"_blank\">http://sqm.jinr.ru</a>,\n                <a href=\"https://angular-testproject-1fab8.web.app/?q=1 \" target=\"_blank\">http://angular-testproject-1fab8.web.app/?q=1</a> )\n            </li>\n            </ul>\n        <span>Junior Researcher \t\t2007-2013</span>\n        <ul>\n        <li>\n            <li>\n                • Developed application in C++(Qt) to handle with laser system via COM port.</li>\n           <li> • Scientific researches for rare kaon decays at CERN (NA62 collaboration)</li>\n        </ul>\n\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav [class]=\"navbar\">\n  <h1>\n    <a href=\"#\">My Angular Blog</a>\n  </h1>\n\n  <input class=\"tslider tsliderLight\" id=\"cb1\"  (change)=\"changeHeader()\" type=\"checkbox\"/>\n  <label class=\"tsliderButton\" for=\"cb1\"></label>\n\n\n<!--  <mat-slide-toggle [color]=\"color\" (change)=\"changeHeader()\">Change header!</mat-slide-toggle>-->\n  <ul>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n      <a [routerLink]=\"['/']\">Home</a>\n    </li>\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/todos']\">Todos</a></li>\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/player']\">Audio Player</a></li>\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/registration']\">Registration</a></li>\n    <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">About</a></li>\n  </ul>\n\n</nav>\n\n<div class=\"container\">\n  <div class=\"card\">\n    <router-outlet></router-outlet>\n<!--    <button class=\"btn\" (click)=\"showWindow()\"> Show modal window </button>-->\n  </div>\n</div>\n\n<ng-template appRef>\n\n</ng-template>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>ERROR 404!</h1>\n<h2><strong>Page Not Found </strong></h2>\n<hr>\n<strong><a routerLink=\"/\">Home</a></strong>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Welcome to my blog page!</h1>\n<hr>\n<div class=\"container\">\n\n  <a href=\"https://github.com/aneova\" target=\"_blank\">\n  <img src=\"https://github.githubassets.com/images/modules/logos_page/Octocat.png\">\n    <strong>https://github.com/aneova</strong></a>\n\n<!--  <span style=\"text-indent:25px;\"><strong>T</strong>he author of this blog is looking for a good job!-->\n<!--  This Angular website is devoted to study of Angular8 framework.-->\n<!--  The source code can be found here http://github.com/aneova.-->\n<!--  If you have any questions or suggestions about codes and performance, do not hesitate to contact me Anna dot Neova@gmail.com-->\n<!--  </span>-->\n\n<div class=\"console\">\n  <div class=\"console-border\">Welcome to my blog page!</div>\n  <div  [@openClose]=\"isOpen ? 'open' : 'closed'\"  *ngIf=\"isCursor\" class=\"console-text\"> #>\n    {{ isOpen ? '|' : '' }}\n  </div>\n  <div  [@openClose]=\"isOpen ? 'open' : 'closed'\"  *ngIf=\"!isCursor\" class=\"console-text\"> #>\n    {{ !isCursor ? ch_ctext : '' }}\n  </div>\n</div>\n</div>\n<!--<button class=\"btn\" (click)=\"goToDoPage()\">Go to TODOS page</button>-->\n<!--<div [@openClose]=\"isOpen ? 'open' : 'closed'\">-->\n<!--  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>-->\n<!--</div>-->\n<!--<div id=\"ctext\" *ngFor=\"let i of 'gk'\">-->\n<!--  <span style=\"color: white;\">{{i}}</span>-->\n<!--</div>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/model-window/model-window.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model-window/model-window.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModelWindowModelWindowComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!--<div class=\"backdrop\"></div>-->\n\n<!--<div class=\"modal\">-->\n<!--    <nav class=\"navbar\">-->\n<!--        <h1>{{ title }}</h1>-->\n<!--    </nav>-->\n\n<!--    <p>-->\n<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, sint.-->\n<!--    </p>-->\n\n<!--    <button class=\"btn\" (click)=\"close.emit()\">Just Close me, please!</button>-->\n<!--</div>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlayerPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- My first angular player -->\r\n<div class=\"row\">\r\n<div [ngClass]=\"{'terminal':backgroundToggle, 'terminal-red': !backgroundToggle}\" >\r\n    <pre> {{ listMusic.strTime }}  {{ currentFile }}</pre>\r\n    <mat-toolbar color=\"basic\">\r\n        <mat-progress-bar\r\n                class=\"audio-progress-bar\"  name=\"mbar\" mode=\"determinate \" (click)=\"getPosition()\" [value]=\"listMusic.myDate|async\">\r\n        </mat-progress-bar>\r\n        <button mat-button  (click)=\"OnPrev(currentId)\">\r\n            <mat-icon mat-list-icon>fast_rewind</mat-icon>\r\n        </button>\r\n\r\n        <button mat-button  (click)=\"OnPlay(currentId)\" [disabled]=\"state\" *ngIf=\"!state\">\r\n            <mat-icon mat-list-icon>play_circle_filled</mat-icon>\r\n        </button>\r\n        <button mat-button color=\"accent\" (click)=\"OnPause(currentId)\" *ngIf=\"state\">\r\n            <mat-icon mat-list-icon>pause</mat-icon>\r\n        </button>\r\n\r\n        <button mat-button  (click)=\"OnNext(currentId)\">\r\n            <mat-icon mat-list-icon>fast_forward</mat-icon>\r\n        </button>\r\n        <button mat-button (click)=\"OnStop(currentId)\">\r\n            <mat-icon mat-list-icon>stop_circle_filled</mat-icon>\r\n        </button>\r\n    </mat-toolbar>\r\n</div>\r\n\r\n<hr style=\"width: 600px;margin:0px;\">\r\n<strong> Playlist </strong>\r\n<div *ngFor=\"let f of listMusic.files\">\r\n    <p class=\"musicList\" (click)=\"OnPlay(f.id)\">{{f.name}} {{f.artist}}</p>\r\n</div>\r\n</div>\r\n<p> {{ currentValue }} </p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <button class=\"btn\">Back</button>\n\n  <h1>{{post.title}}</h1>\n\n  <p>{{post.text}}</p>\n\n  <button class=\"btn btn-danger\" (click)=\"loadPosts()\">Load 4 post</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Posts page</h1>\n\n<div class=\"card\" *ngFor=\"let post of postsService.posts\">\n  <h4>\n    <a [routerLink]=\"['/posts', post.id]\"> {{ post.title }}\n      <strong>(ID {{post.id}})</strong>\n      {{post.title}}\n    </a>\n  </h4>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h3> This is an example of how to setup form validation in Angular 8 using Reactive Forms</h3>\r\n    <form [formGroup]=\"form\"  (ngSubmit)=\"submit()\">\r\n        <div class=\"form-control\">\r\n            <label>Email</label>\r\n            <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\r\n            <div class=\"validation\" *ngIf=\"form.get('email').invalid && form.get('email').touched\">\r\n                <small>ERROR: Not a Valid Email Address!</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-control\">\r\n            <label>Password</label>\r\n                <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n            <div class=\"validation\" *ngIf=\"form.get('password').invalid && form.get('password').touched\">\r\n                <small>ERROR: The password must be at least 6 characters long!</small>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\" formGroupName=\"address\">\r\n            <h2>Address</h2>\r\n\r\n            <div class=\"form-control\">\r\n                <label>Country</label>\r\n\r\n                <select formControlName=\"country\" (click)=\"setCapital()\">\r\n                    <option value=\"bg\">Bulgaria</option>\r\n                    <option value=\"de\">Germany</option>\r\n                    <option value=\"ru\">Russia</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-control\">\r\n                <input type=\"text\" formControlName=\"city\">\r\n            </div>\r\n\r\n<!--            <button class=\"btn\" type=\"button\" (click)=\"setCapital()\">Choose a capital city</button>-->\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h2>Your skills</h2>\r\n            <button class=\"btn\" (click)=\"addSkill()\">Add skills</button>\r\n            <div class=\"form-control\" *ngFor=\"let control of form.get('skills').controls; let idx=index\">\r\n                <label>{{idx}}</label>\r\n                <input type=\"text\">\r\n            </div>\r\n        </div>\r\n\r\n        <button class=\"btn\" type=\"submit\" [disabled]=\"form.invalid\">Submit form</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-form/todo-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo-form/todo-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoFormTodoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n<input class=\"input\" type=\"text\" placeholder=\"Hi! I can add todo title by clicking on Enter or Add buttons ...\" [(ngModel)]=\"title\" (keydown.enter)=\"addTodo()\">\n<button class=\"button\" (click)=\"addTodo()\">Add button</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Todos test page</h1>\n<hr>\n<app-todo-form></app-todo-form>\n  <div class=\"filter\">\n    <input class=\"input\" type=\"text\" placeholder=\"Filter todo by title...\" [(ngModel)]=\"searchString\">\n  </div>\n\n\n<ul *ngIf=\"todosService.todos.length; else noTodos\">\n\n<li *ngFor=\"let todo of todosService.todos| todosFilter:searchString; let i=index\">\n<span [class.done]=\"todo.completed\">\n{{todo.title}}\n  <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"onChange(todo.id)\">\n</span>\n<small>\n{{todo.date | date:'medium'}}\n</small>\n<button class=\"rm\" (click)=\"removeTodo(todo.id)\">x</button>\n</li>\n</ul>\n\n<ng-template #noTodos>\n<p style=\"text-align:center;\">No todos now!</p>\n</ng-template>\n\n<!--<p *ngIf=\"loading\">Loading ...</p>-->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about-extra/about-extra.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/about-extra/about-extra.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutExtraAboutExtraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWV4dHJhL2Fib3V0LWV4dHJhLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/about-extra/about-extra.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/about-extra/about-extra.component.ts ***!
    \******************************************************/

  /*! exports provided: AboutExtraComponent */

  /***/
  function srcAppAboutExtraAboutExtraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutExtraComponent", function () {
      return AboutExtraComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutExtraComponent = function AboutExtraComponent() {
      _classCallCheck(this, AboutExtraComponent);
    };

    AboutExtraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-extra',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-extra.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-extra/about-extra.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-extra.component.scss */
      "./src/app/about-extra/about-extra.component.scss")).default]
    })], AboutExtraComponent);
    /***/
  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n}\n\n.col1 {\n  width: 600px;\n  border: 2px #cccccc;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.col2 {\n  width: 500px;\n  border-radius: 5px;\n  border: 2px #cccccc;\n}\n\np {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  font-family: Cambria;\n  font-size: 20px;\n}\n\np span.completed {\n  text-decoration: line-through;\n}\n\nimg {\n  display: block;\n  width: 500px;\n  height: auto;\n}\n\na {\n  text-decoration: none;\n  margin: 0px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxBbm5lZ2FcXFdlYnN0b3JtUHJvamVjdHNcXG15QmxvZy9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUU7RUFDRSw2QkFBQTtBQ0FKOztBREtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNvbDEge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBib3JkZXI6IDJweCAjY2NjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jb2wye1xyXG4gIHdpZHRoOjUwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDJweCAjY2NjY2NjO1xyXG59XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIHNwYW4uY29tcGxldGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29sMSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgYm9yZGVyOiAycHggI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb2wyIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4ICNjY2NjY2M7XG59XG5cbnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5wIHNwYW4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-extra/about-extra.component */
    "./src/app/about-extra/about-extra.component.ts");
    /* harmony import */


    var _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./todos/todos.component */
    "./src/app/todos/todos.component.ts");
    /* harmony import */


    var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./todo-form/todo-form.component */
    "./src/app/todo-form/todo-form.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'todos',
      component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"]
    }, {
      path: 'todosform',
      component: _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_9__["TodoFormComponent"]
    }, {
      path: 'player',
      component: _player_player_component__WEBPACK_IMPORTED_MODULE_11__["PlayerComponent"]
    }, {
      path: 'posts',
      component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]
    }, {
      path: 'posts/:id',
      component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]
    }, {
      path: 'registration',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"]
    }, {
      path: 'about/extra',
      component: _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_7__["AboutExtraComponent"]
    }, {
      path: 'error',
      component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]
    }, {
      path: '**',
      redirectTo: 'error'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@import url(https://fonts.googleapis.com/css?family=Playfair+Display:700,900);\n.navbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  color: #fff;\n  padding: 2rem;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n}\n.navbar ul li.active a {\n  font-weight: bolder;\n  color: #ffffff;\n  cursor: default;\n  -webkit-clip-path: polygon(50% 20%, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 80%, 30% 100%, 0 100%, 0 0, 30% 0);\n  clip-path: polygon(50% 20%, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 80%, 30% 100%, 0 100%, 0 0, 30% 0);\n}\n.navbar ul li a {\n  display: block;\n  background: rgba(238, 236, 225, 0.25);\n  margin: 0.7rem;\n  text-align: center;\n  font-size: 1rem;\n  -webkit-clip-path: polygon(50% 0, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 100%, 30% 100%, 0 100%, 0 0, 30% 0);\n  clip-path: polygon(50% 0, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 100%, 30% 100%, 0 100%, 0 0, 30% 0);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.navbar ul li a:hover {\n  background: rgba(238, 236, 225, 0.25);\n  color: #ffffff;\n  -webkit-clip-path: polygon(50% 20%, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 80%, 30% 100%, 0 100%, 0 0, 30% 0);\n  clip-path: polygon(50% 20%, 70% 0, 100% 0, 100% 100%, 70% 100%, 50% 80%, 30% 100%, 0 100%, 0 0, 30% 0);\n}\np {\n  font-size: 1.5rem;\n}\n.bg2 {\n  background-image: url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.bg1 {\n  background-image: url(\"https://ununsplash.imgix.net/uploads/141319062591093cefc09/ad50c1f0?q=75&fm=jpg&s=a356dd61ff3da2269124bcd12a303b7e\");\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 4em;\n  height: 2em;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n.tgl + .tgl-btn:after {\n  left: 0;\n}\n.tgl + .tgl-btn:before {\n  display: none;\n}\n.tgl:checked + .tgl-btn:after {\n  left: 50%;\n}\n.tgl-light + .tgl-btn {\n  background: #f0f0f0;\n  border-radius: 2em;\n  padding: 2px;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n.tgl-light + .tgl-btn:after {\n  border-radius: 50%;\n  background: #fff;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.tgl-light:checked + .tgl-btn {\n  background: #9FD6AE;\n}\n.tslider {\n  display: none;\n}\n.tslider + .tsliderButton {\n  width: 4em;\n  height: 2em;\n  cursor: pointer;\n}\n.tslider + .tsliderButton:after, .tslider + .tsliderButton:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n.tslider + .tsliderButton:after {\n  left: 0;\n}\n.tslider + .tsliderButton:before {\n  display: none;\n}\n.tslider:checked + .tsliderButton {\n  background: #9FD6AE;\n}\n.tsliderLight + .tsliderButton {\n  background: #dcf060;\n  border-radius: 2em;\n  padding: 2px;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n.tsliderLight + .tsliderButton:after {\n  border-radius: 50%;\n  background: #ff001f;\n  box-shadow: 1px 1px 2px 2px gray;\n}\n.tsliderLight:checked + .tsliderButton:after {\n  left: 50%;\n  box-shadow: 1px 1px 2px 2px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbm5lZ2FcXFdlYnN0b3JtUHJvamVjdHNcXG15QmxvZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFDQSw2RUFBQTtBQUVSO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFJQSxXQUFBO0VBQ0EsYUFBQTtBQ0hGO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNGSjtBREtJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhHQUFBO0VBQ0Esc0dBQUE7QUNITjtBRE1JO0VBQ0UsY0FBQTtFQUNBLHFDQTNCQTtFQTRCQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkdBQUE7RUFDQSxxR0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNKTjtBRE1NO0VBQ0UscUNBcENGO0VBcUNFLGNBQUE7RUFDQSw4R0FBQTtFQUNBLHNHQUFBO0FDSlI7QURrQkE7RUFDRSxpQkFBQTtBQ2ZGO0FEa0JBO0VBRUUsbUlBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDaEJGO0FEa0JBO0VBRUUsMklBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDaEJGO0FENEJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDekJKO0FEMEJJO0VBRUUsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDekJOO0FENEJJO0VBQ0UsT0FBQTtBQzFCTjtBRDZCSTtFQUNFLGFBQUE7QUMzQk47QUQrQkU7RUFDRSxTQUFBO0FDN0JKO0FEa0NFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDL0JKO0FEZ0NJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUM5Qk47QURrQ0U7RUFDRSxtQkFBQTtBQ2hDSjtBRHVDQTtFQUVFLGFBQUE7QUNyQ0Y7QURzQ0U7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNyQ047QURzQ0k7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNyQ047QUR3Q0k7RUFDRSxPQUFBO0FDdENOO0FEeUNJO0VBQ0UsYUFBQTtBQ3ZDTjtBRDBDRTtFQUNFLG1CQUFBO0FDeENKO0FEOENHO0VBRUMsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDNUNKO0FEOENJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDNUNOO0FEK0NFO0VBQ0UsU0FBQTtFQUNBLGlDQUFBO0FDN0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OjcwMCw5MDApO1xuJG5hdjogcmdiYSgyMzgsIDIzNiwgMjI1LCAwLjI1KTtcbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIC8vYmFja2dyb3VuZDogIzkxMGU0NDtcblxuXG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAycmVtO1xuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgIC8vIG1hcmdpbi1yaWdodDogNDVyZW07XG5cbiAgICBsaS5hY3RpdmUgYSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCA3MCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCA1MCUgODAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCA3MCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCA1MCUgODAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbiAgICB9XG5cbiAgICBsaSBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogJG5hdjtcbiAgICAgIG1hcmdpbjogMC43cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDcwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgNzAlIDEwMCUsIDUwJSAxMDAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgNzAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgNTAlIDEwMCUsIDMwJSAxMDAlLCAwIDEwMCUsIDAgMCwgMzAlIDApO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbmF2O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgNzAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgNTAlIDgwJSwgMzAlIDEwMCUsIDAgMTAwJSwgMCAwLCAzMCUgMCk7XG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCA3MCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCA1MCUgODAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbiAgICAgICAgLy90cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvaW1hZ2VzL21lbnVfYmtnLmpwZycpO1xuXG4gICAgICAgIC8vLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMikgdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIC8vdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAvL2JveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYmcyXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3Bob3RvLTE0MTUzMDIxOTk4ODgtMzg0Zjc1MjY0NWQwP3E9NzUmZm09anBnJnM9ODIzYmRjYzFiN2FkOTU1ZjUxODBlZmQzNTI1NjEwMTYpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG59XG4uYmcxXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91bnVuc3BsYXNoLmltZ2l4Lm5ldC91cGxvYWRzLzE0MTMxOTA2MjU5MTA5M2NlZmMwOS9hZDUwYzFmMD9xPTc1JmZtPWpwZyZzPWEzNTZkZDYxZmYzZGEyMjY5MTI0YmNkMTJhMzAzYjdlJyk7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cblxuLnRnbCB7XG4gIC8vZGlzcGxheTogbm9uZTtcbiAgLy8mICsgLnRnbC1idG4ge1xuICAvLyAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLy8gICY6OnNlbGVjdGlvbiB7XG4gIC8vICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIC8vICB9XG4gIC8vfVxuXG4gICsgLnRnbC1idG4ge1xuICAgIG91dGxpbmU6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDRlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gICAgbGVmdDogNTAlO1xuICB9XG59XG5cbiAgLnRnbC1saWdodCB7XG4gICsgLnRnbC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gICAgJjphZnRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gICY6Y2hlY2tlZCArIC50Z2wtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjOUZENkFFO1xuICB9XG59XG5cblxuXG5cbi50c2xpZGVyXG57XG4gIGRpc3BsYXk6IG5vbmU7XG4gICsudHNsaWRlckJ1dHRvblxuICB7XG4gICAgICB3aWR0aDogNGVtO1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmOmNoZWNrZWQgKyAudHNsaWRlckJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzlGRDZBRTtcbiAgfVxuIH1cblxuLnRzbGlkZXJMaWdodFxue1xuICAgKy50c2xpZGVyQnV0dG9uXG4gIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGNmMDYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmYwMDFmO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IGdyYXk7XG4gICAgfVxuICB9XG4gICY6Y2hlY2tlZCArIC50c2xpZGVyQnV0dG9uOmFmdGVyIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IGJsYWNrO1xuICB9XG59XG5cblxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6NzAwLDkwMCk7XG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5uYXZiYXIgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5hdmJhciB1bCBsaS5hY3RpdmUgYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAyMCUsIDcwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgNzAlIDEwMCUsIDUwJSA4MCUsIDMwJSAxMDAlLCAwIDEwMCUsIDAgMCwgMzAlIDApO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgNzAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgNTAlIDgwJSwgMzAlIDEwMCUsIDAgMTAwJSwgMCAwLCAzMCUgMCk7XG59XG4ubmF2YmFyIHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzNiwgMjI1LCAwLjI1KTtcbiAgbWFyZ2luOiAwLjdyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgNzAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgNTAlIDEwMCUsIDMwJSAxMDAlLCAwIDEwMCUsIDAgMCwgMzAlIDApO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDcwJSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgNzAlIDEwMCUsIDUwJSAxMDAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubmF2YmFyIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM2LCAyMjUsIDAuMjUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgNzAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgNTAlIDgwJSwgMzAlIDEwMCUsIDAgMTAwJSwgMCAwLCAzMCUgMCk7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCA3MCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCA1MCUgODAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDMwJSAwKTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYmcyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vdW51bnNwbGFzaC5pbWdpeC5uZXQvcGhvdG8tMTQxNTMwMjE5OTg4OC0zODRmNzUyNjQ1ZDA/cT03NSZmbT1qcGcmcz04MjNiZGNjMWI3YWQ5NTVmNTE4MGVmZDM1MjU2MTAxNik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5iZzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3VudW5zcGxhc2guaW1naXgubmV0L3VwbG9hZHMvMTQxMzE5MDYyNTkxMDkzY2VmYzA5L2FkNTBjMWYwP3E9NzUmZm09anBnJnM9YTM1NmRkNjFmZjNkYTIyNjkxMjRiY2QxMmEzMDNiN2VcIik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi50Z2wgKyAudGdsLWJ0biB7XG4gIG91dGxpbmU6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNGVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnRnbCArIC50Z2wtYnRuOmFmdGVyLCAudGdsICsgLnRnbC1idG46YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRnbCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgbGVmdDogMDtcbn1cbi50Z2wgKyAudGdsLWJ0bjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG59XG5cbi50Z2wtbGlnaHQgKyAudGdsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgcGFkZGluZzogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuLnRnbC1saWdodCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnRnbC1saWdodDpjaGVja2VkICsgLnRnbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjOUZENkFFO1xufVxuXG4udHNsaWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udHNsaWRlciArIC50c2xpZGVyQnV0dG9uIHtcbiAgd2lkdGg6IDRlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50c2xpZGVyICsgLnRzbGlkZXJCdXR0b246YWZ0ZXIsIC50c2xpZGVyICsgLnRzbGlkZXJCdXR0b246YmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRzbGlkZXIgKyAudHNsaWRlckJ1dHRvbjphZnRlciB7XG4gIGxlZnQ6IDA7XG59XG4udHNsaWRlciArIC50c2xpZGVyQnV0dG9uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udHNsaWRlcjpjaGVja2VkICsgLnRzbGlkZXJCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjOUZENkFFO1xufVxuXG4udHNsaWRlckxpZ2h0ICsgLnRzbGlkZXJCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZGNmMDYwO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHBhZGRpbmc6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbi50c2xpZGVyTGlnaHQgKyAudHNsaWRlckJ1dHRvbjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmMDAxZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IGdyYXk7XG59XG4udHNsaWRlckxpZ2h0OmNoZWNrZWQgKyAudHNsaWRlckJ1dHRvbjphZnRlciB7XG4gIGxlZnQ6IDUwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ref_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ref.directive */
    "./src/app/ref.directive.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(resolver) {
        _classCallCheck(this, AppComponent);

        this.resolver = resolver;
        this.color = 'accent';
        this.navbar = 'navbar bg1';
      } // showWindow() {
      //   const modalFactory =  this.resolver.resolveComponentFactory(ModelWindowComponent);
      //   this.refDir.containerRef.clear();
      //   const component = this.refDir.containerRef.createComponent(modalFactory);
      //   component.instance.title = 'Modal window';
      //   component.instance.close.subscribe(() => {
      //     this.refDir.containerRef.clear()
      //   });
      // }


      _createClass(AppComponent, [{
        key: "changeHeader",
        value: function changeHeader() {
          if (this.navbar === 'navbar bg1') {
            this.navbar = 'navbar bg2';
          } else {
            this.navbar = 'navbar bg1';
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ref_directive__WEBPACK_IMPORTED_MODULE_2__["RefDirective"], {
      static: false
    })], AppComponent.prototype, "refDir", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about-extra/about-extra.component */
    "./src/app/about-extra/about-extra.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _todos_todos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./todos/todos.component */
    "./src/app/todos/todos.component.ts");
    /* harmony import */


    var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./todo-form/todo-form.component */
    "./src/app/todo-form/todo-form.component.ts");
    /* harmony import */


    var _shared_todos_flter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/todos-flter.pipe */
    "./src/app/shared/todos-flter.pipe.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/player/player.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _model_window_model_window_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./model-window/model-window.component */
    "./src/app/model-window/model-window.component.ts");
    /* harmony import */


    var _ref_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ref.directive */
    "./src/app/ref.directive.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"], _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_9__["AboutExtraComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_13__["TodosComponent"], _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_14__["TodoFormComponent"], _shared_todos_flter_pipe__WEBPACK_IMPORTED_MODULE_15__["TodosFlterPipe"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_17__["PlayerComponent"], _model_window_model_window_component__WEBPACK_IMPORTED_MODULE_24__["ModelWindowComponent"], _ref_directive__WEBPACK_IMPORTED_MODULE_25__["RefDirective"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_26__["RegistrationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"]],
      providers: [],
      entryComponents: [_model_window_model_window_component__WEBPACK_IMPORTED_MODULE_24__["ModelWindowComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/error-page/error-page.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorPageErrorPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/error-page/error-page.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorPageComponent =
    /*#__PURE__*/
    function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-page.component.scss */
      "./src/app/error-page/error-page.component.scss")).default]
    })], ErrorPageComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\na {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-decoration: none;\n  color: black;\n}\n\na img {\n  width: 230px;\n  height: auto;\n  padding: 15px;\n  alignment: left;\n}\n\np {\n  line-height: 2;\n  margin: 6px;\n}\n\np + .b {\n  color: red;\n}\n\n.console {\n  width: 100%;\n  height: auto;\n  background: black;\n  border-radius: 2rem;\n  color: #051469;\n  box-shadow: 2px 2px 2px 1px gray;\n}\n\n.console-border {\n  position: relative;\n  width: 100%;\n  height: 30px;\n  background: yellow;\n  top: -1px;\n  text-align: center;\n  font-weight: bold;\n  box-shadow: 1px 1px 2px 2px gray;\n}\n\n.console-text {\n  top: 200px;\n  color: #2bca0b;\n  font-weight: bold;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFubmVnYVxcV2Vic3Rvcm1Qcm9qZWN0c1xcbXlCbG9nL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQUU7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRENFO0VBQ0ksVUFBQTtBQ0NOOztBREdBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLGdDQUFBO0FDRkY7O0FES0E7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDSkY7O0FET0E7RUFFRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGltZ1xyXG4gIHtcclxuICAgIHdpZHRoOjIzMHB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYWxpZ25tZW50OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxucHtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW46IDZweDtcclxuICArIC5ie1xyXG4gICAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29uc29sZVxyXG57XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6YXV0bztcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAjMDUxNDY5O1xyXG4gIC8vei1pbmRleDogLTE7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IGdyYXk7XHJcbiB9XHJcblxyXG4uY29uc29sZS1ib3JkZXJcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHRvcDotMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggZ3JheTtcclxufVxyXG5cclxuLmNvbnNvbGUtdGV4dFxyXG57XHJcbiAgdG9wOjIwMHB4O1xyXG4gIGNvbG9yOiMyYmNhMGI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuYSBpbWcge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgYWxpZ25tZW50OiBsZWZ0O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1hcmdpbjogNnB4O1xufVxucCArIC5iIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnNvbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY29sb3I6ICMwNTE0Njk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCBncmF5O1xufVxuXG4uY29uc29sZS1ib3JkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgdG9wOiAtMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggZ3JheTtcbn1cblxuLmNvbnNvbGUtdGV4dCB7XG4gIHRvcDogMjAwcHg7XG4gIGNvbG9yOiAjMmJjYTBiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.isOpen = true;
        this.isCursor = true;
        this.ctext = 'Hello! My name is Anna! This website is devoted to study of the Angular8 framework. The source code can be found here http://github.com/aneova.' + ' If you have any questions or suggestions about my codes and performance, do not hesitate to contact me Anna.Neova@gmail.com';
        this.ch_ctext = '';
        this.i = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.timerId = setInterval(function () {
            _this.isOpen = !_this.isOpen;
          }, 500);
          setTimeout(function () {
            clearInterval(_this.timerId);
            _this.isCursor = false;
          }, 2500);
          this.timerId2 = setInterval(function () {
            _this.type();
          }, 100); // setTimeout(() => { clearInterval(this.timerId); this.isCursor = false; }, 25000);
        }
      }, {
        key: "type",
        value: function type() {
          this.ch_ctext = this.ctext.substr(0, this.i + 1);

          if (this.i < this.ctext.length) {
            this.i++; //                                   console.log(this.i,' -> ', this.ctext.length);
          }
        }
      }, {
        key: "goToHomePage",
        value: function goToHomePage() {
          this.router.navigate(['/posts']);
        }
      }, {
        key: "goToDoPage",
        value: function goToDoPage() {
          this.router.navigate(['/todos']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [// state('open', style({
        //   height: '200px',
        //      opacity: 1,
        //      font-weight: bold
        //  //   backgroundColor: 'yellow'
        // }))
        // state('closed', style({
        //   height: '100px',
        //   opacity: 0.5,
        //   backgroundColor: 'green'
        // })),
        // transition('open => closed', [
        //   animate('1s')
        // ]),
        // transition('closed => open', [
        //   animate('2s')
        // ]),
      ])],
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/model-window/model-window.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/model-window/model-window.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModelWindowModelWindowComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.modal {\n  padding: 1rem;\n  margin-top: 1rem;\n  position: absolute;\n  background: white;\n  -webkit-transform: translate(140%, -20%);\n          transform: translate(140%, -20%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwtd2luZG93L0M6XFxVc2Vyc1xcQW5uZWdhXFxXZWJzdG9ybVByb2plY3RzXFxteUJsb2cvc3JjXFxhcHBcXG1vZGVsLXdpbmRvd1xcbW9kZWwtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RlbC13aW5kb3cvbW9kZWwtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXdpbmRvdy9tb2RlbC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3B7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDAsIDAuMyk7XHJcbn1cclxuXHJcbi5tb2RhbHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0MCUsIC0yMCUpO1xyXG59XHJcblxyXG4iLCIuYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubW9kYWwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDAlLCAtMjAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/model-window/model-window.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/model-window/model-window.component.ts ***!
    \********************************************************/

  /*! exports provided: ModelWindowComponent */

  /***/
  function srcAppModelWindowModelWindowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelWindowComponent", function () {
      return ModelWindowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModelWindowComponent =
    /*#__PURE__*/
    function () {
      function ModelWindowComponent() {
        _classCallCheck(this, ModelWindowComponent);

        this.title = 'TEXT';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ModelWindowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModelWindowComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModelWindowComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModelWindowComponent.prototype, "close", void 0);
    ModelWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-model-window',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./model-window.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/model-window/model-window.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./model-window.component.scss */
      "./src/app/model-window/model-window.component.scss")).default]
    })], ModelWindowComponent);
    /***/
  },

  /***/
  "./src/app/player/player.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/player/player.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlayerPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #083a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.audio-progress-bar {\n  /* remove animation and the dots*/\n}\n.audio-progress-bar.mat-progress-bar {\n  display: block;\n  width: 300px;\n  height: 10px;\n}\n.audio-progress-bar .mat-progress-bar-fill::after {\n  background-color: #37474f;\n}\n.audio-progress-bar .mat-progress-bar-buffer {\n  background-color: #90a4ae;\n}\n.audio-progress-bar .mat-progress-bar-background {\n  -webkit-animation: none;\n          animation: none;\n  background-color: #800000;\n  fill: #eceff1;\n}\n.media-action-bar {\n  width: 100%;\n  padding: 2.5rem;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.mat-icon {\n  height: 48px !important;\n  width: 48px !important;\n  font-size: 48px !important;\n}\n.terminal pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.terminal-red {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #f2f1ff;\n}\n.musicList {\n  position: relative;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 5px;\n  margin-top: 5px;\n  background-color: #f2f1ff;\n}\n.row {\n  padding-left: 160px;\n  display: block;\n  margin-bottom: 15px;\n}\np {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxheWVyL0M6XFxVc2Vyc1xcQW5uZWdhXFxXZWJzdG9ybVByb2plY3RzXFxteUJsb2cvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFlRSxpQ0FBQTtBRFpGO0FDRkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURJSjtBQ0RFO0VBQ0UseUJBQUE7QURHSjtBQ0FFO0VBQ0UseUJBQUE7QURFSjtBQ0VFO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FEQUo7QUNJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBRERGO0FDR0E7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QURBRjtBQ0dBO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FEQUY7QUNHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FEQUY7QUNFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FEQUY7QUNHQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEQUY7QUNHQTtFQUNFLGVBQUE7QURBRiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAouKAouKAolwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMwODNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LWluZGVudDogNHB4O1xufVxuXG4uYXVkaW8tcHJvZ3Jlc3MtYmFyIHtcbiAgLyogcmVtb3ZlIGFuaW1hdGlvbiBhbmQgdGhlIGRvdHMqL1xufVxuLmF1ZGlvLXByb2dyZXNzLWJhci5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLmF1ZGlvLXByb2dyZXNzLWJhciAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG59XG4uYXVkaW8tcHJvZ3Jlc3MtYmFyIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGE0YWU7XG59XG4uYXVkaW8tcHJvZ3Jlc3MtYmFyIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBhbmltYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMDA7XG4gIGZpbGw6ICNlY2VmZjE7XG59XG5cbi5tZWRpYS1hY3Rpb24tYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGVybWluYWwtcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYxZmY7XG59XG5cbi5tdXNpY0xpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMWZmO1xufVxuXG4ucm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiAjYzJjM2M0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdGV4dC1pbmRlbnQ6IDRweDtcclxufVxyXG5cclxuLmF1ZGlvLXByb2dyZXNzLWJhciB7XHJcbiAgJi5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcclxuICB9XHJcblxyXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBhNGFlO1xyXG4gIH1cclxuXHJcbiAgLyogcmVtb3ZlIGFuaW1hdGlvbiBhbmQgdGhlIGRvdHMqL1xyXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM4MDAwMDA7XHJcbiAgICBmaWxsOiAjZWNlZmYxO1xyXG4gIH1cclxufVxyXG5cclxuLm1lZGlhLWFjdGlvbi1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXJtaW5hbC1yZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MSwgMjU1KTtcclxufVxyXG4ubXVzaWNMaXN0XHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQxLCAyNTUpO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxucHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/player/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/player/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_list_music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/list-music.service */
    "./src/app/shared/list-music.service.ts");

    var PlayerComponent =
    /*#__PURE__*/
    function () {
      function PlayerComponent(listMusic) {
        _classCallCheck(this, PlayerComponent);

        this.listMusic = listMusic;
        this.state = false;
        this.files = [];
        this.currentFile = this.listMusic.files[0].artist;
        this.currentId = 0;
        this.backgroundToggle = true;
        this.musicFiles = this.listMusic.files;
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnPlay",
        value: function OnPlay(id) {
          this.listMusic.onplay(id);
          this.currentFile = this.listMusic.getTrackName(id);
          this.currentId = id;
          this.state = true;
        }
      }, {
        key: "OnStop",
        value: function OnStop(id) {
          this.listMusic.onstop(id);
        }
      }, {
        key: "OnPause",
        value: function OnPause(id) {
          this.listMusic.onpause(id);
          this.state = false;
        }
      }, {
        key: "OnNext",
        value: function OnNext(id) {
          this.listMusic.onplay(id + 1);
          this.state = true;
          this.currentId = id + 1;
          this.currentFile = this.listMusic.getTrackName(id + 1);
        }
      }, {
        key: "OnPrev",
        value: function OnPrev(id) {
          this.listMusic.onplay(id - 1);
          this.currentFile = this.listMusic.getTrackName(id - 1);
          this.state = true;
          this.currentId = id - 1;
        }
      }, {
        key: "getLenght",
        value: function getLenght() {
          this.currentValue = this.listMusic.getlenght();
          return this.currentValue;
        }
      }, {
        key: "focusTitle",
        value: function focusTitle() {
          this.inputRef.nativeElement.focus();
        }
      }, {
        key: "getPosition",
        value: function getPosition() {// fromEvent(document.body, 'mousemove').subscribe( e => {
          //   console.log(e.pageX, e.pageY);
          // });
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ctorParameters = function () {
      return [{
        type: _shared_list_music_service__WEBPACK_IMPORTED_MODULE_2__["ListMusicService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titleInput', {
      static: false
    })], PlayerComponent.prototype, "inputRef", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pleer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./player.component.scss */
      "./src/app/player/player.component.scss")).default]
    })], PlayerComponent);
    /***/
  },

  /***/
  "./src/app/post/post.component.scss":
  /*!******************************************!*\
    !*** ./src/app/post/post.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/posts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PostComponent =
    /*#__PURE__*/
    function () {
      function PostComponent(postsService, route, router) {
        _classCallCheck(this, PostComponent);

        this.postsService = postsService;
        this.route = route;
        this.router = router;
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            _this2.post = _this2.postsService.getById(+params.id);
          });
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {// this.router.navigate(['/posts',44]);
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ctorParameters = function () {
      return [{
        type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.scss */
      "./src/app/post/post.component.scss")).default]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/app/posts.service.ts":
  /*!**********************************!*\
    !*** ./src/app/posts.service.ts ***!
    \**********************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostsService =
    /*#__PURE__*/
    function () {
      function PostsService() {
        _classCallCheck(this, PostsService);

        this.posts = [{
          title: 'Post 1',
          text: 'Sample text for post 1',
          id: 11
        }, {
          title: 'Post 2',
          text: 'Sample text for post 2',
          id: 22
        }, {
          title: 'Post 3',
          text: 'Sample text for post 3',
          id: 33
        }, {
          title: 'Post 4',
          text: 'Sample text for post 4',
          id: 44
        }];
      }

      _createClass(PostsService, [{
        key: "getById",
        value: function getById(id) {
          return this.posts.find(function (p) {
            return p.id === id;
          });
        }
      }]);

      return PostsService;
    }();

    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostsService);
    /***/
  },

  /***/
  "./src/app/posts/posts.component.scss":
  /*!********************************************!*\
    !*** ./src/app/posts/posts.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/posts.service.ts");

    var PostsComponent = function PostsComponent(postsService) {
      _classCallCheck(this, PostsComponent);

      this.postsService = postsService;
    };

    PostsComponent.ctorParameters = function () {
      return [{
        type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }];
    };

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.scss */
      "./src/app/posts/posts.component.scss")).default]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/app/ref.directive.ts":
  /*!**********************************!*\
    !*** ./src/app/ref.directive.ts ***!
    \**********************************/

  /*! exports provided: RefDirective */

  /***/
  function srcAppRefDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefDirective", function () {
      return RefDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RefDirective = function RefDirective(containerRef) {
      _classCallCheck(this, RefDirective);

      this.containerRef = containerRef;
    };

    RefDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    RefDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appRef]'
    })], RefDirective);
    /***/
  },

  /***/
  "./src/app/registration/registration.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/registration/registration.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationRegistrationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  padding-left: 70px;\n  font-family: Cambria;\n  font-size: large;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 2px solid red;\n}\n\ninput.ng-valid.ng-touched {\n  border: 2px solid #2bca0b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0M6XFxVc2Vyc1xcQW5uZWdhXFxXZWJzdG9ybVByb2plY3RzXFxteUJsb2cvc3JjXFxhcHBcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER0U7RUFFRSxxQkFBQTtBQ0RKOztBRElFO0VBRUMseUJBQUE7QUNISCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWE7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICYubmctaW52YWxpZC5uZy10b3VjaGVkXHJcbiAge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuXHJcbiAgJi5uZy12YWxpZC5uZy10b3VjaGVkXHJcbiAge1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCAjMmJjYTBiO1xyXG4gfVxyXG59XHJcbiIsImgzIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICBmb250LWZhbWlseTogQ2FtYnJpYTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYmNhMGI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent() {
        _classCallCheck(this, RegistrationComponent);
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('bg'),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          console.log(this.form.value);
        }
      }, {
        key: "setCapital",
        value: function setCapital() {
          var cityMap = {
            ru: 'Moscow',
            bg: 'Sofia',
            de: 'Berlin'
          };
          var city = cityMap[this.form.get('address').get('country').value]; //  console.log(city);

          this.form.patchValue({
            address: {
              city: city
            }
          });
        }
      }, {
        key: "addSkill",
        value: function addSkill() {
          var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.form.get('skills').push(control);
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.component.scss */
      "./src/app/registration/registration.component.scss")).default]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/shared/list-music.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/list-music.service.ts ***!
    \**********************************************/

  /*! exports provided: ListMusicService */

  /***/
  function srcAppSharedListMusicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListMusicService", function () {
      return ListMusicService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var ListMusicService =
    /*#__PURE__*/
    function () {
      function ListMusicService() {
        var _this3 = this;

        _classCallCheck(this, ListMusicService);

        this.files = [{
          url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1685%20Purcell%20%2C%20Trumpet%20Tune%20and%20Air.mp3',
          name: 'Trumpet Tune and Air',
          artist: 'Purcell',
          id: 0
        }, {
          // tslint:disable-next-line: max-line-length
          url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1709%20Bach%20%2C%20Toccata%20in%20D%20minor.mp3',
          name: '1709 Bach Toccata in D minor',
          artist: 'J.S. Bach',
          id: 1
        }, {
          // tslint:disable-next-line: max-line-length
          url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1725%20Vivaldi%20%2C%20The%20Four%20Seasons%20-%20Spring.mp3',
          name: 'Vivaldi The four seasons. Spring.',
          artist: 'Vivaldi',
          id: 2
        }];
        this.audioObj = new Audio();
        this.p = new Promise(function (resolve) {
          setTimeout(function () {
            resolve('Promise resolved');
          }, 4000);
        });
        this.myDate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
          setInterval(function () {
            obs.next(100 - 100 * (_this3.audioObj.duration - _this3.audioObj.currentTime) / _this3.audioObj.duration);
            _this3.strTime = _this3.getformatedTime(_this3.audioObj.duration - _this3.audioObj.currentTime);
          }, 500);
        });
        this.audioObj.src = this.files[0].url;
        this.strTime = this.getformatedTime(this.audioObj.duration);
      }

      _createClass(ListMusicService, [{
        key: "getformatedTime",
        value: function getformatedTime(time) {
          var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';
          var momentTime = time * 1000;
          return moment__WEBPACK_IMPORTED_MODULE_3__["utc"](momentTime).format(format);
        }
      }, {
        key: "getTrack",
        value: function getTrack() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.files); // get a new track from array files
        }
      }, {
        key: "onplay",
        value: function onplay(id) {
          // Play audio
          this.audioObj.src = this.files[id].url; // this.strTime = this.getformatedTime(this.audioObj.duration);

          this.audioObj.load();
          this.audioObj.play();
        }
      }, {
        key: "onpause",
        value: function onpause(id) {
          this.audioObj.pause();
        }
      }, {
        key: "onstop",
        value: function onstop(id) {
          this.audioObj.pause();
        }
      }, {
        key: "getTrackName",
        value: function getTrackName(id) {
          var str = this.files[id].artist;
          return str;
        }
      }, {
        key: "getlenght",
        value: function getlenght() {
          return this.audioObj.currentTime;
        }
      }]);

      return ListMusicService;
    }();

    ListMusicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ListMusicService);
    /***/
  },

  /***/
  "./src/app/shared/todos-flter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/todos-flter.pipe.ts ***!
    \********************************************/

  /*! exports provided: TodosFlterPipe */

  /***/
  function srcAppSharedTodosFlterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosFlterPipe", function () {
      return TodosFlterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TodosFlterPipe =
    /*#__PURE__*/
    function () {
      function TodosFlterPipe() {
        _classCallCheck(this, TodosFlterPipe);
      }

      _createClass(TodosFlterPipe, [{
        key: "transform",
        value: function transform(todos) {
          var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (!search.trim()) {
            return todos;
          }

          return todos.filter(function (todo) {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
        }
      }]);

      return TodosFlterPipe;
    }();

    TodosFlterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'todosFilter'
    })], TodosFlterPipe);
    /***/
  },

  /***/
  "./src/app/shared/todos.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/todos.service.ts ***!
    \*****************************************/

  /*! exports provided: TodosService */

  /***/
  function srcAppSharedTodosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosService", function () {
      return TodosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TodosService =
    /*#__PURE__*/
    function () {
      function TodosService(http) {
        _classCallCheck(this, TodosService);

        this.http = http;
        this.todos = [];
      }

      _createClass(TodosService, [{
        key: "fetchTodos",
        value: function fetchTodos() {
          var _this4 = this;

          return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=10').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (todos) {
            return _this4.todos = todos;
          }));
        }
      }, {
        key: "onToggle",
        value: function onToggle(id) {
          var idx = this.todos.findIndex(function (t) {
            return t.id === id;
          });
          this.todos[idx].completed = !this.todos[idx].completed;
        }
      }, {
        key: "removeTodo",
        value: function removeTodo(id) {
          this.todos = this.todos.filter(function (t) {
            return t.id !== id;
          });
        }
      }, {
        key: "addTodo",
        value: function addTodo(todo) {
          this.todos.push(todo);
        }
      }]);

      return TodosService;
    }();

    TodosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TodosService);
    /***/
  },

  /***/
  "./src/app/todo-form/todo-form.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/todo-form/todo-form.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoFormTodoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 30px;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n.input {\n  display: block;\n  width: 80%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  margin: 1.2rem;\n}\n\n.filter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  margin-bottom: 1rem;\n  height: 30px;\n}\n\n.button {\n  display: inline-block;\n  background: #333333;\n  color: #fff;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  -webkit-transition: opacity 0.2s ease-in;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1mb3JtL0M6XFxVc2Vyc1xcQW5uZWdhXFxXZWJzdG9ybVByb2plY3RzXFxteUJsb2cvc3JjXFxhcHBcXHRvZG8tZm9ybVxcdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBRUUsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xyXG59XHJcblxyXG4uaW5wdXRcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMS4ycmVtO1xyXG59XHJcblxyXG4uZmlsdGVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMC40cmVtIDEuM3JlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4iLCJkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEuMnJlbTtcbn1cblxuLmZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/todo-form/todo-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/todo-form/todo-form.component.ts ***!
    \**************************************************/

  /*! exports provided: TodoFormComponent */

  /***/
  function srcAppTodoFormTodoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function () {
      return TodoFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/todos.service */
    "./src/app/shared/todos.service.ts");

    var TodoFormComponent =
    /*#__PURE__*/
    function () {
      function TodoFormComponent(todosService) {
        _classCallCheck(this, TodoFormComponent);

        this.todosService = todosService;
        this.title = '';
      }

      _createClass(TodoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addTodo",
        value: function addTodo() {
          var todo = {
            title: this.title,
            id: Date.now(),
            completed: false,
            date: new Date()
          };
          this.todosService.addTodo(todo);
          this.title = '';
        }
      }]);

      return TodoFormComponent;
    }();

    TodoFormComponent.ctorParameters = function () {
      return [{
        type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"]
      }];
    };

    TodoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-form/todo-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-form.component.scss */
      "./src/app/todo-form/todo-form.component.scss")).default]
    })], TodoFormComponent);
    /***/
  },

  /***/
  "./src/app/todos/todos.component.scss":
  /*!********************************************!*\
    !*** ./src/app/todos/todos.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodosTodosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".done {\n  text-decoration: line-through;\n}\n\n.rm {\n  border-radius: 50%;\n  background: green;\n  color: #fff;\n  font-size: 1rem;\n  border: none;\n  width: 20px;\n  height: 20px;\n  -webkit-transition: 0.3s all;\n  transition: 0.3s all;\n  cursor: pointer;\n}\n\n.rm:hover {\n  background: #001a00;\n}\n\n.filter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  margin-bottom: 1rem;\n  height: 30px;\n}\n\n.input {\n  display: block;\n  width: 30%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  margin: 1.2rem;\n}\n\n.list {\n  display: inline-block;\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvQzpcXFVzZXJzXFxBbm5lZ2FcXFdlYnN0b3JtUHJvamVjdHNcXG15QmxvZy9zcmNcXGFwcFxcdG9kb3NcXHRvZG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFFSSxrQkFBQTtFQUNBLGlCQUZPO0VBR1AsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVJO0VBQ0ksbUJBQUE7QUNBUjs7QURJQTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FETUE7RUFFRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSkY7O0FET0E7RUFFRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb25le1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnJte1xyXG4gICAgJGNvbG9yOmdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiRjb2xvcjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MXJlbTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6MjBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjouM3MgYWxsO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOmRhcmtlbigkY29sb3IsIDIwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0ZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbi5pbnB1dFxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxLjJyZW07XHJcbn1cclxuXHJcbi5saXN0XHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG4iLCIuZG9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4ucm0ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAxYTAwO1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxLjJyZW07XG59XG5cbi5saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todos/todos.component.ts":
  /*!******************************************!*\
    !*** ./src/app/todos/todos.component.ts ***!
    \******************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/todos.service */
    "./src/app/shared/todos.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TodosComponent =
    /*#__PURE__*/
    function () {
      function TodosComponent(todosService, router) {
        _classCallCheck(this, TodosComponent);

        this.todosService = todosService;
        this.router = router;
        this.loading = true;
        this.searchString = '';
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.todosService.fetchTodos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000)).subscribe(function () {
            _this5.loading = false;
          });
        }
      }, {
        key: "onChange",
        value: function onChange(id) {
          this.todosService.onToggle(id);
        }
      }, {
        key: "removeTodo",
        value: function removeTodo(id) {
          this.todosService.removeTodo(id);
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ctorParameters = function () {
      return [{
        type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todos.component.scss */
      "./src/app/todos/todos.component.scss")).default]
    })], TodosComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Annega\WebstormProjects\myBlog\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map