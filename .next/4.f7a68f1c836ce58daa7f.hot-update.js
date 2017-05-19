webpackHotUpdate(4,{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(77);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(75);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(28);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(238);

var _head2 = _interopRequireDefault(_head);

var _Header = __webpack_require__(568);

var _Header2 = _interopRequireDefault(_Header);

var _indexLocal = __webpack_require__(567);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/struan/projects/mobile-device-description/pages/index.js?entry';
// import Link from 'next/link'


// export interface IndexPageProps {
//   devices: Array<any>;
// }

// search -> dispatch action -> promise -> reducer

/*
  CSS
  ---
  Global css: sass file that contains and imports common modules -> static/global.css
  _document.js loads static/global.css to <Head>
 */

/*
  Components
  ----------
  Search field
  Search options: device, brand
  Filters: exclude discontinued
  Gallery
  Gallery item
  Device detail

  Actions
  -------
  Search payload
  Filter update

  Reducers
  --------


  Store
  -----s
  Search results
  Search history
  Filters
 */

var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      // <Head><style dangerouslySetInnerHTML={{__html: styles}} /></Head>
      var devices = this.props.devices;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexLocal.stylesheet }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement('h1', { className: _indexLocal.classNames.bg, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Title'), _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('label', { htmlFor: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Search'), _react2.default.createElement('input', { type: 'text', id: 'search', name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('fieldset', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('input', { type: 'checkbox', name: 'device', id: 'device', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement('label', { htmlFor: 'device', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Device'), _react2.default.createElement('input', { type: 'checkbox', name: 'brend', id: 'brand', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement('label', { htmlFor: 'brand', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Brand')), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Search')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {});

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/struan/projects/mobile-device-description/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/struan/projects/mobile-device-description/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUzs7OztBQUNGOzs7O0FBRVk7Ozs7QUFDb0I7Ozs7O0FBRnZDOzs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQk07Ozs7Ozs7Ozs7OzZCQU1GO0FBRFE7VUFFQSxVQUFZLEtBQUssTUFDekI7OzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUFNO0FBQU47QUFBQSxrREFBYSx5QkFBeUIsRUFBUztvQkFBekM7c0JBQ047QUFETTsyQkFDTDs7b0JBQUQ7c0JBQ0E7QUFEQTtBQUFBLDBCQUNBLHNCQUFJLFdBQVcsdUJBQVc7b0JBQTFCO3NCQUFBO0FBQUE7U0FDQTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNFLHlCQUFPLFNBQVE7b0JBQWY7c0JBQUE7QUFBQTtTQUNBLG9EQUFPLE1BQUssUUFBTyxJQUFHLFVBQVMsTUFBSztvQkFBcEM7c0JBRUE7QUFGQTswQkFFQTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLGtEQUNTLE1BQUssWUFBVyxNQUFLLFVBQVMsSUFBRztvQkFBeEM7c0JBQ0E7QUFEQTswQkFDQSx5QkFBTyxTQUFRO29CQUFmO3NCQUFBO0FBQUE7U0FFQSxvREFBTyxNQUFLLFlBQVcsTUFBSyxTQUFRLElBQUc7b0JBQXZDO3NCQUNBO0FBREE7MEJBQ0EseUJBQU8sU0FBUTtvQkFBZjtzQkFBQTtBQUFBO1NBR0Y7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUlQOzs7Ozs7Ozs7O2lEQTNCUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCWDs7a0JBQWUsVSIsImZpbGUiOiI0LmY3YTY4ZjFjODM2Y2U1OGRhYTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IHN0eWxlc2hlZXQsIGNsYXNzTmFtZXMgfSBmcm9tICcuL2luZGV4LmxvY2FsLnNjc3MnO1xuXG4vLyBleHBvcnQgaW50ZXJmYWNlIEluZGV4UGFnZVByb3BzIHtcbi8vICAgZGV2aWNlczogQXJyYXk8YW55Pjtcbi8vIH1cblxuLy8gc2VhcmNoIC0+IGRpc3BhdGNoIGFjdGlvbiAtPiBwcm9taXNlIC0+IHJlZHVjZXJcblxuLypcbiAgQ1NTXG4gIC0tLVxuICBHbG9iYWwgY3NzOiBzYXNzIGZpbGUgdGhhdCBjb250YWlucyBhbmQgaW1wb3J0cyBjb21tb24gbW9kdWxlcyAtPiBzdGF0aWMvZ2xvYmFsLmNzc1xuICBfZG9jdW1lbnQuanMgbG9hZHMgc3RhdGljL2dsb2JhbC5jc3MgdG8gPEhlYWQ+XG4gKi9cblxuLypcbiAgQ29tcG9uZW50c1xuICAtLS0tLS0tLS0tXG4gIFNlYXJjaCBmaWVsZFxuICBTZWFyY2ggb3B0aW9uczogZGV2aWNlLCBicmFuZFxuICBGaWx0ZXJzOiBleGNsdWRlIGRpc2NvbnRpbnVlZFxuICBHYWxsZXJ5XG4gIEdhbGxlcnkgaXRlbVxuICBEZXZpY2UgZGV0YWlsXG5cbiAgQWN0aW9uc1xuICAtLS0tLS0tXG4gIFNlYXJjaCBwYXlsb2FkXG4gIEZpbHRlciB1cGRhdGVcblxuICBSZWR1Y2Vyc1xuICAtLS0tLS0tLVxuXG5cbiAgU3RvcmVcbiAgLS0tLS1zXG4gIFNlYXJjaCByZXN1bHRzXG4gIFNlYXJjaCBoaXN0b3J5XG4gIEZpbHRlcnNcbiAqL1xuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy8gPEhlYWQ+PHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdHlsZXN9fSAvPjwvSGVhZD5cbiAgICBjb25zdCB7IGRldmljZXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+PHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdHlsZXNoZWV0fX0gLz48L0hlYWQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5iZ30+VGl0bGU8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiPlNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgLz5cblxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZGV2aWNlXCIgaWQ9XCJkZXZpY2VcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXZpY2VcIj5EZXZpY2U8L2xhYmVsPlxuXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImJyZW5kXCIgaWQ9XCJicmFuZFwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyYW5kXCI+QnJhbmQ8L2xhYmVsPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9