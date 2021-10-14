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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(db) {
      _classCallCheck(this, AppComponent);

      this.items = db.collection('items').valueChanges();
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "mt-2", "text-center"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "flash-messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_conexion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/conexion.service */
    "./src/app/services/conexion.service.ts");
    /* harmony import */


    var _components_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/lista/lista.component */
    "./src/app/components/lista/lista.component.ts");
    /* harmony import */


    var _components_lista_add_lista_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/lista-add/lista-add.component */
    "./src/app/components/lista-add/lista-add.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/admin/login/login.component */
    "./src/app/components/admin/login/login.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _app_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../app/components/guard/auth.guard */
    "./src/app/components/guard/auth.guard.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/__ivy_ngcc__/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_20__); // import { AngularFireModule } from "angularfire2";
    // const routes: Routes = [
    //   {path: 'claves', component: ListaComponent},
    //   {path: 'add', component: ListaAddComponent},
    //   {path: 'login', component: LoginComponent},
    //   { path: '',  component: HomeComponent, pathMatch:'full'},
    //   { path: '**', redirectTo: '/',pathMatch:'full'}
    // ];


    var routes = [{
      path: 'side',
      component: _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"]
    }, {
      path: 'claves',
      component: _components_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ListaComponent"],
      canActivate: [_app_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    }, {
      path: 'add',
      component: _components_lista_add_lista_add_component__WEBPACK_IMPORTED_MODULE_13__["ListaAddComponent"],
      canActivate: [_app_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
      canActivate: [_app_components_guard_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]]
    }, {
      path: '',
      component: _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_conexion_service__WEBPACK_IMPORTED_MODULE_11__["ConexionService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuth"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_20__["SidebarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ListaComponent"], _components_lista_add_lista_add_component__WEBPACK_IMPORTED_MODULE_13__["ListaAddComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_20__["SidebarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ListaComponent"], _components_lista_add_lista_add_component__WEBPACK_IMPORTED_MODULE_13__["ListaAddComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_20__["SidebarModule"]],
          providers: [_services_conexion_service__WEBPACK_IMPORTED_MODULE_11__["ConexionService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuth"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/admin/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsAdminLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(afAuth, router, authService) {
        _classCallCheck(this, LoginComponent);

        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.pass = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onLogout();
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          this.authService.loginEmailUser(this.email, this.pass).then(function (res) {
            _this.onLoginRedirect();
          })["catch"](function (err) {
            return console.log('err', err);
          });
        }
      }, {
        key: "onLoginGoogle",
        value: function onLoginGoogle() {
          var _this2 = this;

          // this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
          this.authService.loginGoogleUser().then(function (res) {
            console.log("entro");

            _this2.onLoginRedirect();
          })["catch"](function (err) {
            return console.log('error', err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logoutUser();
        }
      }, {
        key: "onLoginFacebook",
        value: function onLoginFacebook() {
          var _this3 = this;

          this.authService.loginFacebookUser().then(function (res) {
            _this3.onLoginRedirect();
          })["catch"](function (err) {
            return console.log('error', err);
          });
        }
      }, {
        key: "onLoginRedirect",
        value: function onLoginRedirect() {
          this.router.navigate(["/home"]);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 2,
      consts: [[1, "container", "mt-5", "col-md-3", "text-center"], [1, "form-signin", 3, "submit"], ["src", "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["type", "email", "name", "user", "placeholder", "Usuario", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pass", "placeholder", "Password", "required", "", 1, "mt-2", "form-control", 3, "ngModel", "ngModelChange"], [1, "checkbox", "mb-3"], ["type", "submit", 1, "btn", "btn-lg", "btn-dark", "btn-block"], [1, "form-group", "mt-5"], [1, "btnrsg", "fab", "fa-facebook", 3, "click"], [1, "btnrsg", "fab", "fa-google", "mx-2", 3, "click"], [1, "mt-5", "mb-3", "text-muted"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aceptar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_11_listener() {
            return ctx.onLoginFacebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_12_listener() {
            return ctx.onLoginGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA9 JP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pass);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".btnrsg[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color:black;\r\n    display: -ms-flexbox;\r\n    \r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    margin: 2px;\r\n  }\r\n  \r\n  .btnrsg[_ngcontent-%COMP%]:hover {\r\n    color:black;\r\n    background-color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFLWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5yc2cge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bnJzZzpob3ZlciB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/guard/auth.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/components/guard/auth.guard.ts ***!
    \************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppComponentsGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/operators/map */
    "./node_modules/rxjs/internal/operators/map.js");
    /* harmony import */


    var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authSvc, router) {
        _classCallCheck(this, AuthGuard);

        this.authSvc = authSvc;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this4 = this;

          return this.authSvc.isAuth().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (auth) {
            if (!auth) {
              _this4.router.navigate(['']);

              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/claves"];
    };

    var _c2 = function _c2() {
      return ["/login"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, afsAuth) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.afsAuth = afsAuth;
        this.logueado = false;
        this.muestra = "none";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCurrentUser();
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this5 = this;

          this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
              console.log('Login True');
              _this5.logueado = true;
              _this5.muestra = "";
            } else {
              console.log('Login False');
              _this5.logueado = false;
              _this5.muestra = "none";
            }
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.afsAuth.signOut();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 23,
      vars: 9,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["href", "#", 1, "dropdown-item"], [1, "form-inline", "my-2", "my-lg-0"], ["data-toggle", "tooltip", "title", "Salir", 1, "fas", "fa-sign-in-alt", 2, "color", "white"], [1, "nav-link", 3, "routerLink", "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Gestor de Claves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Men\xFA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Claves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Otros...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display:", ctx.muestra, ";");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 0,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/lista-add/lista-add.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/lista-add/lista-add.component.ts ***!
    \*************************************************************/

  /*! exports provided: ListaAddComponent */

  /***/
  function srcAppComponentsListaAddListaAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaAddComponent", function () {
      return ListaAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/conexion.service */
    "./src/app/services/conexion.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/claves"];
    };

    var ListaAddComponent = /*#__PURE__*/function () {
      function ListaAddComponent(servicio, flashMensaje) {
        _classCallCheck(this, ListaAddComponent);

        this.servicio = servicio;
        this.flashMensaje = flashMensaje;
        this.item = {
          name: '',
          pass: '',
          descrip: ''
        };
      }

      _createClass(ListaAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregar",
        value: function agregar() {
          if (this.item.name == '' || this.item.pass == '' || this.item.descrip == '') {} else {
            try {
              this.servicio.agregarItem(this.item);
              this.flashMensaje.show('Se registro correctamente.', {
                cssClass: 'alert alert-success',
                timeout: 3000
              });
              this.item.name = '';
              this.item.pass = '';
              this.item.descrip = '';
            } catch (error) {
              this.flashMensaje.show(error.message, {
                cssClass: 'alert alert-danger',
                timeout: 3000
              });
              console.error('Log error: ', error);
            }
          }
        }
      }]);

      return ListaAddComponent;
    }();

    ListaAddComponent.ɵfac = function ListaAddComponent_Factory(t) {
      return new (t || ListaAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]));
    };

    ListaAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListaAddComponent,
      selectors: [["app-lista-add"]],
      decls: 15,
      vars: 5,
      consts: [[1, "container", "mt-3", "float-right"], [1, "row"], [1, "col-md-6"], [3, "ngSubmit"], [1, "mt-2"], ["type", "text", "placeholder", "Usuario", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Password", "name", "pass", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Descripci\xF3n", "name", "descrip", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "float-left"], [1, "btn", "btn-dark", "mt-2", "fas", "fa-plus-circle"], [1, "float-right", "mx-2"], [1, "btn", "btn-dark", "mt-2", "fas", "fa-arrow-circle-left", 3, "routerLink"]],
      template: function ListaAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListaAddComponent_Template_form_ngSubmit_3_listener() {
            return ctx.agregar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaAddComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.item.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaAddComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.item.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaAddComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.item.descrip = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.descrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtYWRkL2xpc3RhLWFkZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lista-add',
          templateUrl: './lista-add.component.html',
          styleUrls: ['./lista-add.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/lista/lista.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/lista/lista.component.ts ***!
    \*****************************************************/

  /*! exports provided: ListaComponent */

  /***/
  function srcAppComponentsListaListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaComponent", function () {
      return ListaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/conexion.service */
    "./src/app/services/conexion.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/__ivy_ngcc__/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ListaComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaComponent_tr_14_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.eliminar(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaComponent_tr_14_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.editar(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.pass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.descrip);
      }
    }

    var ListaComponent = /*#__PURE__*/function () {
      function ListaComponent(conexion, flashMensaje) {
        var _this6 = this;

        _classCallCheck(this, ListaComponent);

        this.conexion = conexion;
        this.flashMensaje = flashMensaje;
        this.item = {
          name: '',
          pass: '',
          descrip: ''
        };
        this.editarItem = {
          name: ''
        };
        this.conexion.listaItem().subscribe(function (item) {
          _this6.items = item;
          console.log(_this6.items);
        });
      }

      _createClass(ListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "eliminar",
        value: function eliminar(item) {
          try {
            this.conexion.eliminarItem(item);
            this.flashMensaje.show('Registro eliminado correctamente.', {
              cssClass: 'alert alert-danger',
              timeout: 3000
            });
          } catch (error) {
            this.flashMensaje.show(error.message, {
              cssClass: 'alert alert-danger',
              timeout: 3000
            });
            console.error('Log error: ', error);
          }
        }
      }, {
        key: "editar",
        value: function editar(item) {
          this.editarItem = item;
        }
      }, {
        key: "agregarItemEditado",
        value: function agregarItemEditado() {
          try {
            this.conexion.editarItem(this.editarItem);
            this.flashMensaje.show('Se edito el registro correctamente.', {
              cssClass: 'alert alert-success',
              timeout: 3000
            });
          } catch (error) {
            this.flashMensaje.show(error.message, {
              cssClass: 'alert alert-danger',
              timeout: 3000
            });
            console.error('Log error: ', error);
          }
        }
      }, {
        key: "agregar",
        value: function agregar() {
          if (this.item.name == '' || this.item.pass == '' || this.item.descrip == '') {} else {
            try {
              this.conexion.agregarItem(this.item);
              this.flashMensaje.show('Se registro correctamente.', {
                cssClass: 'alert alert-success',
                timeout: 3000
              });
              this.item.name = '';
              this.item.pass = '';
              this.item.descrip = '';
            } catch (error) {
              this.flashMensaje.show(error.message, {
                cssClass: 'alert alert-danger',
                timeout: 3000
              });
              console.error('Log error: ', error);
            }
          }
        }
      }]);

      return ListaComponent;
    }();

    ListaComponent.ɵfac = function ListaComponent_Factory(t) {
      return new (t || ListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]));
    };

    ListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListaComponent,
      selectors: [["app-lista"]],
      decls: 57,
      vars: 7,
      consts: [[1, "container", "mt-3", "text-right"], ["data-toggle", "modal", "data-target", "#exampleModalInsert", 1, "btn", "btn-dark", "mt-3", "fas", "fa-puzzle-piece", 3, "click"], [1, "container", "mt-1"], [1, "table", "table-striped"], [1, "thead-dark"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["type", "text", "placeholder", "Edita Usuario", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mt-2"], ["type", "text", "placeholder", "Edita Password", "name", "pass", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Edita Descripci\xF3n", "name", "descrip", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-toggle", "tooltip", "title", "Editar", 1, "float-left"], ["type", "submit", 1, "btn", "btn-dark", "mt-3", "fas", "fa-edit"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", "data-toggle", "tooltip", "title", "Cerrar", 1, "btn", "btn-dark", "fas", "fa-times-circle"], ["id", "exampleModalInsert", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "text", "placeholder", "Usuario", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Password", "name", "pass", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Descripci\xF3n", "name", "descrip", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-toggle", "tooltip", "title", "Agregar", 1, "float-left"], ["type", "submit", 1, "btn", "btn-dark", "mt-3", "fas", "fa-plus-circle"], [1, "text-center"], [1, "float-right", 3, "click"], [1, "far", "fa-trash-alt"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "float-right", "mx-2", 3, "click"], [1, "far", "fa-edit"]],
      template: function ListaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaComponent_Template_button_click_1_listener() {
            return ctx.agregar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListaComponent_tr_14_Template, 12, 3, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Editar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListaComponent_Template_form_ngSubmit_25_listener() {
            return ctx.agregarItemEditado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.editarItem.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.editarItem.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.editarItem.descrip = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nuevo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ListaComponent_Template_form_ngSubmit_46_listener() {
            return ctx.agregar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.item.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.item.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.item.descrip = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editarItem.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editarItem.pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editarItem.descrip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.descrip);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEvbGlzdGEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lista',
          templateUrl: './lista.component.html',
          styleUrls: ['./lista.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_conexion_service__WEBPACK_IMPORTED_MODULE_1__["ConexionService"]
        }, {
          type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/__ivy_ngcc__/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_1__);

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);

        this.opened = false;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "abrirMenu",
        value: function abrirMenu() {
          this.opened = !this.opened;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 42,
      vars: 1,
      consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", "list-group-item-action", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [3, "opened"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Bootstrap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shortcuts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_17_listener() {
            return ctx.abrirMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ng-sidebar-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ng-sidebar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        }
      },
      directives: [ng_sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarContainer"], ng_sidebar__WEBPACK_IMPORTED_MODULE_1__["Sidebar"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n  }\r\n #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n  }\r\n #sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n    padding: 0.875rem 1.25rem;\r\n    font-size: 1.2rem;\r\n  }\r\n #sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n    width: 15rem;\r\n  }\r\n #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n  }\r\n #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n @media (min-width: 768px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: -15rem;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFO0NBQ0Q7SUFDRyxrQkFBa0I7RUFDcEI7Q0FFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFJbkIsZ0NBQWdDO0VBQ2xDO0NBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25CO0NBRUE7SUFDRSxZQUFZO0VBQ2Q7Q0FFQTtJQUNFLGdCQUFnQjtFQUNsQjtDQUVBO0lBQ0UsY0FBYztFQUNoQjtDQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBTaW1wbGUgU2lkZWJhciAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL3NpbXBsZS1zaWRlYmFyKVxyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE5IFN0YXJ0IEJvb3RzdHJhcFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja3JvY2tEaWdpdGFsL3N0YXJ0Ym9vdHN0cmFwLXNpbXBsZS1zaWRlYmFyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG4gYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afsAuth) {
        _classCallCheck(this, AuthService);

        this.afsAuth = afsAuth;
      }

      _createClass(AuthService, [{
        key: "loginEmailUser",
        value: function loginEmailUser(email, pass) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.afsAuth.signInWithEmailAndPassword(email, pass).then(function (userInfo) {
              return resolve(userInfo);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginFacebookUser",
        value: function loginFacebookUser() {
          try {
            console.log("entro");
            return this.afsAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
          } catch (error) {
            console.error(error);
          }
        }
      }, {
        key: "loginGoogleUser",
        value: function loginGoogleUser() {
          try {
            return this.afsAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
          } catch (error) {
            console.error(error);
          }
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          this.afsAuth.signOut();
        }
      }, {
        key: "isAuth",
        value: function isAuth() {
          return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (auth) {
            return auth;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/conexion.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/conexion.service.ts ***!
    \**********************************************/

  /*! exports provided: ConexionService */

  /***/
  function srcAppServicesConexionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConexionService", function () {
      return ConexionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ConexionService = /*#__PURE__*/function () {
      function ConexionService(afs) {
        _classCallCheck(this, ConexionService);

        this.afs = afs;
        this.itemsCollection = afs.collection('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
      }

      _createClass(ConexionService, [{
        key: "listaItem",
        value: function listaItem() {
          return this.items;
        }
      }, {
        key: "agregarItem",
        value: function agregarItem(item) {
          this.itemsCollection.add(item);
        }
      }, {
        key: "eliminarItem",
        value: function eliminarItem(item) {
          this.itemDoc = this.afs.doc("items/".concat(item.id));
          this.itemDoc["delete"]();
        }
      }, {
        key: "editarItem",
        value: function editarItem(item) {
          this.itemDoc = this.afs.doc("items/".concat(item.id));
          this.itemDoc.update(item);
        }
      }]);

      return ConexionService;
    }();

    ConexionService.ɵfac = function ConexionService_Factory(t) {
      return new (t || ConexionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    ConexionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConexionService,
      factory: ConexionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConexionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyA_aTvieyLva6QI2RgelfacwjaeMHkvmfU",
        authDomain: "angularfire-d57b9.firebaseapp.com",
        databaseURL: "https://angularfire-d57b9.firebaseio.com",
        projectId: "angularfire-d57b9",
        storageBucket: "angularfire-d57b9.appspot.com",
        messagingSenderId: "693135041219",
        appId: "1:693135041219:web:35194727a7a753b3f9f876",
        measurementId: "G-SE32BMNEEK"
      }
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\javip\Documents\Desarrollo\cursoangular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map