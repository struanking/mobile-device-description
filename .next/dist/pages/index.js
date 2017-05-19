'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _indexLocal = require('./index.local.scss');

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