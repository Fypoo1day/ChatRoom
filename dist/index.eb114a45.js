// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eSrN1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "5a9365aceb114a45";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _index = require("./pages/index");
var _chat = require("./pages/chat");
var _router = require("./router");
var _state = require("./state");
_state.state.init();

},{"./pages/index":"bBJsB","./pages/chat":"6Pnpq","./router":"b2iia","./state":"28XHA"}],"bBJsB":[function(require,module,exports) {
var _router = require("@vaadin/router");
var _state = require("../state");
class Home extends HTMLElement {
    connectedCallback() {
        this.render();
        const form = this.querySelector(".form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const target = e.target;
            console.log(target.nombre.value);
            _state.state.setNombre(target.nombre.value);
            _router.Router.go("/chat");
        });
    }
    render() {
        this.innerHTML = `\n        <form class="form">\n          <div>\n             <label>Tu nombre</label>\n          </div>\n          <input type="text" name="nombre">\n          <button>Comenzar</button>\n        </form>\n      `;
    }
}
customElements.define("x-home-page", Home);

},{"@vaadin/router":"kFgop","../state":"28XHA"}],"kFgop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resolver", ()=>Resolver
);
parcelHelpers.export(exports, "Router", ()=>Router
);
function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [
        objectOrArray
    ];
}
function log(msg) {
    return `[Vaadin.Router] ${msg}`;
}
function logValue(value) {
    if (typeof value !== 'object') return String(value);
    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === 'Object' || stringType === 'Array') return `${stringType} ${JSON.stringify(value)}`;
    else return stringType;
}
const MODULE = 'module';
const NOMODULE = 'nomodule';
const bundleKeys = [
    MODULE,
    NOMODULE
];
function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`));
}
function ensureRoute(route) {
    if (!route || !isString(route.path)) throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`));
    const bundle = route.bundle;
    const stringKeys = [
        'component',
        'redirect',
        'bundle'
    ];
    if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isObject(bundle) && !stringKeys.some((key)=>isString(route[key])
    )) throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` + `or "action" function but none found.`));
    if (bundle) {
        if (isString(bundle)) ensureBundle(bundle);
        else if (!bundleKeys.some((key)=>key in bundle
        )) throw new Error(log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both'));
        else bundleKeys.forEach((key)=>key in bundle && ensureBundle(bundle[key])
        );
    }
    if (route.redirect) [
        'bundle',
        'component'
    ].forEach((overriddenProp)=>{
        if (overriddenProp in route) console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` + `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`));
    });
}
function ensureRoutes(routes) {
    toArray(routes).forEach((route)=>ensureRoute(route)
    );
}
function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
        script = document.createElement('script');
        script.setAttribute('src', src);
        if (key === MODULE) script.setAttribute('type', MODULE);
        else if (key === NOMODULE) script.setAttribute(NOMODULE, '');
        script.async = true;
    }
    return new Promise((resolve, reject)=>{
        script.onreadystatechange = script.onload = (e)=>{
            script.__dynamicImportLoaded = true;
            resolve(e);
        };
        script.onerror = (e)=>{
            if (script.parentNode) script.parentNode.removeChild(script);
            reject(e);
        };
        if (script.parentNode === null) document.head.appendChild(script);
        else if (script.__dynamicImportLoaded) resolve();
    });
}
function loadBundle(bundle) {
    if (isString(bundle)) return loadScript(bundle);
    else return Promise.race(bundleKeys.filter((key)=>key in bundle
    ).map((key)=>loadScript(bundle[key], key)
    ));
}
function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, {
        cancelable: type === 'go',
        detail
    }));
}
function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === 'object' && !!o;
}
function isFunction(f) {
    return typeof f === 'function';
}
function isString(s) {
    return typeof s === 'string';
}
function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
}
const notFoundResult = new class NotFoundResult {
}();
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === 'http:' && port === '80';
    const defaultHttps = protocol === 'https:' && port === '443';
    const host = defaultHttp || defaultHttps ? anchor.hostname // does not include the port number (e.g. www.example.org)
     : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
}
// The list of checks is not complete:
//  - SVG support is missing
//  - the 'rel' attribute is not considered
function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) return;
    // ignore the click if not with the primary mouse button
    if (event.button !== 0) return;
    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath ? event.composedPath() : event.path || [];
    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for(let i = 0; i < path.length; i++){
        const target = path[i];
        if (target.nodeName && target.nodeName.toLowerCase() === 'a') {
            anchor = target;
            break;
        }
    }
    while(anchor && anchor.nodeName.toLowerCase() !== 'a')anchor = anchor.parentNode;
    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== 'a') return;
    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== '_self') return;
    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute('download')) return;
    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute('router-ignore')) return;
    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== '') return;
    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) return;
    // if none of the above, convert the click into a navigation event
    const { pathname , search , hash  } = anchor;
    if (fireRouterEvent('go', {
        pathname,
        search,
        hash
    })) {
        event.preventDefault();
        // for a click event, the scroll is reset to the top position.
        if (event && event.type === 'click') window.scrollTo(0, 0);
    }
}
/**
 * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
 * into Vaadin Router navigation events.
 *
 * Only regular clicks on in-app links are translated (primary mouse button, no
 * modifier keys, the target href is within the app's URL space).
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const CLICK = {
    activate () {
        window.document.addEventListener('click', vaadinRouterGlobalClickHandler);
    },
    inactivate () {
        window.document.removeEventListener('click', vaadinRouterGlobalClickHandler);
    }
};
// PopStateEvent constructor shim
const isIE = /Trident/.test(navigator.userAgent);
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
        params = params || {
        };
        var e = document.createEvent('Event');
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        e.state = params.state || null;
        return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
}
function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === 'vaadin-router-ignore') return;
    const { pathname , search , hash  } = window.location;
    fireRouterEvent('go', {
        pathname,
        search,
        hash
    });
}
/**
 * A navigation trigger for Vaadin Router that translates popstate events into
 * Vaadin Router navigation events.
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const POPSTATE = {
    activate () {
        window.addEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    },
    inactivate () {
        window.removeEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    }
};
/**
 * Expose `pathToRegexp`.
 */ var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * Default configs.
 */ var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */ var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */ function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
    var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while((res = PATH_REGEXP.exec(str)) !== null){
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = '';
            pathEscaped = false;
        }
        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) tokens.push(path + str.substr(index));
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for(var i = 0; i < tokens.length; i++)if (typeof tokens[i] === 'object') matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    return function(data, options) {
        var path = '';
        var encode = options && options.encode || encodeURIComponent;
        for(var i1 = 0; i1 < tokens.length; i1++){
            var token = tokens[i1];
            if (typeof token === 'string') {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var segment;
            if (Array.isArray(value)) {
                if (!token.repeat) throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
                if (value.length === 0) {
                    if (token.optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    segment = encode(value[j], token);
                    if (!matches[i1].test(segment)) throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                segment = encode(String(value), token);
                if (!matches[i1].test(segment)) throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                path += token.prefix + segment;
                continue;
            }
            if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) path += token.prefix;
                continue;
            }
            throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */ function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */ function flags(options) {
    return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) for(var i = 0; i < groups.length; i++)keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
    });
    return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function arrayToRegexp(path, keys, options) {
    var parts = [];
    for(var i = 0; i < path.length; i++)parts.push(pathToRegexp(path[i], keys, options).source);
    return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function tokensToRegExp(tokens, keys, options) {
    options = options || {
    };
    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = start ? '^' : '';
    var isEndDelimited = tokens.length === 0;
    // Iterate over the tokens and create our regexp string.
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        } else {
            var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*' : token.pattern;
            if (keys) keys.push(token);
            if (token.optional) {
                if (token.partial) route += escapeString(token.prefix) + '(' + capture + ')?';
                else route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
            } else route += escapeString(token.prefix) + '(' + capture + ')';
        }
    }
    if (end) {
        if (!strict) route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    } else {
        if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { hasOwnProperty  } = Object.prototype;
const cache = new Map();
// see https://github.com/pillarjs/path-to-regexp/issues/148
cache.set('|false', {
    keys: [],
    pattern: /(?:)/
});
function decodeParam(val) {
    try {
        return decodeURIComponent(val);
    } catch (err) {
        return val;
    }
}
function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache.get(cacheKey);
    if (!regexp) {
        const keys = [];
        regexp = {
            keys,
            pattern: pathToRegexp_1(routepath, keys, {
                end: exact,
                strict: routepath === ''
            })
        };
        cache.set(cacheKey, regexp);
    }
    const m = regexp.pattern.exec(path);
    if (!m) return null;
    const params = Object.assign({
    }, parentParams);
    for(let i = 1; i < m.length; i++){
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== undefined || !hasOwnProperty.call(params, prop)) {
            if (key.repeat) params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
            else params[prop] = value ? decodeParam(value) : value;
        }
    }
    return {
        path: m[0],
        keys: (parentKeys || []).concat(regexp.keys),
        params
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ /**
 * Traverses the routes tree and matches its nodes to the given pathname from
 * the root down to the leaves. Each match consumes a part of the pathname and
 * the matching process continues for as long as there is a matching child
 * route for the remaining part of the pathname.
 *
 * The returned value is a lazily evaluated iterator.
 *
 * The leading "/" in a route path matters only for the root of the routes
 * tree (or if all parent routes are ""). In all other cases a leading "/" in
 * a child route path has no significance.
 *
 * The trailing "/" in a _route path_ matters only for the leaves of the
 * routes tree. A leaf route with a trailing "/" matches only a pathname that
 * also has a trailing "/".
 *
 * The trailing "/" in a route path does not affect matching of child routes
 * in any way.
 *
 * The trailing "/" in a _pathname_ generally does not matter (except for
 * the case of leaf nodes described above).
 *
 * The "" and "/" routes have special treatment:
 *  1. as a single route
 *     the "" and "/" routes match only the "" and "/" pathnames respectively
 *  2. as a parent in the routes tree
 *     the "" route matches any pathname without consuming any part of it
 *     the "/" route matches any absolute pathname consuming its leading "/"
 *  3. as a leaf in the routes tree
 *     the "" and "/" routes match only if the entire pathname is consumed by
 *         the parent routes chain. In this case "" and "/" are equivalent.
 *  4. several directly nested "" or "/" routes
 *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
 *       "/" routes does not require a double "/" in the pathname to match)
 *     - if there are only "" in the parent routes chain, no part of the
 *       pathname is consumed, and the leading "/" in the child routes' paths
 *       remains significant
 *
 * Side effect:
 *   - the routes tree { path: '' } matches only the '' pathname
 *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
 *     pathname (for the tree root)
 *
 * Prefix matching can be enabled also by `children: true`.
 */ function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || '';
    if (routepath.charAt(0) === '/') {
        if (ignoreLeadingSlash) routepath = routepath.substr(1);
        ignoreLeadingSlash = true;
    }
    return {
        next (routeToSkip) {
            if (route === routeToSkip) return {
                done: true
            };
            const children = route.__children = route.__children || route.children;
            if (!match) {
                match = matchPath(routepath, pathname, !children, parentKeys, parentParams);
                if (match) return {
                    done: false,
                    value: {
                        route,
                        keys: match.keys,
                        params: match.params,
                        path: match.path
                    }
                };
            }
            if (match && children) while(childIndex < children.length){
                if (!childMatches) {
                    const childRoute = children[childIndex];
                    childRoute.parent = route;
                    let matchedLength = match.path.length;
                    if (matchedLength > 0 && pathname.charAt(matchedLength) === '/') matchedLength += 1;
                    childMatches = matchRoute(childRoute, pathname.substr(matchedLength), ignoreLeadingSlash, match.keys, match.params);
                }
                const childMatch = childMatches.next(routeToSkip);
                if (!childMatch.done) return {
                    done: false,
                    value: childMatch.value
                };
                childMatches = null;
                childIndex++;
            }
            return {
                done: true
            };
        }
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function resolveRoute(context) {
    if (isFunction(context.route.action)) return context.route.action(context);
    return undefined;
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while(route){
        route = route.parent;
        if (route === parentRoute) return true;
    }
    return false;
}
function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {
    }).path;
    if (routePath) errorMessage += ` Resolution had failed on route: '${routePath}'`;
    return errorMessage;
}
function updateChainForRoute(context, match) {
    const { route , path  } = match;
    if (route && !route.__synthetic) {
        const item = {
            path,
            route
        };
        if (!context.chain) context.chain = [];
        else // Discard old items
        if (route.parent) {
            let i = context.chain.length;
            while((i--) && context.chain[i].route && context.chain[i].route !== route.parent)context.chain.pop();
        }
        context.chain.push(item);
    }
}
/**
 */ class Resolver {
    constructor(routes1, options = {
    }){
        if (Object(routes1) !== routes1) throw new TypeError('Invalid routes');
        this.baseUrl = options.baseUrl || '';
        this.errorHandler = options.errorHandler;
        this.resolveRoute = options.resolveRoute || resolveRoute;
        this.context = Object.assign({
            resolver: this
        }, options.context);
        this.root = Array.isArray(routes1) ? {
            path: '',
            __children: routes1,
            parent: null,
            __synthetic: true
        } : routes1;
        this.root.parent = null;
    }
    /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */ getRoutes() {
        return [
            ...this.root.__children
        ];
    }
    /**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */ setRoutes(routes) {
        ensureRoutes(routes);
        const newRoutes = [
            ...toArray(routes)
        ];
        this.root.__children = newRoutes;
    }
    /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */ addRoutes(routes) {
        ensureRoutes(routes);
        this.root.__children.push(...toArray(routes));
        return this.getRoutes();
    }
    /**
   * Removes all existing routes from the routing config.
   */ removeRoutes() {
        this.setRoutes([]);
    }
    /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */ resolve(pathnameOrContext) {
        const context = Object.assign({
        }, this.context, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext);
        const match = matchRoute(this.root, this.__normalizePathname(context.pathname), this.baseUrl);
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;
        function next(resume, parent = matches.value.route, prevResult) {
            const routeToSkip = prevResult === null && matches.value.route;
            matches = nextMatches || match.next(routeToSkip);
            nextMatches = null;
            if (!resume) {
                if (matches.done || !isChildRoute(parent, matches.value.route)) {
                    nextMatches = matches;
                    return Promise.resolve(notFoundResult);
                }
            }
            if (matches.done) return Promise.reject(getNotFoundError(context));
            currentContext = Object.assign(currentContext ? {
                chain: currentContext.chain ? currentContext.chain.slice(0) : []
            } : {
            }, context, matches.value);
            updateChainForRoute(currentContext, matches.value);
            return Promise.resolve(resolve(currentContext)).then((resolution)=>{
                if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
                    currentContext.result = resolution.result || resolution;
                    return currentContext;
                }
                return next(resume, parent, resolution);
            });
        }
        context.next = next;
        return Promise.resolve().then(()=>next(true, this.root)
        ).catch((error)=>{
            const errorMessage = generateErrorMessage(currentContext);
            if (!error) error = new Error(errorMessage);
            else console.warn(errorMessage);
            error.context = error.context || currentContext;
            // DOMException has its own code which is read-only
            if (!(error instanceof DOMException)) error.code = error.code || 500;
            if (this.errorHandler) {
                currentContext.result = this.errorHandler(error);
                return currentContext;
            }
            throw error;
        });
    }
    /**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */ static __createUrl(url, base) {
        return new URL(url, base);
    }
    /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */ get __effectiveBaseUrl() {
        return this.baseUrl ? this.constructor.__createUrl(this.baseUrl, document.baseURI || document.URL).href.replace(/[^\/]*$/, '') : '';
    }
    /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */ __normalizePathname(pathname) {
        if (!this.baseUrl) // No base URL, no need to transform the pathname.
        return pathname;
        const base = this.__effectiveBaseUrl;
        const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
        if (normalizedUrl.slice(0, base.length) === base) return normalizedUrl.slice(base.length);
    }
}
Resolver.pathToRegexp = pathToRegexp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { pathToRegexp: pathToRegexp$1  } = Resolver;
const cache$1 = new Map();
function cacheRoutes(routesByName, route, routes2) {
    const name = route.name || route.component;
    if (name) {
        if (routesByName.has(name)) routesByName.get(name).push(route);
        else routesByName.set(name, [
            route
        ]);
    }
    if (Array.isArray(routes2)) for(let i = 0; i < routes2.length; i++){
        const childRoute = routes2[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
    }
}
function getRouteByName(routesByName, routeName) {
    const routes2 = routesByName.get(routeName);
    if (routes2 && routes2.length > 1) throw new Error(`Duplicate route with name "${routeName}".` + ` Try seting unique 'name' route properties.`);
    return routes2 && routes2[0];
}
function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : '';
}
function generateUrls(router, options1 = {
}) {
    if (!(router instanceof Resolver)) throw new TypeError('An instance of Resolver is expected');
    const routesByName = new Map();
    return (routeName, params)=>{
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
            routesByName.clear(); // clear cache
            cacheRoutes(routesByName, router.root, router.root.__children);
            route = getRouteByName(routesByName, routeName);
            if (!route) throw new Error(`Route "${routeName}" not found`);
        }
        let regexp = cache$1.get(route.fullPath);
        if (!regexp) {
            let fullPath = getRoutePath(route);
            let rt = route.parent;
            while(rt){
                const path = getRoutePath(rt);
                if (path) fullPath = path.replace(/\/$/, '') + '/' + fullPath.replace(/^\//, '');
                rt = rt.parent;
            }
            const tokens = pathToRegexp$1.parse(fullPath);
            const toPath = pathToRegexp$1.tokensToFunction(tokens);
            const keys = Object.create(null);
            for(let i = 0; i < tokens.length; i++)if (!isString(tokens[i])) keys[tokens[i].name] = true;
            regexp = {
                toPath,
                keys
            };
            cache$1.set(fullPath, regexp);
            route.fullPath = fullPath;
        }
        let url = regexp.toPath(params, options1) || '/';
        if (options1.stringifyQueryParams && params) {
            const queryParams = {
            };
            const keys = Object.keys(params);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                if (!regexp.keys[key]) queryParams[key] = params[key];
            }
            const query = options1.stringifyQueryParams(queryParams);
            if (query) url += query.charAt(0) === '?' ? query : `?${query}`;
        }
        return url;
    };
}
/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 */ /** @type {Array<NavigationTrigger>} */ let triggers2 = [];
function setNavigationTriggers(newTriggers) {
    triggers2.forEach((trigger)=>trigger.inactivate()
    );
    newTriggers.forEach((trigger)=>trigger.activate()
    );
    triggers2 = newTriggers;
}
const willAnimate = (elem)=>{
    const name = getComputedStyle(elem).getPropertyValue('animation-name');
    return name && name !== 'none';
};
const waitForAnimation = (elem, cb)=>{
    const listener = ()=>{
        elem.removeEventListener('animationend', listener);
        cb();
    };
    elem.addEventListener('animationend', listener);
};
function animate(elem, className) {
    elem.classList.add(className);
    return new Promise((resolve)=>{
        if (willAnimate(elem)) {
            const rect = elem.getBoundingClientRect();
            const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
            elem.setAttribute('style', `position: absolute; ${size}`);
            waitForAnimation(elem, ()=>{
                elem.classList.remove(className);
                elem.removeAttribute('style');
                resolve();
            });
        } else {
            elem.classList.remove(className);
            resolve();
        }
    });
}
const MAX_REDIRECT_COUNT = 256;
function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
}
function copyContextWithoutNext(context) {
    const copy = Object.assign({
    }, context);
    delete copy.next;
    return copy;
}
function createLocation({ pathname ='' , search ='' , hash ='' , chain =[] , params ={
} , redirectFrom , resolver  }, route) {
    const routes2 = chain.map((item)=>item.route
    );
    return {
        baseUrl: resolver && resolver.baseUrl || '',
        pathname,
        search,
        hash,
        routes: routes2,
        route: route || routes2.length && routes2[routes2.length - 1] || null,
        params,
        redirectFrom,
        getUrl: (userParams = {
        })=>getPathnameForRouter(Router.pathToRegexp.compile(getMatchedPath(routes2))(Object.assign({
            }, params, userParams)), resolver)
    };
}
function createRedirect(context, pathname) {
    const params = Object.assign({
    }, context.params);
    return {
        redirect: {
            pathname,
            from: context.pathname,
            params
        }
    };
}
function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map((item)=>item.route
    ).indexOf(context.route);
    context.chain[index].element = element;
    return element;
}
function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) return callback.apply(thisArg, args);
}
function amend(amendmentFunction, args, element) {
    return (amendmentResult)=>{
        if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) return amendmentResult;
        if (element) return runCallbackIfPossible(element[amendmentFunction], args, element);
    };
}
function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`));
    route.__children = [];
    const childRoutes = toArray(newChildren);
    for(let i = 0; i < childRoutes.length; i++){
        ensureRoute(childRoutes[i]);
        route.__children.push(childRoutes[i]);
    }
}
function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
        const parent = nodes[0].parentNode;
        for(let i = 0; i < nodes.length; i++)parent.removeChild(nodes[i]);
    }
}
function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base ? router.constructor.__createUrl(pathname.replace(/^\//, ''), base).pathname : pathname;
}
function getMatchedPath(chain) {
    return chain.map((item)=>item.path
    ).reduce((a, b)=>{
        if (b.length) return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '');
        return a;
    }, '');
}
/**
 * A simple client-side router for single-page applications. It uses
 * express-style middleware and has a first-class support for Web Components and
 * lazy-loading. Works great in Polymer and non-Polymer apps.
 *
 * Use `new Router(outlet, options)` to create a new Router instance.
 *
 * * The `outlet` parameter is a reference to the DOM node to render
 *   the content into.
 *
 * * The `options` parameter is an optional object with options. The following
 *   keys are supported:
 *   * `baseUrl` — the initial value for [
 *     the `baseUrl` property
 *   ](#/classes/Router#property-baseUrl)
 *
 * The Router instance is automatically subscribed to navigation events
 * on `window`.
 *
 * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
 *
 * See also detailed API docs for the following methods, for the advanced usage:
 *
 * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
 * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
 * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
 *
 * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
 *
 * @extends Resolver
 * @demo demo/index.html
 * @summary JavaScript class that renders different DOM content depending on
 *    a given path. It can re-render when triggered or automatically on
 *    'popstate' and / or 'click' events.
 */ class Router extends Resolver {
    /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */ constructor(outlet1, options1){
        const baseElement = document.head.querySelector('base');
        const baseHref = baseElement && baseElement.getAttribute('href');
        super([], Object.assign({
            // Default options
            baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, '')
        }, options1));
        this.resolveRoute = (context)=>this.__resolveRoute(context)
        ;
        const triggers1 = Router.NavigationTrigger;
        Router.setTriggers.apply(Router, Object.keys(triggers1).map((key)=>triggers1[key]
        ));
        /**
     * The base URL for all routes in the router instance. By default,
     * if the base element exists in the `<head>`, vaadin-router
     * takes the `<base href>` attribute value, resolves against current `document.URL`
     * and gets the `pathname` from the result.
     *
     * @public
     * @type {string}
     */ this.baseUrl;
        /**
     * A promise that is settled after the current render cycle completes. If
     * there is no render cycle in progress the promise is immediately settled
     * with the last render cycle result.
     *
     * @public
     * @type {!Promise<!RouterLocation>}
     */ this.ready;
        this.ready = Promise.resolve(outlet1);
        /**
     * Contains read-only information about the current router location:
     * pathname, active routes, parameters. See the
     * [Location type declaration](#/classes/RouterLocation)
     * for more details.
     *
     * @public
     * @type {!RouterLocation}
     */ this.location;
        this.location = createLocation({
            resolver: this
        });
        this.__lastStartedRenderId = 0;
        this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
        this.setOutlet(outlet1);
        this.subscribe();
        // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
        this.__createdByRouter = new WeakMap();
        this.__addedByRouter = new WeakMap();
    }
    __resolveRoute(context) {
        const route = context.route;
        let callbacks = Promise.resolve();
        if (isFunction(route.children)) callbacks = callbacks.then(()=>route.children(copyContextWithoutNext(context))
        ).then((children)=>{
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) children = route.children;
            processNewChildren(children, route);
        });
        const commands = {
            redirect: (path)=>createRedirect(context, path)
            ,
            component: (component)=>{
                const element = document.createElement(component);
                this.__createdByRouter.set(element, true);
                return element;
            }
        };
        return callbacks.then(()=>{
            if (this.__isLatestRender(context)) return runCallbackIfPossible(route.action, [
                context,
                commands
            ], route);
        }).then((result)=>{
            if (isResultNotEmpty(result)) {
                // Actions like `() => import('my-view.js')` are not expected to
                // end the resolution, despite the result is not empty. Checking
                // the result with a whitelist of values that end the resolution.
                if (result instanceof HTMLElement || result.redirect || result === notFoundResult) return result;
            }
            if (isString(route.redirect)) return commands.redirect(route.redirect);
            if (route.bundle) return loadBundle(route.bundle).then(()=>{
            }, ()=>{
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
            });
        }).then((result)=>{
            if (isResultNotEmpty(result)) return result;
            if (isString(route.component)) return commands.component(route.component);
        });
    }
    /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */ setOutlet(outlet) {
        if (outlet) this.__ensureOutlet(outlet);
        this.__outlet = outlet;
    }
    /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */ getOutlet() {
        return this.__outlet;
    }
    /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */ setRoutes(routes, skipRender = false) {
        this.__previousContext = undefined;
        this.__urlForName = undefined;
        super.setRoutes(routes);
        if (!skipRender) this.__onNavigationEvent();
        return this.ready;
    }
    /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */ render(pathnameOrContext, shouldUpdateHistory) {
        const renderId = ++this.__lastStartedRenderId;
        const context = Object.assign({
            search: '',
            hash: ''
        }, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext, {
            __renderId: renderId
        });
        // Find the first route that resolves to a non-empty result
        this.ready = this.resolve(context)// Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then((context1)=>this.__fullyResolveChain(context1)
        ).then((context1)=>{
            if (this.__isLatestRender(context1)) {
                const previousContext = this.__previousContext;
                // Check if the render was prevented and make an early return in that case
                if (context1 === previousContext) {
                    // Replace the history with the previous context
                    // to make sure the URL stays the same.
                    this.__updateBrowserHistory(previousContext, true);
                    return this.location;
                }
                this.location = createLocation(context1);
                if (shouldUpdateHistory) // Replace only if first render redirects, so that we don’t leave
                // the redirecting record in the history
                this.__updateBrowserHistory(context1, renderId === 1);
                fireRouterEvent('location-changed', {
                    router: this,
                    location: this.location
                });
                // Skip detaching/re-attaching there are no render changes
                if (context1.__skipAttach) {
                    this.__copyUnchangedElements(context1, previousContext);
                    this.__previousContext = context1;
                    return this.location;
                }
                this.__addAppearingContent(context1, previousContext);
                const animationDone = this.__animateIfNeeded(context1);
                this.__runOnAfterEnterCallbacks(context1);
                this.__runOnAfterLeaveCallbacks(context1, previousContext);
                return animationDone.then(()=>{
                    if (this.__isLatestRender(context1)) {
                        // If there is another render pass started after this one,
                        // the 'disappearing content' would be removed when the other
                        // render pass calls `this.__addAppearingContent()`
                        this.__removeDisappearingContent();
                        this.__previousContext = context1;
                        return this.location;
                    }
                });
            }
        }).catch((error)=>{
            if (renderId === this.__lastStartedRenderId) {
                if (shouldUpdateHistory) this.__updateBrowserHistory(context);
                removeDomNodes(this.__outlet && this.__outlet.children);
                this.location = createLocation(Object.assign(context, {
                    resolver: this
                }));
                fireRouterEvent('error', Object.assign({
                    router: this,
                    error
                }, context));
                throw error;
            }
        });
        return this.ready;
    }
    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)// `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then((contextAfterRedirects)=>{
            const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
            const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
            const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain), contextAfterRedirects.resolver);
            const isFound = matchedPath === contextAfterRedirects.pathname;
            // Recursive method to try matching more child and sibling routes
            const findNextContextIfAny = (context, parent = context.route, prevResult)=>{
                return context.next(undefined, parent, prevResult).then((nextContext)=>{
                    if (nextContext === null || nextContext === notFoundResult) {
                        // Next context is not found in children, ...
                        if (isFound) // ...but original context is already fully matching - use it
                        return context;
                        else if (parent.parent !== null) // ...and there is no full match yet - step up to check siblings
                        return findNextContextIfAny(context, parent.parent, nextContext);
                        else return nextContext;
                    }
                    return nextContext;
                });
            };
            return findNextContextIfAny(contextAfterRedirects).then((nextContext)=>{
                if (nextContext === null || nextContext === notFoundResult) throw getNotFoundError(topOfTheChainContextAfterRedirects);
                return nextContext && nextContext !== notFoundResult && nextContext !== contextAfterRedirects ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
            });
        });
    }
    __findComponentContextAfterAllRedirects(context) {
        const result = context.result;
        if (result instanceof HTMLElement) {
            renderElement(context, result);
            return Promise.resolve(context);
        } else if (result.redirect) return this.__redirect(result.redirect, context.__redirectCount, context.__renderId).then((context)=>this.__findComponentContextAfterAllRedirects(context)
        );
        else if (result instanceof Error) return Promise.reject(result);
        else return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". ` + `Expected redirect object or HTML element, but got: "${logValue(result)}". ` + `Double check the action return value for the route.`)));
    }
    __amendWithOnBeforeCallbacks(contextWithFullChain) {
        return this.__runOnBeforeCallbacks(contextWithFullChain).then((amendedContext)=>{
            if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) return amendedContext;
            return this.__fullyResolveChain(amendedContext);
        });
    }
    __runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext || {
        };
        const previousChain = previousContext.chain || [];
        const newChain = newContext.chain;
        let callbacks = Promise.resolve();
        const prevent = ()=>({
                cancel: true
            })
        ;
        const redirect = (pathname)=>createRedirect(newContext, pathname)
        ;
        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
            for(let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex){
                if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) break;
            }
            // Skip re-attaching and notifications if element and chain do not change
            newContext.__skipAttach = // Same route chain
            newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length && // Same element
            this.__isReusableElement(newContext.result, previousContext.result);
            if (newContext.__skipAttach) {
                // execute onBeforeLeave for changed segment element when skipping attach
                for(let i1 = newChain.length - 1; i1 >= 0; i1--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                    prevent
                }, previousChain[i1]);
                // execute onBeforeEnter for changed segment element when skipping attach
                for(let i2 = 0; i2 < newChain.length; i2++){
                    callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                        prevent,
                        redirect
                    }, newChain[i2]);
                    previousChain[i2].element.location = createLocation(newContext, previousChain[i2].route);
                }
            } else // execute onBeforeLeave when NOT skipping attach
            for(let i1 = previousChain.length - 1; i1 >= newContext.__divergedChainIndex; i1--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                prevent
            }, previousChain[i1]);
        }
        // execute onBeforeEnter when NOT skipping attach
        if (!newContext.__skipAttach) for(let i = 0; i < newChain.length; i++){
            if (i < newContext.__divergedChainIndex) {
                if (i < previousChain.length && previousChain[i].element) previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            } else {
                callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                    prevent,
                    redirect
                }, newChain[i]);
                if (newChain[i].element) newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
        }
        return callbacks.then((amendmentResult)=>{
            if (amendmentResult) {
                if (amendmentResult.cancel) {
                    this.__previousContext.__renderId = newContext.__renderId;
                    return this.__previousContext;
                }
                if (amendmentResult.redirect) return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
            return newContext;
        });
    }
    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const afterLeaveFunction = amend('onBeforeLeave', [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return afterLeaveFunction(result);
            }
        }).then((result)=>{
            if (!(result || {
            }).redirect) return result;
        });
    }
    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext, chainElement.route);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const beforeEnterFunction = amend('onBeforeEnter', [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return beforeEnterFunction(result);
            }
        });
    }
    __isReusableElement(element, otherElement) {
        if (element && otherElement) return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement) ? element.localName === otherElement.localName : element === otherElement;
        return false;
    }
    __isLatestRender(context) {
        return context.__renderId === this.__lastStartedRenderId;
    }
    __redirect(redirectData, counter, renderId) {
        if (counter > MAX_REDIRECT_COUNT) throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
        return this.resolve({
            pathname: this.urlForPath(redirectData.pathname, redirectData.params),
            redirectFrom: redirectData.from,
            __redirectCount: (counter || 0) + 1,
            __renderId: renderId
        });
    }
    __ensureOutlet(outlet = this.__outlet) {
        if (!(outlet instanceof Node)) throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
    }
    __updateBrowserHistory({ pathname , search ='' , hash =''  }, replace) {
        if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
            const changeState = replace ? 'replaceState' : 'pushState';
            window.history[changeState](null, document.title, pathname + search + hash);
            window.dispatchEvent(new PopStateEvent('popstate', {
                state: 'vaadin-router-ignore'
            }));
        }
    }
    __copyUnchangedElements(context, previousContext) {
        // Find the deepest common parent between the last and the new component
        // chains. Update references for the unchanged elements in the new chain
        let deepestCommonParent = this.__outlet;
        for(let i = 0; i < context.__divergedChainIndex; i++){
            const unchangedElement = previousContext && previousContext.chain[i].element;
            if (unchangedElement) {
                if (unchangedElement.parentNode === deepestCommonParent) {
                    context.chain[i].element = unchangedElement;
                    deepestCommonParent = unchangedElement;
                } else break;
            }
        }
        return deepestCommonParent;
    }
    __addAppearingContent(context, previousContext) {
        this.__ensureOutlet();
        // If the previous 'entering' animation has not completed yet,
        // stop it and remove that content from the DOM before adding new one.
        this.__removeAppearingContent();
        // Copy reusable elements from the previousContext to current
        const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);
        // Keep two lists of DOM elements:
        //  - those that should be removed once the transition animation is over
        //  - and those that should remain
        this.__appearingContent = [];
        this.__disappearingContent = Array.from(deepestCommonParent.children).filter(// Only remove layout content that was added by router
        (e)=>this.__addedByRouter.get(e) && // Do not remove the result element to avoid flickering
            e !== context.result
        );
        // Add new elements (starting after the deepest common parent) to the DOM.
        // That way only the components that are actually different between the two
        // locations are added to the DOM (and those that are common remain in the
        // DOM without first removing and then adding them again).
        let parentElement = deepestCommonParent;
        for(let i = context.__divergedChainIndex; i < context.chain.length; i++){
            const elementToAdd = context.chain[i].element;
            if (elementToAdd) {
                parentElement.appendChild(elementToAdd);
                this.__addedByRouter.set(elementToAdd, true);
                if (parentElement === deepestCommonParent) this.__appearingContent.push(elementToAdd);
                parentElement = elementToAdd;
            }
        }
    }
    __removeDisappearingContent() {
        if (this.__disappearingContent) removeDomNodes(this.__disappearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
    }
    __removeAppearingContent() {
        if (this.__disappearingContent && this.__appearingContent) {
            removeDomNodes(this.__appearingContent);
            this.__disappearingContent = null;
            this.__appearingContent = null;
        }
    }
    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext) return;
        // REVERSE iteration: from Z to A
        for(let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = targetContext.chain[i].element;
            if (!currentComponent) continue;
            try {
                const location = createLocation(currentContext);
                runCallbackIfPossible(currentComponent.onAfterLeave, [
                    location,
                    {
                    },
                    targetContext.resolver
                ], currentComponent);
            } finally{
                if (this.__disappearingContent.indexOf(currentComponent) > -1) removeDomNodes(currentComponent.children);
            }
        }
    }
    __runOnAfterEnterCallbacks(currentContext) {
        // forward iteration: from A to Z
        for(let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = currentContext.chain[i].element || {
            };
            const location = createLocation(currentContext, currentContext.chain[i].route);
            runCallbackIfPossible(currentComponent.onAfterEnter, [
                location,
                {
                },
                currentContext.resolver
            ], currentComponent);
        }
    }
    __animateIfNeeded(context) {
        const from = (this.__disappearingContent || [])[0];
        const to = (this.__appearingContent || [])[0];
        const promises = [];
        const chain = context.chain;
        let config;
        for(let i = chain.length; i > 0; i--)if (chain[i - 1].route.animate) {
            config = chain[i - 1].route.animate;
            break;
        }
        if (from && to && config) {
            const leave = isObject(config) && config.leave || 'leaving';
            const enter = isObject(config) && config.enter || 'entering';
            promises.push(animate(from, leave));
            promises.push(animate(to, enter));
        }
        return Promise.all(promises).then(()=>context
        );
    }
    /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */ subscribe() {
        window.addEventListener('vaadin-router-go', this.__navigationEventHandler);
    }
    /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */ unsubscribe() {
        window.removeEventListener('vaadin-router-go', this.__navigationEventHandler);
    }
    __onNavigationEvent(event) {
        const { pathname , search , hash  } = event ? event.detail : window.location;
        if (isString(this.__normalizePathname(pathname))) {
            if (event && event.preventDefault) event.preventDefault();
            this.render({
                pathname,
                search,
                hash
            }, true);
        }
    }
    /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */ static setTriggers(...triggers) {
        setNavigationTriggers(triggers);
    }
    /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForName(name, params) {
        if (!this.__urlForName) this.__urlForName = generateUrls(this);
        return getPathnameForRouter(this.__urlForName(name, params), this);
    }
    /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForPath(path, params) {
        return getPathnameForRouter(Router.pathToRegexp.compile(path)(params), this);
    }
    /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */ static go(path) {
        const { pathname , search , hash  } = isString(path) ? this.__createUrl(path, 'http://a') // some base to omit origin
         : path;
        return fireRouterEvent('go', {
            pathname,
            search,
            hash
        });
    }
}
const DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
    function test() {
        /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/ return true;
    }
    return uncommentAndRun(test);
}
function isDevelopmentMode() {
    try {
        if (isForcedDevelopmentMode()) return true;
        if (!isLocalhost()) return false;
        if (FlowClients) return !isFlowProductionMode();
        return !isMinified();
    } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
    }
}
function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
    return [
        "localhost",
        "127.0.0.1"
    ].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
    if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients).map((key)=>FlowClients[key]
        ).filter((client)=>client.productionMode
        );
        if (productionModeApps.length > 0) return true;
    }
    return false;
}
function uncommentAndRun(callback, args) {
    if (typeof callback !== 'function') return;
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
    } catch (e) {
        // eat the exception
        console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
    return callback(args);
}
// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window['Vaadin'] = window['Vaadin'] || {
};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */ const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) return uncommentAndRun(callback, args);
};
if (window.Vaadin.developmentMode === undefined) window.Vaadin.developmentMode = isDevelopmentMode();
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */ function maybeGatherAndSendStats() {
/** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/ }
const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === 'function') return runIfDevelopmentMode(maybeGatherAndSendStats);
};
window.Vaadin = window.Vaadin || {
};
window.Vaadin.registrations = window.Vaadin.registrations || [];
window.Vaadin.registrations.push({
    is: '@vaadin/router',
    version: '1.7.4'
});
usageStatistics();
Router.NavigationTrigger = {
    POPSTATE,
    CLICK
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
var _rtdb = require("./rtdb");
var _map = require("lodash/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
const API_BASE_URL = "http://localhost:3000";
const state = {
    data: {
        from: "",
        messages: []
    },
    listeners: [],
    init () {
        const chatroomsRef = _rtdb.ref(_rtdb.rtdb, "/chatrooms/general");
        const currentState = this.getState();
        _rtdb.onValue(chatroomsRef, (snapshot)=>{
            const messagesFromServer = snapshot.val();
            const messagesList = _mapDefault.default(messagesFromServer.messages);
            currentState.messages = messagesList;
            this.setState(currentState);
        });
    },
    getState () {
        return this.data;
    },
    setNombre (nombre) {
        const currentState = this.getState();
        currentState.nombre = nombre;
        this.setState(currentState);
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        console.log("Soy el state, he cambiado", this.data);
    },
    pushMessage (message) {
        const nombreDelState = this.data.nombre;
        fetch(API_BASE_URL + "/messages", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                from: nombreDelState,
                message: message
            })
        });
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./rtdb":"47yAh","lodash/map":"4gk2m"}],"47yAh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rtdb", ()=>rtdb
);
parcelHelpers.export(exports, "ref", ()=>_database.ref
);
parcelHelpers.export(exports, "onValue", ()=>_database.onValue
);
var _app = require("firebase/app");
var _database = require("firebase/database");
const firebaseConfig = {
    apiKey: "V9ElgxUcUsDVWuCp6dFcwBYiJoc0kLfDr1vxUgIQ",
    databaseURL: "https://apx-dwf-m6-ef304-default-rtdb.firebaseio.com",
    authDomain: "apx-dwf-m6-ef304.firebaseapp.com"
};
const app = _app.initializeApp(firebaseConfig);
const rtdb = _database.getDatabase();

},{"firebase/app":"1tQjj","firebase/database":"5sVc8","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1tQjj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("@firebase/app");
parcelHelpers.exportAll(_app, exports);
var name = "firebase";
var version = "9.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ _app.registerVersion(name, version, 'app');

},{"@firebase/app":"iIlx1","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iIlx1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FirebaseError", ()=>_util.FirebaseError
);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION
);
parcelHelpers.export(exports, "_DEFAULT_ENTRY_NAME", ()=>DEFAULT_ENTRY_NAME
);
parcelHelpers.export(exports, "_addComponent", ()=>_addComponent
);
parcelHelpers.export(exports, "_addOrOverwriteComponent", ()=>_addOrOverwriteComponent
);
parcelHelpers.export(exports, "_apps", ()=>_apps
);
parcelHelpers.export(exports, "_clearComponents", ()=>_clearComponents
);
parcelHelpers.export(exports, "_components", ()=>_components
);
parcelHelpers.export(exports, "_getProvider", ()=>_getProvider
);
parcelHelpers.export(exports, "_registerComponent", ()=>_registerComponent
);
parcelHelpers.export(exports, "_removeServiceInstance", ()=>_removeServiceInstance
);
parcelHelpers.export(exports, "deleteApp", ()=>deleteApp
);
parcelHelpers.export(exports, "getApp", ()=>getApp
);
parcelHelpers.export(exports, "getApps", ()=>getApps
);
parcelHelpers.export(exports, "initializeApp", ()=>initializeApp
);
parcelHelpers.export(exports, "onLog", ()=>onLog
);
parcelHelpers.export(exports, "registerVersion", ()=>registerVersion
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
var _idb = require("idb");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    constructor(container){
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else return null;
        }).filter((logString)=>logString
        ).join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */ ;
}
const name$o = "@firebase/app";
const version$1 = "0.7.30";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new _logger.Logger('@firebase/app');
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2 = "@firebase/firestore";
const name$1 = "@firebase/firestore-compat";
const name = "firebase";
const version = "9.9.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values())_addComponent(app, component);
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name1) {
    const heartbeatController = app.container.getProvider('heartbeat').getImmediate({
        optional: true
    });
    if (heartbeatController) heartbeatController.triggerHeartbeat();
    return app.container.getProvider(name1);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name1, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name1).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* NO_APP */ ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name" /* BAD_APP_NAME */ ]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */ ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* IDB_OPEN */ ]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* IDB_GET */ ]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* IDB_WRITE */ ]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* IDB_DELETE */ ]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
};
const ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    constructor(options, config, container1){
        this._isDeleted = false;
        this._options = Object.assign({
        }, options);
        this._config = Object.assign({
        }, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container1;
        this.container.addComponent(new _component.Component('app', ()=>this
        , "PUBLIC" /* PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */ , {
            appName: this._name
        });
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version;
function initializeApp(options1, rawConfig = {
}) {
    if (typeof rawConfig !== 'object') {
        const name1 = rawConfig;
        rawConfig = {
            name: name1
        };
    }
    const config1 = Object.assign({
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name1 = config1.name;
    if (typeof name1 !== 'string' || !name1) throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */ , {
        appName: String(name1)
    });
    const existingApp = _apps.get(name1);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (_util.deepEqual(options1, existingApp.options) && _util.deepEqual(config1, existingApp.config)) return existingApp;
        else throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */ , {
            appName: name1
        });
    }
    const container2 = new _component.ComponentContainer(name1);
    for (const component of _components.values())container2.addComponent(component);
    const newApp = new FirebaseAppImpl(options1, config1, container2);
    _apps.set(name1, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp(name1 = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name1);
    if (!app) throw ERROR_FACTORY.create("no-app" /* NO_APP */ , {
        appName: name1
    });
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    const name1 = app.name;
    if (_apps.has(name1)) {
        _apps.delete(name1);
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()
        ));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version1, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) library += `-${variant}`;
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version1.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version1}":`
        ];
        if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        if (libraryMismatch && versionMismatch) warning.push('and');
        if (versionMismatch) warning.push(`version name "${version1}" contains illegal characters (whitespace or "/")`);
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _component.Component(`${library}-version`, ()=>({
            library,
            version: version1
        })
    , "VERSION" /* VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options1) {
    if (logCallback !== null && typeof logCallback !== 'function') throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */ );
    _logger.setUserLogHandler(logCallback, options1);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    _logger.setLogLevel(logLevel);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) dbPromise = _idb.openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion)=>{
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch(oldVersion){
                case 0:
                    db.createObjectStore(STORE_NAME);
            }
        }
    }).catch((e)=>{
        throw ERROR_FACTORY.create("idb-open" /* IDB_OPEN */ , {
            originalErrorMessage: e.message
        });
    });
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    var _a;
    try {
        const db = await getDbPromise();
        return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
    } catch (e) {
        if (e instanceof _util.FirebaseError) logger.warn(e.message);
        else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* IDB_GET */ , {
                originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    var _a;
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        return tx.done;
    } catch (e) {
        if (e instanceof _util.FirebaseError) logger.warn(e.message);
        else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* IDB_WRITE */ , {
                originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MAX_HEADER_BYTES = 1024;
// 30 days
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 2592000000;
class HeartbeatServiceImpl {
    constructor(container2){
        this.container = container2;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */ this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then((result)=>{
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */ async triggerHeartbeat() {
        const platformLogger = this.container.getProvider('platform-logger').getImmediate();
        // This is the "Firebase user agent" string from the platform logger
        // service, not the browser user agent.
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache === null) this._heartbeatsCache = await this._heartbeatsCachePromise;
        // Do not store a heartbeat if one is already stored for this day
        // or if a header has already been sent today.
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat)=>singleDateHeartbeat.date === date
        )) return;
        else // There is no entry for this date. Create one.
        this._heartbeatsCache.heartbeats.push({
            date,
            agent
        });
        // Remove entries older than 30 days.
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat)=>{
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */ async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) await this._heartbeatsCachePromise;
        // If it's still null or the array is empty, there is no data to send.
        if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) return '';
        const date = getUTCDateString();
        // Extract as many heartbeats from the cache as will fit under the size limit.
        const { heartbeatsToSend , unsentEntries  } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = _util.base64urlEncodeWithoutPadding(JSON.stringify({
            version: 2,
            heartbeats: heartbeatsToSend
        }));
        // Store last sent date to prevent another being logged/sent for the same day.
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
        } else {
            this._heartbeatsCache.heartbeats = [];
            this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache){
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find((hb)=>hb.agent === singleDateHeartbeat.agent
        );
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [
                    singleDateHeartbeat.date
                ]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        } else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app1){
        this.app = app1;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!_util.isIndexedDBAvailable()) return false;
        else return _util.validateIndexedDBOpenable().then(()=>true
        ).catch(()=>false
        );
    }
    /**
     * Read all heartbeats.
     */ async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return {
            heartbeats: []
        };
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || {
                heartbeats: []
            };
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return;
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) return;
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */ function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return _util.base64urlEncodeWithoutPadding(// heartbeatsCache wrapper properties
    JSON.stringify({
        version: 2,
        heartbeats: heartbeatsCache
    })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new _component.Component('platform-logger', (container3)=>new PlatformLoggerServiceImpl(container3)
    , "PRIVATE" /* PRIVATE */ ));
    _registerComponent(new _component.Component('heartbeat', (container3)=>new HeartbeatServiceImpl(container3)
    , "PRIVATE" /* PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');

},{"@firebase/component":"bSWnS","@firebase/logger":"dNrrP","@firebase/util":"iWUXZ","idb":"6tWvd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bSWnS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "ComponentContainer", ()=>ComponentContainer
);
parcelHelpers.export(exports, "Provider", ()=>Provider
);
var _util = require("@firebase/util");
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name3, instanceFactory, type){
        this.name = name3;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {
        };
        this.instantiationMode = "LAZY" /* LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    constructor(name1, container){
        this.name = name1;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) // initialize the service if it can be auto-initialized
            try {
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
            });
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) return null;
            else throw Error(`Service ${this.name} is not available`);
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) return;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) try {
            this.getOrInitializeService({
                instanceIdentifier: DEFAULT_ENTRY_NAME
            });
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service
            ) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()
            ),
            ...services.filter((service)=>'_delete' in service
            ) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete()
            )
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {
        };
    }
    initialize(opts = {
    }) {
        const { options ={
        }  } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) instanceDeferred.resolve(instance);
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) callback(existingInstance, normalizedIdentifier);
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) return;
        for (const callback of callbacks)try {
            callback(instance, identifier);
        } catch (_a) {
        // ignore errors in the onInit callback
        }
    }
    getOrInitializeService({ instanceIdentifier , options ={
    }  }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        else return identifier; // assume multiple instances are supported before the component is provided.
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    constructor(name2){
        this.name = name2;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component.name);
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}

},{"@firebase/util":"iWUXZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iWUXZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSTANTS", ()=>CONSTANTS
);
parcelHelpers.export(exports, "Deferred", ()=>Deferred
);
parcelHelpers.export(exports, "ErrorFactory", ()=>ErrorFactory
);
parcelHelpers.export(exports, "FirebaseError", ()=>FirebaseError
);
parcelHelpers.export(exports, "MAX_VALUE_MILLIS", ()=>MAX_VALUE_MILLIS
);
parcelHelpers.export(exports, "RANDOM_FACTOR", ()=>RANDOM_FACTOR
);
parcelHelpers.export(exports, "Sha1", ()=>Sha1
);
parcelHelpers.export(exports, "areCookiesEnabled", ()=>areCookiesEnabled
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "assertionError", ()=>assertionError
);
parcelHelpers.export(exports, "async", ()=>async
);
parcelHelpers.export(exports, "base64", ()=>base64
);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode
);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode
);
parcelHelpers.export(exports, "base64urlEncodeWithoutPadding", ()=>base64urlEncodeWithoutPadding
);
parcelHelpers.export(exports, "calculateBackoffMillis", ()=>calculateBackoffMillis
);
parcelHelpers.export(exports, "contains", ()=>contains
);
parcelHelpers.export(exports, "createMockUserToken", ()=>createMockUserToken
);
parcelHelpers.export(exports, "createSubscribe", ()=>createSubscribe
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "deepCopy", ()=>deepCopy
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend
);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix
);
parcelHelpers.export(exports, "extractQuerystring", ()=>extractQuerystring
);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal
);
parcelHelpers.export(exports, "getModularInstance", ()=>getModularInstance
);
parcelHelpers.export(exports, "getUA", ()=>getUA
);
parcelHelpers.export(exports, "isAdmin", ()=>isAdmin
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isBrowserExtension", ()=>isBrowserExtension
);
parcelHelpers.export(exports, "isElectron", ()=>isElectron
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "isIE", ()=>isIE
);
parcelHelpers.export(exports, "isIndexedDBAvailable", ()=>isIndexedDBAvailable
);
parcelHelpers.export(exports, "isMobileCordova", ()=>isMobileCordova
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isNodeSdk", ()=>isNodeSdk
);
parcelHelpers.export(exports, "isReactNative", ()=>isReactNative
);
parcelHelpers.export(exports, "isSafari", ()=>isSafari
);
parcelHelpers.export(exports, "isUWP", ()=>isUWP
);
parcelHelpers.export(exports, "isValidFormat", ()=>isValidFormat
);
parcelHelpers.export(exports, "isValidTimestamp", ()=>isValidTimestamp
);
parcelHelpers.export(exports, "issuedAtTime", ()=>issuedAtTime
);
parcelHelpers.export(exports, "jsonEval", ()=>jsonEval
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "ordinal", ()=>ordinal
);
parcelHelpers.export(exports, "promiseWithTimeout", ()=>promiseWithTimeout
);
parcelHelpers.export(exports, "querystring", ()=>querystring
);
parcelHelpers.export(exports, "querystringDecode", ()=>querystringDecode
);
parcelHelpers.export(exports, "safeGet", ()=>safeGet
);
parcelHelpers.export(exports, "stringLength", ()=>stringLength
);
parcelHelpers.export(exports, "stringToByteArray", ()=>stringToByteArray
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "uuidv4", ()=>uuidv4
);
parcelHelpers.export(exports, "validateArgCount", ()=>validateArgCount
);
parcelHelpers.export(exports, "validateCallback", ()=>validateCallback
);
parcelHelpers.export(exports, "validateContextObject", ()=>validateContextObject
);
parcelHelpers.export(exports, "validateIndexedDBOpenable", ()=>validateIndexedDBOpenable
);
parcelHelpers.export(exports, "validateNamespace", ()=>validateNamespace
);
var global = arguments[3];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) throw assertionError(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            // Surrogate Pair
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) throw Error('encodeByteArray takes an array as a parameter');
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 192 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {
            };
            this.charToByteMap_ = {
            };
            this.byteToCharMapWebSafe_ = {
            };
            this.charToByteMapWebSafe_ = {
            };
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {
            };
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    constructor(){
        this.reject = ()=>{
        };
        this.resolve = ()=>{
        };
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) this.reject(error);
            else this.resolve(value);
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{
                });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {
            }
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') return navigator['userAgent'];
    else return '';
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */ function getGlobal() {
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(/** The error code for this error. */ code1, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code1;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData1 = data[0] || {
        };
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message1 = template ? replaceTemplate(template, customData1) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message1} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData1);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {
    }, claims = {
    }, data = {
    }, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {
        };
        delete claims['d'];
    } catch (e) {
    }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
        else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
        if (claims.hasOwnProperty('exp')) validUntil = claims['exp'];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) return claims['iat'];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {
    };
    for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) return true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) return false;
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) return false;
        } else if (aProp !== bProp) return false;
    }
    for (const k1 of bKeys){
        if (!aKeys.includes(k1)) return false;
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */ function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(()=>deferredPromise.reject('timeout!')
    , timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams))if (Array.isArray(value)) value.forEach((arrayVal)=>{
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
    });
    else params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring1) {
    const obj = {
    };
    const tokens = querystring1.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) return '';
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(let i1 = 1; i1 < this.blockSize; ++i1)this.pad_[i1] = 0;
        this.reset();
    }
    reset() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) offset = 0;
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') for(let i1 = 0; i1 < 16; i1++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i1] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(let i2 = 0; i2 < 16; i2++){
            W[i2] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(let i3 = 16; i3 < 80; i3++){
            const t = W[i3 - 3] ^ W[i3 - 8] ^ W[i3 - 14] ^ W[i3 - 16];
            W[i3] = (t << 1 | t >>> 31) & 4294967295;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i4 = 0; i4 < 80; i4++){
            if (i4 < 40) {
                if (i4 < 20) {
                    f = d ^ b & (c ^ d);
                    k = 1518500249;
                } else {
                    f = b ^ c ^ d;
                    k = 1859775393;
                }
            } else if (i4 < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
            } else {
                f = b ^ c ^ d;
                k = 3395469782;
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i4] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === 'string') while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(let i1 = this.blockSize - 1; i1 >= 56; i1--){
            this.buf_[i1] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i2 = 0; i2 < 5; i2++)for(let j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i2] >> j & 255;
            ++n;
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) throw new Error('Missing Observer.');
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error,
            complete
        };
        if (observer.next === undefined) observer.next = noop;
        if (observer.error === undefined) observer.error = noop;
        if (observer.complete === undefined) observer.complete = noop;
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            try {
                if (this.finalError) observer.error(this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) return;
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    }
    forEachObserver(fn) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i2 = 0; i2 < this.observers.length; i2++)this.sendOne(i2, fn);
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) try {
                fn(this.observers[i]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) console.error(e);
            }
        });
    }
    close(err) {
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) return false;
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') return true;
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) argError = 'at least ' + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) return;
    if (typeof context !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i2 = 0; i2 < str.length; i2++){
        let c = str.charCodeAt(i2);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 55296 && c <= 56319) {
            const high = c - 55296; // the high 10 bits.
            i2++;
            assert(i2 < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i2) - 56320; // the low 10 bits.
            c = 65536 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i2 = 0; i2 < str.length; i2++){
        const c = str.charCodeAt(i2);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 55296 && c <= 56319) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i2++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */ const uuidv4 = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : r & 3 | 8;
        return v.toString(16);
    });
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i2) {
    if (!Number.isFinite(i2)) return `${i2}`;
    return i2 + indicator(i2);
}
function indicator(i2) {
    i2 = Math.abs(i2);
    const cent = i2 % 100;
    if (cent >= 10 && cent <= 20) return 'th';
    const dec = i2 % 10;
    if (dec === 1) return 'st';
    if (dec === 2) return 'nd';
    if (dec === 3) return 'rd';
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service1) {
    if (service1 && service1._delegate) return service1._delegate;
    else return service1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dNrrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel
);
parcelHelpers.export(exports, "Logger", ()=>Logger
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
parcelHelpers.export(exports, "setUserLogHandler", ()=>setUserLogHandler
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel;
(function(LogLevel1) {
    LogLevel1[LogLevel1["DEBUG"] = 0] = "DEBUG";
    LogLevel1[LogLevel1["VERBOSE"] = 1] = "VERBOSE";
    LogLevel1[LogLevel1["INFO"] = 2] = "INFO";
    LogLevel1[LogLevel1["WARN"] = 3] = "WARN";
    LogLevel1[LogLevel1["ERROR"] = 4] = "ERROR";
    LogLevel1[LogLevel1["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {
}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) return;
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') throw new TypeError('Value assigned to `logHandler` must be a function');
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances){
        let customLogLevel = null;
        if (options && options.level) customLogLevel = levelStringToEnum[options.level];
        if (logCallback === null) instance.userLogHandler = null;
        else instance.userLogHandler = (instance1, level, ...args)=>{
            const message = args.map((arg)=>{
                if (arg == null) return null;
                else if (typeof arg === 'string') return arg;
                else if (typeof arg === 'number' || typeof arg === 'boolean') return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter((arg)=>arg
            ).join(' ');
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance1.logLevel)) logCallback({
                level: LogLevel[level].toLowerCase(),
                message,
                args,
                type: instance1.name
            });
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6tWvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unwrap", ()=>_wrapIdbValueJs.u
);
parcelHelpers.export(exports, "wrap", ()=>_wrapIdbValueJs.w
);
parcelHelpers.export(exports, "deleteDB", ()=>deleteDB
);
parcelHelpers.export(exports, "openDB", ()=>openDB
);
var _wrapIdbValueJs = require("./wrap-idb-value.js");
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked , upgrade , blocking , terminated  } = {
}) {
    const request = indexedDB.open(name, version);
    const openPromise = _wrapIdbValueJs.w(request);
    if (upgrade) request.addEventListener('upgradeneeded', (event)=>{
        upgrade(_wrapIdbValueJs.w(request.result), event.oldVersion, event.newVersion, _wrapIdbValueJs.w(request.transaction));
    });
    if (blocked) request.addEventListener('blocked', ()=>blocked()
    );
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated()
        );
        if (blocking) db.addEventListener('versionchange', ()=>blocking()
        );
    }).catch(()=>{
    });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked  } = {
}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) request.addEventListener('blocked', ()=>blocked()
    );
    return _wrapIdbValueJs.w(request).then(()=>undefined
    );
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) return;
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target1 = tx.store;
        if (useIndex) target1 = target1.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target1[targetFuncName](...args),
            isWrite && tx.done, 
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
_wrapIdbValueJs.r((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver)
        ,
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    })
);

},{"./wrap-idb-value.js":"dFzQ2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dFzQ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>reverseTransformCache
);
parcelHelpers.export(exports, "i", ()=>instanceOfAny
);
parcelHelpers.export(exports, "r", ()=>replaceTraps
);
parcelHelpers.export(exports, "u", ()=>unwrap
);
parcelHelpers.export(exports, "w", ()=>wrap
);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c
    )
;
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction, 
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey, 
    ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise.then((value)=>{
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
    // Catching to avoid "Uncaught Promise exceptions"
    }).catch(()=>{
    });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') return target.objectStoreNames || transactionStoreNamesMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) return true;
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
            storeNames
        ]);
        return wrap(tx);
    };
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
    };
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5sVc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _database = require("@firebase/database");
parcelHelpers.exportAll(_database, exports);

},{"@firebase/database":"7byAH","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7byAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataSnapshot", ()=>DataSnapshot
);
parcelHelpers.export(exports, "Database", ()=>Database
);
parcelHelpers.export(exports, "OnDisconnect", ()=>OnDisconnect
);
parcelHelpers.export(exports, "QueryConstraint", ()=>QueryConstraint
);
parcelHelpers.export(exports, "TransactionResult", ()=>TransactionResult
);
parcelHelpers.export(exports, "_QueryImpl", ()=>QueryImpl
);
parcelHelpers.export(exports, "_QueryParams", ()=>QueryParams
);
parcelHelpers.export(exports, "_ReferenceImpl", ()=>ReferenceImpl
);
parcelHelpers.export(exports, "_TEST_ACCESS_forceRestClient", ()=>forceRestClient
);
parcelHelpers.export(exports, "_TEST_ACCESS_hijackHash", ()=>hijackHash
);
parcelHelpers.export(exports, "_repoManagerDatabaseFromApp", ()=>repoManagerDatabaseFromApp
);
parcelHelpers.export(exports, "_setSDKVersion", ()=>setSDKVersion
);
parcelHelpers.export(exports, "_validatePathString", ()=>validatePathString
);
parcelHelpers.export(exports, "_validateWritablePath", ()=>validateWritablePath
);
parcelHelpers.export(exports, "child", ()=>child
);
parcelHelpers.export(exports, "connectDatabaseEmulator", ()=>connectDatabaseEmulator
);
parcelHelpers.export(exports, "enableLogging", ()=>enableLogging
);
parcelHelpers.export(exports, "endAt", ()=>endAt
);
parcelHelpers.export(exports, "endBefore", ()=>endBefore
);
parcelHelpers.export(exports, "equalTo", ()=>equalTo
);
parcelHelpers.export(exports, "forceLongPolling", ()=>forceLongPolling
);
parcelHelpers.export(exports, "forceWebSockets", ()=>forceWebSockets
);
parcelHelpers.export(exports, "get", ()=>get
);
parcelHelpers.export(exports, "getDatabase", ()=>getDatabase
);
parcelHelpers.export(exports, "goOffline", ()=>goOffline
);
parcelHelpers.export(exports, "goOnline", ()=>goOnline
);
parcelHelpers.export(exports, "increment", ()=>increment
);
parcelHelpers.export(exports, "limitToFirst", ()=>limitToFirst
);
parcelHelpers.export(exports, "limitToLast", ()=>limitToLast
);
parcelHelpers.export(exports, "off", ()=>off
);
parcelHelpers.export(exports, "onChildAdded", ()=>onChildAdded
);
parcelHelpers.export(exports, "onChildChanged", ()=>onChildChanged
);
parcelHelpers.export(exports, "onChildMoved", ()=>onChildMoved
);
parcelHelpers.export(exports, "onChildRemoved", ()=>onChildRemoved
);
parcelHelpers.export(exports, "onDisconnect", ()=>onDisconnect2
);
parcelHelpers.export(exports, "onValue", ()=>onValue
);
parcelHelpers.export(exports, "orderByChild", ()=>orderByChild
);
parcelHelpers.export(exports, "orderByKey", ()=>orderByKey
);
parcelHelpers.export(exports, "orderByPriority", ()=>orderByPriority
);
parcelHelpers.export(exports, "orderByValue", ()=>orderByValue
);
parcelHelpers.export(exports, "push", ()=>push
);
parcelHelpers.export(exports, "query", ()=>query
);
parcelHelpers.export(exports, "ref", ()=>ref1
);
parcelHelpers.export(exports, "refFromURL", ()=>refFromURL
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "runTransaction", ()=>runTransaction
);
parcelHelpers.export(exports, "serverTimestamp", ()=>serverTimestamp
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "setPriority", ()=>setPriority
);
parcelHelpers.export(exports, "setWithPriority", ()=>setWithPriority
);
parcelHelpers.export(exports, "startAfter", ()=>startAfter
);
parcelHelpers.export(exports, "startAt", ()=>startAt
);
parcelHelpers.export(exports, "update", ()=>update
);
var _app = require("@firebase/app");
var _component = require("@firebase/component");
var _util = require("@firebase/util");
var _logger = require("@firebase/logger");
var process = require("process");
const name1 = "@firebase/database";
const version = "0.13.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The semver (www.semver.org) version of the SDK. */ let SDK_VERSION = '';
/**
 * SDK_VERSION should be set before any database instance is created
 * @internal
 */ function setSDKVersion(version1) {
    SDK_VERSION = version1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */ class DOMStorageWrapper {
    /**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */ constructor(domStorage_){
        this.domStorage_ = domStorage_;
        // Use a prefix to avoid collisions with other stuff saved by the app.
        this.prefix_ = 'firebase:';
    }
    /**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */ set(key, value) {
        if (value == null) this.domStorage_.removeItem(this.prefixedName_(key));
        else this.domStorage_.setItem(this.prefixedName_(key), _util.stringify(value));
    }
    /**
     * @returns The value that was stored under this key, or null
     */ get(key) {
        const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
        if (storedVal == null) return null;
        else return _util.jsonEval(storedVal);
    }
    remove(key) {
        this.domStorage_.removeItem(this.prefixedName_(key));
    }
    prefixedName_(name) {
        return this.prefix_ + name;
    }
    toString() {
        return this.domStorage_.toString();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */ class MemoryStorage {
    constructor(){
        this.cache_ = {
        };
        this.isInMemoryStorage = true;
    }
    set(key, value) {
        if (value == null) delete this.cache_[key];
        else this.cache_[key] = value;
    }
    get(key) {
        if (_util.contains(this.cache_, key)) return this.cache_[key];
        return null;
    }
    remove(key) {
        delete this.cache_[key];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */ const createStoragefor = function(domStorageName) {
    try {
        // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
        // so it must be inside the try/catch.
        if (typeof window !== 'undefined' && typeof window[domStorageName] !== 'undefined') {
            // Need to test cache. Just because it's here doesn't mean it works
            const domStorage = window[domStorageName];
            domStorage.setItem('firebase:sentinel', 'cache');
            domStorage.removeItem('firebase:sentinel');
            return new DOMStorageWrapper(domStorage);
        }
    } catch (e) {
    }
    // Failed to create wrapper.  Just return in-memory storage.
    // TODO: log?
    return new MemoryStorage();
};
/** A storage object that lasts across sessions */ const PersistentStorage = createStoragefor('localStorage');
/** A storage object that only lasts one session */ const SessionStorage = createStoragefor('sessionStorage');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logClient = new _logger.Logger('@firebase/database');
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 */ const LUIDGenerator = function() {
    let id = 1;
    return function() {
        return id++;
    };
}();
/**
 * Sha1 hash of the input string
 * @param str - The string to hash
 * @returns {!string} The resulting hash
 */ const sha1 = function(str) {
    const utf8Bytes = _util.stringToByteArray(str);
    const sha11 = new _util.Sha1();
    sha11.update(utf8Bytes);
    const sha1Bytes = sha11.digest();
    return _util.base64.encodeByteArray(sha1Bytes);
};
const buildLogMessage_ = function(...varArgs) {
    let message = '';
    for(let i = 0; i < varArgs.length; i++){
        const arg = varArgs[i];
        if (Array.isArray(arg) || arg && typeof arg === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof arg.length === 'number') message += buildLogMessage_.apply(null, arg);
        else if (typeof arg === 'object') message += _util.stringify(arg);
        else message += arg;
        message += ' ';
    }
    return message;
};
/**
 * Use this for all debug messages in Firebase.
 */ let logger = null;
/**
 * Flag to check for log availability on first log message
 */ let firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param logger_ - A flag to turn on logging, or a custom logger
 * @param persistent - Whether or not to persist logging settings across refreshes
 */ const enableLogging$1 = function(logger_, persistent) {
    _util.assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
    if (logger_ === true) {
        logClient.logLevel = _logger.LogLevel.VERBOSE;
        logger = logClient.log.bind(logClient);
        if (persistent) SessionStorage.set('logging_enabled', true);
    } else if (typeof logger_ === 'function') logger = logger_;
    else {
        logger = null;
        SessionStorage.remove('logging_enabled');
    }
};
const log = function(...varArgs) {
    if (firstLog_ === true) {
        firstLog_ = false;
        if (logger === null && SessionStorage.get('logging_enabled') === true) enableLogging$1(true);
    }
    if (logger) {
        const message = buildLogMessage_.apply(null, varArgs);
        logger(message);
    }
};
const logWrapper = function(prefix) {
    return function(...varArgs) {
        log(prefix, ...varArgs);
    };
};
const error2 = function(...varArgs) {
    const message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_(...varArgs);
    logClient.error(message);
};
const fatal = function(...varArgs) {
    const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
    logClient.error(message);
    throw new Error(message);
};
const warn = function(...varArgs) {
    const message = 'FIREBASE WARNING: ' + buildLogMessage_(...varArgs);
    logClient.warn(message);
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */ const warnIfPageIsSecure = function() {
    // Be very careful accessing browser globals. Who knows what may or may not exist.
    if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https:') !== -1) warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 */ const isInvalidJSONNumber = function(data) {
    return typeof data === 'number' && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};
const executeWhenDOMReady = function(fn) {
    if (_util.isNodeSdk() || document.readyState === 'complete') fn();
    else {
        // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
        // fire before onload), but fall back to onload.
        let called = false;
        const wrappedFn = function() {
            if (!document.body) {
                setTimeout(wrappedFn, Math.floor(10));
                return;
            }
            if (!called) {
                called = true;
                fn();
            }
        };
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', wrappedFn, false);
            // fallback to onload.
            window.addEventListener('load', wrappedFn, false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if (document.attachEvent) {
            // IE.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            document.attachEvent('onreadystatechange', ()=>{
                if (document.readyState === 'complete') wrappedFn();
            });
            // fallback to onload.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.attachEvent('onload', wrappedFn);
        // jQuery has an extra hack for IE that we could employ (based on
        // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
        // I'm hoping we don't need it.
        }
    }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 */ const MIN_NAME = '[MIN_NAME]';
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 */ const MAX_NAME = '[MAX_NAME]';
/**
 * Compares valid Firebase key names, plus min and max name
 */ const nameCompare = function(a, b) {
    if (a === b) return 0;
    else if (a === MIN_NAME || b === MAX_NAME) return -1;
    else if (b === MIN_NAME || a === MAX_NAME) return 1;
    else {
        const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
        if (aAsInt !== null) {
            if (bAsInt !== null) return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
            else return -1;
        } else if (bAsInt !== null) return 1;
        else return a < b ? -1 : 1;
    }
};
/**
 * @returns {!number} comparison result.
 */ const stringCompare = function(a, b) {
    if (a === b) return 0;
    else if (a < b) return -1;
    else return 1;
};
const requireKey = function(key, obj) {
    if (obj && key in obj) return obj[key];
    else throw new Error('Missing required key (' + key + ') in object: ' + _util.stringify(obj));
};
const ObjectToUniqueKey = function(obj) {
    if (typeof obj !== 'object' || obj === null) return _util.stringify(obj);
    const keys = [];
    // eslint-disable-next-line guard-for-in
    for(const k in obj)keys.push(k);
    // Export as json, but with the keys sorted.
    keys.sort();
    let key = '{';
    for(let i = 0; i < keys.length; i++){
        if (i !== 0) key += ',';
        key += _util.stringify(keys[i]);
        key += ':';
        key += ObjectToUniqueKey(obj[keys[i]]);
    }
    key += '}';
    return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param str - The string
 * @param segsize - The maximum number of chars in the string.
 * @returns The string, split into appropriately-sized chunks
 */ const splitStringBySize = function(str, segsize) {
    const len = str.length;
    if (len <= segsize) return [
        str
    ];
    const dataSegs = [];
    for(let c = 0; c < len; c += segsize)if (c + segsize > len) dataSegs.push(str.substring(c, len));
    else dataSegs.push(str.substring(c, c + segsize));
    return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */ function each(obj, fn) {
    for(const key in obj)if (obj.hasOwnProperty(key)) fn(key, obj[key]);
}
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */ const doubleToIEEE754String = function(v) {
    _util.assert(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL
    const ebits = 11, fbits = 52;
    const bias = (1 << ebits - 1) - 1;
    let s, e, f, ln, i;
    // Compute sign, exponent, fraction
    // Skip NaN / Infinity handling --MJL.
    if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
    } else {
        s = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        } else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
    }
    // Pack sign, exponent, fraction
    const bits = [];
    for(i = fbits; i; i -= 1){
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
    }
    for(i = ebits; i; i -= 1){
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
    }
    bits.push(s ? 1 : 0);
    bits.reverse();
    const str = bits.join('');
    // Return the data as a hex string. --MJL
    let hexByteString = '';
    for(i = 0; i < 64; i += 8){
        let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1) hexByte = '0' + hexByte;
        hexByteString = hexByteString + hexByte;
    }
    return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 */ const isChromeExtensionContentScript = function() {
    return !!(typeof window === 'object' && window['chrome'] && window['chrome']['extension'] && !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 */ const isWindowsStoreApp = function() {
    // Check for the presence of a couple WinRT globals
    return typeof Windows === 'object' && typeof Windows.UI === 'object';
};
/**
 * Converts a server error code to a Javascript Error
 */ function errorForServerCode(code, query) {
    let reason = 'Unknown Error';
    if (code === 'too_big') reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
    else if (code === 'permission_denied') reason = "Client doesn't have permission to access the desired data.";
    else if (code === 'unavailable') reason = 'The service is unavailable';
    const error1 = new Error(code + ' at ' + query._path.toString() + ': ' + reason);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error1.code = code.toUpperCase();
    return error1;
}
/**
 * Used to test for integer-looking strings
 */ const INTEGER_REGEXP_ = new RegExp('^-?(0*)\\d{1,10}$');
/**
 * For use in keys, the minimum possible 32-bit integer.
 */ const INTEGER_32_MIN = -2147483648;
/**
 * For use in kyes, the maximum possible 32-bit integer.
 */ const INTEGER_32_MAX = 2147483647;
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 */ const tryParseInt = function(str) {
    if (INTEGER_REGEXP_.test(str)) {
        const intVal = Number(str);
        if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) return intVal;
    }
    return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param fn - The code to guard.
 */ const exceptionGuard = function(fn) {
    try {
        fn();
    } catch (e) {
        // Re-throw exception when it's safe.
        setTimeout(()=>{
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            const stack = e.stack || '';
            warn('Exception was thrown by user callback.', stack);
            throw e;
        }, Math.floor(0));
    }
};
/**
 * @returns {boolean} true if we think we're currently being crawled.
 */ const beingCrawled = function() {
    const userAgent = typeof window === 'object' && window['navigator'] && window['navigator']['userAgent'] || '';
    // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
    // believe to support JavaScript/AJAX rendering.
    // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
    // would have seen the page" is flaky if we don't treat it as a crawler.
    return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param fn - Function to run.
 * @param time - Milliseconds to wait before running.
 * @returns The setTimeout() return value.
 */ const setTimeoutNonBlocking = function(fn, time) {
    const timeout = setTimeout(fn, time);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof timeout === 'object' && timeout['unref']) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeout['unref']();
    return timeout;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around AppCheck's token fetching capabilities.
 */ class AppCheckTokenProvider {
    constructor(appName_, appCheckProvider){
        this.appName_ = appName_;
        this.appCheckProvider = appCheckProvider;
        this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({
            optional: true
        });
        if (!this.appCheck) appCheckProvider === null || appCheckProvider === void 0 || appCheckProvider.get().then((appCheck)=>this.appCheck = appCheck
        );
    }
    getToken(forceRefresh) {
        if (!this.appCheck) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAppCheck. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // AppCheck and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.appCheck) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.appCheck.getToken(forceRefresh);
    }
    addTokenChangeListener(listener) {
        var _a;
        (_a = this.appCheckProvider) === null || _a === void 0 || _a.get().then((appCheck)=>appCheck.addTokenListener(listener)
        );
    }
    notifyForInvalidToken() {
        warn(`Provided AppCheck credentials for the app named "${this.appName_}" ` + 'are invalid. This usually indicates your app was not initialized correctly.');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */ class FirebaseAuthTokenProvider {
    constructor(appName_1, firebaseOptions_, authProvider_){
        this.appName_ = appName_1;
        this.firebaseOptions_ = firebaseOptions_;
        this.authProvider_ = authProvider_;
        this.auth_ = null;
        this.auth_ = authProvider_.getImmediate({
            optional: true
        });
        if (!this.auth_) authProvider_.onInit((auth)=>this.auth_ = auth
        );
    }
    getToken(forceRefresh) {
        if (!this.auth_) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAuth. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // Auth and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.auth_) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.auth_.getToken(forceRefresh).catch((error1)=>{
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error1 && error1.code === 'auth/token-not-initialized') {
                log('Got auth/token-not-initialized error.  Treating as null token.');
                return null;
            } else return Promise.reject(error1);
        });
    }
    addTokenChangeListener(listener) {
        // TODO: We might want to wrap the listener and call it with no args to
        // avoid a leaky abstraction, but that makes removing the listener harder.
        if (this.auth_) this.auth_.addAuthTokenListener(listener);
        else this.authProvider_.get().then((auth)=>auth.addAuthTokenListener(listener)
        );
    }
    removeTokenChangeListener(listener) {
        this.authProvider_.get().then((auth)=>auth.removeAuthTokenListener(listener)
        );
    }
    notifyForInvalidToken() {
        let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not ' + 'initialized correctly. ';
        if ('credential' in this.firebaseOptions_) errorMessage += "Make sure the \"credential\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.";
        else if ('serviceAccount' in this.firebaseOptions_) errorMessage += "Make sure the \"serviceAccount\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.";
        else errorMessage += "Make sure the \"apiKey\" and \"databaseURL\" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.";
        warn(errorMessage);
    }
}
/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */ class EmulatorTokenProvider {
    constructor(accessToken){
        this.accessToken = accessToken;
    }
    getToken(forceRefresh) {
        return Promise.resolve({
            accessToken: this.accessToken
        });
    }
    addTokenChangeListener(listener) {
        // Invoke the listener immediately to match the behavior in Firebase Auth
        // (see packages/auth/src/auth.js#L1807)
        listener(this.accessToken);
    }
    removeTokenChangeListener(listener) {
    }
    notifyForInvalidToken() {
    }
}
/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */ EmulatorTokenProvider.OWNER = 'owner';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PROTOCOL_VERSION = '5';
const VERSION_PARAM = 'v';
const TRANSPORT_SESSION_PARAM = 's';
const REFERER_PARAM = 'r';
const FORGE_REF = 'f';
// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
const FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
const LAST_SESSION_PARAM = 'ls';
const APPLICATION_ID_PARAM = 'p';
const APP_CHECK_TOKEN_PARAM = 'ac';
const WEBSOCKET = 'websocket';
const LONG_POLLING = 'long_polling';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A class that holds metadata about a Repo object
 */ class RepoInfo {
    /**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */ constructor(host1, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = '', includeNamespaceInQueryParams = false){
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.nodeAdmin = nodeAdmin;
        this.persistenceKey = persistenceKey;
        this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
        this._host = host1.toLowerCase();
        this._domain = this._host.substr(this._host.indexOf('.') + 1);
        this.internalHost = PersistentStorage.get('host:' + host1) || this._host;
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === 's-';
    }
    isCustomHost() {
        return this._domain !== 'firebaseio.com' && this._domain !== 'firebaseio-demo.com';
    }
    get host() {
        return this._host;
    }
    set host(newHost) {
        if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) PersistentStorage.set('host:' + this._host, this.internalHost);
        }
    }
    toString() {
        let str = this.toURLString();
        if (this.persistenceKey) str += '<' + this.persistenceKey + '>';
        return str;
    }
    toURLString() {
        const protocol = this.secure ? 'https://' : 'http://';
        const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : '';
        return `${protocol}${this.host}/${query}`;
    }
}
function repoInfoNeedsQueryParam(repoInfo) {
    return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */ function repoInfoConnectionURL(repoInfo, type, params) {
    _util.assert(typeof type === 'string', 'typeof type must == string');
    _util.assert(typeof params === 'object', 'typeof params must == object');
    let connURL;
    if (type === WEBSOCKET) connURL = (repoInfo.secure ? 'wss://' : 'ws://') + repoInfo.internalHost + '/.ws?';
    else if (type === LONG_POLLING) connURL = (repoInfo.secure ? 'https://' : 'http://') + repoInfo.internalHost + '/.lp?';
    else throw new Error('Unknown connection type: ' + type);
    if (repoInfoNeedsQueryParam(repoInfo)) params['ns'] = repoInfo.namespace;
    const pairs = [];
    each(params, (key, value)=>{
        pairs.push(key + '=' + value);
    });
    return connURL + pairs.join('&');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Tracks a collection of stats.
 */ class StatsCollection {
    constructor(){
        this.counters_ = {
        };
    }
    incrementCounter(name, amount = 1) {
        if (!_util.contains(this.counters_, name)) this.counters_[name] = 0;
        this.counters_[name] += amount;
    }
    get() {
        return _util.deepCopy(this.counters_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const collections = {
};
const reporters = {
};
function statsManagerGetCollection(repoInfo) {
    const hashString = repoInfo.toString();
    if (!collections[hashString]) collections[hashString] = new StatsCollection();
    return collections[hashString];
}
function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
    const hashString = repoInfo.toString();
    if (!reporters[hashString]) reporters[hashString] = creatorFunction();
    return reporters[hashString];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */ class PacketReceiver {
    /**
     * @param onMessage_
     */ constructor(onMessage_){
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
    }
    closeAfter(responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
        }
    }
    /**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */ handleResponse(requestNum, data) {
        this.pendingResponses[requestNum] = data;
        while(this.pendingResponses[this.currentResponseNum]){
            const toProcess = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for(let i = 0; i < toProcess.length; ++i)if (toProcess[i]) exceptionGuard(()=>{
                this.onMessage_(toProcess[i]);
            });
            if (this.currentResponseNum === this.closeAfterResponse) {
                if (this.onClose) {
                    this.onClose();
                    this.onClose = null;
                }
                break;
            }
            this.currentResponseNum++;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // URL query parameters associated with longpolling
const FIREBASE_LONGPOLL_START_PARAM = 'start';
const FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
const FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
const FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
const FIREBASE_LONGPOLL_ID_PARAM = 'id';
const FIREBASE_LONGPOLL_PW_PARAM = 'pw';
const FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
const FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
const FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
const FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
const FIREBASE_LONGPOLL_DATA_PARAM = 'd';
const FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe';
//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
const MAX_URL_DATA_SIZE = 1870;
const SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=
const MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 */ const KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 */ const LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 */ class BrowserPollConnection {
    /**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */ constructor(connId, repoInfo2, applicationId2, appCheckToken2, authToken, transportSessionId2, lastSessionId2){
        this.connId = connId;
        this.repoInfo = repoInfo2;
        this.applicationId = applicationId2;
        this.appCheckToken = appCheckToken2;
        this.authToken = authToken;
        this.transportSessionId = transportSessionId2;
        this.lastSessionId = lastSessionId2;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = logWrapper(connId);
        this.stats_ = statsManagerGetCollection(repoInfo2);
        this.urlFn = (params)=>{
            // Always add the token if we have one.
            if (this.appCheckToken) params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            return repoInfoConnectionURL(repoInfo2, LONG_POLLING, params);
        };
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect) {
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(()=>{
            this.log_('Timed out trying to connect.');
            // Make sure we clear the host cache
            this.onClosed_();
            this.connectTimeoutTimer_ = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(LP_CONNECT_TIMEOUT));
        // Ensure we delay the creation of the iframe until the DOM is loaded.
        executeWhenDOMReady(()=>{
            if (this.isClosed_) return;
            //Set up a callback that gets triggered once a connection is set up.
            this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args)=>{
                const [command, arg1, arg2, arg3, arg4] = args;
                this.incrementIncomingBytes_(args);
                if (!this.scriptTagHolder) return; // we closed the connection.
                if (this.connectTimeoutTimer_) {
                    clearTimeout(this.connectTimeoutTimer_);
                    this.connectTimeoutTimer_ = null;
                }
                this.everConnected_ = true;
                if (command === FIREBASE_LONGPOLL_START_PARAM) {
                    this.id = arg1;
                    this.password = arg2;
                } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    // Don't clear the host cache. We got a response from the server, so we know it's reachable
                    if (arg1) {
                        // We aren't expecting any more data (other than what the server's already in the process of sending us
                        // through our already open polls), so don't send any more.
                        this.scriptTagHolder.sendNewPolls = false;
                        // arg1 in this case is the last response number sent by the server. We should try to receive
                        // all of the responses up to this one before closing
                        this.myPacketOrderer.closeAfter(arg1, ()=>{
                            this.onClosed_();
                        });
                    } else this.onClosed_();
                } else throw new Error('Unrecognized command received: ' + command);
            }, (...args)=>{
                const [pN, data] = args;
                this.incrementIncomingBytes_(args);
                this.myPacketOrderer.handleResponse(pN, data);
            }, ()=>{
                this.onClosed_();
            }, this.urlFn);
            //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.
            const urlParams = {
            };
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (this.scriptTagHolder.uniqueCallbackIdentifier) urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
            if (this.transportSessionId) urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
            if (this.lastSessionId) urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
            if (this.applicationId) urlParams[APPLICATION_ID_PARAM] = this.applicationId;
            if (this.appCheckToken) urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            if (typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) urlParams[REFERER_PARAM] = FORGE_REF;
            const connectURL = this.urlFn(urlParams);
            this.log_('Connecting via long-poll to ' + connectURL);
            this.scriptTagHolder.addTag(connectURL, ()=>{
            /* do nothing */ });
        });
    }
    /**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */ start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    }
    /**
     * Forces long polling to be considered as a potential transport
     */ static forceAllow() {
        BrowserPollConnection.forceAllow_ = true;
    }
    /**
     * Forces longpolling to not be considered as a potential transport
     */ static forceDisallow() {
        BrowserPollConnection.forceDisallow_ = true;
    }
    // Static method, use string literal so it can be accessed in a generic way
    static isAvailable() {
        if (_util.isNodeSdk()) return false;
        else if (BrowserPollConnection.forceAllow_) return true;
        else // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
        // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
        return !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
    }
    /**
     * No-op for polling
     */ markConnectionHealthy() {
    }
    /**
     * Stops polling and cleans up the iframe
     */ shutdown_() {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }
        //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    }
    /**
     * Triggered when this transport is closed
     */ onClosed_() {
        if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    }
    /**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */ close() {
        if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
        }
    }
    /**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */ send(data) {
        const dataStr = _util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //first, lets get the base64-encoded data
        const base64data = _util.base64Encode(dataStr);
        //We can only fit a certain amount in each URL, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
        //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
        //of segments so that we can reassemble the packet on the server.
        for(let i = 0; i < dataSegs.length; i++){
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    }
    /**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */ addDisconnectPingFrame(id, pw) {
        if (_util.isNodeSdk()) return;
        this.myDisconnFrame = document.createElement('iframe');
        const urlParams = {
        };
        urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
        urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = 'none';
        document.body.appendChild(this.myDisconnFrame);
    }
    /**
     * Used to track the bytes received by this client
     */ incrementIncomingBytes_(args) {
        // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
        const bytesReceived = _util.stringify(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter('bytes_received', bytesReceived);
    }
}
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/ class FirebaseIFrameScriptHolder {
    /**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */ constructor(commandCB, onMessageCB, onDisconnect1, urlFn){
        this.onDisconnect = onDisconnect1;
        this.urlFn = urlFn;
        //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
        //problems in some browsers.
        this.outstandingRequests = new Set();
        //A queue of the pending segments waiting for transmission to the server.
        this.pendingSegs = [];
        //A serial number. We use this for two things:
        // 1) A way to ensure the browser doesn't cache responses to polls
        // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
        //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
        //    JSONP code in the order it was added to the iframe.
        this.currentSerial = Math.floor(Math.random() * 100000000);
        // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
        // incoming data from the server that we're waiting for).
        this.sendNewPolls = true;
        if (!_util.isNodeSdk()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            //Create an iframe for us to add script tags to.
            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
            // Set the iframe's contents.
            let script = '';
            // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.
            if (this.myIFrame.src && this.myIFrame.src.substr(0, 11) === 'javascript:') {
                const currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            const iframeContents = '<html><body>' + script + '</body></html>';
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            } catch (e) {
                log('frame writing exception');
                if (e.stack) log(e.stack);
                log(e);
            }
        } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }
    /**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */ static createIFrame_() {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        // This is necessary in order to initialize the document inside the iframe
        if (document.body) {
            document.body.appendChild(iframe);
            try {
                // If document.domain has been modified in IE, this will throw an error, and we need to set the
                // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
                // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
                const a = iframe.contentWindow.document;
                if (!a) // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                log('No IE domain setting required');
            } catch (e) {
                const domain = document.domain;
                iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
        } else // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
        // never gets hit.
        throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
        // Get the document of the iframe in a browser-specific way.
        if (iframe.contentDocument) iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
        else if (iframe.contentWindow) iframe.doc = iframe.contentWindow.document; // Internet Explorer
        else if (iframe.document) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iframe.doc = iframe.document; //others?
        return iframe;
    }
    /**
     * Cancel all outstanding queries and remove the frame.
     */ close() {
        //Mark this iframe as dead, so no new requests are sent.
        this.alive = false;
        if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(()=>{
                if (this.myIFrame !== null) {
                    document.body.removeChild(this.myIFrame);
                    this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        // Protect from being called recursively.
        const onDisconnect1 = this.onDisconnect;
        if (onDisconnect1) {
            this.onDisconnect = null;
            onDisconnect1();
        }
    }
    /**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */ startLongPoll(id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
        while(this.newRequest_());
    }
    /**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */ newRequest_() {
        // We keep one outstanding request open all the time to receive data, but if we need to send data
        // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
        // close the old request.
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            const urlParams = {
            };
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            let theURL = this.urlFn(urlParams);
            //Now add as much data as we can.
            let curDataString = '';
            let i = 0;
            while(this.pendingSegs.length > 0){
                //first, lets see if the next segment will fit.
                const nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                    //great, the segment will fit. Lets append it.
                    const theSeg = this.pendingSegs.shift();
                    curDataString = curDataString + '&' + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
                    i++;
                } else break;
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        } else return false;
    }
    /**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */ enqueueSegment(segnum, totalsegs, data) {
        //add this to the queue of segments to send.
        this.pendingSegs.push({
            seg: segnum,
            ts: totalsegs,
            d: data
        });
        //send the data immediately if there isn't already data being transmitted, unless
        //startLongPoll hasn't been called yet.
        if (this.alive) this.newRequest_();
    }
    /**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */ addLongPollTag_(url, serial) {
        //remember that we sent this request.
        this.outstandingRequests.add(serial);
        const doNewRequest = ()=>{
            this.outstandingRequests.delete(serial);
            this.newRequest_();
        };
        // If this request doesn't return on its own accord (by the server sending us some data), we'll
        // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
        const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        const readyStateCB = ()=>{
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout);
            // Trigger a new request so we can continue receiving data.
            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    }
    /**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */ addTag(url, loadCB) {
        if (_util.isNodeSdk()) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.doNodeLongPoll(url, loadCB);
        else setTimeout(()=>{
            try {
                // if we're already closed, don't add this poll
                if (!this.sendNewPolls) return;
                const newScript = this.myIFrame.doc.createElement('script');
                newScript.type = 'text/javascript';
                newScript.async = true;
                newScript.src = url;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newScript.onload = newScript.onreadystatechange = function() {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const rstate = newScript.readyState;
                    if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        newScript.onload = newScript.onreadystatechange = null;
                        if (newScript.parentNode) newScript.parentNode.removeChild(newScript);
                        loadCB();
                    }
                };
                newScript.onerror = ()=>{
                    log('Long-poll script failed to load: ' + url);
                    this.sendNewPolls = false;
                    this.close();
                };
                this.myIFrame.doc.body.appendChild(newScript);
            } catch (e) {
            // TODO: we should make this error visible somehow
            }
        }, Math.floor(1));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WEBSOCKET_MAX_FRAME_SIZE = 16384;
const WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
let WebSocketImpl = null;
if (typeof MozWebSocket !== 'undefined') WebSocketImpl = MozWebSocket;
else if (typeof WebSocket !== 'undefined') WebSocketImpl = WebSocket;
/**
 * Create a new websocket connection with the given callbacks.
 */ class WebSocketConnection {
    /**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */ constructor(connId1, repoInfo1, applicationId1, appCheckToken1, authToken1, transportSessionId1, lastSessionId1){
        this.connId = connId1;
        this.applicationId = applicationId1;
        this.appCheckToken = appCheckToken1;
        this.authToken = authToken1;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = logWrapper(this.connId);
        this.stats_ = statsManagerGetCollection(repoInfo1);
        this.connURL = WebSocketConnection.connectionURL_(repoInfo1, transportSessionId1, lastSessionId1, appCheckToken1, applicationId1);
        this.nodeAdmin = repoInfo1.nodeAdmin;
    }
    /**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */ static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId) {
        const urlParams = {
        };
        urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
        if (!_util.isNodeSdk() && typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) urlParams[REFERER_PARAM] = FORGE_REF;
        if (transportSessionId) urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
        if (lastSessionId) urlParams[LAST_SESSION_PARAM] = lastSessionId;
        if (appCheckToken) urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
        if (applicationId) urlParams[APPLICATION_ID_PARAM] = applicationId;
        return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect) {
        this.onDisconnect = onDisconnect;
        this.onMessage = onMessage;
        this.log_('Websocket connecting to ' + this.connURL);
        this.everConnected_ = false;
        // Assume failure until proven otherwise.
        PersistentStorage.set('previous_websocket_failure', true);
        try {
            let options;
            if (_util.isNodeSdk()) {
                const device = this.nodeAdmin ? 'AdminNode' : 'Node';
                // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
                options = {
                    headers: {
                        'User-Agent': `Firebase/${PROTOCOL_VERSION}/${SDK_VERSION}/${process.platform}/${device}`,
                        'X-Firebase-GMPID': this.applicationId || ''
                    }
                };
                // If using Node with admin creds, AppCheck-related checks are unnecessary.
                // Note that we send the credentials here even if they aren't admin credentials, which is
                // not a problem.
                // Note that this header is just used to bypass appcheck, and the token should still be sent
                // through the websocket connection once it is established.
                if (this.authToken) options.headers['Authorization'] = `Bearer ${this.authToken}`;
                if (this.appCheckToken) options.headers['X-Firebase-AppCheck'] = this.appCheckToken;
                // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
                const env = {
                };
                const proxy = this.connURL.indexOf('wss://') === 0 ? env['HTTPS_PROXY'] || env['https_proxy'] : env['HTTP_PROXY'] || env['http_proxy'];
                if (proxy) options['proxy'] = {
                    origin: proxy
                };
            }
            this.mySock = new WebSocketImpl(this.connURL, [], options);
        } catch (e) {
            this.log_('Error instantiating WebSocket.');
            const error1 = e.message || e.data;
            if (error1) this.log_(error1);
            this.onClosed_();
            return;
        }
        this.mySock.onopen = ()=>{
            this.log_('Websocket connected.');
            this.everConnected_ = true;
        };
        this.mySock.onclose = ()=>{
            this.log_('Websocket connection was disconnected.');
            this.mySock = null;
            this.onClosed_();
        };
        this.mySock.onmessage = (m)=>{
            this.handleIncomingFrame(m);
        };
        this.mySock.onerror = (e)=>{
            this.log_('WebSocket error.  Closing connection.');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const error1 = e.message || e.data;
            if (error1) this.log_(error1);
            this.onClosed_();
        };
    }
    /**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */ start() {
    }
    static forceDisallow() {
        WebSocketConnection.forceDisallow_ = true;
    }
    static isAvailable() {
        let isOldAndroid = false;
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
                if (parseFloat(oldAndroidMatch[1]) < 4.4) isOldAndroid = true;
            }
        }
        return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
    }
    /**
     * Returns true if we previously failed to connect with this transport.
     */ static previouslyFailed() {
        // If our persistent storage is actually only in-memory storage,
        // we default to assuming that it previously failed to be safe.
        return PersistentStorage.isInMemoryStorage || PersistentStorage.get('previous_websocket_failure') === true;
    }
    markConnectionHealthy() {
        PersistentStorage.remove('previous_websocket_failure');
    }
    appendFrame_(data) {
        this.frames.push(data);
        if (this.frames.length === this.totalFrames) {
            const fullMess = this.frames.join('');
            this.frames = null;
            const jsonMess = _util.jsonEval(fullMess);
            //handle the message
            this.onMessage(jsonMess);
        }
    }
    /**
     * @param frameCount - The number of frames we are expecting from the server
     */ handleNewFrameCount_(frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
    }
    /**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */ extractFrameCount_(data) {
        _util.assert(this.frames === null, 'We already have a frame buffer');
        // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
        // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
        if (data.length <= 6) {
            const frameCount = Number(data);
            if (!isNaN(frameCount)) {
                this.handleNewFrameCount_(frameCount);
                return null;
            }
        }
        this.handleNewFrameCount_(1);
        return data;
    }
    /**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */ handleIncomingFrame(mess) {
        if (this.mySock === null) return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
        const data = mess['data'];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter('bytes_received', data.length);
        this.resetKeepAlive();
        if (this.frames !== null) // we're buffering
        this.appendFrame_(data);
        else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            const remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) this.appendFrame_(remainingData);
        }
    }
    /**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */ send(data) {
        this.resetKeepAlive();
        const dataStr = _util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //We can only fit a certain amount in each websocket frame, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
        //Send the length header
        if (dataSegs.length > 1) this.sendString_(String(dataSegs.length));
        //Send the actual data in segments.
        for(let i = 0; i < dataSegs.length; i++)this.sendString_(dataSegs[i]);
    }
    shutdown_() {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
        }
        if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
        }
    }
    onClosed_() {
        if (!this.isClosed_) {
            this.log_('WebSocket is closing itself');
            this.shutdown_();
            // since this is an internal close, trigger the close listener
            if (this.onDisconnect) {
                this.onDisconnect(this.everConnected_);
                this.onDisconnect = null;
            }
        }
    }
    /**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */ close() {
        if (!this.isClosed_) {
            this.log_('WebSocket is being closed');
            this.shutdown_();
        }
    }
    /**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */ resetKeepAlive() {
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(()=>{
            //If there has been no websocket activity for a while, send a no-op
            if (this.mySock) this.sendString_('0');
            this.resetKeepAlive();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
    }
    /**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */ sendString_(str) {
        // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
        // calls for some unknown reason.  We treat these as an error and disconnect.
        // See https://app.asana.com/0/58926111402292/68021340250410
        try {
            this.mySock.send(str);
        } catch (e) {
            this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
            setTimeout(this.onClosed_.bind(this), 0);
        }
    }
}
/**
 * Number of response before we consider the connection "healthy."
 */ WebSocketConnection.responsesRequiredToBeHealthy = 2;
/**
 * Time to wait for the connection te become healthy before giving up.
 */ WebSocketConnection.healthyTimeout = 30000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */ class TransportManager {
    /**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */ constructor(repoInfo3){
        this.initTransports_(repoInfo3);
    }
    static get ALL_TRANSPORTS() {
        return [
            BrowserPollConnection,
            WebSocketConnection
        ];
    }
    /**
     * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
     * TransportManager has already set up transports_
     */ static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_;
    }
    initTransports_(repoInfo) {
        const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection['isAvailable']();
        let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
        }
        if (isSkipPollConnection) this.transports_ = [
            WebSocketConnection
        ];
        else {
            const transports = this.transports_ = [];
            for (const transport of TransportManager.ALL_TRANSPORTS)if (transport && transport['isAvailable']()) transports.push(transport);
            TransportManager.globalTransportInitialized_ = true;
        }
    }
    /**
     * @returns The constructor for the initial transport to use
     */ initialTransport() {
        if (this.transports_.length > 0) return this.transports_[0];
        else throw new Error('No transports available');
    }
    /**
     * @returns The constructor for the next transport, or null
     */ upgradeTransport() {
        if (this.transports_.length > 1) return this.transports_[1];
        else return null;
    }
}
// Keeps track of whether the TransportManager has already chosen a transport to use
TransportManager.globalTransportInitialized_ = false;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Abort upgrade attempt if it takes longer than 60s.
const UPGRADE_TIMEOUT = 60000;
// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
const DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000;
// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
const BYTES_SENT_HEALTHY_OVERRIDE = 10240;
const BYTES_RECEIVED_HEALTHY_OVERRIDE = 102400;
const MESSAGE_TYPE = 't';
const MESSAGE_DATA = 'd';
const CONTROL_SHUTDOWN = 's';
const CONTROL_RESET = 'r';
const CONTROL_ERROR = 'e';
const CONTROL_PONG = 'o';
const SWITCH_ACK = 'a';
const END_TRANSMISSION = 'n';
const PING = 'p';
const SERVER_HELLO = 'h';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */ class Connection {
    /**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */ constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_1, onReady_, onDisconnect_, onKill_, lastSessionId3){
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.appCheckToken_ = appCheckToken_;
        this.authToken_ = authToken_;
        this.onMessage_ = onMessage_1;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId3;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0 /* CONNECTING */ ;
        this.log_ = logWrapper('c:' + this.id + ':');
        this.transportManager_ = new TransportManager(repoInfo_);
        this.log_('Connection created');
        this.start_();
    }
    /**
     * Starts a connection attempt
     */ start_() {
        const conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        const onMessageReceived = this.connReceiver_(this.conn_);
        const onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        /*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */ setTimeout(()=>{
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        const healthyTimeoutMS = conn['healthyTimeout'] || 0;
        if (healthyTimeoutMS > 0) this.healthyTimeout_ = setTimeoutNonBlocking(()=>{
            this.healthyTimeout_ = null;
            if (!this.isHealthy_) {
                if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                    this.log_('Connection exceeded healthy timeout but has received ' + this.conn_.bytesReceived + ' bytes.  Marking connection healthy.');
                    this.isHealthy_ = true;
                    this.conn_.markConnectionHealthy();
                } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) this.log_('Connection exceeded healthy timeout but has sent ' + this.conn_.bytesSent + ' bytes.  Leaving connection alive.');
                else {
                    this.log_('Closing unhealthy connection after timeout.');
                    this.close();
                }
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(healthyTimeoutMS));
    }
    nextTransportId_() {
        return 'c:' + this.id + ':' + this.connectionCount++;
    }
    disconnReceiver_(conn) {
        return (everConnected)=>{
            if (conn === this.conn_) this.onConnectionLost_(everConnected);
            else if (conn === this.secondaryConn_) {
                this.log_('Secondary connection lost.');
                this.onSecondaryConnectionLost_();
            } else this.log_('closing an old connection');
        };
    }
    connReceiver_(conn) {
        return (message)=>{
            if (this.state_ !== 2 /* DISCONNECTED */ ) {
                if (conn === this.rx_) this.onPrimaryMessageReceived_(message);
                else if (conn === this.secondaryConn_) this.onSecondaryMessageReceived_(message);
                else this.log_('message on old connection');
            }
        };
    }
    /**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */ sendRequest(dataMsg) {
        // wrap in a data message envelope and send it on
        const msg = {
            t: 'd',
            d: dataMsg
        };
        this.sendData_(msg);
    }
    tryCleanupConnection() {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
        // the server will shutdown the old connection
        }
    }
    onSecondaryControl_(controlData) {
        if (MESSAGE_TYPE in controlData) {
            const cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) this.upgradeIfSecondaryHealthy_();
            else if (cmd === CONTROL_RESET) {
                // Most likely the session wasn't valid. Abandon the switch attempt
                this.log_('Got a reset on secondary, closing it');
                this.secondaryConn_.close();
                // If we were already using this connection for something, than we need to fully close
                if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) this.close();
            } else if (cmd === CONTROL_PONG) {
                this.log_('got pong on secondary.');
                this.secondaryResponsesRequired_--;
                this.upgradeIfSecondaryHealthy_();
            }
        }
    }
    onSecondaryMessageReceived_(parsedData) {
        const layer = requireKey('t', parsedData);
        const data = requireKey('d', parsedData);
        if (layer === 'c') this.onSecondaryControl_(data);
        else if (layer === 'd') // got a data message, but we're still second connection. Need to buffer it up
        this.pendingDataMessages.push(data);
        else throw new Error('Unknown protocol layer: ' + layer);
    }
    upgradeIfSecondaryHealthy_() {
        if (this.secondaryResponsesRequired_ <= 0) {
            this.log_('Secondary connection is healthy.');
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
        } else {
            // Send a ping to make sure the connection is healthy.
            this.log_('sending ping on secondary.');
            this.secondaryConn_.send({
                t: 'c',
                d: {
                    t: PING,
                    d: {
                    }
                }
            });
        }
    }
    proceedWithUpgrade_() {
        // tell this connection to consider itself open
        this.secondaryConn_.start();
        // send ack
        this.log_('sending client ack on secondary');
        this.secondaryConn_.send({
            t: 'c',
            d: {
                t: SWITCH_ACK,
                d: {
                }
            }
        });
        // send end packet on primary transport, switch to sending on this one
        // can receive on this one, buffer responses until end received on primary transport
        this.log_('Ending transmission on primary');
        this.conn_.send({
            t: 'c',
            d: {
                t: END_TRANSMISSION,
                d: {
                }
            }
        });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
    }
    onPrimaryMessageReceived_(parsedData) {
        // Must refer to parsedData properties in quotes, so closure doesn't touch them.
        const layer = requireKey('t', parsedData);
        const data = requireKey('d', parsedData);
        if (layer === 'c') this.onControl_(data);
        else if (layer === 'd') this.onDataMessage_(data);
    }
    onDataMessage_(message) {
        this.onPrimaryResponse_();
        // We don't do anything with data messages, just kick them up a level
        this.onMessage_(message);
    }
    onPrimaryResponse_() {
        if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
                this.log_('Primary connection is healthy.');
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
            }
        }
    }
    onControl_(controlData) {
        const cmd = requireKey(MESSAGE_TYPE, controlData);
        if (MESSAGE_DATA in controlData) {
            const payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) this.onHandshake_(payload);
            else if (cmd === END_TRANSMISSION) {
                this.log_('recvd end transmission on primary');
                this.rx_ = this.secondaryConn_;
                for(let i = 0; i < this.pendingDataMessages.length; ++i)this.onDataMessage_(this.pendingDataMessages[i]);
                this.pendingDataMessages = [];
                this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) // This was previously the 'onKill' callback passed to the lower-level connection
            // payload in this case is the reason for the shutdown. Generally a human-readable error
            this.onConnectionShutdown_(payload);
            else if (cmd === CONTROL_RESET) // payload in this case is the host we should contact
            this.onReset_(payload);
            else if (cmd === CONTROL_ERROR) error2('Server Error: ' + payload);
            else if (cmd === CONTROL_PONG) {
                this.log_('got pong on primary.');
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
            } else error2('Unknown control packet command: ' + cmd);
        }
    }
    /**
     * @param handshake - The handshake data returned from the server
     */ onHandshake_(handshake) {
        const timestamp = handshake.ts;
        const version1 = handshake.v;
        const host1 = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.host = host1;
        // if we've already closed the connection, then don't bother trying to progress further
        if (this.state_ === 0 /* CONNECTING */ ) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            if (PROTOCOL_VERSION !== version1) warn('Protocol version mismatch detected');
            // TODO: do we want to upgrade? when? maybe a delay?
            this.tryStartUpgrade_();
        }
    }
    tryStartUpgrade_() {
        const conn = this.transportManager_.upgradeTransport();
        if (conn) this.startUpgrade_(conn);
    }
    startUpgrade_(conn) {
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.secondaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        const onMessage = this.connReceiver_(this.secondaryConn_);
        const onDisconnect2 = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect2);
        // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
        setTimeoutNonBlocking(()=>{
            if (this.secondaryConn_) {
                this.log_('Timed out trying to upgrade.');
                this.secondaryConn_.close();
            }
        }, Math.floor(UPGRADE_TIMEOUT));
    }
    onReset_(host) {
        this.log_('Reset packet received.  New host: ' + host);
        this.repoInfo_.host = host;
        // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
        // We don't currently support resets after the connection has already been established
        if (this.state_ === 1 /* CONNECTED */ ) this.close();
        else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
        }
    }
    onConnectionEstablished_(conn, timestamp) {
        this.log_('Realtime connection established.');
        this.conn_ = conn;
        this.state_ = 1 /* CONNECTED */ ;
        if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
        }
        // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
        // send some pings.
        if (this.primaryResponsesRequired_ === 0) {
            this.log_('Primary connection is healthy.');
            this.isHealthy_ = true;
        } else setTimeoutNonBlocking(()=>{
            this.sendPingOnPrimaryIfNecessary_();
        }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
    sendPingOnPrimaryIfNecessary_() {
        // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
        if (!this.isHealthy_ && this.state_ === 1 /* CONNECTED */ ) {
            this.log_('sending ping on primary.');
            this.sendData_({
                t: 'c',
                d: {
                    t: PING,
                    d: {
                    }
                }
            });
        }
    }
    onSecondaryConnectionLost_() {
        const conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) // we are relying on this connection already in some capacity. Therefore, a failure is real
        this.close();
    }
    /**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */ onConnectionLost_(everConnected) {
        this.conn_ = null;
        // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
        // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
        if (!everConnected && this.state_ === 0 /* CONNECTING */ ) {
            this.log_('Realtime connection failed.');
            // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
            if (this.repoInfo_.isCacheableHost()) {
                PersistentStorage.remove('host:' + this.repoInfo_.host);
                // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
                this.repoInfo_.internalHost = this.repoInfo_.host;
            }
        } else if (this.state_ === 1 /* CONNECTED */ ) this.log_('Realtime connection lost.');
        this.close();
    }
    onConnectionShutdown_(reason) {
        this.log_('Connection shutdown command received. Shutting down...');
        if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
        }
        // We intentionally don't want to fire onDisconnect (kill is a different case),
        // so clear the callback.
        this.onDisconnect_ = null;
        this.close();
    }
    sendData_(data) {
        if (this.state_ !== 1 /* CONNECTED */ ) throw 'Connection is not connected';
        else this.tx_.send(data);
    }
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */ close() {
        if (this.state_ !== 2 /* DISCONNECTED */ ) {
            this.log_('Closing realtime connection.');
            this.state_ = 2 /* DISCONNECTED */ ;
            this.closeConnections_();
            if (this.onDisconnect_) {
                this.onDisconnect_();
                this.onDisconnect_ = null;
            }
        }
    }
    closeConnections_() {
        this.log_('Shutting down all connections');
        if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
        }
        if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */ class ServerActions {
    put(pathString, data, onComplete, hash) {
    }
    merge(pathString, data, onComplete, hash) {
    }
    /**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */ refreshAuthToken(token) {
    }
    /**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */ refreshAppCheckToken(token) {
    }
    onDisconnectPut(pathString, data, onComplete) {
    }
    onDisconnectMerge(pathString, data, onComplete) {
    }
    onDisconnectCancel(pathString, onComplete) {
    }
    reportStats(stats) {
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */ class EventEmitter {
    constructor(allowedEvents_){
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {
        };
        _util.assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
    }
    /**
     * To be called by derived classes to trigger events.
     */ trigger(eventType, ...varArgs) {
        if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            const listeners = [
                ...this.listeners_[eventType]
            ];
            for(let i = 0; i < listeners.length; i++)listeners[i].callback.apply(listeners[i].context, varArgs);
        }
    }
    on(eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({
            callback,
            context
        });
        const eventData = this.getInitialEvent(eventType);
        if (eventData) callback.apply(context, eventData);
    }
    off(eventType, callback, context) {
        this.validateEventType_(eventType);
        const listeners = this.listeners_[eventType] || [];
        for(let i = 0; i < listeners.length; i++)if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
            listeners.splice(i, 1);
            return;
        }
    }
    validateEventType_(eventType) {
        _util.assert(this.allowedEvents_.find((et)=>{
            return et === eventType;
        }), 'Unknown event: ' + eventType);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */ class OnlineMonitor extends EventEmitter {
    constructor(){
        super([
            'online'
        ]);
        this.online_ = true;
        // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
        // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
        // It would seem that the 'online' event does not always fire consistently. So we disable it
        // for Cordova.
        if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined' && !_util.isMobileCordova()) {
            window.addEventListener('online', ()=>{
                if (!this.online_) {
                    this.online_ = true;
                    this.trigger('online', true);
                }
            }, false);
            window.addEventListener('offline', ()=>{
                if (this.online_) {
                    this.online_ = false;
                    this.trigger('online', false);
                }
            }, false);
        }
    }
    static getInstance() {
        return new OnlineMonitor();
    }
    getInitialEvent(eventType) {
        _util.assert(eventType === 'online', 'Unknown event type: ' + eventType);
        return [
            this.online_
        ];
    }
    currentlyOnline() {
        return this.online_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Maximum key depth. */ const MAX_PATH_DEPTH = 32;
/** Maximum number of (UTF8) bytes in a Firebase path. */ const MAX_PATH_LENGTH_BYTES = 768;
/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */ class Path {
    /**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */ constructor(pathOrString, pieceNum){
        if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split('/');
            // Remove empty pieces.
            let copyTo = 0;
            for(let i = 0; i < this.pieces_.length; i++)if (this.pieces_[i].length > 0) {
                this.pieces_[copyTo] = this.pieces_[i];
                copyTo++;
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
        } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
        }
    }
    toString() {
        let pathString = '';
        for(let i = this.pieceNum_; i < this.pieces_.length; i++)if (this.pieces_[i] !== '') pathString += '/' + this.pieces_[i];
        return pathString || '/';
    }
}
function newEmptyPath() {
    return new Path('');
}
function pathGetFront(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    return path.pieces_[path.pieceNum_];
}
/**
 * @returns The number of segments in this path
 */ function pathGetLength(path) {
    return path.pieces_.length - path.pieceNum_;
}
function pathPopFront(path) {
    let pieceNum1 = path.pieceNum_;
    if (pieceNum1 < path.pieces_.length) pieceNum1++;
    return new Path(path.pieces_, pieceNum1);
}
function pathGetBack(path) {
    if (path.pieceNum_ < path.pieces_.length) return path.pieces_[path.pieces_.length - 1];
    return null;
}
function pathToUrlEncodedString(path) {
    let pathString = '';
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)if (path.pieces_[i] !== '') pathString += '/' + encodeURIComponent(String(path.pieces_[i]));
    return pathString || '/';
}
/**
 * Shallow copy of the parts of the path.
 *
 */ function pathSlice(path, begin = 0) {
    return path.pieces_.slice(path.pieceNum_ + begin);
}
function pathParent(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length - 1; i++)pieces.push(path.pieces_[i]);
    return new Path(pieces, 0);
}
function pathChild(path, childPathObj) {
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)pieces.push(path.pieces_[i]);
    if (childPathObj instanceof Path) for(let i1 = childPathObj.pieceNum_; i1 < childPathObj.pieces_.length; i1++)pieces.push(childPathObj.pieces_[i1]);
    else {
        const childPieces = childPathObj.split('/');
        for(let i2 = 0; i2 < childPieces.length; i2++)if (childPieces[i2].length > 0) pieces.push(childPieces[i2]);
    }
    return new Path(pieces, 0);
}
/**
 * @returns True if there are no segments in this path
 */ function pathIsEmpty(path) {
    return path.pieceNum_ >= path.pieces_.length;
}
/**
 * @returns The path from outerPath to innerPath
 */ function newRelativePath(outerPath, innerPath) {
    const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
    if (outer === null) return innerPath;
    else if (outer === inner) return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
    else throw new Error('INTERNAL ERROR: innerPath (' + innerPath + ') is not within ' + 'outerPath (' + outerPath + ')');
}
/**
 * @returns -1, 0, 1 if left is less, equal, or greater than the right.
 */ function pathCompare(left, right) {
    const leftKeys = pathSlice(left, 0);
    const rightKeys = pathSlice(right, 0);
    for(let i = 0; i < leftKeys.length && i < rightKeys.length; i++){
        const cmp = nameCompare(leftKeys[i], rightKeys[i]);
        if (cmp !== 0) return cmp;
    }
    if (leftKeys.length === rightKeys.length) return 0;
    return leftKeys.length < rightKeys.length ? -1 : 1;
}
/**
 * @returns true if paths are the same.
 */ function pathEquals(path, other) {
    if (pathGetLength(path) !== pathGetLength(other)) return false;
    for(let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
    }
    return true;
}
/**
 * @returns True if this path is a parent of (or the same as) other
 */ function pathContains(path, other) {
    let i = path.pieceNum_;
    let j = other.pieceNum_;
    if (pathGetLength(path) > pathGetLength(other)) return false;
    while(i < path.pieces_.length){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
        ++i;
        ++j;
    }
    return true;
}
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */ class ValidationPath {
    /**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */ constructor(path1, errorPrefix_){
        this.errorPrefix_ = errorPrefix_;
        this.parts_ = pathSlice(path1, 0);
        /** Initialize to number of '/' chars needed in path. */ this.byteLength_ = Math.max(1, this.parts_.length);
        for(let i = 0; i < this.parts_.length; i++)this.byteLength_ += _util.stringLength(this.parts_[i]);
        validationPathCheckValid(this);
    }
}
function validationPathPush(validationPath, child) {
    // Count the needed '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ += 1;
    validationPath.parts_.push(child);
    validationPath.byteLength_ += _util.stringLength(child);
    validationPathCheckValid(validationPath);
}
function validationPathPop(validationPath) {
    const last = validationPath.parts_.pop();
    validationPath.byteLength_ -= _util.stringLength(last);
    // Un-count the previous '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ -= 1;
}
function validationPathCheckValid(validationPath) {
    if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) throw new Error(validationPath.errorPrefix_ + 'has a key path longer than ' + MAX_PATH_LENGTH_BYTES + ' bytes (' + validationPath.byteLength_ + ').');
    if (validationPath.parts_.length > MAX_PATH_DEPTH) throw new Error(validationPath.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + MAX_PATH_DEPTH + ') or object contains a cycle ' + validationPathToErrorString(validationPath));
}
/**
 * String for use in error messages - uses '.' notation for path.
 */ function validationPathToErrorString(validationPath) {
    if (validationPath.parts_.length === 0) return '';
    return "in property '" + validationPath.parts_.join('.') + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VisibilityMonitor extends EventEmitter {
    constructor(){
        super([
            'visible'
        ]);
        let hidden;
        let visibilityChange;
        if (typeof document !== 'undefined' && typeof document.addEventListener !== 'undefined') {
            if (typeof document['hidden'] !== 'undefined') {
                // Opera 12.10 and Firefox 18 and later support
                visibilityChange = 'visibilitychange';
                hidden = 'hidden';
            } else if (typeof document['mozHidden'] !== 'undefined') {
                visibilityChange = 'mozvisibilitychange';
                hidden = 'mozHidden';
            } else if (typeof document['msHidden'] !== 'undefined') {
                visibilityChange = 'msvisibilitychange';
                hidden = 'msHidden';
            } else if (typeof document['webkitHidden'] !== 'undefined') {
                visibilityChange = 'webkitvisibilitychange';
                hidden = 'webkitHidden';
            }
        }
        // Initially, we always assume we are visible. This ensures that in browsers
        // without page visibility support or in cases where we are never visible
        // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
        // reconnects
        this.visible_ = true;
        if (visibilityChange) document.addEventListener(visibilityChange, ()=>{
            const visible = !document[hidden];
            if (visible !== this.visible_) {
                this.visible_ = visible;
                this.trigger('visible', visible);
            }
        }, false);
    }
    static getInstance() {
        return new VisibilityMonitor();
    }
    getInitialEvent(eventType) {
        _util.assert(eventType === 'visible', 'Unknown event type: ' + eventType);
        return [
            this.visible_
        ];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RECONNECT_MIN_DELAY = 1000;
const RECONNECT_MAX_DELAY_DEFAULT = 300000; // 5 minutes in milliseconds (Case: 1858)
const RECONNECT_MAX_DELAY_FOR_ADMINS = 30000; // 30 seconds for admin clients (likely to be a backend server)
const RECONNECT_DELAY_MULTIPLIER = 1.3;
const RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.
const SERVER_KILL_INTERRUPT_REASON = 'server_kill';
// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
const INVALID_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */ class PersistentConnection extends ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_1, applicationId_1, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_){
        super();
        this.repoInfo_ = repoInfo_1;
        this.applicationId_ = applicationId_1;
        this.onDataUpdate_ = onDataUpdate_;
        this.onConnectStatus_ = onConnectStatus_;
        this.onServerInfoUpdate_ = onServerInfoUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        this.authOverride_ = authOverride_;
        // Used for diagnostic logging.
        this.id = PersistentConnection.nextPersistentConnectionId_++;
        this.log_ = logWrapper('p:' + this.id + ':');
        this.interruptReasons_ = {
        };
        this.listens = new Map();
        this.outstandingPuts_ = [];
        this.outstandingGets_ = [];
        this.outstandingPutCount_ = 0;
        this.outstandingGetCount_ = 0;
        this.onDisconnectRequestQueue_ = [];
        this.connected_ = false;
        this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
        this.securityDebugCallback_ = null;
        this.lastSessionId = null;
        this.establishConnectionTimer_ = null;
        this.visible_ = false;
        // Before we get connected, we keep a queue of pending messages to send.
        this.requestCBHash_ = {
        };
        this.requestNumber_ = 0;
        this.realtime_ = null;
        this.authToken_ = null;
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = false;
        this.invalidAuthTokenCount_ = 0;
        this.invalidAppCheckTokenCount_ = 0;
        this.firstConnection_ = true;
        this.lastConnectionAttemptTime_ = null;
        this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !_util.isNodeSdk()) throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
        VisibilityMonitor.getInstance().on('visible', this.onVisible_, this);
        if (repoInfo_1.host.indexOf('fblocal') === -1) OnlineMonitor.getInstance().on('online', this.onOnline_, this);
    }
    sendRequest(action, body, onResponse) {
        const curReqNum = ++this.requestNumber_;
        const msg = {
            r: curReqNum,
            a: action,
            b: body
        };
        this.log_(_util.stringify(msg));
        _util.assert(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) this.requestCBHash_[curReqNum] = onResponse;
    }
    get(query) {
        this.initConnection_();
        const deferred = new _util.Deferred();
        const request = {
            p: query._path.toString(),
            q: query._queryObject
        };
        const outstandingGet = {
            action: 'g',
            request,
            onComplete: (message)=>{
                const payload = message['d'];
                if (message['s'] === 'ok') deferred.resolve(payload);
                else deferred.reject(payload);
            }
        };
        this.outstandingGets_.push(outstandingGet);
        this.outstandingGetCount_++;
        const index = this.outstandingGets_.length - 1;
        if (this.connected_) this.sendGet_(index);
        return deferred.promise;
    }
    listen(query, currentHashFn, tag, onComplete) {
        this.initConnection_();
        const queryId = query._queryIdentifier;
        const pathString = query._path.toString();
        this.log_('Listen called for ' + pathString + ' ' + queryId);
        if (!this.listens.has(pathString)) this.listens.set(pathString, new Map());
        _util.assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), 'listen() called for non-default but complete query');
        _util.assert(!this.listens.get(pathString).has(queryId), `listen() called twice for same path/queryId.`);
        const listenSpec = {
            onComplete,
            hashFn: currentHashFn,
            query,
            tag
        };
        this.listens.get(pathString).set(queryId, listenSpec);
        if (this.connected_) this.sendListen_(listenSpec);
    }
    sendGet_(index) {
        const get = this.outstandingGets_[index];
        this.sendRequest('g', get.request, (message)=>{
            delete this.outstandingGets_[index];
            this.outstandingGetCount_--;
            if (this.outstandingGetCount_ === 0) this.outstandingGets_ = [];
            if (get.onComplete) get.onComplete(message);
        });
    }
    sendListen_(listenSpec) {
        const query = listenSpec.query;
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_('Listen on ' + pathString + ' for ' + queryId);
        const req = {
            p: pathString
        };
        const action = 'q';
        // Only bother to send query if it's non-default.
        if (listenSpec.tag) {
            req['q'] = query._queryObject;
            req['t'] = listenSpec.tag;
        }
        req[/*hash*/ 'h'] = listenSpec.hashFn();
        this.sendRequest(action, req, (message)=>{
            const payload = message[/*data*/ 'd'];
            const status = message[/*status*/ 's'];
            // print warnings in any case...
            PersistentConnection.warnOnListenWarnings_(payload, query);
            const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
            // only trigger actions if the listen hasn't been removed and readded
            if (currentListenSpec === listenSpec) {
                this.log_('listen response', message);
                if (status !== 'ok') this.removeListen_(pathString, queryId);
                if (listenSpec.onComplete) listenSpec.onComplete(status, payload);
            }
        });
    }
    static warnOnListenWarnings_(payload, query) {
        if (payload && typeof payload === 'object' && _util.contains(payload, 'w')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const warnings = _util.safeGet(payload, 'w');
            if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
                const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
                const indexPath = query._path.toString();
                warn(`Using an unspecified index. Your data will be downloaded and ` + `filtered on the client. Consider adding ${indexSpec} at ` + `${indexPath} to your security rules for better performance.`);
            }
        }
    }
    refreshAuthToken(token) {
        this.authToken_ = token;
        this.log_('Auth token refreshed');
        if (this.authToken_) this.tryAuth();
        else //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
        //the credential so we dont become authenticated next time we connect.
        if (this.connected_) this.sendRequest('unauth', {
        }, ()=>{
        });
        this.reduceReconnectDelayIfAdminCredential_(token);
    }
    reduceReconnectDelayIfAdminCredential_(credential) {
        // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
        // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
        const isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || _util.isAdmin(credential)) {
            this.log_('Admin auth credential detected.  Reducing max reconnect time.');
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
    }
    refreshAppCheckToken(token) {
        this.appCheckToken_ = token;
        this.log_('App check token refreshed');
        if (this.appCheckToken_) this.tryAppCheck();
        else //If we're connected we want to let the server know to unauthenticate us.
        //If we're not connected, simply delete the credential so we dont become
        // authenticated next time we connect.
        if (this.connected_) this.sendRequest('unappeck', {
        }, ()=>{
        });
    }
    /**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */ tryAuth() {
        if (this.connected_ && this.authToken_) {
            const token = this.authToken_;
            const authMethod = _util.isValidFormat(token) ? 'auth' : 'gauth';
            const requestData = {
                cred: token
            };
            if (this.authOverride_ === null) requestData['noauth'] = true;
            else if (typeof this.authOverride_ === 'object') requestData['authvar'] = this.authOverride_;
            this.sendRequest(authMethod, requestData, (res)=>{
                const status = res[/*status*/ 's'];
                const data = res[/*data*/ 'd'] || 'error';
                if (this.authToken_ === token) {
                    if (status === 'ok') this.invalidAuthTokenCount_ = 0;
                    else // Triggers reconnect and force refresh for auth token
                    this.onAuthRevoked_(status, data);
                }
            });
        }
    }
    /**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */ tryAppCheck() {
        if (this.connected_ && this.appCheckToken_) this.sendRequest('appcheck', {
            'token': this.appCheckToken_
        }, (res)=>{
            const status = res[/*status*/ 's'];
            const data = res[/*data*/ 'd'] || 'error';
            if (status === 'ok') this.invalidAppCheckTokenCount_ = 0;
            else this.onAppCheckRevoked_(status, data);
        });
    }
    /**
     * @inheritDoc
     */ unlisten(query, tag) {
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_('Unlisten called for ' + pathString + ' ' + queryId);
        _util.assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), 'unlisten() called for non-default but complete query');
        const listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
    }
    sendUnlisten_(pathString, queryId, queryObj, tag) {
        this.log_('Unlisten on ' + pathString + ' for ' + queryId);
        const req = {
            p: pathString
        };
        const action = 'n';
        // Only bother sending queryId if it's non-default.
        if (tag) {
            req['q'] = queryObj;
            req['t'] = tag;
        }
        this.sendRequest(action, req);
    }
    onDisconnectPut(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('o', pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'o',
            data,
            onComplete
        });
    }
    onDisconnectMerge(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('om', pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'om',
            data,
            onComplete
        });
    }
    onDisconnectCancel(pathString, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('oc', pathString, null, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'oc',
            data: null,
            onComplete
        });
    }
    sendOnDisconnect_(action, pathString, data, onComplete) {
        const request = {
            p: pathString,
            /*data*/ d: data
        };
        this.log_('onDisconnect ' + action, request);
        this.sendRequest(action, request, (response)=>{
            if (onComplete) setTimeout(()=>{
                onComplete(response[/*status*/ 's'], response[/* data */ 'd']);
            }, Math.floor(0));
        });
    }
    put(pathString, data, onComplete, hash) {
        this.putInternal('p', pathString, data, onComplete, hash);
    }
    merge(pathString, data, onComplete, hash) {
        this.putInternal('m', pathString, data, onComplete, hash);
    }
    putInternal(action, pathString, data, onComplete, hash) {
        this.initConnection_();
        const request = {
            /*path*/ p: pathString,
            /*data*/ d: data
        };
        if (hash !== undefined) request[/*hash*/ 'h'] = hash;
        // TODO: Only keep track of the most recent put for a given path?
        this.outstandingPuts_.push({
            action,
            request,
            onComplete
        });
        this.outstandingPutCount_++;
        const index = this.outstandingPuts_.length - 1;
        if (this.connected_) this.sendPut_(index);
        else this.log_('Buffering put: ' + pathString);
    }
    sendPut_(index) {
        const action = this.outstandingPuts_[index].action;
        const request = this.outstandingPuts_[index].request;
        const onComplete = this.outstandingPuts_[index].onComplete;
        this.outstandingPuts_[index].queued = this.connected_;
        this.sendRequest(action, request, (message)=>{
            this.log_(action + ' response', message);
            delete this.outstandingPuts_[index];
            this.outstandingPutCount_--;
            // Clean up array occasionally.
            if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
            if (onComplete) onComplete(message[/*status*/ 's'], message[/* data */ 'd']);
        });
    }
    reportStats(stats) {
        // If we're not connected, we just drop the stats.
        if (this.connected_) {
            const request = {
                c: stats
            };
            this.log_('reportStats', request);
            this.sendRequest(/*stats*/ 's', request, (result)=>{
                const status = result[/*status*/ 's'];
                if (status !== 'ok') {
                    const errorReason = result[/* data */ 'd'];
                    this.log_('reportStats', 'Error sending stats: ' + errorReason);
                }
            });
        }
    }
    onDataMessage_(message) {
        if ('r' in message) {
            // this is a response
            this.log_('from server: ' + _util.stringify(message));
            const reqNum = message['r'];
            const onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
                delete this.requestCBHash_[reqNum];
                onResponse(message[/*body*/ 'b']);
            }
        } else if ('error' in message) throw 'A server-side error has occurred: ' + message['error'];
        else if ('a' in message) // a and b are action and body, respectively
        this.onDataPush_(message['a'], message['b']);
    }
    onDataPush_(action, body) {
        this.log_('handleServerMessage', action, body);
        if (action === 'd') this.onDataUpdate_(body[/*path*/ 'p'], body[/*data*/ 'd'], /*isMerge*/ false, body['t']);
        else if (action === 'm') this.onDataUpdate_(body[/*path*/ 'p'], body[/*data*/ 'd'], /*isMerge=*/ true, body['t']);
        else if (action === 'c') this.onListenRevoked_(body[/*path*/ 'p'], body[/*query*/ 'q']);
        else if (action === 'ac') this.onAuthRevoked_(body[/*status code*/ 's'], body[/* explanation */ 'd']);
        else if (action === 'apc') this.onAppCheckRevoked_(body[/*status code*/ 's'], body[/* explanation */ 'd']);
        else if (action === 'sd') this.onSecurityDebugPacket_(body);
        else error2('Unrecognized action received from server: ' + _util.stringify(action) + '\nAre you using the latest client?');
    }
    onReady_(timestamp, sessionId) {
        this.log_('connection ready');
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) this.sendConnectStats_();
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
    }
    scheduleConnect_(timeout) {
        _util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) clearTimeout(this.establishConnectionTimer_);
        // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
        // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
        this.establishConnectionTimer_ = setTimeout(()=>{
            this.establishConnectionTimer_ = null;
            this.establishConnection_();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(timeout));
    }
    initConnection_() {
        if (!this.realtime_ && this.firstConnection_) this.scheduleConnect_(0);
    }
    onVisible_(visible) {
        // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
        if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_('Window became visible.  Reducing delay.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
        this.visible_ = visible;
    }
    onOnline_(online) {
        if (online) {
            this.log_('Browser went online.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        } else {
            this.log_('Browser went offline.  Killing connection.');
            if (this.realtime_) this.realtime_.close();
        }
    }
    onRealtimeDisconnect_() {
        this.log_('data client disconnected');
        this.connected_ = false;
        this.realtime_ = null;
        // Since we don't know if our sent transactions succeeded or not, we need to cancel them.
        this.cancelSentTransactions_();
        // Clear out the pending requests.
        this.requestCBHash_ = {
        };
        if (this.shouldReconnect_()) {
            if (!this.visible_) {
                this.log_("Window isn't visible.  Delaying reconnect.");
                this.reconnectDelay_ = this.maxReconnectDelay_;
                this.lastConnectionAttemptTime_ = new Date().getTime();
            } else if (this.lastConnectionEstablishedTime_) {
                // If we've been connected long enough, reset reconnect delay to minimum.
                const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) this.reconnectDelay_ = RECONNECT_MIN_DELAY;
                this.lastConnectionEstablishedTime_ = null;
            }
            const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
            this.scheduleConnect_(reconnectDelay);
            // Adjust reconnect delay for next time.
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt');
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            const onDataMessage = this.onDataMessage_.bind(this);
            const onReady = this.onReady_.bind(this);
            const onDisconnect2 = this.onRealtimeDisconnect_.bind(this);
            const connId2 = this.id + ':' + PersistentConnection.nextConnectionId_++;
            const lastSessionId4 = this.lastSessionId;
            let canceled = false;
            let connection = null;
            const closeFn = function() {
                if (connection) connection.close();
                else {
                    canceled = true;
                    onDisconnect2();
                }
            };
            const sendRequestFn = function(msg) {
                _util.assert(connection, "sendRequest call when we're not connected not allowed.");
                connection.sendRequest(msg);
            };
            this.realtime_ = {
                close: closeFn,
                sendRequest: sendRequestFn
            };
            const forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            try {
                // First fetch auth and app check token, and establish connection after
                // fetching the token was successful
                const [authToken2, appCheckToken3] = await Promise.all([
                    this.authTokenProvider_.getToken(forceRefresh),
                    this.appCheckTokenProvider_.getToken(forceRefresh)
                ]);
                if (!canceled) {
                    log('getToken() completed. Creating connection.');
                    this.authToken_ = authToken2 && authToken2.accessToken;
                    this.appCheckToken_ = appCheckToken3 && appCheckToken3.token;
                    connection = new Connection(connId2, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, onDataMessage, onReady, onDisconnect2, /* onKill= */ (reason)=>{
                        warn(reason + ' (' + this.repoInfo_.toString() + ')');
                        this.interrupt(SERVER_KILL_INTERRUPT_REASON);
                    }, lastSessionId4);
                } else log('getToken() completed but was canceled');
            } catch (error1) {
                this.log_('Failed to get token: ' + error1);
                if (!canceled) {
                    if (this.repoInfo_.nodeAdmin) // This may be a critical error for the Admin Node.js SDK, so log a warning.
                    // But getToken() may also just have temporarily failed, so we still want to
                    // continue retrying.
                    warn(error1);
                    closeFn();
                }
            }
        }
    }
    interrupt(reason) {
        log('Interrupting connection for reason: ' + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) this.realtime_.close();
        else {
            if (this.establishConnectionTimer_) {
                clearTimeout(this.establishConnectionTimer_);
                this.establishConnectionTimer_ = null;
            }
            if (this.connected_) this.onRealtimeDisconnect_();
        }
    }
    resume(reason) {
        log('Resuming connection for reason: ' + reason);
        delete this.interruptReasons_[reason];
        if (_util.isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
    }
    handleTimestamp_(timestamp) {
        const delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: delta
        });
    }
    cancelSentTransactions_() {
        for(let i1 = 0; i1 < this.outstandingPuts_.length; i1++){
            const put = this.outstandingPuts_[i1];
            if (put && /*hash*/ 'h' in put.request && put.queued) {
                if (put.onComplete) put.onComplete('disconnect');
                delete this.outstandingPuts_[i1];
                this.outstandingPutCount_--;
            }
        }
        // Clean up array occasionally.
        if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
    }
    onListenRevoked_(pathString, query) {
        // Remove the listen and manufacture a "permission_denied" error for the failed listen.
        let queryId;
        if (!query) queryId = 'default';
        else queryId = query.map((q)=>ObjectToUniqueKey(q)
        ).join('$');
        const listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete) listen.onComplete('permission_denied');
    }
    removeListen_(pathString, queryId) {
        const normalizedPathString = new Path(pathString).toString(); // normalize path.
        let listen;
        if (this.listens.has(normalizedPathString)) {
            const map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map.delete(queryId);
            if (map.size === 0) this.listens.delete(normalizedPathString);
        } else // all listens for this path has already been removed
        listen = undefined;
        return listen;
    }
    onAuthRevoked_(statusCode, explanation) {
        log('Auth token revoked: ' + statusCode + '/' + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
                // Set a long reconnect delay because recovery is unlikely
                this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
                // Notify the auth token provider that the token is invalid, which will log
                // a warning
                this.authTokenProvider_.notifyForInvalidToken();
            }
        }
    }
    onAppCheckRevoked_(statusCode, explanation) {
        log('App check token revoked: ' + statusCode + '/' + explanation);
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = true;
        // Note: We don't close the connection as the developer may not have
        // enforcement enabled. The backend closes connections with enforcements.
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAppCheckTokenCount_++;
            if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) this.appCheckTokenProvider_.notifyForInvalidToken();
        }
    }
    onSecurityDebugPacket_(body) {
        if (this.securityDebugCallback_) this.securityDebugCallback_(body);
        else if ('msg' in body) console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
    }
    restoreState_() {
        //Re-authenticate ourselves if we have a credential stored.
        this.tryAuth();
        this.tryAppCheck();
        // Puts depend on having received the corresponding data update from the server before they complete, so we must
        // make sure to send listens before puts.
        for (const queries of this.listens.values())for (const listenSpec of queries.values())this.sendListen_(listenSpec);
        for(let i1 = 0; i1 < this.outstandingPuts_.length; i1++)if (this.outstandingPuts_[i1]) this.sendPut_(i1);
        while(this.onDisconnectRequestQueue_.length){
            const request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
        for(let i2 = 0; i2 < this.outstandingGets_.length; i2++)if (this.outstandingGets_[i2]) this.sendGet_(i2);
    }
    /**
     * Sends client stats for first connection
     */ sendConnectStats_() {
        const stats = {
        };
        let clientName = 'js';
        if (_util.isNodeSdk()) {
            if (this.repoInfo_.nodeAdmin) clientName = 'admin_node';
            else clientName = 'node';
        }
        stats['sdk.' + clientName + '.' + SDK_VERSION.replace(/\./g, '-')] = 1;
        if (_util.isMobileCordova()) stats['framework.cordova'] = 1;
        else if (_util.isReactNative()) stats['framework.reactnative'] = 1;
        this.reportStats(stats);
    }
    shouldReconnect_() {
        const online = OnlineMonitor.getInstance().currentlyOnline();
        return _util.isEmpty(this.interruptReasons_) && online;
    }
}
PersistentConnection.nextPersistentConnectionId_ = 0;
/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */ PersistentConnection.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NamedNode {
    constructor(name2, node1){
        this.name = name2;
        this.node = node1;
    }
    static Wrap(name, node) {
        return new NamedNode(name, node);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Index {
    /**
     * @returns A standalone comparison function for
     * this index
     */ getCompare() {
        return this.compare.bind(this);
    }
    /**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */ indexedValueChanged(oldNode, newNode) {
        const oldWrapped = new NamedNode(MIN_NAME, oldNode);
        const newWrapped = new NamedNode(MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
    }
    /**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */ minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let __EMPTY_NODE;
class KeyIndex extends Index {
    static get __EMPTY_NODE() {
        return __EMPTY_NODE;
    }
    static set __EMPTY_NODE(val) {
        __EMPTY_NODE = val;
    }
    compare(a, b) {
        return nameCompare(a.name, b.name);
    }
    isDefinedOn(node) {
        // We could probably return true here (since every node has a key), but it's never called
        // so just leaving unimplemented for now.
        throw _util.assertionError('KeyIndex.isDefinedOn not expected to be called.');
    }
    indexedValueChanged(oldNode, newNode) {
        return false; // The key for a node never changes.
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        // TODO: This should really be created once and cached in a static property, but
        // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
        return new NamedNode(MAX_NAME, __EMPTY_NODE);
    }
    makePost(indexValue, name) {
        _util.assert(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.');
        // We just use empty node, but it'll never be compared, since our comparator only looks at name.
        return new NamedNode(indexValue, __EMPTY_NODE);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.key';
    }
}
const KEY_INDEX = new KeyIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An iterator over an LLRBNode.
 */ class SortedMapIterator {
    /**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */ constructor(node2, startKey, comparator1, isReverse_, resultGenerator_ = null){
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        this.nodeStack_ = [];
        let cmp = 1;
        while(!node2.isEmpty()){
            cmp = startKey ? comparator1(node2.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse_) cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse_) node2 = node2.left;
                else node2 = node2.right;
            } else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
                this.nodeStack_.push(node2);
                break;
            } else {
                // This node is greater than our start key, add it to the stack and move to the next one
                this.nodeStack_.push(node2);
                if (this.isReverse_) node2 = node2.right;
                else node2 = node2.left;
            }
        }
    }
    getNext() {
        if (this.nodeStack_.length === 0) return null;
        let node3 = this.nodeStack_.pop();
        let result;
        if (this.resultGenerator_) result = this.resultGenerator_(node3.key, node3.value);
        else result = {
            key: node3.key,
            value: node3.value
        };
        if (this.isReverse_) {
            node3 = node3.left;
            while(!node3.isEmpty()){
                this.nodeStack_.push(node3);
                node3 = node3.right;
            }
        } else {
            node3 = node3.right;
            while(!node3.isEmpty()){
                this.nodeStack_.push(node3);
                node3 = node3.left;
            }
        }
        return result;
    }
    hasNext() {
        return this.nodeStack_.length > 0;
    }
    peek() {
        if (this.nodeStack_.length === 0) return null;
        const node3 = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) return this.resultGenerator_(node3.key, node3.value);
        else return {
            key: node3.key,
            value: node3.value
        };
    }
}
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */ class LLRBNode {
    /**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */ constructor(key1, value1, color1, left1, right1){
        this.key = key1;
        this.value = value1;
        this.color = color1 != null ? color1 : LLRBNode.RED;
        this.left = left1 != null ? left1 : SortedMap.EMPTY_NODE;
        this.right = right1 != null ? right1 : SortedMap.EMPTY_NODE;
    }
    /**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return this.left.count() + 1 + this.right.count();
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return false;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
    }
    /**
     * @returns The minimum node in the tree.
     */ min_() {
        if (this.left.isEmpty()) return this;
        else return this.left.min_();
    }
    /**
     * @returns The maximum key in the tree.
     */ minKey() {
        return this.min_().key;
    }
    /**
     * @returns The maximum key in the tree.
     */ maxKey() {
        if (this.right.isEmpty()) return this.key;
        else return this.right.maxKey();
    }
    /**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */ insert(key, value, comparator) {
        let n = this;
        const cmp1 = comparator(key, n.key);
        if (cmp1 < 0) n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        else if (cmp1 === 0) n = n.copy(null, value, null, null, null);
        else n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        return n.fixUp_();
    }
    /**
     * @returns New tree, with the minimum key removed.
     */ removeMin_() {
        if (this.left.isEmpty()) return SortedMap.EMPTY_NODE;
        let n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
    }
    /**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */ remove(key, comparator) {
        let n, smallest;
        n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        } else {
            if (n.left.isRed_()) n = n.rotateRight_();
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) n = n.moveRedRight_();
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) return SortedMap.EMPTY_NODE;
                else {
                    smallest = n.right.min_();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp_();
    }
    /**
     * @returns Whether this is a RED node.
     */ isRed_() {
        return this.color;
    }
    /**
     * @returns New tree after performing any needed rotations.
     */ fixUp_() {
        let n = this;
        if (n.right.isRed_() && !n.left.isRed_()) n = n.rotateLeft_();
        if (n.left.isRed_() && n.left.left.isRed_()) n = n.rotateRight_();
        if (n.left.isRed_() && n.right.isRed_()) n = n.colorFlip_();
        return n;
    }
    /**
     * @returns New tree, after moveRedLeft.
     */ moveRedLeft_() {
        let n = this.colorFlip_();
        if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after moveRedRight.
     */ moveRedRight_() {
        let n = this.colorFlip_();
        if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after rotateLeft.
     */ rotateLeft_() {
        const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    }
    /**
     * @returns New tree, after rotateRight.
     */ rotateRight_() {
        const nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    }
    /**
     * @returns Newt ree, after colorFlip.
     */ colorFlip_() {
        const left2 = this.left.copy(null, null, !this.left.color, null, null);
        const right2 = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left2, right2);
    }
    /**
     * For testing.
     *
     * @returns True if all is well.
     */ checkMaxDepth_() {
        const blackDepth = this.check_();
        return Math.pow(2, blackDepth) <= this.count() + 1;
    }
    check_() {
        if (this.isRed_() && this.left.isRed_()) throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
        if (this.right.isRed_()) throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
        const blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) throw new Error('Black depths differ');
        else return blackDepth + (this.isRed_() ? 0 : 1);
    }
}
LLRBNode.RED = true;
LLRBNode.BLACK = false;
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */ class LLRBEmptyNode {
    /**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return this;
    }
    /**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */ insert(key, value, comparator) {
        return new LLRBNode(key, value, null);
    }
    /**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */ remove(key, comparator) {
        return this;
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return 0;
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return true;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ inorderTraversal(action) {
        return false;
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return false;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    check_() {
        return 0;
    }
    /**
     * @returns Whether this node is red.
     */ isRed_() {
        return false;
    }
}
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */ class SortedMap {
    /**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */ constructor(comparator_, root_ = SortedMap.EMPTY_NODE){
        this.comparator_ = comparator_;
        this.root_ = root_;
    }
    /**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */ insert(key, value) {
        return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    }
    /**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */ remove(key) {
        return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    }
    /**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */ get(key) {
        let cmp1;
        let node3 = this.root_;
        while(!node3.isEmpty()){
            cmp1 = this.comparator_(key, node3.key);
            if (cmp1 === 0) return node3.value;
            else if (cmp1 < 0) node3 = node3.left;
            else if (cmp1 > 0) node3 = node3.right;
        }
        return null;
    }
    /**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */ getPredecessorKey(key) {
        let cmp1, node3 = this.root_, rightParent = null;
        while(!node3.isEmpty()){
            cmp1 = this.comparator_(key, node3.key);
            if (cmp1 === 0) {
                if (!node3.left.isEmpty()) {
                    node3 = node3.left;
                    while(!node3.right.isEmpty())node3 = node3.right;
                    return node3.key;
                } else if (rightParent) return rightParent.key;
                else return null; // first item.
            } else if (cmp1 < 0) node3 = node3.left;
            else if (cmp1 > 0) {
                rightParent = node3;
                node3 = node3.right;
            }
        }
        throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
    }
    /**
     * @returns True if the map is empty.
     */ isEmpty() {
        return this.root_.isEmpty();
    }
    /**
     * @returns The total number of nodes in the map.
     */ count() {
        return this.root_.count();
    }
    /**
     * @returns The minimum key in the map.
     */ minKey() {
        return this.root_.minKey();
    }
    /**
     * @returns The maximum key in the map.
     */ maxKey() {
        return this.root_.maxKey();
    }
    /**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.root_.inorderTraversal(action);
    }
    /**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */ reverseTraversal(action) {
        return this.root_.reverseTraversal(action);
    }
    /**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */ getIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
    }
    getIteratorFrom(key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
    }
    getReverseIteratorFrom(key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
    }
    getReverseIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
    }
}
/**
 * Always use the same empty node, to reduce memory.
 */ SortedMap.EMPTY_NODE = new LLRBEmptyNode();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NAME_ONLY_COMPARATOR(left2, right2) {
    return nameCompare(left2.name, right2.name);
}
function NAME_COMPARATOR(left2, right2) {
    return nameCompare(left2, right2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let MAX_NODE$2;
function setMaxNode$1(val) {
    MAX_NODE$2 = val;
}
const priorityHashText = function(priority) {
    if (typeof priority === 'number') return 'number:' + doubleToIEEE754String(priority);
    else return 'string:' + priority;
};
/**
 * Validates that a priority snapshot Node is valid.
 */ const validatePriorityNode = function(priorityNode) {
    if (priorityNode.isLeafNode()) {
        const val = priorityNode.val();
        _util.assert(typeof val === 'string' || typeof val === 'number' || typeof val === 'object' && _util.contains(val, '.sv'), 'Priority must be a string or number.');
    } else _util.assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), 'priority of unexpected type.');
    // Don't call getPriority() on MAX_NODE to avoid hitting assertion.
    _util.assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let __childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */ class LeafNode {
    /**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */ constructor(value_, priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE){
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        _util.assert(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        validatePriorityNode(this.priorityNode_);
    }
    static set __childrenNodeConstructor(val) {
        __childrenNodeConstructor = val;
    }
    static get __childrenNodeConstructor() {
        return __childrenNodeConstructor;
    }
    /** @inheritDoc */ isLeafNode() {
        return true;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        return new LeafNode(this.value_, newPriorityNode);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') return this.priorityNode_;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    /** @inheritDoc */ getChild(path) {
        if (pathIsEmpty(path)) return this;
        else if (pathGetFront(path) === '.priority') return this.priorityNode_;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    hasChild() {
        return false;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode) {
        return null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        if (childName === '.priority') return this.updatePriority(newChildNode);
        else if (newChildNode.isEmpty() && childName !== '.priority') return this;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) return newChildNode;
        else if (newChildNode.isEmpty() && front !== '.priority') return this;
        else {
            _util.assert(front !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
            return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
        }
    }
    /** @inheritDoc */ isEmpty() {
        return false;
    }
    /** @inheritDoc */ numChildren() {
        return 0;
    }
    /** @inheritDoc */ forEachChild(index, action) {
        return false;
    }
    val(exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty()) return {
            '.value': this.getValue(),
            '.priority': this.getPriority().val()
        };
        else return this.getValue();
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = '';
            if (!this.priorityNode_.isEmpty()) toHash += 'priority:' + priorityHashText(this.priorityNode_.val()) + ':';
            const type = typeof this.value_;
            toHash += type + ':';
            if (type === 'number') toHash += doubleToIEEE754String(this.value_);
            else toHash += this.value_;
            this.lazyHash_ = sha1(toHash);
        }
        return this.lazyHash_;
    }
    /**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */ getValue() {
        return this.value_;
    }
    compareTo(other) {
        if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) return 1;
        else if (other instanceof LeafNode.__childrenNodeConstructor) return -1;
        else {
            _util.assert(other.isLeafNode(), 'Unknown node type');
            return this.compareToLeafNode_(other);
        }
    }
    /**
     * Comparison specifically for two leaf nodes
     */ compareToLeafNode_(otherLeaf) {
        const otherLeafType = typeof otherLeaf.value_;
        const thisLeafType = typeof this.value_;
        const otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        const thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        _util.assert(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
        _util.assert(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);
        if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === 'object') // Deferred value nodes are all equal, but we should also never get to this point...
            return 0;
            else {
                // Note that this works because true > false, all others are number or string comparisons
                if (this.value_ < otherLeaf.value_) return -1;
                else if (this.value_ === otherLeaf.value_) return 0;
                else return 1;
            }
        } else return thisIndex - otherIndex;
    }
    withIndex() {
        return this;
    }
    isIndexed() {
        return true;
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) {
            const otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
        } else return false;
    }
}
/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */ LeafNode.VALUE_TYPE_ORDER = [
    'object',
    'boolean',
    'number',
    'string'
];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nodeFromJSON$1;
let MAX_NODE$1;
function setNodeFromJSON(val) {
    nodeFromJSON$1 = val;
}
function setMaxNode(val) {
    MAX_NODE$1 = val;
}
class PriorityIndex extends Index {
    compare(a, b) {
        const aPriority = a.node.getPriority();
        const bPriority = b.node.getPriority();
        const indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return !node.getPriority().isEmpty();
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        return new NamedNode(MAX_NAME, new LeafNode('[PRIORITY-POST]', MAX_NODE$1));
    }
    makePost(indexValue, name) {
        const priorityNode = nodeFromJSON$1(indexValue);
        return new NamedNode(name, new LeafNode('[PRIORITY-POST]', priorityNode));
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.priority';
    }
}
const PRIORITY_INDEX = new PriorityIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LOG_2 = Math.log(2);
class Base12Num {
    constructor(length){
        const logBase2 = (num)=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
            parseInt(Math.log(num) / LOG_2, 10)
        ;
        const bitMask = (bits)=>parseInt(Array(bits + 1).join('1'), 2)
        ;
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        const mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
    }
    nextBitIsOne() {
        //noinspection JSBitwiseOperatorUsage
        const result = !(this.bits_ & 1 << this.current_);
        this.current_--;
        return result;
    }
}
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */ const buildChildSet = function(childList, cmp1, keyFn, mapSortFn) {
    childList.sort(cmp1);
    const buildBalancedTree = function(low, high) {
        const length1 = high - low;
        let namedNode;
        let key2;
        if (length1 === 0) return null;
        else if (length1 === 1) {
            namedNode = childList[low];
            key2 = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key2, namedNode.node, LLRBNode.BLACK, null, null);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const middle = parseInt(length1 / 2, 10) + low;
            const left2 = buildBalancedTree(low, middle);
            const right2 = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key2 = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key2, namedNode.node, LLRBNode.BLACK, left2, right2);
        }
    };
    const buildFrom12Array = function(base12) {
        let node3 = null;
        let root = null;
        let index = childList.length;
        const buildPennant = function(chunkSize, color2) {
            const low = index - chunkSize;
            const high = index;
            index -= chunkSize;
            const childTree = buildBalancedTree(low + 1, high);
            const namedNode = childList[low];
            const key2 = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key2, namedNode.node, color2, null, childTree));
        };
        const attachPennant = function(pennant) {
            if (node3) {
                node3.left = pennant;
                node3 = pennant;
            } else {
                root = pennant;
                node3 = pennant;
            }
        };
        for(let i1 = 0; i1 < base12.count; ++i1){
            const isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            const chunkSize = Math.pow(2, base12.count - (i1 + 1));
            if (isOne) buildPennant(chunkSize, LLRBNode.BLACK);
            else {
                // current == 2
                buildPennant(chunkSize, LLRBNode.BLACK);
                buildPennant(chunkSize, LLRBNode.RED);
            }
        }
        return root;
    };
    const base12 = new Base12Num(childList.length);
    const root = buildFrom12Array(base12);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new SortedMap(mapSortFn || cmp1, root);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _defaultIndexMap;
const fallbackObject = {
};
class IndexMap {
    constructor(indexes_, indexSet_){
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
    }
    /**
     * The default IndexMap for nodes without a priority
     */ static get Default() {
        _util.assert(fallbackObject && PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
        _defaultIndexMap = _defaultIndexMap || new IndexMap({
            '.priority': fallbackObject
        }, {
            '.priority': PRIORITY_INDEX
        });
        return _defaultIndexMap;
    }
    get(indexKey) {
        const sortedMap = _util.safeGet(this.indexes_, indexKey);
        if (!sortedMap) throw new Error('No index defined for ' + indexKey);
        if (sortedMap instanceof SortedMap) return sortedMap;
        else // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
        // regular child map
        return null;
    }
    hasIndex(indexDefinition) {
        return _util.contains(this.indexSet_, indexDefinition.toString());
    }
    addIndex(indexDefinition, existingChildren) {
        _util.assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const childList = [];
        let sawIndexedValue = false;
        const iter = existingChildren.getIterator(NamedNode.Wrap);
        let next = iter.getNext();
        while(next){
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
        }
        let newIndex;
        if (sawIndexedValue) newIndex = buildChildSet(childList, indexDefinition.getCompare());
        else newIndex = fallbackObject;
        const indexName = indexDefinition.toString();
        const newIndexSet = Object.assign({
        }, this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        const newIndexes = Object.assign({
        }, this.indexes_);
        newIndexes[indexName] = newIndex;
        return new IndexMap(newIndexes, newIndexSet);
    }
    /**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */ addToIndexes(namedNode, existingChildren) {
        const newIndexes = _util.map(this.indexes_, (indexedChildren, indexName)=>{
            const index = _util.safeGet(this.indexSet_, indexName);
            _util.assert(index, 'Missing index implementation for ' + indexName);
            if (indexedChildren === fallbackObject) {
                // Check to see if we need to index everything
                if (index.isDefinedOn(namedNode.node)) {
                    // We need to build this index
                    const childList = [];
                    const iter = existingChildren.getIterator(NamedNode.Wrap);
                    let next = iter.getNext();
                    while(next){
                        if (next.name !== namedNode.name) childList.push(next);
                        next = iter.getNext();
                    }
                    childList.push(namedNode);
                    return buildChildSet(childList, index.getCompare());
                } else // No change, this remains a fallback
                return fallbackObject;
            } else {
                const existingSnap = existingChildren.get(namedNode.name);
                let newChildren = indexedChildren;
                if (existingSnap) newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
                return newChildren.insert(namedNode, namedNode.node);
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    }
    /**
     * Create a new IndexMap instance with the given value removed
     */ removeFromIndexes(namedNode, existingChildren) {
        const newIndexes = _util.map(this.indexes_, (indexedChildren)=>{
            if (indexedChildren === fallbackObject) // This is the fallback. Just return it, nothing to do in this case
            return indexedChildren;
            else {
                const existingSnap = existingChildren.get(namedNode.name);
                if (existingSnap) return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
                else // No record of this child
                return indexedChildren;
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO: For memory savings, don't store priorityNode_ if it's empty.
let EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */ class ChildrenNode {
    /**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */ constructor(children_, priorityNode_1, indexMap_){
        this.children_ = children_;
        this.priorityNode_ = priorityNode_1;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        /**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */ if (this.priorityNode_) validatePriorityNode(this.priorityNode_);
        if (this.children_.isEmpty()) _util.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
    }
    static get EMPTY_NODE() {
        return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
    }
    /** @inheritDoc */ isLeafNode() {
        return false;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_ || EMPTY_NODE;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        if (this.children_.isEmpty()) // Don't allow priorities on empty nodes
        return this;
        else return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') return this.getPriority();
        else {
            const child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
        }
    }
    /** @inheritDoc */ getChild(path) {
        const front = pathGetFront(path);
        if (front === null) return this;
        return this.getImmediateChild(front).getChild(pathPopFront(path));
    }
    /** @inheritDoc */ hasChild(childName) {
        return this.children_.get(childName) !== null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        _util.assert(newChildNode, 'We should always be passing snapshot nodes');
        if (childName === '.priority') return this.updatePriority(newChildNode);
        else {
            const namedNode = new NamedNode(childName, newChildNode);
            let newChildren, newIndexMap;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) return newChildNode;
        else {
            _util.assert(pathGetFront(path) !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
            const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    }
    /** @inheritDoc */ isEmpty() {
        return this.children_.isEmpty();
    }
    /** @inheritDoc */ numChildren() {
        return this.children_.count();
    }
    /** @inheritDoc */ val(exportFormat) {
        if (this.isEmpty()) return null;
        const obj = {
        };
        let numKeys = 0, maxKey = 0, allIntegerKeys = true;
        this.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
            obj[key2] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key2)) maxKey = Math.max(maxKey, Number(key2));
            else allIntegerKeys = false;
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            const array = [];
            // eslint-disable-next-line guard-for-in
            for(const key2 in obj)array[key2] = obj[key2];
            return array;
        } else {
            if (exportFormat && !this.getPriority().isEmpty()) obj['.priority'] = this.getPriority().val();
            return obj;
        }
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = '';
            if (!this.getPriority().isEmpty()) toHash += 'priority:' + priorityHashText(this.getPriority().val()) + ':';
            this.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
                const childHash = childNode.hash();
                if (childHash !== '') toHash += ':' + key2 + ':' + childHash;
            });
            this.lazyHash_ = toHash === '' ? '' : sha1(toHash);
        }
        return this.lazyHash_;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode, index) {
        const idx = this.resolveIndex_(index);
        if (idx) {
            const predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
        } else return this.children_.getPredecessorKey(childName);
    }
    getFirstChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const minKey = idx.minKey();
            return minKey && minKey.name;
        } else return this.children_.minKey();
    }
    getFirstChild(indexDefinition) {
        const minKey = this.getFirstChildName(indexDefinition);
        if (minKey) return new NamedNode(minKey, this.children_.get(minKey));
        else return null;
    }
    /**
     * Given an index, return the key name of the largest value we have, according to that index
     */ getLastChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        } else return this.children_.maxKey();
    }
    getLastChild(indexDefinition) {
        const maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) return new NamedNode(maxKey, this.children_.get(maxKey));
        else return null;
    }
    forEachChild(index, action) {
        const idx = this.resolveIndex_(index);
        if (idx) return idx.inorderTraversal((wrappedNode)=>{
            return action(wrappedNode.name, wrappedNode.node);
        });
        else return this.children_.inorderTraversal(action);
    }
    getIterator(indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    }
    getIteratorFrom(startPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getIteratorFrom(startPost, (key2)=>key2
        );
        else {
            const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, startPost) < 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    getReverseIterator(indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    }
    getReverseIteratorFrom(endPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getReverseIteratorFrom(endPost, (key2)=>{
            return key2;
        });
        else {
            const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, endPost) > 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    compareTo(other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) return 0;
            else return -1;
        } else if (other.isLeafNode() || other.isEmpty()) return 1;
        else if (other === MAX_NODE) return -1;
        else // Must be another node with children.
        return 0;
    }
    withIndex(indexDefinition) {
        if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) return this;
        else {
            const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    }
    isIndexed(index) {
        return index === KEY_INDEX || this.indexMap_.hasIndex(index);
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) return false;
        else {
            const otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) return false;
            else if (this.children_.count() === otherChildrenNode.children_.count()) {
                const thisIter = this.getIterator(PRIORITY_INDEX);
                const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
                let thisCurrent = thisIter.getNext();
                let otherCurrent = otherIter.getNext();
                while(thisCurrent && otherCurrent){
                    if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) return false;
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            } else return false;
        }
    }
    /**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */ resolveIndex_(indexDefinition) {
        if (indexDefinition === KEY_INDEX) return null;
        else return this.indexMap_.get(indexDefinition.toString());
    }
}
ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class MaxNode extends ChildrenNode {
    constructor(){
        super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
    }
    compareTo(other) {
        if (other === this) return 0;
        else return 1;
    }
    equals(other) {
        // Not that we every compare it, but MAX_NODE is only ever equal to itself
        return other === this;
    }
    getPriority() {
        return this;
    }
    getImmediateChild(childName) {
        return ChildrenNode.EMPTY_NODE;
    }
    isEmpty() {
        return false;
    }
}
/**
 * Marker that will sort higher than any other snapshot.
 */ const MAX_NODE = new MaxNode();
Object.defineProperties(NamedNode, {
    MIN: {
        value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new NamedNode(MAX_NAME, MAX_NODE)
    }
});
/**
 * Reference Extensions
 */ KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode$1(MAX_NODE);
setMaxNode(MAX_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */ function nodeFromJSON(json, priority = null) {
    if (json === null) return ChildrenNode.EMPTY_NODE;
    if (typeof json === 'object' && '.priority' in json) priority = json['.priority'];
    _util.assert(priority === null || typeof priority === 'string' || typeof priority === 'number' || typeof priority === 'object' && '.sv' in priority, 'Invalid priority type found: ' + typeof priority);
    if (typeof json === 'object' && '.value' in json && json['.value'] !== null) json = json['.value'];
    // Valid leaf nodes include non-objects or server-value wrapper objects
    if (typeof json !== 'object' || '.sv' in json) {
        const jsonLeaf = json;
        return new LeafNode(jsonLeaf, nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
        const children = [];
        let childrenHavePriority = false;
        const hinzeJsonObj = json;
        each(hinzeJsonObj, (key2, child)=>{
            if (key2.substring(0, 1) !== '.') {
                // Ignore metadata nodes
                const childNode = nodeFromJSON(child);
                if (!childNode.isEmpty()) {
                    childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
                    children.push(new NamedNode(key2, childNode));
                }
            }
        });
        if (children.length === 0) return ChildrenNode.EMPTY_NODE;
        const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode)=>namedNode.name
        , NAME_COMPARATOR);
        if (childrenHavePriority) {
            const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
            return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({
                '.priority': sortedChildSet
            }, {
                '.priority': PRIORITY_INDEX
            }));
        } else return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
    } else {
        let node3 = ChildrenNode.EMPTY_NODE;
        each(json, (key2, childData)=>{
            if (_util.contains(json, key2)) {
                if (key2.substring(0, 1) !== '.') {
                    // ignore metadata nodes.
                    const childNode = nodeFromJSON(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty()) node3 = node3.updateImmediateChild(key2, childNode);
                }
            }
        });
        return node3.updatePriority(nodeFromJSON(priority));
    }
}
setNodeFromJSON(nodeFromJSON);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PathIndex extends Index {
    constructor(indexPath_){
        super();
        this.indexPath_ = indexPath_;
        _util.assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== '.priority', "Can't create PathIndex with empty path or .priority key");
    }
    extractChild(snap) {
        return snap.getChild(this.indexPath_);
    }
    isDefinedOn(node) {
        return !node.getChild(this.indexPath_).isEmpty();
    }
    compare(a, b) {
        const aChild = this.extractChild(a.node);
        const bChild = this.extractChild(b.node);
        const indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    makePost(indexValue, name) {
        const valueNode = nodeFromJSON(indexValue);
        const node3 = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new NamedNode(name, node3);
    }
    maxPost() {
        const node3 = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
        return new NamedNode(MAX_NAME, node3);
    }
    toString() {
        return pathSlice(this.indexPath_, 0).join('/');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ValueIndex extends Index {
    compare(a, b) {
        const indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return true;
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.equals(newNode);
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MAX;
    }
    makePost(indexValue, name) {
        const valueNode = nodeFromJSON(indexValue);
        return new NamedNode(name, valueNode);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.value';
    }
}
const VALUE_INDEX = new ValueIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Modeled after base64 web-safe chars, but ordered by ASCII.
const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
const MIN_PUSH_CHAR = '-';
const MAX_PUSH_CHAR = 'z';
const MAX_KEY_LEN = 786;
/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */ const nextPushId = function() {
    // Timestamp of last push, used to prevent local collisions if you push twice
    // in one ms.
    let lastPushTime = 0;
    // We generate 72-bits of randomness which get turned into 12 characters and
    // appended to the timestamp to prevent collisions with other clients. We
    // store the last characters we generated because in the event of a collision,
    // we'll use those same characters except "incremented" by one.
    const lastRandChars = [];
    return function(now) {
        const duplicateTime = now === lastPushTime;
        lastPushTime = now;
        let i1;
        const timeStampChars = new Array(8);
        for(i1 = 7; i1 >= 0; i1--){
            timeStampChars[i1] = PUSH_CHARS.charAt(now % 64);
            // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.
            now = Math.floor(now / 64);
        }
        _util.assert(now === 0, 'Cannot push at time == 0');
        let id1 = timeStampChars.join('');
        if (!duplicateTime) for(i1 = 0; i1 < 12; i1++)lastRandChars[i1] = Math.floor(Math.random() * 64);
        else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for(i1 = 11; i1 >= 0 && lastRandChars[i1] === 63; i1--)lastRandChars[i1] = 0;
            lastRandChars[i1]++;
        }
        for(i1 = 0; i1 < 12; i1++)id1 += PUSH_CHARS.charAt(lastRandChars[i1]);
        _util.assert(id1.length === 20, 'nextPushId: Length should be 20.');
        return id1;
    };
}();
const successor = function(key2) {
    if (key2 === '' + INTEGER_32_MAX) // See https://firebase.google.com/docs/database/web/lists-of-data#data-order
    return MIN_PUSH_CHAR;
    const keyAsInt = tryParseInt(key2);
    if (keyAsInt != null) return '' + (keyAsInt + 1);
    const next = new Array(key2.length);
    for(let i1 = 0; i1 < next.length; i1++)next[i1] = key2.charAt(i1);
    if (next.length < MAX_KEY_LEN) {
        next.push(MIN_PUSH_CHAR);
        return next.join('');
    }
    let i2 = next.length - 1;
    while(i2 >= 0 && next[i2] === MAX_PUSH_CHAR)i2--;
    // `successor` was called on the largest possible key, so return the
    // MAX_NAME, which sorts larger than all keys.
    if (i2 === -1) return MAX_NAME;
    const source = next[i2];
    const sourcePlusOne = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(source) + 1);
    next[i2] = sourcePlusOne;
    return next.slice(0, i2 + 1).join('');
};
// `key` is assumed to be non-empty.
const predecessor = function(key2) {
    if (key2 === '' + INTEGER_32_MIN) return MIN_NAME;
    const keyAsInt = tryParseInt(key2);
    if (keyAsInt != null) return '' + (keyAsInt - 1);
    const next = new Array(key2.length);
    for(let i1 = 0; i1 < next.length; i1++)next[i1] = key2.charAt(i1);
    // If `key` ends in `MIN_PUSH_CHAR`, the largest key lexicographically
    // smaller than `key`, is `key[0:key.length - 1]`. The next key smaller
    // than that, `predecessor(predecessor(key))`, is
    //
    // `key[0:key.length - 2] + (key[key.length - 1] - 1) + \
    //   { MAX_PUSH_CHAR repeated MAX_KEY_LEN - (key.length - 1) times }
    //
    // analogous to increment/decrement for base-10 integers.
    //
    // This works because lexigographic comparison works character-by-character,
    // using length as a tie-breaker if one key is a prefix of the other.
    if (next[next.length - 1] === MIN_PUSH_CHAR) {
        if (next.length === 1) // See https://firebase.google.com/docs/database/web/lists-of-data#orderbykey
        return '' + INTEGER_32_MAX;
        delete next[next.length - 1];
        return next.join('');
    }
    // Replace the last character with it's immediate predecessor, and
    // fill the suffix of the key with MAX_PUSH_CHAR. This is the
    // lexicographically largest possible key smaller than `key`.
    next[next.length - 1] = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(next[next.length - 1]) - 1);
    return next.join('') + MAX_PUSH_CHAR.repeat(MAX_KEY_LEN - next.length);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function changeValue(snapshotNode) {
    return {
        type: "value" /* VALUE */ ,
        snapshotNode
    };
}
function changeChildAdded(childName, snapshotNode) {
    return {
        type: "child_added" /* CHILD_ADDED */ ,
        snapshotNode,
        childName
    };
}
function changeChildRemoved(childName, snapshotNode) {
    return {
        type: "child_removed" /* CHILD_REMOVED */ ,
        snapshotNode,
        childName
    };
}
function changeChildChanged(childName, snapshotNode, oldSnap) {
    return {
        type: "child_changed" /* CHILD_CHANGED */ ,
        snapshotNode,
        childName,
        oldSnap
    };
}
function changeChildMoved(childName, snapshotNode) {
    return {
        type: "child_moved" /* CHILD_MOVED */ ,
        snapshotNode,
        childName
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */ class IndexedFilter {
    constructor(index_){
        this.index_ = index_;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        _util.assert(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
        const oldChild = snap.getImmediateChild(key);
        // Check if anything actually changed.
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() === newChild.isEmpty()) // Nothing changed.
            // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
            //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
            return snap;
        }
        if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
                if (snap.hasChild(key)) optChangeAccumulator.trackChildChange(changeChildRemoved(key, oldChild));
                else _util.assert(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
            } else if (oldChild.isEmpty()) optChangeAccumulator.trackChildChange(changeChildAdded(key, newChild));
            else optChangeAccumulator.trackChildChange(changeChildChanged(key, newChild, oldChild));
        }
        if (snap.isLeafNode() && newChild.isEmpty()) return snap;
        else // Make sure the node is indexed
        return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) oldSnap.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
                if (!newSnap.hasChild(key2)) optChangeAccumulator.trackChildChange(changeChildRemoved(key2, childNode));
            });
            if (!newSnap.isLeafNode()) newSnap.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
                if (oldSnap.hasChild(key2)) {
                    const oldChild = oldSnap.getImmediateChild(key2);
                    if (!oldChild.equals(childNode)) optChangeAccumulator.trackChildChange(changeChildChanged(key2, childNode, oldChild));
                } else optChangeAccumulator.trackChildChange(changeChildAdded(key2, childNode));
            });
        }
        return newSnap.withIndex(this.index_);
    }
    updatePriority(oldSnap, newPriority) {
        if (oldSnap.isEmpty()) return ChildrenNode.EMPTY_NODE;
        else return oldSnap.updatePriority(newPriority);
    }
    filtersNodes() {
        return false;
    }
    getIndexedFilter() {
        return this;
    }
    getIndex() {
        return this.index_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */ class RangedFilter {
    constructor(params1){
        this.indexedFilter_ = new IndexedFilter(params1.getIndex());
        this.index_ = params1.getIndex();
        this.startPost_ = RangedFilter.getStartPost_(params1);
        this.endPost_ = RangedFilter.getEndPost_(params1);
    }
    getStartPost() {
        return this.startPost_;
    }
    getEndPost() {
        return this.endPost_;
    }
    matches(node) {
        return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new NamedNode(key, newChild))) newChild = ChildrenNode.EMPTY_NODE;
        return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) // Make sure we have a children node with the correct index, not a leaf node;
        newSnap = ChildrenNode.EMPTY_NODE;
        let filtered = newSnap.withIndex(this.index_);
        // Don't support priorities on queries
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        const self = this;
        newSnap.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
            if (!self.matches(new NamedNode(key2, childNode))) filtered = filtered.updateImmediateChild(key2, ChildrenNode.EMPTY_NODE);
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.indexedFilter_;
    }
    getIndex() {
        return this.index_;
    }
    static getStartPost_(params) {
        if (params.hasStart()) {
            const startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
        } else return params.getIndex().minPost();
    }
    static getEndPost_(params) {
        if (params.hasEnd()) {
            const endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
        } else return params.getIndex().maxPost();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */ class LimitedFilter {
    constructor(params2){
        this.rangedFilter_ = new RangedFilter(params2);
        this.index_ = params2.getIndex();
        this.limit_ = params2.getLimit();
        this.reverse_ = !params2.isViewFromLeft();
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) newChild = ChildrenNode.EMPTY_NODE;
        if (snap.getImmediateChild(key).equals(newChild)) // No change
        return snap;
        else if (snap.numChildren() < this.limit_) return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        else return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        let filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) // Make sure we have a children node with the correct index, not a leaf node;
        filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
            // Easier to build up a snapshot, since what we're given has more than twice the elements we want
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
            // anchor to the startPost, endPost, or last element as appropriate
            let iterator;
            if (this.reverse_) iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
            else iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let count = 0;
            while(iterator.hasNext() && count < this.limit_){
                const next = iterator.getNext();
                let inRange;
                if (this.reverse_) inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
                else inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
                if (inRange) {
                    filtered = filtered.updateImmediateChild(next.name, next.node);
                    count++;
                } else break;
            }
        } else {
            // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
            filtered = newSnap.withIndex(this.index_);
            // Don't support priorities on queries
            filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
            let startPost;
            let endPost;
            let cmp1;
            let iterator;
            if (this.reverse_) {
                iterator = filtered.getReverseIterator(this.index_);
                startPost = this.rangedFilter_.getEndPost();
                endPost = this.rangedFilter_.getStartPost();
                const indexCompare = this.index_.getCompare();
                cmp1 = (a, b)=>indexCompare(b, a)
                ;
            } else {
                iterator = filtered.getIterator(this.index_);
                startPost = this.rangedFilter_.getStartPost();
                endPost = this.rangedFilter_.getEndPost();
                cmp1 = this.index_.getCompare();
            }
            let count = 0;
            let foundStartPost = false;
            while(iterator.hasNext()){
                const next = iterator.getNext();
                if (!foundStartPost && cmp1(startPost, next) <= 0) // start adding
                foundStartPost = true;
                const inRange = foundStartPost && count < this.limit_ && cmp1(next, endPost) <= 0;
                if (inRange) count++;
                else filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter();
    }
    getIndex() {
        return this.index_;
    }
    fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
        // TODO: rename all cache stuff etc to general snap terminology
        let cmp1;
        if (this.reverse_) {
            const indexCmp = this.index_.getCompare();
            cmp1 = (a, b)=>indexCmp(b, a)
            ;
        } else cmp1 = this.index_.getCompare();
        const oldEventCache = snap;
        _util.assert(oldEventCache.numChildren() === this.limit_, '');
        const newChildNamedNode = new NamedNode(childKey, childSnap);
        const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
        const inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
            const oldChildSnap = oldEventCache.getImmediateChild(childKey);
            let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while(nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name)))// There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
            // been applied to the limited filter yet. Ignore this next child which will be updated later in
            // the limited filter...
            nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            const compareNext = nextChild == null ? 1 : cmp1(nextChild, newChildNamedNode);
            const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
                if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
                return oldEventCache.updateImmediateChild(childKey, childSnap);
            } else {
                if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
                const newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
                const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
                if (nextChildInRange) {
                    if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
                    return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
                } else return newEventCache;
            }
        } else if (childSnap.isEmpty()) // we're deleting a node, but it was not in the window, so ignore it
        return snap;
        else if (inRange) {
            if (cmp1(windowBoundary, newChildNamedNode) >= 0) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
                    changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
            } else return snap;
        } else return snap;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */ class QueryParams {
    constructor(){
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.startAfterSet_ = false;
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.endBeforeSet_ = false;
        this.limit_ = 0;
        this.viewFrom_ = '';
        this.indexStartValue_ = null;
        this.indexStartName_ = '';
        this.indexEndValue_ = null;
        this.indexEndName_ = '';
        this.index_ = PRIORITY_INDEX;
    }
    hasStart() {
        return this.startSet_;
    }
    hasStartAfter() {
        return this.startAfterSet_;
    }
    hasEndBefore() {
        return this.endBeforeSet_;
    }
    /**
     * @returns True if it would return from left.
     */ isViewFromLeft() {
        if (this.viewFrom_ === '') // limit(), rather than limitToFirst or limitToLast was called.
        // This means that only one of startSet_ and endSet_ is true. Use them
        // to calculate which side of the view to anchor to. If neither is set,
        // anchor to the end.
        return this.startSet_;
        else return this.viewFrom_ === "l" /* VIEW_FROM_LEFT */ ;
    }
    /**
     * Only valid to call if hasStart() returns true
     */ getIndexStartValue() {
        _util.assert(this.startSet_, 'Only valid if start has been set');
        return this.indexStartValue_;
    }
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */ getIndexStartName() {
        _util.assert(this.startSet_, 'Only valid if start has been set');
        if (this.startNameSet_) return this.indexStartName_;
        else return MIN_NAME;
    }
    hasEnd() {
        return this.endSet_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     */ getIndexEndValue() {
        _util.assert(this.endSet_, 'Only valid if end has been set');
        return this.indexEndValue_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */ getIndexEndName() {
        _util.assert(this.endSet_, 'Only valid if end has been set');
        if (this.endNameSet_) return this.indexEndName_;
        else return MAX_NAME;
    }
    hasLimit() {
        return this.limitSet_;
    }
    /**
     * @returns True if a limit has been set and it has been explicitly anchored
     */ hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== '';
    }
    /**
     * Only valid to call if hasLimit() returns true
     */ getLimit() {
        _util.assert(this.limitSet_, 'Only valid if limit has been set');
        return this.limit_;
    }
    getIndex() {
        return this.index_;
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
    }
    copy() {
        const copy = new QueryParams();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
    }
}
function queryParamsGetNodeFilter(queryParams) {
    if (queryParams.loadsAllData()) return new IndexedFilter(queryParams.getIndex());
    else if (queryParams.hasLimit()) return new LimitedFilter(queryParams);
    else return new RangedFilter(queryParams);
}
function queryParamsLimitToFirst(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "l" /* VIEW_FROM_LEFT */ ;
    return newParams;
}
function queryParamsLimitToLast(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "r" /* VIEW_FROM_RIGHT */ ;
    return newParams;
}
function queryParamsStartAt(queryParams, indexValue, key2) {
    const newParams = queryParams.copy();
    newParams.startSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexStartValue_ = indexValue;
    if (key2 != null) {
        newParams.startNameSet_ = true;
        newParams.indexStartName_ = key2;
    } else {
        newParams.startNameSet_ = false;
        newParams.indexStartName_ = '';
    }
    return newParams;
}
function queryParamsStartAfter(queryParams, indexValue, key2) {
    let params3;
    if (queryParams.index_ === KEY_INDEX) {
        if (typeof indexValue === 'string') indexValue = successor(indexValue);
        params3 = queryParamsStartAt(queryParams, indexValue, key2);
    } else {
        let childKey;
        if (key2 == null) childKey = MAX_NAME;
        else childKey = successor(key2);
        params3 = queryParamsStartAt(queryParams, indexValue, childKey);
    }
    params3.startAfterSet_ = true;
    return params3;
}
function queryParamsEndAt(queryParams, indexValue, key2) {
    const newParams = queryParams.copy();
    newParams.endSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexEndValue_ = indexValue;
    if (key2 !== undefined) {
        newParams.endNameSet_ = true;
        newParams.indexEndName_ = key2;
    } else {
        newParams.endNameSet_ = false;
        newParams.indexEndName_ = '';
    }
    return newParams;
}
function queryParamsEndBefore(queryParams, indexValue, key2) {
    let childKey;
    let params3;
    if (queryParams.index_ === KEY_INDEX) {
        if (typeof indexValue === 'string') indexValue = predecessor(indexValue);
        params3 = queryParamsEndAt(queryParams, indexValue, key2);
    } else {
        if (key2 == null) childKey = MIN_NAME;
        else childKey = predecessor(key2);
        params3 = queryParamsEndAt(queryParams, indexValue, childKey);
    }
    params3.endBeforeSet_ = true;
    return params3;
}
function queryParamsOrderBy(queryParams, index) {
    const newParams = queryParams.copy();
    newParams.index_ = index;
    return newParams;
}
/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */ function queryParamsToRestQueryStringParameters(queryParams) {
    const qs = {
    };
    if (queryParams.isDefault()) return qs;
    let orderBy;
    if (queryParams.index_ === PRIORITY_INDEX) orderBy = "$priority" /* PRIORITY_INDEX */ ;
    else if (queryParams.index_ === VALUE_INDEX) orderBy = "$value" /* VALUE_INDEX */ ;
    else if (queryParams.index_ === KEY_INDEX) orderBy = "$key" /* KEY_INDEX */ ;
    else {
        _util.assert(queryParams.index_ instanceof PathIndex, 'Unrecognized index type!');
        orderBy = queryParams.index_.toString();
    }
    qs["orderBy" /* ORDER_BY */ ] = _util.stringify(orderBy);
    if (queryParams.startSet_) {
        qs["startAt" /* START_AT */ ] = _util.stringify(queryParams.indexStartValue_);
        if (queryParams.startNameSet_) qs["startAt" /* START_AT */ ] += ',' + _util.stringify(queryParams.indexStartName_);
    }
    if (queryParams.endSet_) {
        qs["endAt" /* END_AT */ ] = _util.stringify(queryParams.indexEndValue_);
        if (queryParams.endNameSet_) qs["endAt" /* END_AT */ ] += ',' + _util.stringify(queryParams.indexEndName_);
    }
    if (queryParams.limitSet_) {
        if (queryParams.isViewFromLeft()) qs["limitToFirst" /* LIMIT_TO_FIRST */ ] = queryParams.limit_;
        else qs["limitToLast" /* LIMIT_TO_LAST */ ] = queryParams.limit_;
    }
    return qs;
}
function queryParamsGetQueryObject(queryParams) {
    const obj = {
    };
    if (queryParams.startSet_) {
        obj["sp" /* INDEX_START_VALUE */ ] = queryParams.indexStartValue_;
        if (queryParams.startNameSet_) obj["sn" /* INDEX_START_NAME */ ] = queryParams.indexStartName_;
    }
    if (queryParams.endSet_) {
        obj["ep" /* INDEX_END_VALUE */ ] = queryParams.indexEndValue_;
        if (queryParams.endNameSet_) obj["en" /* INDEX_END_NAME */ ] = queryParams.indexEndName_;
    }
    if (queryParams.limitSet_) {
        obj["l" /* LIMIT */ ] = queryParams.limit_;
        let viewFrom = queryParams.viewFrom_;
        if (viewFrom === '') {
            if (queryParams.isViewFromLeft()) viewFrom = "l" /* VIEW_FROM_LEFT */ ;
            else viewFrom = "r" /* VIEW_FROM_RIGHT */ ;
        }
        obj["vf" /* VIEW_FROM */ ] = viewFrom;
    }
    // For now, priority index is the default, so we only specify if it's some other index
    if (queryParams.index_ !== PRIORITY_INDEX) obj["i" /* INDEX */ ] = queryParams.index_.toString();
    return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */ class ReadonlyRestClient extends ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_2, onDataUpdate_1, authTokenProvider_1, appCheckTokenProvider_1){
        super();
        this.repoInfo_ = repoInfo_2;
        this.onDataUpdate_ = onDataUpdate_1;
        this.authTokenProvider_ = authTokenProvider_1;
        this.appCheckTokenProvider_ = appCheckTokenProvider_1;
        /** @private {function(...[*])} */ this.log_ = logWrapper('p:rest:');
        /**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */ this.listens_ = {
        };
    }
    reportStats(stats) {
        throw new Error('Method not implemented.');
    }
    static getListenId_(query, tag) {
        if (tag !== undefined) return 'tag$' + tag;
        else {
            _util.assert(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
            return query._path.toString();
        }
    }
    /** @inheritDoc */ listen(query, currentHashFn, tag, onComplete) {
        const pathString = query._path.toString();
        this.log_('Listen called for ' + pathString + ' ' + query._queryIdentifier);
        // Mark this listener so we can tell if it's removed.
        const listenId = ReadonlyRestClient.getListenId_(query, tag);
        const thisListen = {
        };
        this.listens_[listenId] = thisListen;
        const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
        this.restRequest_(pathString + '.json', queryStringParameters, (error1, result)=>{
            let data = result;
            if (error1 === 404) {
                data = null;
                error1 = null;
            }
            if (error1 === null) this.onDataUpdate_(pathString, data, /*isMerge=*/ false, tag);
            if (_util.safeGet(this.listens_, listenId) === thisListen) {
                let status;
                if (!error1) status = 'ok';
                else if (error1 === 401) status = 'permission_denied';
                else status = 'rest_error:' + error1;
                onComplete(status, null);
            }
        });
    }
    /** @inheritDoc */ unlisten(query, tag) {
        const listenId = ReadonlyRestClient.getListenId_(query, tag);
        delete this.listens_[listenId];
    }
    get(query) {
        const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
        const pathString = query._path.toString();
        const deferred = new _util.Deferred();
        this.restRequest_(pathString + '.json', queryStringParameters, (error1, result)=>{
            let data = result;
            if (error1 === 404) {
                data = null;
                error1 = null;
            }
            if (error1 === null) {
                this.onDataUpdate_(pathString, data, /*isMerge=*/ false, /*tag=*/ null);
                deferred.resolve(data);
            } else deferred.reject(new Error(data));
        });
        return deferred.promise;
    }
    /** @inheritDoc */ refreshAuthToken(token) {
    // no-op since we just always call getToken.
    }
    /**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */ restRequest_(pathString, queryStringParameters = {
    }, callback) {
        queryStringParameters['format'] = 'export';
        return Promise.all([
            this.authTokenProvider_.getToken(/*forceRefresh=*/ false),
            this.appCheckTokenProvider_.getToken(/*forceRefresh=*/ false)
        ]).then(([authToken2, appCheckToken3])=>{
            if (authToken2 && authToken2.accessToken) queryStringParameters['auth'] = authToken2.accessToken;
            if (appCheckToken3 && appCheckToken3.token) queryStringParameters['ac'] = appCheckToken3.token;
            const url = (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host + pathString + '?' + 'ns=' + this.repoInfo_.namespace + _util.querystring(queryStringParameters);
            this.log_('Sending REST request for ' + url);
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if (callback && xhr.readyState === 4) {
                    this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);
                    let res = null;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            res = _util.jsonEval(xhr.responseText);
                        } catch (e) {
                            warn('Failed to parse JSON response for ' + url + ': ' + xhr.responseText);
                        }
                        callback(null, res);
                    } else {
                        // 401 and 404 are expected.
                        if (xhr.status !== 401 && xhr.status !== 404) warn('Got unsuccessful REST response for ' + url + ' Status: ' + xhr.status);
                        callback(xhr.status);
                    }
                    callback = null;
                }
            };
            xhr.open('GET', url, /*asynchronous=*/ true);
            xhr.send();
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */ class SnapshotHolder {
    constructor(){
        this.rootNode_ = ChildrenNode.EMPTY_NODE;
    }
    getNode(path) {
        return this.rootNode_.getChild(path);
    }
    updateSnapshot(path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newSparseSnapshotTree() {
    return {
        value: null,
        children: new Map()
    };
}
/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */ function sparseSnapshotTreeRemember(sparseSnapshotTree, path2, data) {
    if (pathIsEmpty(path2)) {
        sparseSnapshotTree.value = data;
        sparseSnapshotTree.children.clear();
    } else if (sparseSnapshotTree.value !== null) sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path2, data);
    else {
        const childKey = pathGetFront(path2);
        if (!sparseSnapshotTree.children.has(childKey)) sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
        const child = sparseSnapshotTree.children.get(childKey);
        path2 = pathPopFront(path2);
        sparseSnapshotTreeRemember(child, path2, data);
    }
}
/**
 * Purge the data at path from the cache.
 *
 * @param path - Path to look up snapshot for.
 * @returns True if this node should now be removed.
 */ function sparseSnapshotTreeForget(sparseSnapshotTree, path2) {
    if (pathIsEmpty(path2)) {
        sparseSnapshotTree.value = null;
        sparseSnapshotTree.children.clear();
        return true;
    } else {
        if (sparseSnapshotTree.value !== null) {
            if (sparseSnapshotTree.value.isLeafNode()) // We're trying to forget a node that doesn't exist
            return false;
            else {
                const value2 = sparseSnapshotTree.value;
                sparseSnapshotTree.value = null;
                value2.forEachChild(PRIORITY_INDEX, (key2, tree)=>{
                    sparseSnapshotTreeRemember(sparseSnapshotTree, new Path(key2), tree);
                });
                return sparseSnapshotTreeForget(sparseSnapshotTree, path2);
            }
        } else if (sparseSnapshotTree.children.size > 0) {
            const childKey = pathGetFront(path2);
            path2 = pathPopFront(path2);
            if (sparseSnapshotTree.children.has(childKey)) {
                const safeToRemove = sparseSnapshotTreeForget(sparseSnapshotTree.children.get(childKey), path2);
                if (safeToRemove) sparseSnapshotTree.children.delete(childKey);
            }
            return sparseSnapshotTree.children.size === 0;
        } else return true;
    }
}
/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */ function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
    if (sparseSnapshotTree.value !== null) func(prefixPath, sparseSnapshotTree.value);
    else sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key2, tree)=>{
        const path2 = new Path(prefixPath.toString() + '/' + key2);
        sparseSnapshotTreeForEachTree(tree, path2, func);
    });
}
/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */ function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
    sparseSnapshotTree.children.forEach((tree, key2)=>{
        func(key2, tree);
    });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */ class StatsListener {
    constructor(collection_){
        this.collection_ = collection_;
        this.last_ = null;
    }
    get() {
        const newStats = this.collection_.get();
        const delta = Object.assign({
        }, newStats);
        if (this.last_) each(this.last_, (stat, value2)=>{
            delta[stat] = delta[stat] - value2;
        });
        this.last_ = newStats;
        return delta;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
const FIRST_STATS_MIN_TIME = 10000;
const FIRST_STATS_MAX_TIME = 30000;
// We'll continue to report stats on average every 5 minutes.
const REPORT_STATS_INTERVAL = 300000;
class StatsReporter {
    constructor(collection, server_){
        this.server_ = server_;
        this.statsToReport_ = {
        };
        this.statsListener_ = new StatsListener(collection);
        const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
    }
    reportStats_() {
        const stats = this.statsListener_.get();
        const reportedStats = {
        };
        let haveStatsToReport = false;
        each(stats, (stat, value2)=>{
            if (value2 > 0 && _util.contains(this.statsToReport_, stat)) {
                reportedStats[stat] = value2;
                haveStatsToReport = true;
            }
        });
        if (haveStatsToReport) this.server_.reportStats(reportedStats);
        // queue our next run.
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *
 * @enum
 */ var OperationType;
(function(OperationType1) {
    OperationType1[OperationType1["OVERWRITE"] = 0] = "OVERWRITE";
    OperationType1[OperationType1["MERGE"] = 1] = "MERGE";
    OperationType1[OperationType1["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
    OperationType1[OperationType1["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {
}));
function newOperationSourceUser() {
    return {
        fromUser: true,
        fromServer: false,
        queryId: null,
        tagged: false
    };
}
function newOperationSourceServer() {
    return {
        fromUser: false,
        fromServer: true,
        queryId: null,
        tagged: false
    };
}
function newOperationSourceServerTaggedQuery(queryId) {
    return {
        fromUser: false,
        fromServer: true,
        queryId,
        tagged: true
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AckUserWrite {
    /**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */ constructor(/** @inheritDoc */ path2, /** @inheritDoc */ affectedTree, /** @inheritDoc */ revert){
        this.path = path2;
        this.affectedTree = affectedTree;
        this.revert = revert;
        /** @inheritDoc */ this.type = OperationType.ACK_USER_WRITE;
        /** @inheritDoc */ this.source = newOperationSourceUser();
    }
    operationForChild(childName) {
        if (!pathIsEmpty(this.path)) {
            _util.assert(pathGetFront(this.path) === childName, 'operationForChild called for unrelated child.');
            return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
        } else if (this.affectedTree.value != null) {
            _util.assert(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.');
            // All child locations are affected as well; just return same operation.
            return this;
        } else {
            const childTree = this.affectedTree.subtree(new Path(childName));
            return new AckUserWrite(newEmptyPath(), childTree, this.revert);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ListenComplete {
    constructor(source, path3){
        this.source = source;
        this.path = path3;
        /** @inheritDoc */ this.type = OperationType.LISTEN_COMPLETE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) return new ListenComplete(this.source, newEmptyPath());
        else return new ListenComplete(this.source, pathPopFront(this.path));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Overwrite {
    constructor(source1, path4, snap){
        this.source = source1;
        this.path = path4;
        this.snap = snap;
        /** @inheritDoc */ this.type = OperationType.OVERWRITE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
        else return new Overwrite(this.source, pathPopFront(this.path), this.snap);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Merge {
    constructor(/** @inheritDoc */ source2, /** @inheritDoc */ path5, /** @inheritDoc */ children){
        this.source = source2;
        this.path = path5;
        this.children = children;
        /** @inheritDoc */ this.type = OperationType.MERGE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) {
            const childTree = this.children.subtree(new Path(childName));
            if (childTree.isEmpty()) // This child is unaffected
            return null;
            else if (childTree.value) // We have a snapshot for the child in question.  This becomes an overwrite of the child.
            return new Overwrite(this.source, newEmptyPath(), childTree.value);
            else // This is a merge at a deeper level
            return new Merge(this.source, newEmptyPath(), childTree);
        } else {
            _util.assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
            return new Merge(this.source, pathPopFront(this.path), this.children);
        }
    }
    toString() {
        return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */ class CacheNode {
    constructor(node_, fullyInitialized_, filtered_){
        this.node_ = node_;
        this.fullyInitialized_ = fullyInitialized_;
        this.filtered_ = filtered_;
    }
    /**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */ isFullyInitialized() {
        return this.fullyInitialized_;
    }
    /**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */ isFiltered() {
        return this.filtered_;
    }
    isCompleteForPath(path) {
        if (pathIsEmpty(path)) return this.isFullyInitialized() && !this.filtered_;
        const childKey = pathGetFront(path);
        return this.isCompleteForChild(childKey);
    }
    isCompleteForChild(key) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
    }
    getNode() {
        return this.node_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */ class EventGenerator {
    constructor(query_){
        this.query_ = query_;
        this.index_ = this.query_._queryParams.getIndex();
    }
}
/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */ function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
    const events = [];
    const moves = [];
    changes.forEach((change)=>{
        if (change.type === "child_changed" /* CHILD_CHANGED */  && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) moves.push(changeChildMoved(change.childName, change.snapshotNode));
    });
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed" /* CHILD_REMOVED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added" /* CHILD_ADDED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved" /* CHILD_MOVED */ , moves, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed" /* CHILD_CHANGED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "value" /* VALUE */ , changes, eventRegistrations, eventCache);
    return events;
}
/**
 * Given changes of a single change type, generate the corresponding events.
 */ function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
    const filteredChanges = changes.filter((change)=>change.type === eventType
    );
    filteredChanges.sort((a, b)=>eventGeneratorCompareChanges(eventGenerator, a, b)
    );
    filteredChanges.forEach((change)=>{
        const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
        registrations.forEach((registration)=>{
            if (registration.respondsTo(change.type)) events.push(registration.createEvent(materializedChange, eventGenerator.query_));
        });
    });
}
function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
    if (change.type === 'value' || change.type === 'child_removed') return change;
    else {
        change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
        return change;
    }
}
function eventGeneratorCompareChanges(eventGenerator, a, b) {
    if (a.childName == null || b.childName == null) throw _util.assertionError('Should only compare child_ events.');
    const aWrapped = new NamedNode(a.childName, a.snapshotNode);
    const bWrapped = new NamedNode(b.childName, b.snapshotNode);
    return eventGenerator.index_.compare(aWrapped, bWrapped);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newViewCache(eventCache, serverCache) {
    return {
        eventCache,
        serverCache
    };
}
function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
    return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
    return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
}
function viewCacheGetCompleteEventSnap(viewCache) {
    return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function viewCacheGetCompleteServerSnap(viewCache) {
    return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 */ const EmptyChildren = ()=>{
    if (!emptyChildrenSingleton) emptyChildrenSingleton = new SortedMap(stringCompare);
    return emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */ class ImmutableTree {
    constructor(value2, children1 = EmptyChildren()){
        this.value = value2;
        this.children = children1;
    }
    static fromObject(obj) {
        let tree = new ImmutableTree(null);
        each(obj, (childPath, childSnap)=>{
            tree = tree.set(new Path(childPath), childSnap);
        });
        return tree;
    }
    /**
     * True if the value is empty and there are no children
     */ isEmpty() {
        return this.value === null && this.children.isEmpty();
    }
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */ findRootMostMatchingPathAndValue(relativePath, predicate) {
        if (this.value != null && predicate(this.value)) return {
            path: newEmptyPath(),
            value: this.value
        };
        else {
            if (pathIsEmpty(relativePath)) return null;
            else {
                const front = pathGetFront(relativePath);
                const child = this.children.get(front);
                if (child !== null) {
                    const childExistingPathAndValue = child.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
                    if (childExistingPathAndValue != null) {
                        const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
                        return {
                            path: fullPath,
                            value: childExistingPathAndValue.value
                        };
                    } else return null;
                } else return null;
            }
        }
    }
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */ findRootMostValueAndPath(relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, ()=>true
        );
    }
    /**
     * @returns The subtree at the given path
     */ subtree(relativePath) {
        if (pathIsEmpty(relativePath)) return this;
        else {
            const front = pathGetFront(relativePath);
            const childTree = this.children.get(front);
            if (childTree !== null) return childTree.subtree(pathPopFront(relativePath));
            else return new ImmutableTree(null);
        }
    }
    /**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */ set(relativePath, toSet) {
        if (pathIsEmpty(relativePath)) return new ImmutableTree(toSet, this.children);
        else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front) || new ImmutableTree(null);
            const newChild = child.set(pathPopFront(relativePath), toSet);
            const newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */ remove(relativePath) {
        if (pathIsEmpty(relativePath)) {
            if (this.children.isEmpty()) return new ImmutableTree(null);
            else return new ImmutableTree(null, this.children);
        } else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) {
                const newChild = child.remove(pathPopFront(relativePath));
                let newChildren;
                if (newChild.isEmpty()) newChildren = this.children.remove(front);
                else newChildren = this.children.insert(front, newChild);
                if (this.value === null && newChildren.isEmpty()) return new ImmutableTree(null);
                else return new ImmutableTree(this.value, newChildren);
            } else return this;
        }
    }
    /**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */ get(relativePath) {
        if (pathIsEmpty(relativePath)) return this.value;
        else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) return child.get(pathPopFront(relativePath));
            else return null;
        }
    }
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */ setTree(relativePath, newTree) {
        if (pathIsEmpty(relativePath)) return newTree;
        else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front) || new ImmutableTree(null);
            const newChild = child.setTree(pathPopFront(relativePath), newTree);
            let newChildren;
            if (newChild.isEmpty()) newChildren = this.children.remove(front);
            else newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */ fold(fn) {
        return this.fold_(newEmptyPath(), fn);
    }
    /**
     * Recursive helper for public-facing fold() method
     */ fold_(pathSoFar, fn) {
        const accum = {
        };
        this.children.inorderTraversal((childKey, childTree)=>{
            accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
    }
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */ findOnPath(path, f) {
        return this.findOnPath_(path, newEmptyPath(), f);
    }
    findOnPath_(pathToFollow, pathSoFar, f) {
        const result = this.value ? f(pathSoFar, this.value) : false;
        if (result) return result;
        else {
            if (pathIsEmpty(pathToFollow)) return null;
            else {
                const front = pathGetFront(pathToFollow);
                const nextChild = this.children.get(front);
                if (nextChild) return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
                else return null;
            }
        }
    }
    foreachOnPath(path, f) {
        return this.foreachOnPath_(path, newEmptyPath(), f);
    }
    foreachOnPath_(pathToFollow, currentRelativePath, f) {
        if (pathIsEmpty(pathToFollow)) return this;
        else {
            if (this.value) f(currentRelativePath, this.value);
            const front = pathGetFront(pathToFollow);
            const nextChild = this.children.get(front);
            if (nextChild) return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
            else return new ImmutableTree(null);
        }
    }
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */ foreach(f) {
        this.foreach_(newEmptyPath(), f);
    }
    foreach_(currentRelativePath, f) {
        this.children.inorderTraversal((childName, childTree)=>{
            childTree.foreach_(pathChild(currentRelativePath, childName), f);
        });
        if (this.value) f(currentRelativePath, this.value);
    }
    foreachChild(f) {
        this.children.inorderTraversal((childName, childTree)=>{
            if (childTree.value) f(childName, childTree.value);
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */ class CompoundWrite {
    constructor(writeTree_){
        this.writeTree_ = writeTree_;
    }
    static empty() {
        return new CompoundWrite(new ImmutableTree(null));
    }
}
function compoundWriteAddWrite(compoundWrite, path6, node3) {
    if (pathIsEmpty(path6)) return new CompoundWrite(new ImmutableTree(node3));
    else {
        const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path6);
        if (rootmost != null) {
            const rootMostPath = rootmost.path;
            let value3 = rootmost.value;
            const relativePath = newRelativePath(rootMostPath, path6);
            value3 = value3.updateChild(relativePath, node3);
            return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value3));
        } else {
            const subtree = new ImmutableTree(node3);
            const newWriteTree = compoundWrite.writeTree_.setTree(path6, subtree);
            return new CompoundWrite(newWriteTree);
        }
    }
}
function compoundWriteAddWrites(compoundWrite, path6, updates) {
    let newWrite = compoundWrite;
    each(updates, (childKey, node3)=>{
        newWrite = compoundWriteAddWrite(newWrite, pathChild(path6, childKey), node3);
    });
    return newWrite;
}
/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */ function compoundWriteRemoveWrite(compoundWrite, path6) {
    if (pathIsEmpty(path6)) return CompoundWrite.empty();
    else {
        const newWriteTree = compoundWrite.writeTree_.setTree(path6, new ImmutableTree(null));
        return new CompoundWrite(newWriteTree);
    }
}
/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */ function compoundWriteHasCompleteWrite(compoundWrite, path6) {
    return compoundWriteGetCompleteNode(compoundWrite, path6) != null;
}
/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */ function compoundWriteGetCompleteNode(compoundWrite, path6) {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path6);
    if (rootmost != null) return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path6));
    else return null;
}
/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */ function compoundWriteGetCompleteChildren(compoundWrite) {
    const children2 = [];
    const node3 = compoundWrite.writeTree_.value;
    if (node3 != null) // If it's a leaf node, it has no children; so nothing to do.
    {
        if (!node3.isLeafNode()) node3.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            children2.push(new NamedNode(childName, childNode));
        });
    } else compoundWrite.writeTree_.children.inorderTraversal((childName, childTree)=>{
        if (childTree.value != null) children2.push(new NamedNode(childName, childTree.value));
    });
    return children2;
}
function compoundWriteChildCompoundWrite(compoundWrite, path6) {
    if (pathIsEmpty(path6)) return compoundWrite;
    else {
        const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path6);
        if (shadowingNode != null) return new CompoundWrite(new ImmutableTree(shadowingNode));
        else return new CompoundWrite(compoundWrite.writeTree_.subtree(path6));
    }
}
/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */ function compoundWriteIsEmpty(compoundWrite) {
    return compoundWrite.writeTree_.isEmpty();
}
/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */ function compoundWriteApply(compoundWrite, node3) {
    return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node3);
}
function applySubtreeWrite(relativePath, writeTree, node3) {
    if (writeTree.value != null) // Since there a write is always a leaf, we're done here
    return node3.updateChild(relativePath, writeTree.value);
    else {
        let priorityWrite = null;
        writeTree.children.inorderTraversal((childKey, childTree)=>{
            if (childKey === '.priority') {
                // Apply priorities at the end so we don't update priorities for either empty nodes or forget
                // to apply priorities to empty nodes that are later filled
                _util.assert(childTree.value !== null, 'Priority writes must always be leaf nodes');
                priorityWrite = childTree.value;
            } else node3 = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node3);
        });
        // If there was a priority write, we only apply it if the node is not empty
        if (!node3.getChild(relativePath).isEmpty() && priorityWrite !== null) node3 = node3.updateChild(pathChild(relativePath, '.priority'), priorityWrite);
        return node3;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
 *
 */ function writeTreeChildWrites(writeTree, path6) {
    return newWriteTreeRef(path6, writeTree);
}
/**
 * Record a new overwrite from user code.
 *
 * @param visible - This is set to false by some transactions. It should be excluded from event caches
 */ function writeTreeAddOverwrite(writeTree, path6, snap1, writeId, visible) {
    _util.assert(writeId > writeTree.lastWriteId, 'Stacking an older write on top of newer ones');
    if (visible === undefined) visible = true;
    writeTree.allWrites.push({
        path: path6,
        snap: snap1,
        writeId,
        visible
    });
    if (visible) writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path6, snap1);
    writeTree.lastWriteId = writeId;
}
/**
 * Record a new merge from user code.
 */ function writeTreeAddMerge(writeTree, path6, changedChildren, writeId) {
    _util.assert(writeId > writeTree.lastWriteId, 'Stacking an older merge on top of newer ones');
    writeTree.allWrites.push({
        path: path6,
        children: changedChildren,
        writeId,
        visible: true
    });
    writeTree.visibleWrites = compoundWriteAddWrites(writeTree.visibleWrites, path6, changedChildren);
    writeTree.lastWriteId = writeId;
}
function writeTreeGetWrite(writeTree, writeId) {
    for(let i1 = 0; i1 < writeTree.allWrites.length; i1++){
        const record = writeTree.allWrites[i1];
        if (record.writeId === writeId) return record;
    }
    return null;
}
/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */ function writeTreeRemoveWrite(writeTree, writeId) {
    // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
    // out of order.
    //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
    //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
    const idx = writeTree.allWrites.findIndex((s)=>{
        return s.writeId === writeId;
    });
    _util.assert(idx >= 0, 'removeWrite called with nonexistent writeId.');
    const writeToRemove = writeTree.allWrites[idx];
    writeTree.allWrites.splice(idx, 1);
    let removedWriteWasVisible = writeToRemove.visible;
    let removedWriteOverlapsWithOtherWrites = false;
    let i1 = writeTree.allWrites.length - 1;
    while(removedWriteWasVisible && i1 >= 0){
        const currentWrite = writeTree.allWrites[i1];
        if (currentWrite.visible) {
            if (i1 >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) // The removed write was completely shadowed by a subsequent write.
            removedWriteWasVisible = false;
            else if (pathContains(writeToRemove.path, currentWrite.path)) // Either we're covering some writes or they're covering part of us (depending on which came first).
            removedWriteOverlapsWithOtherWrites = true;
        }
        i1--;
    }
    if (!removedWriteWasVisible) return false;
    else if (removedWriteOverlapsWithOtherWrites) {
        // There's some shadowing going on. Just rebuild the visible writes from scratch.
        writeTreeResetTree_(writeTree);
        return true;
    } else {
        // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
        if (writeToRemove.snap) writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
        else {
            const children2 = writeToRemove.children;
            each(children2, (childName)=>{
                writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
            });
        }
        return true;
    }
}
function writeTreeRecordContainsPath_(writeRecord, path6) {
    if (writeRecord.snap) return pathContains(writeRecord.path, path6);
    else {
        for(const childName in writeRecord.children){
            if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path6)) return true;
        }
        return false;
    }
}
/**
 * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
 */ function writeTreeResetTree_(writeTree) {
    writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
    if (writeTree.allWrites.length > 0) writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
    else writeTree.lastWriteId = -1;
}
/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */ function writeTreeDefaultFilter_(write) {
    return write.visible;
}
/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */ function writeTreeLayerTree_(writes, filter, treeRoot) {
    let compoundWrite = CompoundWrite.empty();
    for(let i1 = 0; i1 < writes.length; ++i1){
        const write = writes[i1];
        // Theory, a later set will either:
        // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
        // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
        if (filter(write)) {
            const writePath = write.path;
            let relativePath;
            if (write.snap) {
                if (pathContains(treeRoot, writePath)) {
                    relativePath = newRelativePath(treeRoot, writePath);
                    compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
                } else if (pathContains(writePath, treeRoot)) {
                    relativePath = newRelativePath(writePath, treeRoot);
                    compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
                }
            } else if (write.children) {
                if (pathContains(treeRoot, writePath)) {
                    relativePath = newRelativePath(treeRoot, writePath);
                    compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
                } else if (pathContains(writePath, treeRoot)) {
                    relativePath = newRelativePath(writePath, treeRoot);
                    if (pathIsEmpty(relativePath)) compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
                    else {
                        const child = _util.safeGet(write.children, pathGetFront(relativePath));
                        if (child) {
                            // There exists a child in this node that matches the root path
                            const deepNode = child.getChild(pathPopFront(relativePath));
                            compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
                        }
                    }
                }
            } else throw _util.assertionError('WriteRecord should have .snap or .children');
        }
    }
    return compoundWrite;
}
/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    if (!writeIdsToExclude && !includeHiddenWrites) {
        const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
        if (shadowingNode != null) return shadowingNode;
        else {
            const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
            if (compoundWriteIsEmpty(subMerge)) return completeServerCache;
            else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
            return null;
            else {
                const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return compoundWriteApply(subMerge, layeredCache);
            }
        }
    } else {
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) return completeServerCache;
        else {
            // If the server cache is null, and we don't have a complete cache, we need to return null
            if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) return null;
            else {
                const filter = function(write) {
                    return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
                };
                const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
                const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return compoundWriteApply(mergeAtPath, layeredCache);
            }
        }
    }
}
/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */ function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
    let completeChildren = ChildrenNode.EMPTY_NODE;
    const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (topLevelSet) {
        if (!topLevelSet.isLeafNode()) // we're shadowing everything. Return the children.
        topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap)=>{
            completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
        });
        return completeChildren;
    } else if (completeServerChildren) {
        // Layer any children we have on top of this
        // We know we don't have a top-level set, so just enumerate existing children
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            const node3 = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
            completeChildren = completeChildren.updateImmediateChild(childName, node3);
        });
        // Add any complete children we have from the set
        compoundWriteGetCompleteChildren(merge).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    } else {
        // We don't have anything to layer on top of. Layer on any children we have
        // Note that we can return an empty snap if we have a defined delete
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        compoundWriteGetCompleteChildren(merge).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    }
}
/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */ function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
    _util.assert(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
    const path6 = pathChild(treePath, childPath);
    if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path6)) // At this point we can probably guarantee that we're in case 2, meaning no events
    // May need to check visibility while doing the findRootMostValueAndPath call
    return null;
    else {
        // No complete shadowing. We're either partially shadowing or not shadowing at all.
        const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path6);
        if (compoundWriteIsEmpty(childMerge)) // We're not shadowing at all. Case 1
        return existingServerSnap.getChild(childPath);
        else // This could be more efficient if the serverNode + updates doesn't change the eventSnap
        // However this is tricky to find out, since user updates don't necessary change the server
        // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
        // adds nodes, but doesn't change any existing writes. It is therefore not enough to
        // only check if the updates change the serverNode.
        // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
        return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
    const path6 = pathChild(treePath, childKey);
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path6);
    if (shadowingNode != null) return shadowingNode;
    else {
        if (existingServerSnap.isCompleteForChild(childKey)) {
            const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path6);
            return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
        } else return null;
    }
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 */ function writeTreeShadowingWrite(writeTree, path6) {
    return compoundWriteGetCompleteNode(writeTree.visibleWrites, path6);
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */ function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
    let toIterate;
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
    if (shadowingNode != null) toIterate = shadowingNode;
    else if (completeServerData != null) toIterate = compoundWriteApply(merge, completeServerData);
    else // no children to iterate on
    return [];
    toIterate = toIterate.withIndex(index);
    if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
        const nodes = [];
        const cmp1 = index.getCompare();
        const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
        let next = iter.getNext();
        while(next && nodes.length < count){
            if (cmp1(next, startPost) !== 0) nodes.push(next);
            next = iter.getNext();
        }
        return nodes;
    } else return [];
}
function newWriteTree() {
    return {
        visibleWrites: CompoundWrite.empty(),
        allWrites: [],
        lastWriteId: -1
    };
}
/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */ function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
    return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */ function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path6, existingEventSnap, existingServerSnap) {
    return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path6, existingEventSnap, existingServerSnap);
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */ function writeTreeRefShadowingWrite(writeTreeRef, path6) {
    return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path6));
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window
 */ function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
    return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
    return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
/**
 * Return a WriteTreeRef for a child.
 */ function writeTreeRefChild(writeTreeRef, childName) {
    return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function newWriteTreeRef(path6, writeTree) {
    return {
        treePath: path6,
        writeTree
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ChildChangeAccumulator {
    constructor(){
        this.changeMap = new Map();
    }
    trackChildChange(change) {
        const type = change.type;
        const childKey = change.childName;
        _util.assert(type === "child_added" /* CHILD_ADDED */  || type === "child_changed" /* CHILD_CHANGED */  || type === "child_removed" /* CHILD_REMOVED */ , 'Only child changes supported for tracking');
        _util.assert(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
        const oldChange = this.changeMap.get(childKey);
        if (oldChange) {
            const oldType = oldChange.type;
            if (type === "child_added" /* CHILD_ADDED */  && oldType === "child_removed" /* CHILD_REMOVED */ ) this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
            else if (type === "child_removed" /* CHILD_REMOVED */  && oldType === "child_added" /* CHILD_ADDED */ ) this.changeMap.delete(childKey);
            else if (type === "child_removed" /* CHILD_REMOVED */  && oldType === "child_changed" /* CHILD_CHANGED */ ) this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
            else if (type === "child_changed" /* CHILD_CHANGED */  && oldType === "child_added" /* CHILD_ADDED */ ) this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
            else if (type === "child_changed" /* CHILD_CHANGED */  && oldType === "child_changed" /* CHILD_CHANGED */ ) this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
            else throw _util.assertionError('Illegal combination of changes: ' + change + ' occurred after ' + oldChange);
        } else this.changeMap.set(childKey, change);
    }
    getChanges() {
        return Array.from(this.changeMap.values());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of CompleteChildSource that never returns any additional children
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
class NoCompleteChildSource_ {
    getCompleteChild(childKey) {
        return null;
    }
    getChildAfterChild(index, child, reverse) {
        return null;
    }
}
/**
 * Singleton instance.
 */ const NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */ class WriteTreeCompleteChildSource {
    constructor(writes_, viewCache_, optCompleteServerCache_ = null){
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }
    getCompleteChild(childKey) {
        const node3 = this.viewCache_.eventCache;
        if (node3.isCompleteForChild(childKey)) return node3.getNode().getImmediateChild(childKey);
        else {
            const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
            return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
        }
    }
    getChildAfterChild(index, child, reverse) {
        const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
        const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child, 1, reverse, index);
        if (nodes.length === 0) return null;
        else return nodes[0];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newViewProcessor(filter) {
    return {
        filter
    };
}
function viewProcessorAssertIndexed(viewProcessor, viewCache) {
    _util.assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), 'Event snap not indexed');
    _util.assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), 'Server snap not indexed');
}
function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
    const accumulator = new ChildChangeAccumulator();
    let newViewCache1, filterServerNode;
    if (operation.type === OperationType.OVERWRITE) {
        const overwrite = operation;
        if (overwrite.source.fromUser) newViewCache1 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
        else {
            _util.assert(overwrite.source.fromServer, 'Unknown source.');
            // We filter the node if it's a tagged update or the node has been previously filtered  and the
            // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
            // again
            filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
            newViewCache1 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === OperationType.MERGE) {
        const merge = operation;
        if (merge.source.fromUser) newViewCache1 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
        else {
            _util.assert(merge.source.fromServer, 'Unknown source.');
            // We filter the node if it's a tagged update or the node has been previously filtered
            filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
            newViewCache1 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === OperationType.ACK_USER_WRITE) {
        const ackUserWrite = operation;
        if (!ackUserWrite.revert) newViewCache1 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
        else newViewCache1 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    } else if (operation.type === OperationType.LISTEN_COMPLETE) newViewCache1 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
    else throw _util.assertionError('Unknown operation type: ' + operation.type);
    const changes = accumulator.getChanges();
    viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache1, changes);
    return {
        viewCache: newViewCache1,
        changes
    };
}
function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache1, accumulator) {
    const eventSnap = newViewCache1.eventCache;
    if (eventSnap.isFullyInitialized()) {
        const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
        const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
        if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache1)));
    }
}
function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source3, accumulator) {
    const oldEventSnap = viewCache.eventCache;
    if (writeTreeRefShadowingWrite(writesCache, changePath) != null) // we have a shadowing write, ignore changes
    return viewCache;
    else {
        let newEventCache, serverNode;
        if (pathIsEmpty(changePath)) {
            // TODO: figure out how this plays with "sliding ack windows"
            _util.assert(viewCache.serverCache.isFullyInitialized(), 'If change path is empty, we must have complete server data');
            if (viewCache.serverCache.isFiltered()) {
                // We need to special case this, because we need to only apply writes to complete children, or
                // we might end up raising events for incomplete children. If the server data is filtered deep
                // writes cannot be guaranteed to be complete
                const serverCache = viewCacheGetCompleteServerSnap(viewCache);
                const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
                const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
            } else {
                const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
            }
        } else {
            const childKey = pathGetFront(changePath);
            if (childKey === '.priority') {
                _util.assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
                const oldEventNode = oldEventSnap.getNode();
                serverNode = viewCache.serverCache.getNode();
                // we might have overwrites for this priority
                const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
                if (updatedPriority != null) newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
                else // priority didn't change, keep old node
                newEventCache = oldEventSnap.getNode();
            } else {
                const childChangePath = pathPopFront(changePath);
                // update child
                let newEventChild;
                if (oldEventSnap.isCompleteForChild(childKey)) {
                    serverNode = viewCache.serverCache.getNode();
                    const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
                    if (eventChildUpdate != null) newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
                    else // Nothing changed, just keep the old child
                    newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
                } else newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
                if (newEventChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source3, accumulator);
                else // no complete child available or no change
                newEventCache = oldEventSnap.getNode();
            }
        }
        return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
    }
}
function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
    const oldServerSnap = oldViewCache.serverCache;
    let newServerCache;
    const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
    if (pathIsEmpty(changePath)) newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
    else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
        // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
        const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
        newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
    } else {
        const childKey = pathGetFront(changePath);
        if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) // We don't update incomplete nodes with updates intended for other listeners
        return oldViewCache;
        const childChangePath = pathPopFront(changePath);
        const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
        const newChildNode = childNode.updateChild(childChangePath, changedSnap);
        if (childKey === '.priority') newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
        else newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
    }
    const newViewCache1 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
    const source3 = new WriteTreeCompleteChildSource(writesCache, newViewCache1, completeCache);
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache1, changePath, writesCache, source3, accumulator);
}
function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
    const oldEventSnap = oldViewCache.eventCache;
    let newViewCache1, newEventCache;
    const source3 = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
    if (pathIsEmpty(changePath)) {
        newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
        newViewCache1 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
    } else {
        const childKey = pathGetFront(changePath);
        if (childKey === '.priority') {
            newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
            newViewCache1 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
        } else {
            const childChangePath = pathPopFront(changePath);
            const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
            let newChild;
            if (pathIsEmpty(childChangePath)) // Child overwrite, we can replace the child
            newChild = changedSnap;
            else {
                const childNode = source3.getCompleteChild(childKey);
                if (childNode != null) {
                    if (pathGetBack(childChangePath) === '.priority' && childNode.getChild(pathParent(childChangePath)).isEmpty()) // This is a priority update on an empty node. If this node exists on the server, the
                    // server will send down the priority in the update, so ignore for now
                    newChild = childNode;
                    else newChild = childNode.updateChild(childChangePath, changedSnap);
                } else // There is no complete child node available
                newChild = ChildrenNode.EMPTY_NODE;
            }
            if (!oldChild.equals(newChild)) {
                const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source3, accumulator);
                newViewCache1 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
            } else newViewCache1 = oldViewCache;
        }
    }
    return newViewCache1;
}
function viewProcessorCacheHasChild(viewCache, childKey) {
    return viewCache.eventCache.isCompleteForChild(childKey);
}
function viewProcessorApplyUserMerge(viewProcessor, viewCache, path6, changedChildren, writesCache, serverCache, accumulator) {
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = pathChild(path6, relativePath);
        if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = pathChild(path6, relativePath);
        if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    return curViewCache;
}
function viewProcessorApplyMerge(viewProcessor, node3, merge) {
    merge.foreach((relativePath, childNode)=>{
        node3 = node3.updateChild(relativePath, childNode);
    });
    return node3;
}
function viewProcessorApplyServerMerge(viewProcessor, viewCache, path6, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
    // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
    // wait for the complete data update coming soon.
    if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) return viewCache;
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    let viewMergeTree;
    if (pathIsEmpty(path6)) viewMergeTree = changedChildren;
    else viewMergeTree = new ImmutableTree(null).setTree(path6, changedChildren);
    const serverNode = viewCache.serverCache.getNode();
    viewMergeTree.children.inorderTraversal((childKey, childTree)=>{
        if (serverNode.hasChild(childKey)) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
            curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    viewMergeTree.children.inorderTraversal((childKey, childMergeTree)=>{
        const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === undefined;
        if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
            curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    return curViewCache;
}
function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree1, writesCache, completeCache, accumulator) {
    if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) return viewCache;
    // Only filter server node if it is currently filtered
    const filterServerNode = viewCache.serverCache.isFiltered();
    // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
    // now that it won't be shadowed.
    const serverCache = viewCache.serverCache;
    if (affectedTree1.value != null) {
        // This is an overwrite.
        if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
        else if (pathIsEmpty(ackPath)) {
            // This is a goofy edge case where we are acking data at this location but don't have full data.  We
            // should just re-apply whatever we have in our cache as a merge.
            let changedChildren = new ImmutableTree(null);
            serverCache.getNode().forEachChild(KEY_INDEX, (name3, node3)=>{
                changedChildren = changedChildren.set(new Path(name3), node3);
            });
            return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
        } else return viewCache;
    } else {
        // This is a merge.
        let changedChildren = new ImmutableTree(null);
        affectedTree1.foreach((mergePath, value3)=>{
            const serverCachePath = pathChild(ackPath, mergePath);
            if (serverCache.isCompleteForPath(serverCachePath)) changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
        });
        return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    }
}
function viewProcessorListenComplete(viewProcessor, viewCache, path6, writesCache, accumulator) {
    const oldServerNode = viewCache.serverCache;
    const newViewCache1 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path6), oldServerNode.isFiltered());
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache1, path6, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function viewProcessorRevertUserWrite(viewProcessor, viewCache, path6, writesCache, completeServerCache, accumulator) {
    let complete;
    if (writeTreeRefShadowingWrite(writesCache, path6) != null) return viewCache;
    else {
        const source3 = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
        const oldEventCache = viewCache.eventCache.getNode();
        let newEventCache;
        if (pathIsEmpty(path6) || pathGetFront(path6) === '.priority') {
            let newNode;
            if (viewCache.serverCache.isFullyInitialized()) newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
            else {
                const serverChildren = viewCache.serverCache.getNode();
                _util.assert(serverChildren instanceof ChildrenNode, 'serverChildren would be complete if leaf node');
                newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
            }
            newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
        } else {
            const childKey = pathGetFront(path6);
            let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
            if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) newChild = oldEventCache.getImmediateChild(childKey);
            if (newChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path6), source3, accumulator);
            else if (viewCache.eventCache.getNode().hasChild(childKey)) // No complete child available, delete the existing one, if any
            newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path6), source3, accumulator);
            else newEventCache = oldEventCache;
            if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
                // We might have reverted all child writes. Maybe the old event was a leaf node
                complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
                if (complete.isLeafNode()) newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
            }
        }
        complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
        return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */ class View {
    constructor(query_1, initialViewCache){
        this.query_ = query_1;
        this.eventRegistrations_ = [];
        const params3 = this.query_._queryParams;
        const indexFilter = new IndexedFilter(params3.getIndex());
        const filter = queryParamsGetNodeFilter(params3);
        this.processor_ = newViewProcessor(filter);
        const initialServerCache = initialViewCache.serverCache;
        const initialEventCache = initialViewCache.eventCache;
        // Don't filter server node with other filter than index, wait for tagged listen
        const serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        const eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        const newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        const newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        this.viewCache_ = newViewCache(newEventCache, newServerCache);
        this.eventGenerator_ = new EventGenerator(this.query_);
    }
    get query() {
        return this.query_;
    }
}
function viewGetServerCache(view) {
    return view.viewCache_.serverCache.getNode();
}
function viewGetCompleteNode(view) {
    return viewCacheGetCompleteEventSnap(view.viewCache_);
}
function viewGetCompleteServerCache(view, path6) {
    const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
    if (cache) {
        // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
        // we need to see if it contains the child we're interested in.
        if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path6) && !cache.getImmediateChild(pathGetFront(path6)).isEmpty()) return cache.getChild(path6);
    }
    return null;
}
function viewIsEmpty(view) {
    return view.eventRegistrations_.length === 0;
}
function viewAddEventRegistration(view, eventRegistration) {
    view.eventRegistrations_.push(eventRegistration);
}
/**
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */ function viewRemoveEventRegistration(view, eventRegistration, cancelError) {
    const cancelEvents = [];
    if (cancelError) {
        _util.assert(eventRegistration == null, 'A cancel should cancel all event registrations.');
        const path6 = view.query._path;
        view.eventRegistrations_.forEach((registration)=>{
            const maybeEvent = registration.createCancelEvent(cancelError, path6);
            if (maybeEvent) cancelEvents.push(maybeEvent);
        });
    }
    if (eventRegistration) {
        let remaining = [];
        for(let i1 = 0; i1 < view.eventRegistrations_.length; ++i1){
            const existing = view.eventRegistrations_[i1];
            if (!existing.matches(eventRegistration)) remaining.push(existing);
            else if (eventRegistration.hasAnyCallback()) {
                // We're removing just this one
                remaining = remaining.concat(view.eventRegistrations_.slice(i1 + 1));
                break;
            }
        }
        view.eventRegistrations_ = remaining;
    } else view.eventRegistrations_ = [];
    return cancelEvents;
}
/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */ function viewApplyOperation(view, operation, writesCache, completeServerCache) {
    if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
        _util.assert(viewCacheGetCompleteServerSnap(view.viewCache_), 'We should always have a full cache before handling merges');
        _util.assert(viewCacheGetCompleteEventSnap(view.viewCache_), 'Missing event cache, even though we have a server cache');
    }
    const oldViewCache = view.viewCache_;
    const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
    viewProcessorAssertIndexed(view.processor_, result.viewCache);
    _util.assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), 'Once a server snap is complete, it should never go back');
    view.viewCache_ = result.viewCache;
    return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function viewGetInitialEvents(view, registration) {
    const eventSnap1 = view.viewCache_.eventCache;
    const initialChanges = [];
    if (!eventSnap1.getNode().isLeafNode()) {
        const eventNode = eventSnap1.getNode();
        eventNode.forEachChild(PRIORITY_INDEX, (key2, childNode)=>{
            initialChanges.push(changeChildAdded(key2, childNode));
        });
    }
    if (eventSnap1.isFullyInitialized()) initialChanges.push(changeValue(eventSnap1.getNode()));
    return viewGenerateEventsForChanges_(view, initialChanges, eventSnap1.getNode(), registration);
}
function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
    const registrations = eventRegistration ? [
        eventRegistration
    ] : view.eventRegistrations_;
    return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let referenceConstructor$1;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */ class SyncPoint {
    constructor(){
        /**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */ this.views = new Map();
    }
}
function syncPointSetReferenceConstructor(val) {
    _util.assert(!referenceConstructor$1, '__referenceConstructor has already been defined');
    referenceConstructor$1 = val;
}
function syncPointGetReferenceConstructor() {
    _util.assert(referenceConstructor$1, 'Reference.ts has not been loaded');
    return referenceConstructor$1;
}
function syncPointIsEmpty(syncPoint) {
    return syncPoint.views.size === 0;
}
function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
    const queryId = operation.source.queryId;
    if (queryId !== null) {
        const view = syncPoint.views.get(queryId);
        _util.assert(view != null, 'SyncTree gave us an op for an invalid query.');
        return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
    } else {
        let events = [];
        for (const view of syncPoint.views.values())events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
        return events;
    }
}
/**
 * Get a view for the specified query.
 *
 * @param query - The query to return a view for
 * @param writesCache
 * @param serverCache
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete) {
    const queryId = query._queryIdentifier;
    const view = syncPoint.views.get(queryId);
    if (!view) {
        // TODO: make writesCache take flag for complete server node
        let eventCache = writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
        let eventCacheComplete = false;
        if (eventCache) eventCacheComplete = true;
        else if (serverCache instanceof ChildrenNode) {
            eventCache = writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
            eventCacheComplete = false;
        } else {
            eventCache = ChildrenNode.EMPTY_NODE;
            eventCacheComplete = false;
        }
        const viewCache = newViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
        return new View(query, viewCache);
    }
    return view;
}
/**
 * Add an event callback for the specified query.
 *
 * @param query
 * @param eventRegistration
 * @param writesCache
 * @param serverCache - Complete server cache, if we have it.
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
    const view = syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
    if (!syncPoint.views.has(query._queryIdentifier)) syncPoint.views.set(query._queryIdentifier, view);
    // This is guaranteed to exist now, we just created anything that was missing
    viewAddEventRegistration(view, eventRegistration);
    return viewGetInitialEvents(view, eventRegistration);
}
/**
 * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
 *
 * If query is the default query, we'll check all views for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
 *
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns removed queries and any cancel events
 */ function syncPointRemoveEventRegistration(syncPoint, query, eventRegistration, cancelError) {
    const queryId = query._queryIdentifier;
    const removed = [];
    let cancelEvents = [];
    const hadCompleteView = syncPointHasCompleteView(syncPoint);
    if (queryId === 'default') // When you do ref.off(...), we search all views for the registration to remove.
    for (const [viewQueryId, view] of syncPoint.views.entries()){
        cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
        if (viewIsEmpty(view)) {
            syncPoint.views.delete(viewQueryId);
            // We'll deal with complete views later.
            if (!view.query._queryParams.loadsAllData()) removed.push(view.query);
        }
    }
    else {
        // remove the callback from the specific view.
        const view1 = syncPoint.views.get(queryId);
        if (view1) {
            cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view1, eventRegistration, cancelError));
            if (viewIsEmpty(view1)) {
                syncPoint.views.delete(queryId);
                // We'll deal with complete views later.
                if (!view1.query._queryParams.loadsAllData()) removed.push(view1.query);
            }
        }
    }
    if (hadCompleteView && !syncPointHasCompleteView(syncPoint)) // We removed our last complete view.
    removed.push(new (syncPointGetReferenceConstructor())(query._repo, query._path));
    return {
        removed,
        events: cancelEvents
    };
}
function syncPointGetQueryViews(syncPoint) {
    const result = [];
    for (const view of syncPoint.views.values())if (!view.query._queryParams.loadsAllData()) result.push(view);
    return result;
}
/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */ function syncPointGetCompleteServerCache(syncPoint, path6) {
    let serverCache = null;
    for (const view of syncPoint.views.values())serverCache = serverCache || viewGetCompleteServerCache(view, path6);
    return serverCache;
}
function syncPointViewForQuery(syncPoint, query) {
    const params4 = query._queryParams;
    if (params4.loadsAllData()) return syncPointGetCompleteView(syncPoint);
    else {
        const queryId = query._queryIdentifier;
        return syncPoint.views.get(queryId);
    }
}
function syncPointViewExistsForQuery(syncPoint, query) {
    return syncPointViewForQuery(syncPoint, query) != null;
}
function syncPointHasCompleteView(syncPoint) {
    return syncPointGetCompleteView(syncPoint) != null;
}
function syncPointGetCompleteView(syncPoint) {
    for (const view of syncPoint.views.values()){
        if (view.query._queryParams.loadsAllData()) return view;
    }
    return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let referenceConstructor;
function syncTreeSetReferenceConstructor(val) {
    _util.assert(!referenceConstructor, '__referenceConstructor has already been defined');
    referenceConstructor = val;
}
function syncTreeGetReferenceConstructor() {
    _util.assert(referenceConstructor, 'Reference.ts has not been loaded');
    return referenceConstructor;
}
/**
 * Static tracker for next query tag.
 */ let syncTreeNextQueryTag_ = 1;
/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */ class SyncTree {
    /**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */ constructor(listenProvider_){
        this.listenProvider_ = listenProvider_;
        /**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */ this.syncPointTree_ = new ImmutableTree(null);
        /**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */ this.pendingWriteTree_ = newWriteTree();
        this.tagToQueryMap = new Map();
        this.queryToTagMap = new Map();
    }
}
/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */ function syncTreeApplyUserOverwrite(syncTree, path6, newData, writeId, visible) {
    // Record pending write.
    writeTreeAddOverwrite(syncTree.pendingWriteTree_, path6, newData, writeId, visible);
    if (!visible) return [];
    else return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path6, newData));
}
/**
 * Apply the data from a user-generated update() call
 *
 * @returns Events to raise.
 */ function syncTreeApplyUserMerge(syncTree, path6, changedChildren, writeId) {
    // Record pending merge.
    writeTreeAddMerge(syncTree.pendingWriteTree_, path6, changedChildren, writeId);
    const changeTree = ImmutableTree.fromObject(changedChildren);
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceUser(), path6, changeTree));
}
/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */ function syncTreeAckUserWrite(syncTree, writeId, revert1 = false) {
    const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
    const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
    if (!needToReevaluate) return [];
    else {
        let affectedTree1 = new ImmutableTree(null);
        if (write.snap != null) // overwrite
        affectedTree1 = affectedTree1.set(newEmptyPath(), true);
        else each(write.children, (pathString)=>{
            affectedTree1 = affectedTree1.set(new Path(pathString), true);
        });
        return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree1, revert1));
    }
}
/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */ function syncTreeApplyServerOverwrite(syncTree, path6, newData) {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path6, newData));
}
/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */ function syncTreeApplyServerMerge(syncTree, path6, changedChildren) {
    const changeTree = ImmutableTree.fromObject(changedChildren);
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path6, changeTree));
}
/**
 * Apply a listen complete for a query
 *
 * @returns Events to raise.
 */ function syncTreeApplyListenComplete(syncTree, path6) {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new ListenComplete(newOperationSourceServer(), path6));
}
/**
 * Apply a listen complete for a tagged query
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedListenComplete(syncTree, path6, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path6);
        const op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Remove event callback(s).
 *
 * If query is the default query, we'll check all queries for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
 *
 * @param eventRegistration - If null, all callbacks are removed.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */ function syncTreeRemoveEventRegistration(syncTree, query, eventRegistration, cancelError) {
    // Find the syncPoint first. Then deal with whether or not it has matching listeners
    const path6 = query._path;
    const maybeSyncPoint = syncTree.syncPointTree_.get(path6);
    let cancelEvents = [];
    // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
    // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
    // not loadsAllData().
    if (maybeSyncPoint && (query._queryIdentifier === 'default' || syncPointViewExistsForQuery(maybeSyncPoint, query))) {
        const removedAndEvents = syncPointRemoveEventRegistration(maybeSyncPoint, query, eventRegistration, cancelError);
        if (syncPointIsEmpty(maybeSyncPoint)) syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path6);
        const removed = removedAndEvents.removed;
        cancelEvents = removedAndEvents.events;
        // We may have just removed one of many listeners and can short-circuit this whole process
        // We may also not have removed a default listener, in which case all of the descendant listeners should already be
        // properly set up.
        //
        // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
        // queryId === 'default'
        const removingDefault = -1 !== removed.findIndex((query1)=>{
            return query1._queryParams.loadsAllData();
        });
        const covered = syncTree.syncPointTree_.findOnPath(path6, (relativePath, parentSyncPoint)=>syncPointHasCompleteView(parentSyncPoint)
        );
        if (removingDefault && !covered) {
            const subtree = syncTree.syncPointTree_.subtree(path6);
            // There are potentially child listeners. Determine what if any listens we need to send before executing the
            // removal
            if (!subtree.isEmpty()) {
                // We need to fold over our subtree and collect the listeners to send
                const newViews = syncTreeCollectDistinctViewsForSubTree_(subtree);
                // Ok, we've collected all the listens we need. Set them up.
                for(let i1 = 0; i1 < newViews.length; ++i1){
                    const view = newViews[i1], newQuery = view.query;
                    const listener = syncTreeCreateListenerForView_(syncTree, view);
                    syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery), syncTreeTagForQuery_(syncTree, newQuery), listener.hashFn, listener.onComplete);
                }
            }
        }
        // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
        // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
        // Also, note that if we have a cancelError, it's already been removed at the provider level.
        if (!covered && removed.length > 0 && !cancelError) {
            // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
            // default. Otherwise, we need to iterate through and cancel each individual query
            if (removingDefault) {
                // We don't tag default listeners
                const defaultTag = null;
                syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query), defaultTag);
            } else removed.forEach((queryToRemove)=>{
                const tagToRemove = syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));
                syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove), tagToRemove);
            });
        }
        // Now, clear all of the tags we're tracking for the removed listens
        syncTreeRemoveTags_(syncTree, removed);
    }
    return cancelEvents;
}
/**
 * This function was added to support non-listener queries,
 * specifically for use in repoGetValue. It sets up all the same
 * local cache data-structures (SyncPoint + View) that are
 * needed for listeners without installing an event registration.
 * If `query` is not `loadsAllData`, it will also provision a tag for
 * the query so that query results can be merged into the sync
 * tree using existing logic for tagged listener queries.
 *
 * @param syncTree - Synctree to add the query to.
 * @param query - Query to register
 * @returns tag as a string if query is not a default query, null if query is not.
 */ function syncTreeRegisterQuery(syncTree, query) {
    const { syncPoint , serverCache , writesCache , serverCacheComplete  } = syncTreeRegisterSyncPoint(query, syncTree);
    const view = syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
    if (!syncPoint.views.has(query._queryIdentifier)) syncPoint.views.set(query._queryIdentifier, view);
    if (!query._queryParams.loadsAllData()) return syncTreeTagForQuery_(syncTree, query);
    return null;
}
/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedQueryOverwrite(syncTree, path6, snap1, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey != null) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path6);
        const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap1);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // Query must have been removed already
    return [];
}
/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedQueryMerge(syncTree, path6, changedChildren, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path6);
        const changeTree = ImmutableTree.fromObject(changedChildren);
        const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Creates a new syncpoint for a query and creates a tag if the view doesn't exist.
 * Extracted from addEventRegistration to allow `repoGetValue` to properly set up the SyncTree
 * without actually listening on a query.
 */ function syncTreeRegisterSyncPoint(query, syncTree) {
    const path6 = query._path;
    let serverCache = null;
    let foundAncestorDefaultView = false;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path6, (pathToSyncPoint, sp)=>{
        const relativePath = newRelativePath(pathToSyncPoint, path6);
        serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
        foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(sp);
    });
    let syncPoint = syncTree.syncPointTree_.get(path6);
    if (!syncPoint) {
        syncPoint = new SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path6, syncPoint);
    } else {
        foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(syncPoint);
        serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let serverCacheComplete;
    if (serverCache != null) serverCacheComplete = true;
    else {
        serverCacheComplete = false;
        serverCache = ChildrenNode.EMPTY_NODE;
        const subtree = syncTree.syncPointTree_.subtree(path6);
        subtree.foreachChild((childName, childSyncPoint)=>{
            const completeCache = syncPointGetCompleteServerCache(childSyncPoint, newEmptyPath());
            if (completeCache) serverCache = serverCache.updateImmediateChild(childName, completeCache);
        });
    }
    const viewAlreadyExists = syncPointViewExistsForQuery(syncPoint, query);
    if (!viewAlreadyExists && !query._queryParams.loadsAllData()) {
        // We need to track a tag for this query
        const queryKey = syncTreeMakeQueryKey_(query);
        _util.assert(!syncTree.queryToTagMap.has(queryKey), 'View does not exist, but we have a tag');
        const tag = syncTreeGetNextQueryTag_();
        syncTree.queryToTagMap.set(queryKey, tag);
        syncTree.tagToQueryMap.set(tag, queryKey);
    }
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, path6);
    return {
        syncPoint,
        writesCache,
        serverCache,
        serverCacheComplete,
        foundAncestorDefaultView,
        viewAlreadyExists
    };
}
/**
 * Add an event callback for the specified query.
 *
 * @returns Events to raise.
 */ function syncTreeAddEventRegistration(syncTree, query, eventRegistration) {
    const { syncPoint , serverCache , writesCache , serverCacheComplete , viewAlreadyExists , foundAncestorDefaultView  } = syncTreeRegisterSyncPoint(query, syncTree);
    let events = syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete);
    if (!viewAlreadyExists && !foundAncestorDefaultView) {
        const view = syncPointViewForQuery(syncPoint, query);
        events = events.concat(syncTreeSetupListener_(syncTree, query, view));
    }
    return events;
}
/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */ function syncTreeCalcCompleteEventCache(syncTree, path6, writeIdsToExclude) {
    const includeHiddenSets = true;
    const writeTree = syncTree.pendingWriteTree_;
    const serverCache = syncTree.syncPointTree_.findOnPath(path6, (pathSoFar, syncPoint)=>{
        const relativePath = newRelativePath(pathSoFar, path6);
        const serverCache1 = syncPointGetCompleteServerCache(syncPoint, relativePath);
        if (serverCache1) return serverCache1;
    });
    return writeTreeCalcCompleteEventCache(writeTree, path6, serverCache, writeIdsToExclude, includeHiddenSets);
}
function syncTreeGetServerValue(syncTree, query) {
    const path6 = query._path;
    let serverCache = null;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path6, (pathToSyncPoint, sp)=>{
        const relativePath = newRelativePath(pathToSyncPoint, path6);
        serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
    });
    let syncPoint = syncTree.syncPointTree_.get(path6);
    if (!syncPoint) {
        syncPoint = new SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path6, syncPoint);
    } else serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    const serverCacheComplete = serverCache != null;
    const serverCacheNode = serverCacheComplete ? new CacheNode(serverCache, true, false) : null;
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, query._path);
    const view = syncPointGetView(syncPoint, query, writesCache, serverCacheComplete ? serverCacheNode.getNode() : ChildrenNode.EMPTY_NODE, serverCacheComplete);
    return viewGetCompleteNode(view);
}
/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */ function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
    return syncTreeApplyOperationHelper_(operation, syncTree.syncPointTree_, /*serverCache=*/ null, writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath()));
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
    if (pathIsEmpty(operation.path)) return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
    else {
        const syncPoint = syncPointTree.get(newEmptyPath());
        // If we don't have cached server data, see if we can get it from this SyncPoint.
        if (serverCache == null && syncPoint != null) serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
        let events = [];
        const childName = pathGetFront(operation.path);
        const childOperation = operation.operationForChild(childName);
        const childTree = syncPointTree.children.get(childName);
        if (childTree && childOperation) {
            const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            const childWritesCache = writeTreeRefChild(writesCache, childName);
            events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
        }
        if (syncPoint) events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
        return events;
    }
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
    const syncPoint = syncPointTree.get(newEmptyPath());
    // If we don't have cached server data, see if we can get it from this SyncPoint.
    if (serverCache == null && syncPoint != null) serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    let events = [];
    syncPointTree.children.inorderTraversal((childName, childTree)=>{
        const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
        const childWritesCache = writeTreeRefChild(writesCache, childName);
        const childOperation = operation.operationForChild(childName);
        if (childOperation) events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    });
    if (syncPoint) events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    return events;
}
function syncTreeCreateListenerForView_(syncTree, view) {
    const query = view.query;
    const tag = syncTreeTagForQuery_(syncTree, query);
    return {
        hashFn: ()=>{
            const cache = viewGetServerCache(view) || ChildrenNode.EMPTY_NODE;
            return cache.hash();
        },
        onComplete: (status)=>{
            if (status === 'ok') {
                if (tag) return syncTreeApplyTaggedListenComplete(syncTree, query._path, tag);
                else return syncTreeApplyListenComplete(syncTree, query._path);
            } else {
                // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                const error1 = errorForServerCode(status, query);
                return syncTreeRemoveEventRegistration(syncTree, query, /*eventRegistration*/ null, error1);
            }
        }
    };
}
/**
 * Return the tag associated with the given query.
 */ function syncTreeTagForQuery_(syncTree, query) {
    const queryKey = syncTreeMakeQueryKey_(query);
    return syncTree.queryToTagMap.get(queryKey);
}
/**
 * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
 */ function syncTreeMakeQueryKey_(query) {
    return query._path.toString() + '$' + query._queryIdentifier;
}
/**
 * Return the query associated with the given tag, if we have one
 */ function syncTreeQueryKeyForTag_(syncTree, tag) {
    return syncTree.tagToQueryMap.get(tag);
}
/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */ function syncTreeParseQueryKey_(queryKey) {
    const splitIndex = queryKey.indexOf('$');
    _util.assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
    return {
        queryId: queryKey.substr(splitIndex + 1),
        path: new Path(queryKey.substr(0, splitIndex))
    };
}
/**
 * A helper method to apply tagged operations
 */ function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
    const syncPoint = syncTree.syncPointTree_.get(queryPath);
    _util.assert(syncPoint, "Missing sync point for query tag that we're tracking");
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
    return syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
/**
 * This collapses multiple unfiltered views into a single view, since we only need a single
 * listener for them.
 */ function syncTreeCollectDistinctViewsForSubTree_(subtree) {
    return subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
        if (maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
            const completeView = syncPointGetCompleteView(maybeChildSyncPoint);
            return [
                completeView
            ];
        } else {
            // No complete view here, flatten any deeper listens into an array
            let views = [];
            if (maybeChildSyncPoint) views = syncPointGetQueryViews(maybeChildSyncPoint);
            each(childMap, (_key, childViews)=>{
                views = views.concat(childViews);
            });
            return views;
        }
    });
}
/**
 * Normalizes a query to a query we send the server for listening
 *
 * @returns The normalized query
 */ function syncTreeQueryForListening_(query) {
    if (query._queryParams.loadsAllData() && !query._queryParams.isDefault()) // We treat queries that load all data as default queries
    // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
    // from Query
    return new (syncTreeGetReferenceConstructor())(query._repo, query._path);
    else return query;
}
function syncTreeRemoveTags_(syncTree, queries) {
    for(let j = 0; j < queries.length; ++j){
        const removedQuery = queries[j];
        if (!removedQuery._queryParams.loadsAllData()) {
            // We should have a tag for this
            const removedQueryKey = syncTreeMakeQueryKey_(removedQuery);
            const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
            syncTree.queryToTagMap.delete(removedQueryKey);
            syncTree.tagToQueryMap.delete(removedQueryTag);
        }
    }
}
/**
 * Static accessor for query tags.
 */ function syncTreeGetNextQueryTag_() {
    return syncTreeNextQueryTag_++;
}
/**
 * For a given new listen, manage the de-duplication of outstanding subscriptions.
 *
 * @returns This method can return events to support synchronous data sources
 */ function syncTreeSetupListener_(syncTree, query, view) {
    const path6 = query._path;
    const tag = syncTreeTagForQuery_(syncTree, query);
    const listener = syncTreeCreateListenerForView_(syncTree, view);
    const events = syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query), tag, listener.hashFn, listener.onComplete);
    const subtree = syncTree.syncPointTree_.subtree(path6);
    // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
    // may need to shadow other listens as well.
    if (tag) _util.assert(!syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        // Shadow everything at or below this location, this is a default listener.
        const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
            if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) return [
                syncPointGetCompleteView(maybeChildSyncPoint).query
            ];
            else {
                // No default listener here, flatten any deeper queries into an array
                let queries = [];
                if (maybeChildSyncPoint) queries = queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map((view1)=>view1.query
                ));
                each(childMap, (_key, childQueries)=>{
                    queries = queries.concat(childQueries);
                });
                return queries;
            }
        });
        for(let i1 = 0; i1 < queriesToStop.length; ++i1){
            const queryToStop = queriesToStop[i1];
            syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop), syncTreeTagForQuery_(syncTree, queryToStop));
        }
    }
    return events;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ExistingValueProvider {
    constructor(node_1){
        this.node_ = node_1;
    }
    getImmediateChild(childName) {
        const child = this.node_.getImmediateChild(childName);
        return new ExistingValueProvider(child);
    }
    node() {
        return this.node_;
    }
}
class DeferredValueProvider {
    constructor(syncTree, path6){
        this.syncTree_ = syncTree;
        this.path_ = path6;
    }
    getImmediateChild(childName) {
        const childPath = pathChild(this.path_, childName);
        return new DeferredValueProvider(this.syncTree_, childPath);
    }
    node() {
        return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
    }
}
/**
 * Generate placeholders for deferred values.
 */ const generateWithValues = function(values) {
    values = values || {
    };
    values['timestamp'] = values['timestamp'] || new Date().getTime();
    return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */ const resolveDeferredLeafValue = function(value3, existingVal, serverValues) {
    if (!value3 || typeof value3 !== 'object') return value3;
    _util.assert('.sv' in value3, 'Unexpected leaf node or priority contents');
    if (typeof value3['.sv'] === 'string') return resolveScalarDeferredValue(value3['.sv'], existingVal, serverValues);
    else if (typeof value3['.sv'] === 'object') return resolveComplexDeferredValue(value3['.sv'], existingVal);
    else _util.assert(false, 'Unexpected server value: ' + JSON.stringify(value3, null, 2));
};
const resolveScalarDeferredValue = function(op, existing, serverValues) {
    switch(op){
        case 'timestamp':
            return serverValues['timestamp'];
        default:
            _util.assert(false, 'Unexpected server value: ' + op);
    }
};
const resolveComplexDeferredValue = function(op, existing, unused) {
    if (!op.hasOwnProperty('increment')) _util.assert(false, 'Unexpected server value: ' + JSON.stringify(op, null, 2));
    const delta = op['increment'];
    if (typeof delta !== 'number') _util.assert(false, 'Unexpected increment value: ' + delta);
    const existingNode = existing.node();
    _util.assert(existingNode !== null && typeof existingNode !== 'undefined', 'Expected ChildrenNode.EMPTY_NODE for nulls');
    // Incrementing a non-number sets the value to the incremented amount
    if (!existingNode.isLeafNode()) return delta;
    const leaf = existingNode;
    const existingVal = leaf.getValue();
    if (typeof existingVal !== 'number') return delta;
    // No need to do over/underflow arithmetic here because JS only handles floats under the covers
    return existingVal + delta;
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param path - path to which write is relative
 * @param node - new data written at path
 * @param syncTree - current data
 */ const resolveDeferredValueTree = function(path7, node3, syncTree1, serverValues) {
    return resolveDeferredValue(node3, new DeferredValueProvider(syncTree1, path7), serverValues);
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 */ const resolveDeferredValueSnapshot = function(node3, existing, serverValues) {
    return resolveDeferredValue(node3, new ExistingValueProvider(existing), serverValues);
};
function resolveDeferredValue(node3, existingVal, serverValues) {
    const rawPri = node3.getPriority().val();
    const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild('.priority'), serverValues);
    let newNode;
    if (node3.isLeafNode()) {
        const leafNode = node3;
        const value3 = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
        if (value3 !== leafNode.getValue() || priority !== leafNode.getPriority().val()) return new LeafNode(value3, nodeFromJSON(priority));
        else return node3;
    } else {
        const childrenNode = node3;
        newNode = childrenNode;
        if (priority !== childrenNode.getPriority().val()) newNode = newNode.updatePriority(new LeafNode(priority));
        childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
            if (newChildNode !== childNode) newNode = newNode.updateImmediateChild(childName, newChildNode);
        });
        return newNode;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */ class Tree {
    /**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */ constructor(name3 = '', parent = null, node3 = {
        children: {
        },
        childCount: 0
    }){
        this.name = name3;
        this.parent = parent;
        this.node = node3;
    }
}
/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */ function treeSubTree(tree, pathObj) {
    // TODO: Require pathObj to be Path?
    let path7 = pathObj instanceof Path ? pathObj : new Path(pathObj);
    let child = tree, next = pathGetFront(path7);
    while(next !== null){
        const childNode = _util.safeGet(child.node.children, next) || {
            children: {
            },
            childCount: 0
        };
        child = new Tree(next, child, childNode);
        path7 = pathPopFront(path7);
        next = pathGetFront(path7);
    }
    return child;
}
/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */ function treeGetValue(tree) {
    return tree.node.value;
}
/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */ function treeSetValue(tree, value3) {
    tree.node.value = value3;
    treeUpdateParents(tree);
}
/**
 * @returns Whether the tree has any children.
 */ function treeHasChildren(tree) {
    return tree.node.childCount > 0;
}
/**
 * @returns Whethe rthe tree is empty (no value or children).
 */ function treeIsEmpty(tree) {
    return treeGetValue(tree) === undefined && !treeHasChildren(tree);
}
/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */ function treeForEachChild(tree, action) {
    each(tree.node.children, (child, childTree)=>{
        action(new Tree(child, tree, childTree));
    });
}
/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */ function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
    if (includeSelf && !childrenFirst) action(tree);
    treeForEachChild(tree, (child)=>{
        treeForEachDescendant(child, action, true, childrenFirst);
    });
    if (includeSelf && childrenFirst) action(tree);
}
/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */ function treeForEachAncestor(tree, action, includeSelf) {
    let node4 = includeSelf ? tree : tree.parent;
    while(node4 !== null){
        if (action(node4)) return true;
        node4 = node4.parent;
    }
    return false;
}
/**
 * @returns The path of this tree node, as a Path.
 */ function treeGetPath(tree) {
    return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + '/' + tree.name);
}
/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */ function treeUpdateParents(tree) {
    if (tree.parent !== null) treeUpdateChild(tree.parent, tree.name, tree);
}
/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */ function treeUpdateChild(tree, childName, child) {
    const childEmpty = treeIsEmpty(child);
    const childExists = _util.contains(tree.node.children, childName);
    if (childEmpty && childExists) {
        delete tree.node.children[childName];
        tree.node.childCount--;
        treeUpdateParents(tree);
    } else if (!childEmpty && !childExists) {
        tree.node.children[childName] = child.node;
        tree.node.childCount++;
        treeUpdateParents(tree);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * True for invalid Firebase keys
 */ const INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 */ const INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 */ const MAX_LEAF_SIZE_ = 10485760;
const isValidKey = function(key2) {
    return typeof key2 === 'string' && key2.length !== 0 && !INVALID_KEY_REGEX_.test(key2);
};
const isValidPathString = function(pathString) {
    return typeof pathString === 'string' && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};
const isValidRootPathString = function(pathString) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    return isValidPathString(pathString);
};
const isValidPriority = function(priority) {
    return priority === null || typeof priority === 'string' || typeof priority === 'number' && !isInvalidJSONNumber(priority) || priority && typeof priority === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _util.contains(priority, '.sv');
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 */ const validateFirebaseDataArg = function(fnName, value3, path7, optional) {
    if (optional && value3 === undefined) return;
    validateFirebaseData(_util.errorPrefix(fnName, 'value'), value3, path7);
};
/**
 * Validate a data object client-side before sending to server.
 */ const validateFirebaseData = function(errorPrefix, data, path_) {
    const path7 = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;
    if (data === undefined) throw new Error(errorPrefix + 'contains undefined ' + validationPathToErrorString(path7));
    if (typeof data === 'function') throw new Error(errorPrefix + 'contains a function ' + validationPathToErrorString(path7) + ' with contents = ' + data.toString());
    if (isInvalidJSONNumber(data)) throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + validationPathToErrorString(path7));
    // Check max leaf size, but try to avoid the utf8 conversion if we can.
    if (typeof data === 'string' && data.length > MAX_LEAF_SIZE_ / 3 && _util.stringLength(data) > MAX_LEAF_SIZE_) throw new Error(errorPrefix + 'contains a string greater than ' + MAX_LEAF_SIZE_ + ' utf8 bytes ' + validationPathToErrorString(path7) + " ('" + data.substring(0, 50) + "...')");
    // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
    // to save extra walking of large objects.
    if (data && typeof data === 'object') {
        let hasDotValue = false;
        let hasActualChild = false;
        each(data, (key2, value3)=>{
            if (key2 === '.value') hasDotValue = true;
            else if (key2 !== '.priority' && key2 !== '.sv') {
                hasActualChild = true;
                if (!isValidKey(key2)) throw new Error(errorPrefix + ' contains an invalid key (' + key2 + ') ' + validationPathToErrorString(path7) + '.  Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
            validationPathPush(path7, key2);
            validateFirebaseData(errorPrefix, value3, path7);
            validationPathPop(path7);
        });
        if (hasDotValue && hasActualChild) throw new Error(errorPrefix + ' contains ".value" child ' + validationPathToErrorString(path7) + ' in addition to actual children.');
    }
};
/**
 * Pre-validate paths passed in the firebase function.
 */ const validateFirebaseMergePaths = function(errorPrefix, mergePaths) {
    let i1, curPath;
    for(i1 = 0; i1 < mergePaths.length; i1++){
        curPath = mergePaths[i1];
        const keys = pathSlice(curPath);
        for(let j = 0; j < keys.length; j++){
            if (keys[j] === '.priority' && j === keys.length - 1) ;
            else if (!isValidKey(keys[j])) throw new Error(errorPrefix + 'contains an invalid key (' + keys[j] + ') in path ' + curPath.toString() + '. Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
    }
    // Check that update keys are not descendants of each other.
    // We rely on the property that sorting guarantees that ancestors come
    // right before descendants.
    mergePaths.sort(pathCompare);
    let prevPath = null;
    for(i1 = 0; i1 < mergePaths.length; i1++){
        curPath = mergePaths[i1];
        if (prevPath !== null && pathContains(prevPath, curPath)) throw new Error(errorPrefix + 'contains a path ' + prevPath.toString() + ' that is ancestor of another path ' + curPath.toString());
        prevPath = curPath;
    }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 */ const validateFirebaseMergeDataArg = function(fnName, data, path7, optional) {
    if (optional && data === undefined) return;
    const errorPrefix$1 = _util.errorPrefix(fnName, 'values');
    if (!(data && typeof data === 'object') || Array.isArray(data)) throw new Error(errorPrefix$1 + ' must be an object containing the children to replace.');
    const mergePaths = [];
    each(data, (key2, value3)=>{
        const curPath = new Path(key2);
        validateFirebaseData(errorPrefix$1, value3, pathChild(path7, curPath));
        if (pathGetBack(curPath) === '.priority') {
            if (!isValidPriority(value3)) throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + 'Firebase priority (a string, finite number, server value, or null).');
        }
        mergePaths.push(curPath);
    });
    validateFirebaseMergePaths(errorPrefix$1, mergePaths);
};
const validatePriority = function(fnName, priority, optional) {
    if (optional && priority === undefined) return;
    if (isInvalidJSONNumber(priority)) throw new Error(_util.errorPrefix(fnName, 'priority') + 'is ' + priority.toString() + ', but must be a valid Firebase priority (a string, finite number, ' + 'server value, or null).');
    // Special case to allow importing data with a .sv.
    if (!isValidPriority(priority)) throw new Error(_util.errorPrefix(fnName, 'priority') + 'must be a valid Firebase priority ' + '(a string, finite number, server value, or null).');
};
const validateKey = function(fnName, argumentName, key2, optional) {
    if (optional && key2 === undefined) return;
    if (!isValidKey(key2)) throw new Error(_util.errorPrefix(fnName, argumentName) + 'was an invalid key = "' + key2 + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
};
/**
 * @internal
 */ const validatePathString = function(fnName, argumentName, pathString, optional) {
    if (optional && pathString === undefined) return;
    if (!isValidPathString(pathString)) throw new Error(_util.errorPrefix(fnName, argumentName) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
};
const validateRootPathString = function(fnName, argumentName, pathString, optional) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    validatePathString(fnName, argumentName, pathString, optional);
};
/**
 * @internal
 */ const validateWritablePath = function(fnName, path7) {
    if (pathGetFront(path7) === '.info') throw new Error(fnName + " failed = Can't modify data under /.info/");
};
const validateUrl = function(fnName, parsedUrl) {
    // TODO = Validate server better.
    const pathString = parsedUrl.path.toString();
    if (!(typeof parsedUrl.repoInfo.host === 'string') || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(':')[0] !== 'localhost' || pathString.length !== 0 && !isValidRootPathString(pathString)) throw new Error(_util.errorPrefix(fnName, 'url') + 'must be a valid firebase URL and ' + 'the path can\'t contain ".", "#", "$", "[", or "]".');
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */ class EventQueue {
    constructor(){
        this.eventLists_ = [];
        /**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */ this.recursionDepth_ = 0;
    }
}
/**
 * @param eventDataList - The new events to queue.
 */ function eventQueueQueueEvents(eventQueue, eventDataList) {
    // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
    let currList = null;
    for(let i1 = 0; i1 < eventDataList.length; i1++){
        const data = eventDataList[i1];
        const path7 = data.getPath();
        if (currList !== null && !pathEquals(path7, currList.path)) {
            eventQueue.eventLists_.push(currList);
            currList = null;
        }
        if (currList === null) currList = {
            events: [],
            path: path7
        };
        currList.events.push(data);
    }
    if (currList) eventQueue.eventLists_.push(currList);
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones)
 * for the specified path.
 *
 * It is assumed that the new events are all for the specified path.
 *
 * @param path - The path to raise events for.
 * @param eventDataList - The new events to raise.
 */ function eventQueueRaiseEventsAtPath(eventQueue, path7, eventDataList) {
    eventQueueQueueEvents(eventQueue, eventDataList);
    eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>pathEquals(eventPath, path7)
    );
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */ function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
    eventQueueQueueEvents(eventQueue, eventDataList);
    eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath)
    );
}
function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
    eventQueue.recursionDepth_++;
    let sentAll = true;
    for(let i1 = 0; i1 < eventQueue.eventLists_.length; i1++){
        const eventList = eventQueue.eventLists_[i1];
        if (eventList) {
            const eventPath = eventList.path;
            if (predicate(eventPath)) {
                eventListRaise(eventQueue.eventLists_[i1]);
                eventQueue.eventLists_[i1] = null;
            } else sentAll = false;
        }
    }
    if (sentAll) eventQueue.eventLists_ = [];
    eventQueue.recursionDepth_--;
}
/**
 * Iterates through the list and raises each event
 */ function eventListRaise(eventList) {
    for(let i1 = 0; i1 < eventList.events.length; i1++){
        const eventData = eventList.events[i1];
        if (eventData !== null) {
            eventList.events[i1] = null;
            const eventFn = eventData.getEventRunner();
            if (logger) log('event: ' + eventData.toString());
            exceptionGuard(eventFn);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const INTERRUPT_REASON = 'repo_interrupt';
/**
 * If a transaction does not succeed after 25 retries, we abort it. Among other
 * things this ensure that if there's ever a bug causing a mismatch between
 * client / server hashes for some data, we won't retry indefinitely.
 */ const MAX_TRANSACTION_RETRIES = 25;
/**
 * A connection to a single data repository.
 */ class Repo {
    constructor(repoInfo_3, forceRestClient_, authTokenProvider_2, appCheckProvider_){
        this.repoInfo_ = repoInfo_3;
        this.forceRestClient_ = forceRestClient_;
        this.authTokenProvider_ = authTokenProvider_2;
        this.appCheckProvider_ = appCheckProvider_;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        /** A list of data pieces and paths to be set when this client disconnects. */ this.onDisconnect_ = newSparseSnapshotTree();
        /** Stores queues of outstanding transactions for Firebase locations. */ this.transactionQueueTree_ = new Tree();
        // TODO: This should be @private but it's used by test_access.js and internal.js
        this.persistentConnection_ = null;
        // This key is intentionally not updated if RepoInfo is later changed or replaced
        this.key = this.repoInfo_.toURLString();
    }
    /**
     * @returns The URL corresponding to the root of this Firebase.
     */ toString() {
        return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
    }
}
function repoStart(repo, appId, authOverride) {
    repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
    if (repo.forceRestClient_ || beingCrawled()) {
        repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag)=>{
            repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, repo.authTokenProvider_, repo.appCheckProvider_);
        // Minor hack: Fire onConnect immediately, since there's no actual connection.
        setTimeout(()=>repoOnConnectStatus(repo, /* connectStatus= */ true)
        , 0);
    } else {
        // Validate authOverride
        if (typeof authOverride !== 'undefined' && authOverride !== null) {
            if (typeof authOverride !== 'object') throw new Error('Only objects are supported for option databaseAuthVariableOverride');
            try {
                _util.stringify(authOverride);
            } catch (e) {
                throw new Error('Invalid authOverride provided: ' + e);
            }
        }
        repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag)=>{
            repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, (connectStatus)=>{
            repoOnConnectStatus(repo, connectStatus);
        }, (updates)=>{
            repoOnServerInfoUpdate(repo, updates);
        }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
        repo.server_ = repo.persistentConnection_;
    }
    repo.authTokenProvider_.addTokenChangeListener((token)=>{
        repo.server_.refreshAuthToken(token);
    });
    repo.appCheckProvider_.addTokenChangeListener((result)=>{
        repo.server_.refreshAppCheckToken(result.token);
    });
    // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
    // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
    repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, ()=>new StatsReporter(repo.stats_, repo.server_)
    );
    // Used for .info.
    repo.infoData_ = new SnapshotHolder();
    repo.infoSyncTree_ = new SyncTree({
        startListening: (query, tag, currentHashFn, onComplete)=>{
            let infoEvents = [];
            const node4 = repo.infoData_.getNode(query._path);
            // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
            // on initial data...
            if (!node4.isEmpty()) {
                infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node4);
                setTimeout(()=>{
                    onComplete('ok');
                }, 0);
            }
            return infoEvents;
        },
        stopListening: ()=>{
        }
    });
    repoUpdateInfo(repo, 'connected', false);
    repo.serverSyncTree_ = new SyncTree({
        startListening: (query, tag, currentHashFn, onComplete)=>{
            repo.server_.listen(query, currentHashFn, tag, (status, data)=>{
                const events = onComplete(status, data);
                eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
            });
            // No synchronous events for network-backed sync trees
            return [];
        },
        stopListening: (query, tag)=>{
            repo.server_.unlisten(query, tag);
        }
    });
}
/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */ function repoServerTime(repo) {
    const offsetNode = repo.infoData_.getNode(new Path('.info/serverTimeOffset'));
    const offset = offsetNode.val() || 0;
    return new Date().getTime() + offset;
}
/**
 * Generate ServerValues using some variables from the repo object.
 */ function repoGenerateServerValues(repo) {
    return generateWithValues({
        timestamp: repoServerTime(repo)
    });
}
/**
 * Called by realtime when we get new messages from the server.
 */ function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
    // For testing.
    repo.dataUpdateCount++;
    const path7 = new Path(pathString);
    data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
    let events = [];
    if (tag) {
        if (isMerge) {
            const taggedChildren = _util.map(data, (raw)=>nodeFromJSON(raw)
            );
            events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path7, taggedChildren, tag);
        } else {
            const taggedSnap = nodeFromJSON(data);
            events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path7, taggedSnap, tag);
        }
    } else if (isMerge) {
        const changedChildren = _util.map(data, (raw)=>nodeFromJSON(raw)
        );
        events = syncTreeApplyServerMerge(repo.serverSyncTree_, path7, changedChildren);
    } else {
        const snap1 = nodeFromJSON(data);
        events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path7, snap1);
    }
    let affectedPath = path7;
    if (events.length > 0) // Since we have a listener outstanding for each transaction, receiving any events
    // is a proxy for some change having occurred.
    affectedPath = repoRerunTransactions(repo, path7);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function repoOnConnectStatus(repo, connectStatus) {
    repoUpdateInfo(repo, 'connected', connectStatus);
    if (connectStatus === false) repoRunOnDisconnectEvents(repo);
}
function repoOnServerInfoUpdate(repo, updates) {
    each(updates, (key2, value3)=>{
        repoUpdateInfo(repo, key2, value3);
    });
}
function repoUpdateInfo(repo, pathString, value3) {
    const path7 = new Path('/.info/' + pathString);
    const newNode = nodeFromJSON(value3);
    repo.infoData_.updateSnapshot(path7, newNode);
    const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path7, newNode);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, events);
}
function repoGetNextWriteId(repo) {
    return repo.nextWriteId_++;
}
/**
 * The purpose of `getValue` is to return the latest known value
 * satisfying `query`.
 *
 * This method will first check for in-memory cached values
 * belonging to active listeners. If they are found, such values
 * are considered to be the most up-to-date.
 *
 * If the client is not connected, this method will try to
 * establish a connection and request the value for `query`. If
 * the client is not able to retrieve the query result, it reports
 * an error.
 *
 * @param query - The query to surface a value for.
 */ function repoGetValue(repo, query) {
    // Only active queries are cached. There is no persisted cache.
    const cached = syncTreeGetServerValue(repo.serverSyncTree_, query);
    if (cached != null) return Promise.resolve(cached);
    return repo.server_.get(query).then((payload)=>{
        const node4 = nodeFromJSON(payload).withIndex(query._queryParams.getIndex());
        // if this is a filtered query, then overwrite at path
        if (query._queryParams.loadsAllData()) syncTreeApplyServerOverwrite(repo.serverSyncTree_, query._path, node4);
        else {
            // Simulate `syncTreeAddEventRegistration` without events/listener setup.
            // We do this (along with the syncTreeRemoveEventRegistration` below) so that
            // `repoGetValue` results have the same cache effects as initial listener(s)
            // updates.
            const tag = syncTreeRegisterQuery(repo.serverSyncTree_, query);
            syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, query._path, node4, tag);
        // Call `syncTreeRemoveEventRegistration` with a null event registration, since there is none.
        // Note: The below code essentially unregisters the query and cleans up any views/syncpoints temporarily created above.
        }
        const cancels = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, null);
        if (cancels.length > 0) repoLog(repo, 'unexpected cancel events in repoGetValue');
        return node4;
    }, (err)=>{
        repoLog(repo, 'get for query ' + _util.stringify(query) + ' failed: ' + err);
        return Promise.reject(new Error(err));
    });
}
function repoSetWithPriority(repo, path7, newVal, newPriority, onComplete) {
    repoLog(repo, 'set', {
        path: path7.toString(),
        value: newVal,
        priority: newPriority
    });
    // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
    // (b) store unresolved paths on JSON parse
    const serverValues = repoGenerateServerValues(repo);
    const newNodeUnresolved = nodeFromJSON(newVal, newPriority);
    const existing = syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path7);
    const newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
    const writeId = repoGetNextWriteId(repo);
    const events = syncTreeApplyUserOverwrite(repo.serverSyncTree_, path7, newNode, writeId, true);
    eventQueueQueueEvents(repo.eventQueue_, events);
    repo.server_.put(path7.toString(), newNodeUnresolved.val(/*export=*/ true), (status, errorReason)=>{
        const success = status === 'ok';
        if (!success) warn('set at ' + path7 + ' failed: ' + status);
        const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, clearEvents);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
    const affectedPath = repoAbortTransactions(repo, path7);
    repoRerunTransactions(repo, affectedPath);
    // We queued the events above, so just flush the queue here
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, []);
}
function repoUpdate(repo, path7, childrenToMerge, onComplete) {
    repoLog(repo, 'update', {
        path: path7.toString(),
        value: childrenToMerge
    });
    // Start with our existing data and merge each child into it.
    let empty = true;
    const serverValues = repoGenerateServerValues(repo);
    const changedChildren = {
    };
    each(childrenToMerge, (changedKey, changedValue)=>{
        empty = false;
        changedChildren[changedKey] = resolveDeferredValueTree(pathChild(path7, changedKey), nodeFromJSON(changedValue), repo.serverSyncTree_, serverValues);
    });
    if (!empty) {
        const writeId = repoGetNextWriteId(repo);
        const events = syncTreeApplyUserMerge(repo.serverSyncTree_, path7, changedChildren, writeId);
        eventQueueQueueEvents(repo.eventQueue_, events);
        repo.server_.merge(path7.toString(), childrenToMerge, (status, errorReason)=>{
            const success = status === 'ok';
            if (!success) warn('update at ' + path7 + ' failed: ' + status);
            const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
            const affectedPath = clearEvents.length > 0 ? repoRerunTransactions(repo, path7) : path7;
            eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, clearEvents);
            repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
        });
        each(childrenToMerge, (changedPath)=>{
            const affectedPath = repoAbortTransactions(repo, pathChild(path7, changedPath));
            repoRerunTransactions(repo, affectedPath);
        });
        // We queued the events above, so just flush the queue here
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, []);
    } else {
        log("update() called with empty data.  Don't do anything.");
        repoCallOnCompleteCallback(repo, onComplete, 'ok', undefined);
    }
}
/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */ function repoRunOnDisconnectEvents(repo) {
    repoLog(repo, 'onDisconnectEvents');
    const serverValues = repoGenerateServerValues(repo);
    const resolvedOnDisconnectTree = newSparseSnapshotTree();
    sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path7, node4)=>{
        const resolved = resolveDeferredValueTree(path7, node4, repo.serverSyncTree_, serverValues);
        sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path7, resolved);
    });
    let events = [];
    sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path7, snap1)=>{
        events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path7, snap1));
        const affectedPath = repoAbortTransactions(repo, path7);
        repoRerunTransactions(repo, affectedPath);
    });
    repo.onDisconnect_ = newSparseSnapshotTree();
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
}
function repoOnDisconnectCancel(repo, path7, onComplete) {
    repo.server_.onDisconnectCancel(path7.toString(), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeForget(repo.onDisconnect_, path7);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectSet(repo, path7, value3, onComplete) {
    const newNode = nodeFromJSON(value3);
    repo.server_.onDisconnectPut(path7.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeRemember(repo.onDisconnect_, path7, newNode);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectSetWithPriority(repo, path7, value3, priority, onComplete) {
    const newNode = nodeFromJSON(value3, priority);
    repo.server_.onDisconnectPut(path7.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeRemember(repo.onDisconnect_, path7, newNode);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectUpdate(repo, path7, childrenToMerge, onComplete) {
    if (_util.isEmpty(childrenToMerge)) {
        log("onDisconnect().update() called with empty data.  Don't do anything.");
        repoCallOnCompleteCallback(repo, onComplete, 'ok', undefined);
        return;
    }
    repo.server_.onDisconnectMerge(path7.toString(), childrenToMerge, (status, errorReason)=>{
        if (status === 'ok') each(childrenToMerge, (childName, childNode)=>{
            const newChildNode = nodeFromJSON(childNode);
            sparseSnapshotTreeRemember(repo.onDisconnect_, pathChild(path7, childName), newChildNode);
        });
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoAddEventCallbackForQuery(repo, query, eventRegistration) {
    let events;
    if (pathGetFront(query._path) === '.info') events = syncTreeAddEventRegistration(repo.infoSyncTree_, query, eventRegistration);
    else events = syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration);
    eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoRemoveEventCallbackForQuery(repo, query, eventRegistration) {
    // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
    // a little bit by handling the return values anyways.
    let events;
    if (pathGetFront(query._path) === '.info') events = syncTreeRemoveEventRegistration(repo.infoSyncTree_, query, eventRegistration);
    else events = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration);
    eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoInterrupt(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.interrupt(INTERRUPT_REASON);
}
function repoResume(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.resume(INTERRUPT_REASON);
}
function repoLog(repo, ...varArgs) {
    let prefix = '';
    if (repo.persistentConnection_) prefix = repo.persistentConnection_.id + ':';
    log(prefix, ...varArgs);
}
function repoCallOnCompleteCallback(repo, callback, status, errorReason) {
    if (callback) exceptionGuard(()=>{
        if (status === 'ok') callback(null);
        else {
            const code = (status || 'error').toUpperCase();
            let message = code;
            if (errorReason) message += ': ' + errorReason;
            const error1 = new Error(message);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error1.code = code;
            callback(error1);
        }
    });
}
/**
 * Creates a new transaction, adds it to the transactions we're tracking, and
 * sends it to the server if possible.
 *
 * @param path - Path at which to do transaction.
 * @param transactionUpdate - Update callback.
 * @param onComplete - Completion callback.
 * @param unwatcher - Function that will be called when the transaction no longer
 * need data updates for `path`.
 * @param applyLocally - Whether or not to make intermediate results visible
 */ function repoStartTransaction(repo, path7, transactionUpdate, onComplete, unwatcher, applyLocally) {
    repoLog(repo, 'transaction on ' + path7);
    // Initialize transaction.
    const transaction = {
        path: path7,
        update: transactionUpdate,
        onComplete,
        // One of TransactionStatus enums.
        status: null,
        // Used when combining transactions at different locations to figure out
        // which one goes first.
        order: LUIDGenerator(),
        // Whether to raise local events for this transaction.
        applyLocally,
        // Count of how many times we've retried the transaction.
        retryCount: 0,
        // Function to call to clean up our .on() listener.
        unwatcher,
        // Stores why a transaction was aborted.
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
    };
    // Run transaction initially.
    const currentState = repoGetLatestState(repo, path7, undefined);
    transaction.currentInputSnapshot = currentState;
    const newVal = transaction.update(currentState.val());
    if (newVal === undefined) {
        // Abort transaction.
        transaction.unwatcher();
        transaction.currentOutputSnapshotRaw = null;
        transaction.currentOutputSnapshotResolved = null;
        if (transaction.onComplete) transaction.onComplete(null, false, transaction.currentInputSnapshot);
    } else {
        validateFirebaseData('transaction failed: Data returned ', newVal, transaction.path);
        // Mark as run and add to our queue.
        transaction.status = 0 /* RUN */ ;
        const queueNode = treeSubTree(repo.transactionQueueTree_, path7);
        const nodeQueue = treeGetValue(queueNode) || [];
        nodeQueue.push(transaction);
        treeSetValue(queueNode, nodeQueue);
        // Update visibleData and raise events
        // Note: We intentionally raise events after updating all of our
        // transaction state, since the user could start new transactions from the
        // event callbacks.
        let priorityForNode;
        if (typeof newVal === 'object' && newVal !== null && _util.contains(newVal, '.priority')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            priorityForNode = _util.safeGet(newVal, '.priority');
            _util.assert(isValidPriority(priorityForNode), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
        } else {
            const currentNode = syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path7) || ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
        }
        const serverValues = repoGenerateServerValues(repo);
        const newNodeUnresolved = nodeFromJSON(newVal, priorityForNode);
        const newNode = resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
        transaction.currentOutputSnapshotRaw = newNodeUnresolved;
        transaction.currentOutputSnapshotResolved = newNode;
        transaction.currentWriteId = repoGetNextWriteId(repo);
        const events = syncTreeApplyUserOverwrite(repo.serverSyncTree_, path7, newNode, transaction.currentWriteId, transaction.applyLocally);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, events);
        repoSendReadyTransactions(repo, repo.transactionQueueTree_);
    }
}
/**
 * @param excludeSets - A specific set to exclude
 */ function repoGetLatestState(repo, path7, excludeSets) {
    return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path7, excludeSets) || ChildrenNode.EMPTY_NODE;
}
/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */ function repoSendReadyTransactions(repo, node4 = repo.transactionQueueTree_) {
    // Before recursing, make sure any completed transactions are removed.
    if (!node4) repoPruneCompletedTransactionsBelowNode(repo, node4);
    if (treeGetValue(node4)) {
        const queue = repoBuildTransactionQueue(repo, node4);
        _util.assert(queue.length > 0, 'Sending zero length transaction queue');
        const allRun = queue.every((transaction)=>transaction.status === 0 /* RUN */ 
        );
        // If they're all run (and not sent), we can send them.  Else, we must wait.
        if (allRun) repoSendTransactionQueue(repo, treeGetPath(node4), queue);
    } else if (treeHasChildren(node4)) treeForEachChild(node4, (childNode)=>{
        repoSendReadyTransactions(repo, childNode);
    });
}
/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */ function repoSendTransactionQueue(repo, path7, queue) {
    // Mark transactions as sent and increment retry count!
    const setsToIgnore = queue.map((txn)=>{
        return txn.currentWriteId;
    });
    const latestState = repoGetLatestState(repo, path7, setsToIgnore);
    let snapToSend = latestState;
    const latestHash = latestState.hash();
    for(let i1 = 0; i1 < queue.length; i1++){
        const txn = queue[i1];
        _util.assert(txn.status === 0 /* RUN */ , 'tryToSendTransactionQueue_: items in queue should all be run.');
        txn.status = 1 /* SENT */ ;
        txn.retryCount++;
        const relativePath = newRelativePath(path7, txn.path);
        // If we've gotten to this point, the output snapshot must be defined.
        snapToSend = snapToSend.updateChild(relativePath /** @type {!Node} */ , txn.currentOutputSnapshotRaw);
    }
    const dataToSend = snapToSend.val(true);
    const pathToSend = path7;
    // Send the put.
    repo.server_.put(pathToSend.toString(), dataToSend, (status)=>{
        repoLog(repo, 'transaction put response', {
            path: pathToSend.toString(),
            status
        });
        let events = [];
        if (status === 'ok') {
            // Queue up the callbacks and fire them after cleaning up all of our
            // transaction state, since the callback could trigger more
            // transactions or sets.
            const callbacks = [];
            for(let i2 = 0; i2 < queue.length; i2++){
                queue[i2].status = 2 /* COMPLETED */ ;
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i2].currentWriteId));
                if (queue[i2].onComplete) // We never unset the output snapshot, and given that this
                // transaction is complete, it should be set
                callbacks.push(()=>queue[i2].onComplete(null, true, queue[i2].currentOutputSnapshotResolved)
                );
                queue[i2].unwatcher();
            }
            // Now remove the completed transactions.
            repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path7));
            // There may be pending transactions that we can now send.
            repoSendReadyTransactions(repo, repo.transactionQueueTree_);
            eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, events);
            // Finally, trigger onComplete callbacks.
            for(let i3 = 0; i3 < callbacks.length; i3++)exceptionGuard(callbacks[i3]);
        } else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === 'datastale') {
                for(let i2 = 0; i2 < queue.length; i2++)if (queue[i2].status === 3 /* SENT_NEEDS_ABORT */ ) queue[i2].status = 4 /* NEEDS_ABORT */ ;
                else queue[i2].status = 0 /* RUN */ ;
            } else {
                warn('transaction at ' + pathToSend.toString() + ' failed: ' + status);
                for(let i2 = 0; i2 < queue.length; i2++){
                    queue[i2].status = 4 /* NEEDS_ABORT */ ;
                    queue[i2].abortReason = status;
                }
            }
            repoRerunTransactions(repo, path7);
        }
    }, latestHash);
}
/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */ function repoRerunTransactions(repo, changedPath) {
    const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
    const path7 = treeGetPath(rootMostTransactionNode);
    const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
    repoRerunTransactionQueue(repo, queue, path7);
    return path7;
}
/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */ function repoRerunTransactionQueue(repo, queue, path7) {
    if (queue.length === 0) return; // Nothing to do!
    // Queue up the callbacks and fire them after cleaning up all of our
    // transaction state, since the callback could trigger more transactions or
    // sets.
    const callbacks = [];
    let events = [];
    // Ignore all of the sets we're going to re-run.
    const txnsToRerun = queue.filter((q)=>{
        return q.status === 0 /* RUN */ ;
    });
    const setsToIgnore = txnsToRerun.map((q)=>{
        return q.currentWriteId;
    });
    for(let i1 = 0; i1 < queue.length; i1++){
        const transaction = queue[i1];
        const relativePath = newRelativePath(path7, transaction.path);
        let abortTransaction = false, abortReason;
        _util.assert(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');
        if (transaction.status === 4 /* NEEDS_ABORT */ ) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        } else if (transaction.status === 0 /* RUN */ ) {
            if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
                abortTransaction = true;
                abortReason = 'maxretry';
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
            } else {
                // This code reruns a transaction
                const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
                transaction.currentInputSnapshot = currentNode;
                const newData = queue[i1].update(currentNode.val());
                if (newData !== undefined) {
                    validateFirebaseData('transaction failed: Data returned ', newData, transaction.path);
                    let newDataNode = nodeFromJSON(newData);
                    const hasExplicitPriority = typeof newData === 'object' && newData != null && _util.contains(newData, '.priority');
                    if (!hasExplicitPriority) // Keep the old priority if there wasn't a priority explicitly specified.
                    newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                    const oldWriteId = transaction.currentWriteId;
                    const serverValues = repoGenerateServerValues(repo);
                    const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
                    transaction.currentOutputSnapshotRaw = newDataNode;
                    transaction.currentOutputSnapshotResolved = newNodeResolved;
                    transaction.currentWriteId = repoGetNextWriteId(repo);
                    // Mutates setsToIgnore in place
                    setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                    events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                    events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
                } else {
                    abortTransaction = true;
                    abortReason = 'nodata';
                    events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
                }
            }
        }
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path7, events);
        events = [];
        if (abortTransaction) {
            // Abort.
            queue[i1].status = 2 /* COMPLETED */ ;
            // Removing a listener can trigger pruning which can muck with
            // mergedData/visibleData (as it prunes data). So defer the unwatcher
            // until we're done.
            (function(unwatcher) {
                setTimeout(unwatcher, Math.floor(0));
            })(queue[i1].unwatcher);
            if (queue[i1].onComplete) {
                if (abortReason === 'nodata') callbacks.push(()=>queue[i1].onComplete(null, false, queue[i1].currentInputSnapshot)
                );
                else callbacks.push(()=>queue[i1].onComplete(new Error(abortReason), false, null)
                );
            }
        }
    }
    // Clean up completed transactions.
    repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
    // Now fire callbacks, now that we're in a good, known state.
    for(let i2 = 0; i2 < callbacks.length; i2++)exceptionGuard(callbacks[i2]);
    // Try to send the transaction result to the server.
    repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */ function repoGetAncestorTransactionNode(repo, path7) {
    let front;
    // Start at the root and walk deeper into the tree towards path until we
    // find a node with pending transactions.
    let transactionNode = repo.transactionQueueTree_;
    front = pathGetFront(path7);
    while(front !== null && treeGetValue(transactionNode) === undefined){
        transactionNode = treeSubTree(transactionNode, front);
        path7 = pathPopFront(path7);
        front = pathGetFront(path7);
    }
    return transactionNode;
}
/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */ function repoBuildTransactionQueue(repo, transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    const transactionQueue = [];
    repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
    // Sort them by the order the transactions were created.
    transactionQueue.sort((a, b)=>a.order - b.order
    );
    return transactionQueue;
}
function repoAggregateTransactionQueuesForNode(repo, node4, queue) {
    const nodeQueue = treeGetValue(node4);
    if (nodeQueue) for(let i1 = 0; i1 < nodeQueue.length; i1++)queue.push(nodeQueue[i1]);
    treeForEachChild(node4, (child)=>{
        repoAggregateTransactionQueuesForNode(repo, child, queue);
    });
}
/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */ function repoPruneCompletedTransactionsBelowNode(repo, node4) {
    const queue = treeGetValue(node4);
    if (queue) {
        let to = 0;
        for(let from = 0; from < queue.length; from++)if (queue[from].status !== 2 /* COMPLETED */ ) {
            queue[to] = queue[from];
            to++;
        }
        queue.length = to;
        treeSetValue(node4, queue.length > 0 ? queue : undefined);
    }
    treeForEachChild(node4, (childNode)=>{
        repoPruneCompletedTransactionsBelowNode(repo, childNode);
    });
}
/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */ function repoAbortTransactions(repo, path7) {
    const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path7));
    const transactionNode = treeSubTree(repo.transactionQueueTree_, path7);
    treeForEachAncestor(transactionNode, (node4)=>{
        repoAbortTransactionsOnNode(repo, node4);
    });
    repoAbortTransactionsOnNode(repo, transactionNode);
    treeForEachDescendant(transactionNode, (node4)=>{
        repoAbortTransactionsOnNode(repo, node4);
    });
    return affectedPath;
}
/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */ function repoAbortTransactionsOnNode(repo, node4) {
    const queue = treeGetValue(node4);
    if (queue) {
        // Queue up the callbacks and fire them after cleaning up all of our
        // transaction state, since the callback could trigger more transactions
        // or sets.
        const callbacks = [];
        // Go through queue.  Any already-sent transactions must be marked for
        // abort, while the unsent ones can be immediately aborted and removed.
        let events = [];
        let lastSent = -1;
        for(let i1 = 0; i1 < queue.length; i1++){
            if (queue[i1].status === 3 /* SENT_NEEDS_ABORT */ ) ;
            else if (queue[i1].status === 1 /* SENT */ ) {
                _util.assert(lastSent === i1 - 1, 'All SENT items should be at beginning of queue.');
                lastSent = i1;
                // Mark transaction for abort when it comes back.
                queue[i1].status = 3 /* SENT_NEEDS_ABORT */ ;
                queue[i1].abortReason = 'set';
            } else {
                _util.assert(queue[i1].status === 0 /* RUN */ , 'Unexpected transaction status in abort');
                // We can abort it immediately.
                queue[i1].unwatcher();
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i1].currentWriteId, true));
                if (queue[i1].onComplete) callbacks.push(queue[i1].onComplete.bind(null, new Error('set'), false, null));
            }
        }
        if (lastSent === -1) // We're not waiting for any sent transactions.  We can clear the queue.
        treeSetValue(node4, undefined);
        else // Remove the transactions we aborted.
        queue.length = lastSent + 1;
        // Now fire the callbacks.
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node4), events);
        for(let i2 = 0; i2 < callbacks.length; i2++)exceptionGuard(callbacks[i2]);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function decodePath(pathString) {
    let pathStringDecoded = '';
    const pieces = pathString.split('/');
    for(let i1 = 0; i1 < pieces.length; i1++)if (pieces[i1].length > 0) {
        let piece = pieces[i1];
        try {
            piece = decodeURIComponent(piece.replace(/\+/g, ' '));
        } catch (e) {
        }
        pathStringDecoded += '/' + piece;
    }
    return pathStringDecoded;
}
/**
 * @returns key value hash
 */ function decodeQuery(queryString) {
    const results = {
    };
    if (queryString.charAt(0) === '?') queryString = queryString.substring(1);
    for (const segment of queryString.split('&')){
        if (segment.length === 0) continue;
        const kv = segment.split('=');
        if (kv.length === 2) results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        else warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
    return results;
}
const parseRepoInfo = function(dataURL, nodeAdmin1) {
    const parsedUrl = parseDatabaseURL(dataURL), namespace1 = parsedUrl.namespace;
    if (parsedUrl.domain === 'firebase.com') fatal(parsedUrl.host + ' is no longer supported. ' + 'Please use <YOUR FIREBASE>.firebaseio.com instead');
    // Catch common error of uninitialized namespace value.
    if ((!namespace1 || namespace1 === 'undefined') && parsedUrl.domain !== 'localhost') fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
    if (!parsedUrl.secure) warnIfPageIsSecure();
    const webSocketOnly1 = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
    return {
        repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace1, webSocketOnly1, nodeAdmin1, /*persistenceKey=*/ '', /*includeNamespaceInQueryParams=*/ namespace1 !== parsedUrl.subdomain),
        path: new Path(parsedUrl.pathString)
    };
};
const parseDatabaseURL = function(dataURL) {
    // Default to empty strings in the event of a malformed string.
    let host2 = '', domain = '', subdomain = '', pathString = '', namespace1 = '';
    // Always default to SSL, unless otherwise specified.
    let secure1 = true, scheme = 'https', port = 443;
    // Don't do any validation here. The caller is responsible for validating the result of parsing.
    if (typeof dataURL === 'string') {
        // Parse scheme.
        let colonInd = dataURL.indexOf('//');
        if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
        }
        // Parse host, path, and query string.
        let slashInd = dataURL.indexOf('/');
        if (slashInd === -1) slashInd = dataURL.length;
        let questionMarkInd = dataURL.indexOf('?');
        if (questionMarkInd === -1) questionMarkInd = dataURL.length;
        host2 = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
        if (slashInd < questionMarkInd) // For pathString, questionMarkInd will always come after slashInd
        pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
        const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
        // If we have a port, use scheme for determining if it's secure.
        colonInd = host2.indexOf(':');
        if (colonInd >= 0) {
            secure1 = scheme === 'https' || scheme === 'wss';
            port = parseInt(host2.substring(colonInd + 1), 10);
        } else colonInd = host2.length;
        const hostWithoutPort = host2.slice(0, colonInd);
        if (hostWithoutPort.toLowerCase() === 'localhost') domain = 'localhost';
        else if (hostWithoutPort.split('.').length <= 2) domain = hostWithoutPort;
        else {
            // Interpret the subdomain of a 3 or more component URL as the namespace name.
            const dotInd = host2.indexOf('.');
            subdomain = host2.substring(0, dotInd).toLowerCase();
            domain = host2.substring(dotInd + 1);
            // Normalize namespaces to lowercase to share storage / connection.
            namespace1 = subdomain;
        }
        // Always treat the value of the `ns` as the namespace name if it is present.
        if ('ns' in queryParams) namespace1 = queryParams['ns'];
    }
    return {
        host: host2,
        port,
        domain,
        subdomain,
        secure: secure1,
        scheme,
        pathString,
        namespace: namespace1
    };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encapsulates the data needed to raise an event
 */ class DataEvent {
    /**
     * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
     * @param eventRegistration - The function to call to with the event data. User provided
     * @param snapshot - The data backing the event
     * @param prevName - Optional, the name of the previous child for child_* events.
     */ constructor(eventType1, eventRegistration, snapshot, prevName){
        this.eventType = eventType1;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }
    getPath() {
        const ref = this.snapshot.ref;
        if (this.eventType === 'value') return ref._path;
        else return ref.parent._path;
    }
    getEventType() {
        return this.eventType;
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.getPath().toString() + ':' + this.eventType + ':' + _util.stringify(this.snapshot.exportVal());
    }
}
class CancelEvent {
    constructor(eventRegistration1, error1, path7){
        this.eventRegistration = eventRegistration1;
        this.error = error1;
        this.path = path7;
    }
    getPath() {
        return this.path;
    }
    getEventType() {
        return 'cancel';
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.path.toString() + ':cancel';
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A wrapper class that converts events from the database@exp SDK to the legacy
 * Database SDK. Events are not converted directly as event registration relies
 * on reference comparison of the original user callback (see `matches()`) and
 * relies on equality of the legacy SDK's `context` object.
 */ class CallbackContext {
    constructor(snapshotCallback, cancelCallback){
        this.snapshotCallback = snapshotCallback;
        this.cancelCallback = cancelCallback;
    }
    onValue(expDataSnapshot, previousChildName) {
        this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
    }
    onCancel(error) {
        _util.assert(this.hasCancelCallback, 'Raising a cancel event on a listener with no cancel callback');
        return this.cancelCallback.call(null, error);
    }
    get hasCancelCallback() {
        return !!this.cancelCallback;
    }
    matches(other) {
        return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== undefined && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The `onDisconnect` class allows you to write or clear data when your client
 * disconnects from the Database server. These updates occur whether your
 * client disconnects cleanly or not, so you can rely on them to clean up data
 * even if a connection is dropped or a client crashes.
 *
 * The `onDisconnect` class is most commonly used to manage presence in
 * applications where it is useful to detect how many clients are connected and
 * when other clients disconnect. See
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information.
 *
 * To avoid problems when a connection is dropped before the requests can be
 * transferred to the Database server, these functions should be called before
 * writing any data.
 *
 * Note that `onDisconnect` operations are only triggered once. If you want an
 * operation to occur each time a disconnect occurs, you'll need to re-establish
 * the `onDisconnect` operations each time you reconnect.
 */ class OnDisconnect {
    /** @hideconstructor */ constructor(_repo, _path){
        this._repo = _repo;
        this._path = _path;
    }
    /**
     * Cancels all previously queued `onDisconnect()` set or update events for this
     * location and all children.
     *
     * If a write has been queued for this location via a `set()` or `update()` at a
     * parent location, the write at this location will be canceled, though writes
     * to sibling locations will still occur.
     *
     * @returns Resolves when synchronization to the server is complete.
     */ cancel() {
        const deferred = new _util.Deferred();
        repoOnDisconnectCancel(this._repo, this._path, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is deleted when the client is disconnected
     * (due to closing the browser, navigating to a new page, or network issues).
     *
     * @returns Resolves when synchronization to the server is complete.
     */ remove() {
        validateWritablePath('OnDisconnect.remove', this._path);
        const deferred = new _util.Deferred();
        repoOnDisconnectSet(this._repo, this._path, null, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value when the
     * client is disconnected (due to closing the browser, navigating to a new page,
     * or network issues).
     *
     * `set()` is especially useful for implementing "presence" systems, where a
     * value should be changed or cleared when a user disconnects so that they
     * appear "offline" to other users. See
     * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
     * for more information.
     *
     * Note that `onDisconnect` operations are only triggered once. If you want an
     * operation to occur each time a disconnect occurs, you'll need to re-establish
     * the `onDisconnect` operations each time.
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ set(value) {
        validateWritablePath('OnDisconnect.set', this._path);
        validateFirebaseDataArg('OnDisconnect.set', value, this._path, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectSet(this._repo, this._path, value, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value and priority
     * when the client is disconnected (due to closing the browser, navigating to a
     * new page, or network issues).
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @param priority - The priority to be written (string, number, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ setWithPriority(value, priority) {
        validateWritablePath('OnDisconnect.setWithPriority', this._path);
        validateFirebaseDataArg('OnDisconnect.setWithPriority', value, this._path, false);
        validatePriority('OnDisconnect.setWithPriority', priority, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectSetWithPriority(this._repo, this._path, value, priority, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Writes multiple values at this location when the client is disconnected (due
     * to closing the browser, navigating to a new page, or network issues).
     *
     * The `values` argument contains multiple property-value pairs that will be
     * written to the Database together. Each child property can either be a simple
     * property (for example, "name") or a relative path (for example, "name/first")
     * from the current location to the data to update.
     *
     * As opposed to the `set()` method, `update()` can be use to selectively update
     * only the referenced properties at the current location (instead of replacing
     * all the child properties at the current location).
     *
     * @param values - Object containing multiple values.
     * @returns Resolves when synchronization to the Database is complete.
     */ update(values) {
        validateWritablePath('OnDisconnect.update', this._path);
        validateFirebaseMergeDataArg('OnDisconnect.update', values, this._path, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectUpdate(this._repo, this._path, values, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class QueryImpl {
    /**
     * @hideconstructor
     */ constructor(_repo1, _path1, _queryParams, _orderByCalled){
        this._repo = _repo1;
        this._path = _path1;
        this._queryParams = _queryParams;
        this._orderByCalled = _orderByCalled;
    }
    get key() {
        if (pathIsEmpty(this._path)) return null;
        else return pathGetBack(this._path);
    }
    get ref() {
        return new ReferenceImpl(this._repo, this._path);
    }
    get _queryIdentifier() {
        const obj = queryParamsGetQueryObject(this._queryParams);
        const id1 = ObjectToUniqueKey(obj);
        return id1 === '{}' ? 'default' : id1;
    }
    /**
     * An object representation of the query parameters used by this Query.
     */ get _queryObject() {
        return queryParamsGetQueryObject(this._queryParams);
    }
    isEqual(other) {
        other = _util.getModularInstance(other);
        if (!(other instanceof QueryImpl)) return false;
        const sameRepo = this._repo === other._repo;
        const samePath = pathEquals(this._path, other._path);
        const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
        return sameRepo && samePath && sameQueryIdentifier;
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        return this._repo.toString() + pathToUrlEncodedString(this._path);
    }
}
/**
 * Validates that no other order by call has been made
 */ function validateNoPreviousOrderByCall(query, fnName) {
    if (query._orderByCalled === true) throw new Error(fnName + ": You can't combine multiple orderBy calls.");
}
/**
 * Validates start/end values for queries.
 */ function validateQueryEndpoints(params4) {
    let startNode = null;
    let endNode = null;
    if (params4.hasStart()) startNode = params4.getIndexStartValue();
    if (params4.hasEnd()) endNode = params4.getIndexEndValue();
    if (params4.getIndex() === KEY_INDEX) {
        const tooManyArgsError = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().";
        const wrongArgTypeError = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
        if (params4.hasStart()) {
            const startName = params4.getIndexStartName();
            if (startName !== MIN_NAME) throw new Error(tooManyArgsError);
            else if (typeof startNode !== 'string') throw new Error(wrongArgTypeError);
        }
        if (params4.hasEnd()) {
            const endName = params4.getIndexEndName();
            if (endName !== MAX_NAME) throw new Error(tooManyArgsError);
            else if (typeof endNode !== 'string') throw new Error(wrongArgTypeError);
        }
    } else if (params4.getIndex() === PRIORITY_INDEX) {
        if (startNode != null && !isValidPriority(startNode) || endNode != null && !isValidPriority(endNode)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else {
        _util.assert(params4.getIndex() instanceof PathIndex || params4.getIndex() === VALUE_INDEX, 'unknown index type.');
        if (startNode != null && typeof startNode === 'object' || endNode != null && typeof endNode === 'object') throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.");
    }
}
/**
 * Validates that limit* has been called with the correct combination of parameters
 */ function validateLimit(params4) {
    if (params4.hasStart() && params4.hasEnd() && params4.hasLimit() && !params4.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.");
}
/**
 * @internal
 */ class ReferenceImpl extends QueryImpl {
    /** @hideconstructor */ constructor(repo, path8){
        super(repo, path8, new QueryParams(), false);
    }
    get parent() {
        const parentPath = pathParent(this._path);
        return parentPath === null ? null : new ReferenceImpl(this._repo, parentPath);
    }
    get root() {
        let ref = this;
        while(ref.parent !== null)ref = ref.parent;
        return ref;
    }
}
/**
 * A `DataSnapshot` contains data from a Database location.
 *
 * Any time you read data from the Database, you receive the data as a
 * `DataSnapshot`. A `DataSnapshot` is passed to the event callbacks you attach
 * with `on()` or `once()`. You can extract the contents of the snapshot as a
 * JavaScript object by calling the `val()` method. Alternatively, you can
 * traverse into the snapshot by calling `child()` to return child snapshots
 * (which you could then call `val()` on).
 *
 * A `DataSnapshot` is an efficiently generated, immutable copy of the data at
 * a Database location. It cannot be modified and will never change (to modify
 * data, you always call the `set()` method on a `Reference` directly).
 */ class DataSnapshot {
    /**
     * @param _node - A SnapshotNode to wrap.
     * @param ref - The location this snapshot came from.
     * @param _index - The iteration order for this snapshot
     * @hideconstructor
     */ constructor(_node, /**
     * The location of this DataSnapshot.
     */ ref, _index){
        this._node = _node;
        this.ref = ref;
        this._index = _index;
    }
    /**
     * Gets the priority value of the data in this `DataSnapshot`.
     *
     * Applications need not use priority but can order collections by
     * ordinary properties (see
     * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
     * ).
     */ get priority() {
        // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
        return this._node.getPriority().val();
    }
    /**
     * The key (last part of the path) of the location of this `DataSnapshot`.
     *
     * The last token in a Database location is considered its key. For example,
     * "ada" is the key for the /users/ada/ node. Accessing the key on any
     * `DataSnapshot` will return the key for the location that generated it.
     * However, accessing the key on the root URL of a Database will return
     * `null`.
     */ get key() {
        return this.ref.key;
    }
    /** Returns the number of child properties of this `DataSnapshot`. */ get size() {
        return this._node.numChildren();
    }
    /**
     * Gets another `DataSnapshot` for the location at the specified relative path.
     *
     * Passing a relative path to the `child()` method of a DataSnapshot returns
     * another `DataSnapshot` for the location at the specified relative path. The
     * relative path can either be a simple child name (for example, "ada") or a
     * deeper, slash-separated path (for example, "ada/name/first"). If the child
     * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
     * whose value is `null`) is returned.
     *
     * @param path - A relative path to the location of child data.
     */ child(path) {
        const childPath = new Path(path);
        const childRef = child(this.ref, path);
        return new DataSnapshot(this._node.getChild(childPath), childRef, PRIORITY_INDEX);
    }
    /**
     * Returns true if this `DataSnapshot` contains any data. It is slightly more
     * efficient than using `snapshot.val() !== null`.
     */ exists() {
        return !this._node.isEmpty();
    }
    /**
     * Exports the entire contents of the DataSnapshot as a JavaScript object.
     *
     * The `exportVal()` method is similar to `val()`, except priority information
     * is included (if available), making it suitable for backing up your data.
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exportVal() {
        return this._node.val(true);
    }
    /**
     * Enumerates the top-level children in the `DataSnapshot`.
     *
     * Because of the way JavaScript objects work, the ordering of data in the
     * JavaScript object returned by `val()` is not guaranteed to match the
     * ordering on the server nor the ordering of `onChildAdded()` events. That is
     * where `forEach()` comes in handy. It guarantees the children of a
     * `DataSnapshot` will be iterated in their query order.
     *
     * If no explicit `orderBy*()` method is used, results are returned
     * ordered by key (unless priorities are used, in which case, results are
     * returned by priority).
     *
     * @param action - A function that will be called for each child DataSnapshot.
     * The callback can return true to cancel further enumeration.
     * @returns true if enumeration was canceled due to your callback returning
     * true.
     */ forEach(action) {
        if (this._node.isLeafNode()) return false;
        const childrenNode = this._node;
        // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
        return !!childrenNode.forEachChild(this._index, (key2, node4)=>{
            return action(new DataSnapshot(node4, child(this.ref, key2), PRIORITY_INDEX));
        });
    }
    /**
     * Returns true if the specified child path has (non-null) data.
     *
     * @param path - A relative path to the location of a potential child.
     * @returns `true` if data exists at the specified child path; else
     *  `false`.
     */ hasChild(path) {
        const childPath = new Path(path);
        return !this._node.getChild(childPath).isEmpty();
    }
    /**
     * Returns whether or not the `DataSnapshot` has any non-`null` child
     * properties.
     *
     * You can use `hasChildren()` to determine if a `DataSnapshot` has any
     * children. If it does, you can enumerate them using `forEach()`. If it
     * doesn't, then either this snapshot contains a primitive value (which can be
     * retrieved with `val()`) or it is empty (in which case, `val()` will return
     * `null`).
     *
     * @returns true if this snapshot has any children; else false.
     */ hasChildren() {
        if (this._node.isLeafNode()) return false;
        else return !this._node.isEmpty();
    }
    /**
     * Returns a JSON-serializable representation of this object.
     */ toJSON() {
        return this.exportVal();
    }
    /**
     * Extracts a JavaScript value from a `DataSnapshot`.
     *
     * Depending on the data in a `DataSnapshot`, the `val()` method may return a
     * scalar type (string, number, or boolean), an array, or an object. It may
     * also return null, indicating that the `DataSnapshot` is empty (contains no
     * data).
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val() {
        return this._node.val();
    }
}
/**
 *
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided path. If no path is provided, the `Reference`
 * will point to the root of the Database.
 *
 * @param db - The database instance to obtain a reference for.
 * @param path - Optional path representing the location the returned
 *   `Reference` will point. If not provided, the returned `Reference` will
 *   point to the root of the Database.
 * @returns If a path is provided, a `Reference`
 *   pointing to the provided path. Otherwise, a `Reference` pointing to the
 *   root of the Database.
 */ function ref1(db, path9) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('ref');
    return path9 !== undefined ? child(db._root, path9) : db._root;
}
/**
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided Firebase URL.
 *
 * An exception is thrown if the URL is not a valid Firebase Database URL or it
 * has a different domain than the current `Database` instance.
 *
 * Note that all query parameters (`orderBy`, `limitToLast`, etc.) are ignored
 * and are not applied to the returned `Reference`.
 *
 * @param db - The database instance to obtain a reference for.
 * @param url - The Firebase URL at which the returned `Reference` will
 *   point.
 * @returns A `Reference` pointing to the provided
 *   Firebase URL.
 */ function refFromURL(db, url) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('refFromURL');
    const parsedURL = parseRepoInfo(url, db._repo.repoInfo_.nodeAdmin);
    validateUrl('refFromURL', parsedURL);
    const repoInfo4 = parsedURL.repoInfo;
    if (!db._repo.repoInfo_.isCustomHost() && repoInfo4.host !== db._repo.repoInfo_.host) fatal("refFromURL: Host name does not match the current database: (found " + repoInfo4.host + ' but expected ' + db._repo.repoInfo_.host + ')');
    return ref1(db, parsedURL.path.toString());
}
/**
 * Gets a `Reference` for the location at the specified relative path.
 *
 * The relative path can either be a simple child name (for example, "ada") or
 * a deeper slash-separated path (for example, "ada/name/first").
 *
 * @param parent - The parent location.
 * @param path - A relative path from this location to the desired child
 *   location.
 * @returns The specified child location.
 */ function child(parent1, path9) {
    parent1 = _util.getModularInstance(parent1);
    if (pathGetFront(parent1._path) === null) validateRootPathString('child', 'path', path9, false);
    else validatePathString('child', 'path', path9, false);
    return new ReferenceImpl(parent1._repo, pathChild(parent1._path, path9));
}
/**
 * Returns an `OnDisconnect` object - see
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information on how to use it.
 *
 * @param ref - The reference to add OnDisconnect triggers for.
 */ function onDisconnect2(ref2) {
    ref2 = _util.getModularInstance(ref2);
    return new OnDisconnect(ref2._repo, ref2._path);
}
/**
 * Generates a new child location using a unique key and returns its
 * `Reference`.
 *
 * This is the most common pattern for adding data to a collection of items.
 *
 * If you provide a value to `push()`, the value is written to the
 * generated location. If you don't pass a value, nothing is written to the
 * database and the child remains empty (but you can use the `Reference`
 * elsewhere).
 *
 * The unique keys generated by `push()` are ordered by the current time, so the
 * resulting list of items is chronologically sorted. The keys are also
 * designed to be unguessable (they contain 72 random bits of entropy).
 *
 * See {@link https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data | Append to a list of data}
 * </br>See {@link ttps://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html | The 2^120 Ways to Ensure Unique Identifiers}
 *
 * @param parent - The parent location.
 * @param value - Optional value to be written at the generated location.
 * @returns Combined `Promise` and `Reference`; resolves when write is complete,
 * but can be used immediately as the `Reference` to the child location.
 */ function push(parent1, value3) {
    parent1 = _util.getModularInstance(parent1);
    validateWritablePath('push', parent1._path);
    validateFirebaseDataArg('push', value3, parent1._path, true);
    const now = repoServerTime(parent1._repo);
    const name4 = nextPushId(now);
    // push() returns a ThennableReference whose promise is fulfilled with a
    // regular Reference. We use child() to create handles to two different
    // references. The first is turned into a ThennableReference below by adding
    // then() and catch() methods and is used as the return value of push(). The
    // second remains a regular Reference and is used as the fulfilled value of
    // the first ThennableReference.
    const thennablePushRef = child(parent1, name4);
    const pushRef = child(parent1, name4);
    let promise;
    if (value3 != null) promise = set(pushRef, value3).then(()=>pushRef
    );
    else promise = Promise.resolve(pushRef);
    thennablePushRef.then = promise.then.bind(promise);
    thennablePushRef.catch = promise.then.bind(promise, undefined);
    return thennablePushRef;
}
/**
 * Removes the data at this Database location.
 *
 * Any data at child locations will also be deleted.
 *
 * The effect of the remove will be visible immediately and the corresponding
 * event 'value' will be triggered. Synchronization of the remove to the
 * Firebase servers will also be started, and the returned Promise will resolve
 * when complete. If provided, the onComplete callback will be called
 * asynchronously after synchronization has finished.
 *
 * @param ref - The location to remove.
 * @returns Resolves when remove on server is complete.
 */ function remove(ref2) {
    validateWritablePath('remove', ref2._path);
    return set(ref2, null);
}
/**
 * Writes data to this Database location.
 *
 * This will overwrite any data at this location and all child locations.
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ("value", "child_added", etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * Passing `null` for the new value is equivalent to calling `remove()`; namely,
 * all data at this location and all child locations will be deleted.
 *
 * `set()` will remove any priority stored at this location, so if priority is
 * meant to be preserved, you need to use `setWithPriority()` instead.
 *
 * Note that modifying data with `set()` will cancel any pending transactions
 * at that location, so extreme care should be taken if mixing `set()` and
 * `transaction()` to modify the same data.
 *
 * A single `set()` will generate a single "value" event at the location where
 * the `set()` was performed.
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @returns Resolves when write to server is complete.
 */ function set(ref2, value3) {
    ref2 = _util.getModularInstance(ref2);
    validateWritablePath('set', ref2._path);
    validateFirebaseDataArg('set', value3, ref2._path, false);
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref2._repo, ref2._path, value3, /*priority=*/ null, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Sets a priority for the data at this Database location.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function setPriority(ref2, priority) {
    ref2 = _util.getModularInstance(ref2);
    validateWritablePath('setPriority', ref2._path);
    validatePriority('setPriority', priority, false);
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref2._repo, pathChild(ref2._path, '.priority'), priority, null, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Writes data the Database location. Like `set()` but also specifies the
 * priority for that data.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function setWithPriority(ref2, value3, priority) {
    validateWritablePath('setWithPriority', ref2._path);
    validateFirebaseDataArg('setWithPriority', value3, ref2._path, false);
    validatePriority('setWithPriority', priority, false);
    if (ref2.key === '.length' || ref2.key === '.keys') throw 'setWithPriority failed: ' + ref2.key + ' is a read-only object.';
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref2._repo, ref2._path, value3, priority, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Writes multiple values to the Database at once.
 *
 * The `values` argument contains multiple property-value pairs that will be
 * written to the Database together. Each child property can either be a simple
 * property (for example, "name") or a relative path (for example,
 * "name/first") from the current location to the data to update.
 *
 * As opposed to the `set()` method, `update()` can be use to selectively update
 * only the referenced properties at the current location (instead of replacing
 * all the child properties at the current location).
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ('value', 'child_added', etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * A single `update()` will generate a single "value" event at the location
 * where the `update()` was performed, regardless of how many children were
 * modified.
 *
 * Note that modifying data with `update()` will cancel any pending
 * transactions at that location, so extreme care should be taken if mixing
 * `update()` and `transaction()` to modify the same data.
 *
 * Passing `null` to `update()` will remove the data at this location.
 *
 * See
 * {@link https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html | Introducing multi-location updates and more}.
 *
 * @param ref - The location to write to.
 * @param values - Object containing multiple values.
 * @returns Resolves when update on server is complete.
 */ function update(ref2, values) {
    validateFirebaseMergeDataArg('update', values, ref2._path, false);
    const deferred = new _util.Deferred();
    repoUpdate(ref2._repo, ref2._path, values, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Gets the most up-to-date result for this query.
 *
 * @param query - The query to run.
 * @returns A `Promise` which resolves to the resulting DataSnapshot if a value is
 * available, or rejects if the client is unable to return a value (e.g., if the
 * server is unreachable and there is nothing cached).
 */ function get(query) {
    query = _util.getModularInstance(query);
    return repoGetValue(query._repo, query).then((node4)=>{
        return new DataSnapshot(node4, new ReferenceImpl(query._repo, query._path), query._queryParams.getIndex());
    });
}
/**
 * Represents registration for 'value' events.
 */ class ValueEventRegistration {
    constructor(callbackContext){
        this.callbackContext = callbackContext;
    }
    respondsTo(eventType) {
        return eventType === 'value';
    }
    createEvent(change, query) {
        const index = query._queryParams.getIndex();
        return new DataEvent('value', this, new DataSnapshot(change.snapshotNode, new ReferenceImpl(query._repo, query._path), index));
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === 'cancel') return ()=>this.callbackContext.onCancel(eventData.error)
        ;
        else return ()=>this.callbackContext.onValue(eventData.snapshot, null)
        ;
    }
    createCancelEvent(error, path) {
        if (this.callbackContext.hasCancelCallback) return new CancelEvent(this, error, path);
        else return null;
    }
    matches(other) {
        if (!(other instanceof ValueEventRegistration)) return false;
        else if (!other.callbackContext || !this.callbackContext) // If no callback specified, we consider it to match any callback.
        return true;
        else return other.callbackContext.matches(this.callbackContext);
    }
    hasAnyCallback() {
        return this.callbackContext !== null;
    }
}
/**
 * Represents the registration of a child_x event.
 */ class ChildEventRegistration {
    constructor(eventType2, callbackContext1){
        this.eventType = eventType2;
        this.callbackContext = callbackContext1;
    }
    respondsTo(eventType) {
        let eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
        eventToCheck = eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
        return this.eventType === eventToCheck;
    }
    createCancelEvent(error, path) {
        if (this.callbackContext.hasCancelCallback) return new CancelEvent(this, error, path);
        else return null;
    }
    createEvent(change, query) {
        _util.assert(change.childName != null, 'Child events should have a childName.');
        const childRef = child(new ReferenceImpl(query._repo, query._path), change.childName);
        const index = query._queryParams.getIndex();
        return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, childRef, index), change.prevName);
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === 'cancel') return ()=>this.callbackContext.onCancel(eventData.error)
        ;
        else return ()=>this.callbackContext.onValue(eventData.snapshot, eventData.prevName)
        ;
    }
    matches(other) {
        if (other instanceof ChildEventRegistration) return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
        return false;
    }
    hasAnyCallback() {
        return !!this.callbackContext;
    }
}
function addEventListener(query, eventType3, callback, cancelCallbackOrListenOptions, options) {
    let cancelCallback1;
    if (typeof cancelCallbackOrListenOptions === 'object') {
        cancelCallback1 = undefined;
        options = cancelCallbackOrListenOptions;
    }
    if (typeof cancelCallbackOrListenOptions === 'function') cancelCallback1 = cancelCallbackOrListenOptions;
    if (options && options.onlyOnce) {
        const userCallback = callback;
        const onceCallback = (dataSnapshot, previousChildName)=>{
            repoRemoveEventCallbackForQuery(query._repo, query, container);
            userCallback(dataSnapshot, previousChildName);
        };
        onceCallback.userCallback = callback.userCallback;
        onceCallback.context = callback.context;
        callback = onceCallback;
    }
    const callbackContext2 = new CallbackContext(callback, cancelCallback1 || undefined);
    const container = eventType3 === 'value' ? new ValueEventRegistration(callbackContext2) : new ChildEventRegistration(eventType3, callbackContext2);
    repoAddEventCallbackForQuery(query._repo, query, container);
    return ()=>repoRemoveEventCallbackForQuery(query._repo, query, container)
    ;
}
function onValue(query, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query, 'value', callback, cancelCallbackOrListenOptions, options);
}
function onChildAdded(query, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query, 'child_added', callback, cancelCallbackOrListenOptions, options);
}
function onChildChanged(query, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query, 'child_changed', callback, cancelCallbackOrListenOptions, options);
}
function onChildMoved(query, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query, 'child_moved', callback, cancelCallbackOrListenOptions, options);
}
function onChildRemoved(query, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query, 'child_removed', callback, cancelCallbackOrListenOptions, options);
}
/**
 * Detaches a callback previously attached with the corresponding `on*()` (`onValue`, `onChildAdded`) listener.
 * Note: This is not the recommended way to remove a listener. Instead, please use the returned callback function from
 * the respective `on*` callbacks.
 *
 * Detach a callback previously attached with `on*()`. Calling `off()` on a parent listener
 * will not automatically remove listeners registered on child nodes, `off()`
 * must also be called on any child listeners to remove the callback.
 *
 * If a callback is not specified, all callbacks for the specified eventType
 * will be removed. Similarly, if no eventType is specified, all callbacks
 * for the `Reference` will be removed.
 *
 * Individual listeners can also be removed by invoking their unsubscribe
 * callbacks.
 *
 * @param query - The query that the listener was registered with.
 * @param eventType - One of the following strings: "value", "child_added",
 * "child_changed", "child_removed", or "child_moved." If omitted, all callbacks
 * for the `Reference` will be removed.
 * @param callback - The callback function that was passed to `on()` or
 * `undefined` to remove all callbacks.
 */ function off(query, eventType3, callback) {
    let container = null;
    const expCallback = callback ? new CallbackContext(callback) : null;
    if (eventType3 === 'value') container = new ValueEventRegistration(expCallback);
    else if (eventType3) container = new ChildEventRegistration(eventType3, expCallback);
    repoRemoveEventCallbackForQuery(query._repo, query, container);
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Database query. `QueryConstraint`s are created by invoking {@link endAt},
 * {@link endBefore}, {@link startAt}, {@link startAfter}, {@link
 * limitToFirst}, {@link limitToLast}, {@link orderByChild},
 * {@link orderByChild}, {@link orderByKey} , {@link orderByPriority} ,
 * {@link orderByValue}  or {@link equalTo} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class QueryConstraint {
}
class QueryEndAtConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query) {
        validateFirebaseDataArg('endAt', this._value, query._path, true);
        const newParams = queryParamsEndAt(query._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new QueryImpl(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name less than or equal
 * to the specified key.
 *
 * You can read more about `endAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to end at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end at, among the children with the previously
 * specified priority. This argument is only allowed if ordering by child,
 * value, or priority.
 */ function endAt(value3, key2) {
    validateKey('endAt', 'key', key2, true);
    return new QueryEndAtConstraint(value3, key2);
}
class QueryEndBeforeConstraint extends QueryConstraint {
    constructor(_value1, _key1){
        super();
        this._value = _value1;
        this._key = _key1;
    }
    _apply(query) {
        validateFirebaseDataArg('endBefore', this._value, query._path, false);
        const newParams = queryParamsEndBefore(query._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new QueryImpl(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is exclusive. If only a value is provided, children
 * with a value less than the specified value will be included in the query.
 * If a key is specified, then children must have a value lesss than or equal
 * to the specified value and a a key name less than the specified key.
 *
 * @param value - The value to end before. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end before, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function endBefore(value3, key2) {
    validateKey('endBefore', 'key', key2, true);
    return new QueryEndBeforeConstraint(value3, key2);
}
class QueryStartAtConstraint extends QueryConstraint {
    constructor(_value2, _key2){
        super();
        this._value = _value2;
        this._key = _key2;
    }
    _apply(query) {
        validateFirebaseDataArg('startAt', this._value, query._path, true);
        const newParams = queryParamsStartAt(query._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
        return new QueryImpl(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name greater than or
 * equal to the specified key.
 *
 * You can read more about `startAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to start at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function startAt(value3 = null, key2) {
    validateKey('startAt', 'key', key2, true);
    return new QueryStartAtConstraint(value3, key2);
}
class QueryStartAfterConstraint extends QueryConstraint {
    constructor(_value3, _key3){
        super();
        this._value = _value3;
        this._key = _key3;
    }
    _apply(query) {
        validateFirebaseDataArg('startAfter', this._value, query._path, false);
        const newParams = queryParamsStartAfter(query._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
        return new QueryImpl(query._repo, query._path, newParams, query._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is exclusive. If only a value is provided, children
 * with a value greater than the specified value will be included in the query.
 * If a key is specified, then children must have a value greater than or equal
 * to the specified value and a a key name greater than the specified key.
 *
 * @param value - The value to start after. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start after. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function startAfter(value3, key2) {
    validateKey('startAfter', 'key', key2, true);
    return new QueryStartAfterConstraint(value3, key2);
}
class QueryLimitToFirstConstraint extends QueryConstraint {
    constructor(_limit){
        super();
        this._limit = _limit;
    }
    _apply(query) {
        if (query._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new QueryImpl(query._repo, query._path, queryParamsLimitToFirst(query._queryParams, this._limit), query._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that if limited to the first specific number
 * of children.
 *
 * The `limitToFirst()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the first 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToFirst()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function limitToFirst(limit) {
    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) throw new Error('limitToFirst: First argument must be a positive integer.');
    return new QueryLimitToFirstConstraint(limit);
}
class QueryLimitToLastConstraint extends QueryConstraint {
    constructor(_limit1){
        super();
        this._limit = _limit1;
    }
    _apply(query) {
        if (query._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new QueryImpl(query._repo, query._path, queryParamsLimitToLast(query._queryParams, this._limit), query._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that is limited to return only the last
 * specified number of children.
 *
 * The `limitToLast()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the last 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToLast()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function limitToLast(limit) {
    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) throw new Error('limitToLast: First argument must be a positive integer.');
    return new QueryLimitToLastConstraint(limit);
}
class QueryOrderByChildConstraint extends QueryConstraint {
    constructor(_path2){
        super();
        this._path = _path2;
    }
    _apply(query) {
        validateNoPreviousOrderByCall(query, 'orderByChild');
        const parsedPath = new Path(this._path);
        if (pathIsEmpty(parsedPath)) throw new Error('orderByChild: cannot pass in empty path. Use orderByValue() instead.');
        const index = new PathIndex(parsedPath);
        const newParams = queryParamsOrderBy(query._queryParams, index);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the specified child key.
 *
 * Queries can only order by one key at a time. Calling `orderByChild()`
 * multiple times on the same query is an error.
 *
 * Firebase queries allow you to order your data by any child key on the fly.
 * However, if you know in advance what your indexes will be, you can define
 * them via the .indexOn rule in your Security Rules for better performance. See
 * the{@link https://firebase.google.com/docs/database/security/indexing-data}
 * rule for more information.
 *
 * You can read more about `orderByChild()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 *
 * @param path - The path to order by.
 */ function orderByChild(path9) {
    if (path9 === '$key') throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
    else if (path9 === '$priority') throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
    else if (path9 === '$value') throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
    validatePathString('orderByChild', 'path', path9, false);
    return new QueryOrderByChildConstraint(path9);
}
class QueryOrderByKeyConstraint extends QueryConstraint {
    _apply(query) {
        validateNoPreviousOrderByCall(query, 'orderByKey');
        const newParams = queryParamsOrderBy(query._queryParams, KEY_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the key.
 *
 * Sorts the results of a query by their (ascending) key values.
 *
 * You can read more about `orderByKey()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function orderByKey() {
    return new QueryOrderByKeyConstraint();
}
class QueryOrderByPriorityConstraint extends QueryConstraint {
    _apply(query) {
        validateNoPreviousOrderByCall(query, 'orderByPriority');
        const newParams = queryParamsOrderBy(query._queryParams, PRIORITY_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by priority.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}
 * for alternatives to priority.
 */ function orderByPriority() {
    return new QueryOrderByPriorityConstraint();
}
class QueryOrderByValueConstraint extends QueryConstraint {
    _apply(query) {
        validateNoPreviousOrderByCall(query, 'orderByValue');
        const newParams = queryParamsOrderBy(query._queryParams, VALUE_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query._repo, query._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by value.
 *
 * If the children of a query are all scalar values (string, number, or
 * boolean), you can order the results by their (ascending) values.
 *
 * You can read more about `orderByValue()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function orderByValue() {
    return new QueryOrderByValueConstraint();
}
class QueryEqualToValueConstraint extends QueryConstraint {
    constructor(_value4, _key4){
        super();
        this._value = _value4;
        this._key = _key4;
    }
    _apply(query) {
        validateFirebaseDataArg('equalTo', this._value, query._path, false);
        if (query._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
        if (query._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
        return new QueryEndAtConstraint(this._value, this._key)._apply(new QueryStartAtConstraint(this._value, this._key)._apply(query));
    }
}
/**
 * Creates a `QueryConstraint` that includes children that match the specified
 * value.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The optional key argument can be used to further limit the range of the
 * query. If it is specified, then children that have exactly the specified
 * value must also have exactly the specified key as their key name. This can be
 * used to filter result sets with many matches for the same value.
 *
 * You can read more about `equalTo()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to match for. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function equalTo(value3, key2) {
    validateKey('equalTo', 'key', key2, true);
    return new QueryEqualToValueConstraint(value3, key2);
}
/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function query(query1, ...queryConstraints) {
    let queryImpl = _util.getModularInstance(query1);
    for (const constraint of queryConstraints)queryImpl = constraint._apply(queryImpl);
    return queryImpl;
}
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */ syncPointSetReferenceConstructor(ReferenceImpl);
syncTreeSetReferenceConstructor(ReferenceImpl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This variable is also defined in the firebase Node.js Admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */ const FIREBASE_DATABASE_EMULATOR_HOST_VAR = 'FIREBASE_DATABASE_EMULATOR_HOST';
/**
 * Creates and caches `Repo` instances.
 */ const repos = {
};
/**
 * If true, any new `Repo` will be created to use `ReadonlyRestClient` (for testing purposes).
 */ let useRestClient = false;
/**
 * Update an existing `Repo` in place to point to a new host/port.
 */ function repoManagerApplyEmulatorSettings(repo1, host2, port, tokenProvider) {
    repo1.repoInfo_ = new RepoInfo(`${host2}:${port}`, /* secure= */ false, repo1.repoInfo_.namespace, repo1.repoInfo_.webSocketOnly, repo1.repoInfo_.nodeAdmin, repo1.repoInfo_.persistenceKey, repo1.repoInfo_.includeNamespaceInQueryParams);
    if (tokenProvider) repo1.authTokenProvider_ = tokenProvider;
}
/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */ function repoManagerDatabaseFromApp(app, authProvider, appCheckProvider1, url, nodeAdmin1) {
    let dbUrl = url || app.options.databaseURL;
    if (dbUrl === undefined) {
        if (!app.options.projectId) fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
        log('Using default host for project ', app.options.projectId);
        dbUrl = `${app.options.projectId}-default-rtdb.firebaseio.com`;
    }
    let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin1);
    let repoInfo4 = parsedUrl.repoInfo;
    let isEmulator;
    let dbEmulatorHost = undefined;
    if (typeof process !== 'undefined' && process.env) dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
    if (dbEmulatorHost) {
        isEmulator = true;
        dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo4.namespace}`;
        parsedUrl = parseRepoInfo(dbUrl, nodeAdmin1);
        repoInfo4 = parsedUrl.repoInfo;
    } else isEmulator = !parsedUrl.repoInfo.secure;
    const authTokenProvider = nodeAdmin1 && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app.name, app.options, authProvider);
    validateUrl('Invalid Firebase Database URL', parsedUrl);
    if (!pathIsEmpty(parsedUrl.path)) fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
    const repo1 = repoManagerCreateRepo(repoInfo4, app, authTokenProvider, new AppCheckTokenProvider(app.name, appCheckProvider1));
    return new Database(repo1, app);
}
/**
 * Remove the repo and make sure it is disconnected.
 *
 */ function repoManagerDeleteRepo(repo1, appName) {
    const appRepos = repos[appName];
    // This should never happen...
    if (!appRepos || appRepos[repo1.key] !== repo1) fatal(`Database ${appName}(${repo1.repoInfo_}) has already been deleted.`);
    repoInterrupt(repo1);
    delete appRepos[repo1.key];
}
/**
 * Ensures a repo doesn't already exist and then creates one using the
 * provided app.
 *
 * @param repoInfo - The metadata about the Repo
 * @returns The Repo object for the specified server / repoName.
 */ function repoManagerCreateRepo(repoInfo4, app, authTokenProvider, appCheckProvider1) {
    let appRepos = repos[app.name];
    if (!appRepos) {
        appRepos = {
        };
        repos[app.name] = appRepos;
    }
    let repo1 = appRepos[repoInfo4.toURLString()];
    if (repo1) fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
    repo1 = new Repo(repoInfo4, useRestClient, authTokenProvider, appCheckProvider1);
    appRepos[repoInfo4.toURLString()] = repo1;
    return repo1;
}
/**
 * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
 */ function repoManagerForceRestClient(forceRestClient) {
    useRestClient = forceRestClient;
}
/**
 * Class representing a Firebase Realtime Database.
 */ class Database {
    /** @hideconstructor */ constructor(_repoInternal, /** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */ app){
        this._repoInternal = _repoInternal;
        this.app = app;
        /** Represents a `Database` instance. */ this['type'] = 'database';
        /** Track if the instance has been used (root or repo accessed) */ this._instanceStarted = false;
    }
    get _repo() {
        if (!this._instanceStarted) {
            repoStart(this._repoInternal, this.app.options.appId, this.app.options['databaseAuthVariableOverride']);
            this._instanceStarted = true;
        }
        return this._repoInternal;
    }
    get _root() {
        if (!this._rootInternal) this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
        return this._rootInternal;
    }
    _delete() {
        if (this._rootInternal !== null) {
            repoManagerDeleteRepo(this._repo, this.app.name);
            this._repoInternal = null;
            this._rootInternal = null;
        }
        return Promise.resolve();
    }
    _checkNotDeleted(apiName) {
        if (this._rootInternal === null) fatal('Cannot call ' + apiName + ' on a deleted database.');
    }
}
function checkTransportInit() {
    if (TransportManager.IS_TRANSPORT_INITIALIZED) warn('Transport has already been initialized. Please call this function before calling ref or setting up a listener');
}
/**
 * Force the use of websockets instead of longPolling.
 */ function forceWebSockets() {
    checkTransportInit();
    BrowserPollConnection.forceDisallow();
}
/**
 * Force the use of longPolling instead of websockets. This will be ignored if websocket protocol is used in databaseURL.
 */ function forceLongPolling() {
    checkTransportInit();
    WebSocketConnection.forceDisallow();
    BrowserPollConnection.forceAllow();
}
/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */ function getDatabase(app1 = _app.getApp(), url) {
    return _app._getProvider(app1, 'database').getImmediate({
        identifier: url
    });
}
/**
 * Modify the provided instance to communicate with the Realtime Database
 * emulator.
 *
 * <p>Note: This method must be called before performing any other operation.
 *
 * @param db - The instance to modify.
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 8080)
 * @param options.mockUserToken - the mock auth token to use for unit testing Security Rules
 */ function connectDatabaseEmulator(db, host2, port, options = {
}) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('useEmulator');
    if (db._instanceStarted) fatal('Cannot call useEmulator() after instance has already been initialized.');
    const repo1 = db._repoInternal;
    let tokenProvider = undefined;
    if (repo1.repoInfo_.nodeAdmin) {
        if (options.mockUserToken) fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".');
        tokenProvider = new EmulatorTokenProvider(EmulatorTokenProvider.OWNER);
    } else if (options.mockUserToken) {
        const token = typeof options.mockUserToken === 'string' ? options.mockUserToken : _util.createMockUserToken(options.mockUserToken, db.app.options.projectId);
        tokenProvider = new EmulatorTokenProvider(token);
    }
    // Modify the repo to apply emulator settings
    repoManagerApplyEmulatorSettings(repo1, host2, port, tokenProvider);
}
/**
 * Disconnects from the server (all Database operations will be completed
 * offline).
 *
 * The client automatically maintains a persistent connection to the Database
 * server, which will remain active indefinitely and reconnect when
 * disconnected. However, the `goOffline()` and `goOnline()` methods may be used
 * to control the client connection in cases where a persistent connection is
 * undesirable.
 *
 * While offline, the client will no longer receive data updates from the
 * Database. However, all Database operations performed locally will continue to
 * immediately fire events, allowing your application to continue behaving
 * normally. Additionally, each operation performed locally will automatically
 * be queued and retried upon reconnection to the Database server.
 *
 * To reconnect to the Database and begin receiving remote events, see
 * `goOnline()`.
 *
 * @param db - The instance to disconnect.
 */ function goOffline(db) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('goOffline');
    repoInterrupt(db._repo);
}
/**
 * Reconnects to the server and synchronizes the offline Database state
 * with the server state.
 *
 * This method should be used after disabling the active connection with
 * `goOffline()`. Once reconnected, the client will transmit the proper data
 * and fire the appropriate events so that your client "catches up"
 * automatically.
 *
 * @param db - The instance to reconnect.
 */ function goOnline(db) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('goOnline');
    repoResume(db._repo);
}
function enableLogging(logger1, persistent) {
    enableLogging$1(logger1, persistent);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerDatabase(variant) {
    setSDKVersion(_app.SDK_VERSION);
    _app._registerComponent(new _component.Component('database', (container, { instanceIdentifier: url  })=>{
        const app1 = container.getProvider('app').getImmediate();
        const authProvider = container.getProvider('auth-internal');
        const appCheckProvider1 = container.getProvider('app-check-internal');
        return repoManagerDatabaseFromApp(app1, authProvider, appCheckProvider1, url);
    }, "PUBLIC" /* PUBLIC */ ).setMultipleInstances(true));
    _app.registerVersion(name1, version, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    _app.registerVersion(name1, version, 'esm2017');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SERVER_TIMESTAMP = {
    '.sv': 'timestamp'
};
/**
 * Returns a placeholder value for auto-populating the current timestamp (time
 * since the Unix epoch, in milliseconds) as determined by the Firebase
 * servers.
 */ function serverTimestamp() {
    return SERVER_TIMESTAMP;
}
/**
 * Returns a placeholder value that can be used to atomically increment the
 * current database value by the provided delta.
 *
 * @param delta - the amount to modify the current value atomically.
 * @returns A placeholder value for modifying data atomically server-side.
 */ function increment(delta) {
    return {
        '.sv': {
            'increment': delta
        }
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A type for the resolve value of {@link runTransaction}.
 */ class TransactionResult {
    /** @hideconstructor */ constructor(/** Whether the transaction was successfully committed. */ committed, /** The resulting data snapshot. */ snapshot1){
        this.committed = committed;
        this.snapshot = snapshot1;
    }
    /** Returns a JSON-serializable representation of this object. */ toJSON() {
        return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON()
        };
    }
}
/**
 * Atomically modifies the data at this location.
 *
 * Atomically modify the data at this location. Unlike a normal `set()`, which
 * just overwrites the data regardless of its previous value, `runTransaction()` is
 * used to modify the existing value to a new value, ensuring there are no
 * conflicts with other clients writing to the same location at the same time.
 *
 * To accomplish this, you pass `runTransaction()` an update function which is
 * used to transform the current value into a new value. If another client
 * writes to the location before your new value is successfully written, your
 * update function will be called again with the new current value, and the
 * write will be retried. This will happen repeatedly until your write succeeds
 * without conflict or you abort the transaction by not returning a value from
 * your update function.
 *
 * Note: Modifying data with `set()` will cancel any pending transactions at
 * that location, so extreme care should be taken if mixing `set()` and
 * `runTransaction()` to update the same data.
 *
 * Note: When using transactions with Security and Firebase Rules in place, be
 * aware that a client needs `.read` access in addition to `.write` access in
 * order to perform a transaction. This is because the client-side nature of
 * transactions requires the client to read the data in order to transactionally
 * update it.
 *
 * @param ref - The location to atomically modify.
 * @param transactionUpdate - A developer-supplied function which will be passed
 * the current data stored at this location (as a JavaScript object). The
 * function should return the new value it would like written (as a JavaScript
 * object). If `undefined` is returned (i.e. you return with no arguments) the
 * transaction will be aborted and the data at this location will not be
 * modified.
 * @param options - An options object to configure transactions.
 * @returns A `Promise` that can optionally be used instead of the `onComplete`
 * callback to handle success and failure.
 */ function runTransaction(ref2, // eslint-disable-next-line @typescript-eslint/no-explicit-any
transactionUpdate, options) {
    var _a;
    ref2 = _util.getModularInstance(ref2);
    validateWritablePath('Reference.transaction', ref2._path);
    if (ref2.key === '.length' || ref2.key === '.keys') throw 'Reference.transaction failed: ' + ref2.key + ' is a read-only object.';
    const applyLocally = (_a = options === null || options === void 0 ? void 0 : options.applyLocally) !== null && _a !== void 0 ? _a : true;
    const deferred = new _util.Deferred();
    const promiseComplete = (error3, committed1, node4)=>{
        let dataSnapshot = null;
        if (error3) deferred.reject(error3);
        else {
            dataSnapshot = new DataSnapshot(node4, new ReferenceImpl(ref2._repo, ref2._path), PRIORITY_INDEX);
            deferred.resolve(new TransactionResult(committed1, dataSnapshot));
        }
    };
    // Add a watch to make sure we get server updates.
    const unwatcher = onValue(ref2, ()=>{
    });
    repoStartTransaction(ref2._repo, ref2._path, transactionUpdate, promiseComplete, unwatcher, applyLocally);
    return deferred.promise;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
    this.sendRequest('q', {
        p: pathString
    }, onComplete);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
PersistentConnection.prototype.echo = function(data, onEcho) {
    this.sendRequest('echo', {
        d: data
    }, onEcho);
};
/**
 * @internal
 */ const hijackHash = function(newHash) {
    const oldPut = PersistentConnection.prototype.put;
    PersistentConnection.prototype.put = function(pathString, data, onComplete, hash) {
        if (hash !== undefined) hash = newHash();
        oldPut.call(this, pathString, data, onComplete, hash);
    };
    return function() {
        PersistentConnection.prototype.put = oldPut;
    };
};
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 * @internal
 */ const forceRestClient = function(forceRestClient1) {
    repoManagerForceRestClient(forceRestClient1);
};
/**
 * Firebase Realtime Database
 *
 * @packageDocumentation
 */ registerDatabase();

},{"process":"6Upk8","@firebase/app":"iIlx1","@firebase/component":"bSWnS","@firebase/util":"iWUXZ","@firebase/logger":"dNrrP","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6Upk8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"4gk2m":[function(require,module,exports) {
var arrayMap = require('./_arrayMap'), baseIteratee = require('./_baseIteratee'), baseMap = require('./_baseMap'), isArray = require('./isArray');
/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */ function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;

},{"./_arrayMap":"dYHNK","./_baseIteratee":"bbpKv","./_baseMap":"a48fZ","./isArray":"9D9dp"}],"dYHNK":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while((++index) < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"bbpKv":[function(require,module,exports) {
var baseMatches = require('./_baseMatches'), baseMatchesProperty = require('./_baseMatchesProperty'), identity = require('./identity'), isArray = require('./isArray'), property = require('./property');
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') return value;
    if (value == null) return identity;
    if (typeof value == 'object') return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"./_baseMatches":"gUFxm","./_baseMatchesProperty":"EwUbH","./identity":"czYGV","./isArray":"9D9dp","./property":"iPjKu"}],"gUFxm":[function(require,module,exports) {
var baseIsMatch = require('./_baseIsMatch'), getMatchData = require('./_getMatchData'), matchesStrictComparable = require('./_matchesStrictComparable');
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"./_baseIsMatch":"hdko4","./_getMatchData":"frDcI","./_matchesStrictComparable":"b6wAM"}],"hdko4":[function(require,module,exports) {
var Stack = require('./_Stack'), baseIsEqual = require('./_baseIsEqual');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while((++index) < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"./_Stack":"iSswE","./_baseIsEqual":"eNrCs"}],"iSswE":[function(require,module,exports) {
var ListCache = require('./_ListCache'), stackClear = require('./_stackClear'), stackDelete = require('./_stackDelete'), stackGet = require('./_stackGet'), stackHas = require('./_stackHas'), stackSet = require('./_stackSet');
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"lpr3N","./_stackClear":"3whtY","./_stackDelete":"d97gA","./_stackGet":"fwAy4","./_stackHas":"65b3w","./_stackSet":"37Y72"}],"lpr3N":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'), listCacheDelete = require('./_listCacheDelete'), listCacheGet = require('./_listCacheGet'), listCacheHas = require('./_listCacheHas'), listCacheSet = require('./_listCacheSet');
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"5l6TE","./_listCacheDelete":"7Olr5","./_listCacheGet":"kf20q","./_listCacheHas":"JrbX7","./_listCacheSet":"heixL"}],"5l6TE":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"7Olr5":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"lg8aM"}],"lg8aM":[function(require,module,exports) {
var eq = require('./eq');
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"2rhE2"}],"2rhE2":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"kf20q":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"lg8aM"}],"JrbX7":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"lg8aM"}],"heixL":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"lg8aM"}],"3whtY":[function(require,module,exports) {
var ListCache = require('./_ListCache');
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"lpr3N"}],"d97gA":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"fwAy4":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"65b3w":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"37Y72":[function(require,module,exports) {
var ListCache = require('./_ListCache'), Map1 = require('./_Map'), MapCache = require('./_MapCache');
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"lpr3N","./_Map":"coy6p","./_MapCache":"7Yxy9"}],"coy6p":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Map1 = getNative(root, 'Map');
module.exports = Map1;

},{"./_getNative":"iGRIN","./_root":"9w0IQ"}],"iGRIN":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'), getValue = require('./_getValue');
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"dLuo9","./_getValue":"gc1r1"}],"dLuo9":[function(require,module,exports) {
var isFunction = require('./isFunction'), isMasked = require('./_isMasked'), isObject = require('./isObject'), toSource = require('./_toSource');
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"4vlJm","./_isMasked":"1y7kD","./isObject":"hZIId","./_toSource":"cvYQ0"}],"4vlJm":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObject = require('./isObject');
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"hvTL4","./isObject":"hZIId"}],"hvTL4":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), getRawTag = require('./_getRawTag'), objectToString = require('./_objectToString');
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol1 ? Symbol1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"g8MbF","./_getRawTag":"emeHW","./_objectToString":"agUt8"}],"g8MbF":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Symbol1 = root.Symbol;
module.exports = Symbol1;

},{"./_root":"9w0IQ"}],"9w0IQ":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},{"./_freeGlobal":"jmyqD"}],"jmyqD":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"emeHW":[function(require,module,exports) {
var Symbol1 = require('./_Symbol');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol1 ? Symbol1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"g8MbF"}],"agUt8":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"hZIId":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

},{}],"1y7kD":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"9Mghd"}],"9Mghd":[function(require,module,exports) {
var root = require('./_root');
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

},{"./_root":"9w0IQ"}],"cvYQ0":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {
        }
        try {
            return func + '';
        } catch (e) {
        }
    }
    return '';
}
module.exports = toSource;

},{}],"gc1r1":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"7Yxy9":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'), mapCacheDelete = require('./_mapCacheDelete'), mapCacheGet = require('./_mapCacheGet'), mapCacheHas = require('./_mapCacheHas'), mapCacheSet = require('./_mapCacheSet');
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"6Ne3T","./_mapCacheDelete":"22plT","./_mapCacheGet":"3wvvK","./_mapCacheHas":"htO0S","./_mapCacheSet":"byIIq"}],"6Ne3T":[function(require,module,exports) {
var Hash = require('./_Hash'), ListCache = require('./_ListCache'), Map1 = require('./_Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map1 || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"fhJxO","./_ListCache":"lpr3N","./_Map":"coy6p"}],"fhJxO":[function(require,module,exports) {
var hashClear = require('./_hashClear'), hashDelete = require('./_hashDelete'), hashGet = require('./_hashGet'), hashHas = require('./_hashHas'), hashSet = require('./_hashSet');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"hM9wg","./_hashDelete":"6IRnr","./_hashGet":"7iYiL","./_hashHas":"dL6ja","./_hashSet":"2gbPb"}],"hM9wg":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {
    };
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"3CuNf"}],"3CuNf":[function(require,module,exports) {
var getNative = require('./_getNative');
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

},{"./_getNative":"iGRIN"}],"6IRnr":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"7iYiL":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"3CuNf"}],"dL6ja":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"3CuNf"}],"2gbPb":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"3CuNf"}],"22plT":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"14a95"}],"14a95":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"1vP10"}],"1vP10":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

},{}],"3wvvK":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"14a95"}],"htO0S":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"14a95"}],"byIIq":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"14a95"}],"eNrCs":[function(require,module,exports) {
var baseIsEqualDeep = require('./_baseIsEqualDeep'), isObjectLike = require('./isObjectLike');
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"6lC6G","./isObjectLike":"6ihSr"}],"6lC6G":[function(require,module,exports) {
var Stack = require('./_Stack'), equalArrays = require('./_equalArrays'), equalByTag = require('./_equalByTag'), equalObjects = require('./_equalObjects'), getTag = require('./_getTag'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isTypedArray = require('./isTypedArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"iSswE","./_equalArrays":"g3u8s","./_equalByTag":"aMfQp","./_equalObjects":"jVeSb","./_getTag":"6GSwf","./isArray":"9D9dp","./isBuffer":"ltSVx","./isTypedArray":"81D2R"}],"g3u8s":[function(require,module,exports) {
var SetCache = require('./_SetCache'), arraySome = require('./_arraySome'), cacheHas = require('./_cacheHas');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while((++index) < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue1, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue1 || equalFunc(arrValue, othValue1, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"2gBMJ","./_arraySome":"8Fdkb","./_cacheHas":"827sf"}],"2gBMJ":[function(require,module,exports) {
var MapCache = require('./_MapCache'), setCacheAdd = require('./_setCacheAdd'), setCacheHas = require('./_setCacheHas');
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while((++index) < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"7Yxy9","./_setCacheAdd":"jflqH","./_setCacheHas":"ciZM7"}],"jflqH":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"ciZM7":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"8Fdkb":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while((++index) < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"827sf":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"aMfQp":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), Uint8Array1 = require('./_Uint8Array'), eq = require('./eq'), equalArrays = require('./_equalArrays'), mapToArray = require('./_mapToArray'), setToArray = require('./_setToArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol1 ? Symbol1.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array1(object), new Uint8Array1(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"g8MbF","./_Uint8Array":"j5ZqO","./eq":"2rhE2","./_equalArrays":"g3u8s","./_mapToArray":"h94fo","./_setToArray":"felNW"}],"j5ZqO":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Uint8Array1 = root.Uint8Array;
module.exports = Uint8Array1;

},{"./_root":"9w0IQ"}],"h94fo":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"felNW":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"jVeSb":[function(require,module,exports) {
var getAllKeys = require('./_getAllKeys');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while((++index) < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"kHVQG"}],"kHVQG":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'), getSymbols = require('./_getSymbols'), keys = require('./keys');
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"k9ii8","./_getSymbols":"fHCPQ","./keys":"5XTkY"}],"k9ii8":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'), isArray = require('./isArray');
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"gQq20","./isArray":"9D9dp"}],"gQq20":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while((++index) < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"9D9dp":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"fHCPQ":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'), stubArray = require('./stubArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"d3Wlg","./stubArray":"bOAZN"}],"d3Wlg":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while((++index) < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"bOAZN":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"5XTkY":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'), baseKeys = require('./_baseKeys'), isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"e7sMV","./_baseKeys":"77Ehy","./isArrayLike":"eRE0j"}],"e7sMV":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'), isArguments = require('./isArguments'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isIndex = require('./_isIndex'), isTypedArray = require('./isTypedArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"dkOAg","./isArguments":"fTXal","./isArray":"9D9dp","./isBuffer":"ltSVx","./_isIndex":"2RH5V","./isTypedArray":"81D2R"}],"dkOAg":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while((++index) < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"fTXal":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'), isObjectLike = require('./isObjectLike');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

},{"./_baseIsArguments":"fgSe8","./isObjectLike":"6ihSr"}],"fgSe8":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"hvTL4","./isObjectLike":"6ihSr"}],"6ihSr":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

},{}],"ltSVx":[function(require,module,exports) {
var root = require('./_root'), stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"9w0IQ","./stubFalse":"4E65x"}],"4E65x":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"2RH5V":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"81D2R":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"bHMiV","./_baseUnary":"4SrX0","./_nodeUtil":"2vDMj"}],"bHMiV":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isLength = require('./isLength'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {
};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"hvTL4","./isLength":"7FAwN","./isObjectLike":"6ihSr"}],"7FAwN":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"4SrX0":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"2vDMj":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {
    }
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"jmyqD"}],"77Ehy":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'), nativeKeys = require('./_nativeKeys');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"3LrfV","./_nativeKeys":"kM37V"}],"3LrfV":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"kM37V":[function(require,module,exports) {
var overArg = require('./_overArg');
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"fkGvn"}],"fkGvn":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"eRE0j":[function(require,module,exports) {
var isFunction = require('./isFunction'), isLength = require('./isLength');
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"4vlJm","./isLength":"7FAwN"}],"6GSwf":[function(require,module,exports) {
var DataView1 = require('./_DataView'), Map1 = require('./_Map'), Promise1 = require('./_Promise'), Set1 = require('./_Set'), WeakMap1 = require('./_WeakMap'), baseGetTag = require('./_baseGetTag'), toSource = require('./_toSource');
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView1), mapCtorString = toSource(Map1), promiseCtorString = toSource(Promise1), setCtorString = toSource(Set1), weakMapCtorString = toSource(WeakMap1);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView1 && getTag(new DataView1(new ArrayBuffer(1))) != dataViewTag || Map1 && getTag(new Map1) != mapTag || Promise1 && getTag(Promise1.resolve()) != promiseTag || Set1 && getTag(new Set1) != setTag || WeakMap1 && getTag(new WeakMap1) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"9oCuB","./_Map":"coy6p","./_Promise":"fgNZD","./_Set":"2Jmwe","./_WeakMap":"7zpLL","./_baseGetTag":"hvTL4","./_toSource":"cvYQ0"}],"9oCuB":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var DataView1 = getNative(root, 'DataView');
module.exports = DataView1;

},{"./_getNative":"iGRIN","./_root":"9w0IQ"}],"fgNZD":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Promise1 = getNative(root, 'Promise');
module.exports = Promise1;

},{"./_getNative":"iGRIN","./_root":"9w0IQ"}],"2Jmwe":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Set1 = getNative(root, 'Set');
module.exports = Set1;

},{"./_getNative":"iGRIN","./_root":"9w0IQ"}],"7zpLL":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var WeakMap1 = getNative(root, 'WeakMap');
module.exports = WeakMap1;

},{"./_getNative":"iGRIN","./_root":"9w0IQ"}],"frDcI":[function(require,module,exports) {
var isStrictComparable = require('./_isStrictComparable'), keys = require('./keys');
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"./_isStrictComparable":"Gt0en","./keys":"5XTkY"}],"Gt0en":[function(require,module,exports) {
var isObject = require('./isObject');
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"./isObject":"hZIId"}],"b6wAM":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"EwUbH":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual'), get = require('./get'), hasIn = require('./hasIn'), isKey = require('./_isKey'), isStrictComparable = require('./_isStrictComparable'), matchesStrictComparable = require('./_matchesStrictComparable'), toKey = require('./_toKey');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"eNrCs","./get":"5Dzuw","./hasIn":"ktfle","./_isKey":"9Nx6f","./_isStrictComparable":"Gt0en","./_matchesStrictComparable":"b6wAM","./_toKey":"8TD4q"}],"5Dzuw":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"awr9U"}],"awr9U":[function(require,module,exports) {
var castPath = require('./_castPath'), toKey = require('./_toKey');
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"9StUN","./_toKey":"8TD4q"}],"9StUN":[function(require,module,exports) {
var isArray = require('./isArray'), isKey = require('./_isKey'), stringToPath = require('./_stringToPath'), toString = require('./toString');
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"9D9dp","./_isKey":"9Nx6f","./_stringToPath":"k9O0Q","./toString":"aVIvq"}],"9Nx6f":[function(require,module,exports) {
var isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"9D9dp","./isSymbol":"hrV74"}],"hrV74":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"hvTL4","./isObjectLike":"6ihSr"}],"k9O0Q":[function(require,module,exports) {
var memoizeCapped = require('./_memoizeCapped');
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push('');
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"5MsEb"}],"5MsEb":[function(require,module,exports) {
var memoize = require('./memoize');
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"bEREl"}],"bEREl":[function(require,module,exports) {
var MapCache = require('./_MapCache');
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"7Yxy9"}],"aVIvq":[function(require,module,exports) {
var baseToString = require('./_baseToString');
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"cmpT2"}],"cmpT2":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), arrayMap = require('./_arrayMap'), isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol1 ? Symbol1.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

},{"./_Symbol":"g8MbF","./_arrayMap":"dYHNK","./isArray":"9D9dp","./isSymbol":"hrV74"}],"8TD4q":[function(require,module,exports) {
var isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) return value;
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

},{"./isSymbol":"hrV74"}],"ktfle":[function(require,module,exports) {
var baseHasIn = require('./_baseHasIn'), hasPath = require('./_hasPath');
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"./_baseHasIn":"9PKM5","./_hasPath":"cM0pW"}],"9PKM5":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"cM0pW":[function(require,module,exports) {
var castPath = require('./_castPath'), isArguments = require('./isArguments'), isArray = require('./isArray'), isIndex = require('./_isIndex'), isLength = require('./isLength'), toKey = require('./_toKey');
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while((++index) < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || (++index) != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"./_castPath":"9StUN","./isArguments":"fTXal","./isArray":"9D9dp","./_isIndex":"2RH5V","./isLength":"7FAwN","./_toKey":"8TD4q"}],"czYGV":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"iPjKu":[function(require,module,exports) {
var baseProperty = require('./_baseProperty'), basePropertyDeep = require('./_basePropertyDeep'), isKey = require('./_isKey'), toKey = require('./_toKey');
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"./_baseProperty":"4veJR","./_basePropertyDeep":"kcJfG","./_isKey":"9Nx6f","./_toKey":"8TD4q"}],"4veJR":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"kcJfG":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"./_baseGet":"awr9U"}],"a48fZ":[function(require,module,exports) {
var baseEach = require('./_baseEach'), isArrayLike = require('./isArrayLike');
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection1) {
        result[++index] = iteratee(value, key, collection1);
    });
    return result;
}
module.exports = baseMap;

},{"./_baseEach":"jYjd1","./isArrayLike":"eRE0j"}],"jYjd1":[function(require,module,exports) {
var baseForOwn = require('./_baseForOwn'), createBaseEach = require('./_createBaseEach');
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */ var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;

},{"./_baseForOwn":"jusbB","./_createBaseEach":"dVfvH"}],"jusbB":[function(require,module,exports) {
var baseFor = require('./_baseFor'), keys = require('./keys');
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

},{"./_baseFor":"aKgKO","./keys":"5XTkY"}],"aKgKO":[function(require,module,exports) {
var createBaseFor = require('./_createBaseFor');
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;

},{"./_createBaseFor":"r2Ww3"}],"r2Ww3":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
module.exports = createBaseFor;

},{}],"dVfvH":[function(require,module,exports) {
var isArrayLike = require('./isArrayLike');
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) return collection;
        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while(fromRight ? index-- : (++index) < length){
            if (iteratee(iterable[index], index, iterable) === false) break;
        }
        return collection;
    };
}
module.exports = createBaseEach;

},{"./isArrayLike":"eRE0j"}],"6Pnpq":[function(require,module,exports) {
var _state = require("../state");
class ChatPage extends HTMLElement {
    connectedCallback() {
        _state.state.subscribe(()=>{
            const currentState = _state.state.getState();
            this.messages = currentState.messages;
            this.render();
        });
        this.render();
    }
    addListeners() {
        const form = this.querySelector(".submit-message");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const target = e.target;
            _state.state.pushMessage(target["new-message"].value);
        });
    }
    render() {
        this.innerHTML = `\n    <div>\n    <h1>Chat Page</h1>\n      <div class="messages">\n        ${this.messages.map((m)=>{
            return `<div class="message">${m.from}: ${m.message}</div>`;
        }).join("")}\n      </div>\n      <form class="submit-message">\n          <input type="text" name="new-message">\n          <button>Enviar</button>\n      </form>                \n    </div>\n   `;
        this.addListeners();
    }
    constructor(...args){
        super(...args);
        this.messages = [];
    }
}
customElements.define("x-chat-page", ChatPage);

},{"../state":"28XHA"}],"b2iia":[function(require,module,exports) {
var _router = require("@vaadin/router");
const router = new _router.Router(document.querySelector(".root"));
router.setRoutes([
    {
        path: "/",
        component: "x-home-page"
    },
    {
        path: "/chat",
        component: "x-chat-page"
    }, 
]);

},{"@vaadin/router":"kFgop"}]},["eSrN1","4aleK"], "4aleK", "parcelRequire44f1")

//# sourceMappingURL=index.eb114a45.js.map
