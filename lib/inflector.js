
define(["exports"], function(exports) {

  var plural = [
      [/(quiz)$/i,               "$1zes"  ],
      [/^(ox)$/i,                "$1en"   ],
      [/([m|l])ouse$/i,          "$1ice"  ],
      [/(matr|vert|ind)ix|ex$/i, "$1ices" ],
      [/(x|ch|ss|sh)$/i,         "$1es"   ],
      [/([^aeiouy]|qu)y$/i,      "$1ies"  ],
      [/(hive)$/i,               "$1s"    ],
      [/(?:([^f])fe|([lr])f)$/i, "$1$2ves"],
      [/sis$/i,                  "ses"    ],
      [/([ti])um$/i,             "$1a"    ],
      [/(buffal|tomat)o$/i,      "$1oes"  ],
      [/(bu)s$/i,                "$1ses"  ],
      [/(alias|status)$/i,       "$1es"   ],
      [/(octop|vir)us$/i,        "$1i"    ],
      [/(ax|test)is$/i,          "$1es"   ],
      [/s$/i,                    "s"      ],
      [/$/,                      "s"      ]
  ];

  var singular = [
      [/(quiz)zes$/i,                                                    "$1"     ],
      [/(matr)ices$/i,                                                   "$1ix"   ],
      [/(vert|ind)ices$/i,                                               "$1ex"   ],
      [/^(ox)en/i,                                                       "$1"     ],
      [/(alias|status)es$/i,                                             "$1"     ],
      [/(octop|vir)i$/i,                                                 "$1us"   ],
      [/(cris|ax|test)es$/i,                                             "$1is"   ],
      [/(shoe)s$/i,                                                      "$1"     ],
      [/(o)es$/i,                                                        "$1"     ],
      [/(bus)es$/i,                                                      "$1"     ],
      [/([m|l])ice$/i,                                                   "$1ouse" ],
      [/(x|ch|ss|sh)es$/i,                                               "$1"     ],
      [/(m)ovies$/i,                                                     "$1ovie" ],
      [/(s)eries$/i,                                                     "$1eries"],
      [/([^aeiouy]|qu)ies$/i,                                            "$1y"    ],
      [/([lr])ves$/i,                                                    "$1f"    ],
      [/(tive)s$/i,                                                      "$1"     ],
      [/(hive)s$/i,                                                      "$1"     ],
      [/([^f])ves$/i,                                                    "$1fe"   ],
      [/(^analy)ses$/i,                                                  "$1sis"  ],
      [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis"],
      [/([ti])a$/i,                                                      "$1um"   ],
      [/(n)ews$/i,                                                       "$1ews"  ],
      [/s$/i,                                                            ""       ]
  ];

  var irregular = [
      ['move',   'moves'   ],
      ['sex',    'sexes'   ],
      ['child',  'children'],
      ['man',    'men'     ],
      ['woman',  'women'   ],
      ['person', 'people'  ],
      ['cow',    'kine'    ],
      ['database', 'databases']
  ];

  var uncountable = [
      "sheep",
      "fish",
      "series",
      "species",
      "money",
      "rice",
      "information",
      "equipment"
  ];

  exports.ordinalize = function(number) {
      var positive = Math.abs(parseInt(number));
      if (11 <= positive % 100 && positive % 100 <= 13) {
          return number + "th";
      } else {
          switch (positive % 10) {
              case  1: return number + "st";
              case  2: return number + "nd";
              case  3: return number + "rd";
              default: return number + "th";
          }
      }
  };

  exports.pluralize = function(word) {
      for (var i = 0; i < uncountable.length; i++) {
          var match = uncountable[i];
          if (word.toLowerCase() == match) {
              return match;
          }
      }
      for (var i = 0; i < irregular.length; i++) {
          var singular_word = irregular[i][0];
          var plural_word   = irregular[i][1];
          if ((word.toLowerCase() == singular_word) || (word == plural_word)) {
              return plural_word;
          }
      }
      for (var i = 0; i < plural.length; i++) {
          var regex          = plural[i][0];
          var replace_string = plural[i][1];
          if (regex.test(word)) {
              return word.replace(regex, replace_string);
          }
      }
  };

  exports.singularize = function(word) {
      for (var i = 0; i < uncountable.length; i++) {
          var match = uncountable[i];
          if (word.toLowerCase() == match) {
              return match;
          }
      }
      for (var i = 0; i < irregular.length; i++) {
          var singular_word = irregular[i][0];
          var plural_word   = irregular[i][1];
          if ((word.toLowerCase() == singular_word) || (word == plural_word)) {
              return singular_word;
          }
      }
      for (var i = 0; i < singular.length; i++) {
          var regex          = singular[i][0];
          var replace_string = singular[i][1];
          if (regex.test(word)) {
              return word.replace(regex, replace_string);
          }
      }
  };

  exports.camelize = function (word) {
    return word.replace(/[_|-]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  };

  exports.dasherize = function (word) {
    return word.replace(/::/g, '/')
             .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
             .replace(/([a-z\d])([A-Z])/g, '$1-$2')
             .replace(/_/, '-')
             .toLowerCase();
  };

  exports.underscore = function (word) {
    return word.replace(/::/g, '/')
             .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
             .replace(/([a-z\d])([A-Z])/g, '$1_$2')
             .toLowerCase();
  };
});