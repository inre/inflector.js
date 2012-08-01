Inflector.js
============

Examples
--------

```javascript
var Inflector = require('inflector');

expect(Inflector.ordinalize('1')).toBe('1st');
expect(Inflector.pluralize('user')).toBe('users');
expect(Inflector.singularize('accounts')).toBe('account');
expect(Inflector.underscore('getValue')).toBe('get_value');
expect(Inflector.dasherize('backgroundColor')).toBe('background-color');
```