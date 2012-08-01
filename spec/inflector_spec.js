describe("Inflector", function() {

  var OrdinalNumbers = {
      "-1" : "-1st",
      "-2" : "-2nd",
      "-3" : "-3rd",
      "-4" : "-4th",
      "-5" : "-5th",
      "-6" : "-6th",
      "-7" : "-7th",
      "-8" : "-8th",
      "-9" : "-9th",
      "-10" : "-10th",
      "-11" : "-11th",
      "-12" : "-12th",
      "-13" : "-13th",
      "-14" : "-14th",
      "-20" : "-20th",
      "-21" : "-21st",
      "-22" : "-22nd",
      "-23" : "-23rd",
      "-24" : "-24th",
      "-100" : "-100th",
      "-101" : "-101st",
      "-102" : "-102nd",
      "-103" : "-103rd",
      "-104" : "-104th",
      "-110" : "-110th",
      "-111" : "-111th",
      "-112" : "-112th",
      "-113" : "-113th",
      "-1000" : "-1000th",
      "-1001" : "-1001st",
      "0" : "0th",
      "1" : "1st",
      "2" : "2nd",
      "3" : "3rd",
      "4" : "4th",
      "5" : "5th",
      "6" : "6th",
      "7" : "7th",
      "8" : "8th",
      "9" : "9th",
      "10" : "10th",
      "11" : "11th",
      "12" : "12th",
      "13" : "13th",
      "14" : "14th",
      "20" : "20th",
      "21" : "21st",
      "22" : "22nd",
      "23" : "23rd",
      "24" : "24th",
      "100" : "100th",
      "101" : "101st",
      "102" : "102nd",
      "103" : "103rd",
      "104" : "104th",
      "110" : "110th",
      "111" : "111th",
      "112" : "112th",
      "113" : "113th",
      "1000" : "1000th",
      "1001" : "1001st"
  };

  var SingularToPlural = {
    "search"      : "searches",
    "switch"      : "switches",
    "fix"         : "fixes",
    "box"         : "boxes",
    "process"     : "processes",
    "address"     : "addresses",
    "case"        : "cases",
    "stack"       : "stacks",
    "wish"        : "wishes",
    "fish"        : "fish",
    //"jeans"       : "jeans",
    //"funky jeans" : "funky jeans",
    //"my money"    : "my money",

    "category"    : "categories",
    "query"       : "queries",
    "ability"     : "abilities",
    "agency"      : "agencies",
    "movie"       : "movies",

    "archive"     : "archives",

    "index"       : "indices",

    "wife"        : "wives",
    "safe"        : "saves",
    "half"        : "halves",

    "move"        : "moves",

    //"salesperson" : "salespeople",
    "person"      : "people",

    //"spokesman"   : "spokesmen",
    "man"         : "men",
    "woman"       : "women",

    "basis"       : "bases",
    "diagnosis"   : "diagnoses",
    "diagnosis_a" : "diagnosis_as",

    "datum"       : "data",
    "medium"      : "media",
    "stadium"     : "stadia",
    "analysis"    : "analyses",
    //"my_analysis" : "my_analyses",

    //"node_child"  : "node_children",
    "child"       : "children",

    "experience"  : "experiences",
    "day"         : "days",

    "comment"     : "comments",
    "foobar"      : "foobars",
    "newsletter"  : "newsletters",

    //"old_news"    : "old_news",
    "news"        : "news",

    "series"      : "series",
    "species"     : "species",

    "quiz"        : "quizzes",

    "perspective" : "perspectives",

    "ox"          : "oxen",
    "photo"       : "photos",
    "buffalo"     : "buffaloes",
    "tomato"      : "tomatoes",
    "dwarf"       : "dwarves",
    "elf"         : "elves",
    "information" : "information",
    "equipment"   : "equipment",
    "bus"         : "buses",
    "status"      : "statuses",
    //"status_code" : "status_codes",
    "mouse"       : "mice",

    "louse"       : "lice",
    "house"       : "houses",
    "octopus"     : "octopi",
    "virus"       : "viri",
    "alias"       : "aliases",
    "portfolio"   : "portfolios",

    "vertex"      : "vertices",
    "matrix"      : "matrices",
    //"matrix_fu"   : "matrix_fus",

    "axis"        : "axes",
    "taxi"        : "taxis", // prevents regression
    "testis"      : "testes",
    "crisis"      : "crises",

    "rice"        : "rice",
    "shoe"        : "shoes",

    "horse"       : "horses",
    "prize"       : "prizes",
    "edge"        : "edges",

    "cow"         : "kine",
    "database"    : "databases",

    // regression tests against improper inflection regexes
    //"|ice"        : "|ices",
    //"|ouse"       : "|ouses",
    "slice"       : "slices",
    //"police"      : "police"
  };

  var CamelToUnderscore = {
    "getValue"            : "get_value",
    "style"               : "style",
    "backgroundColor"     : "background_color"
  }

  var CamelToDash = {
    "getValue"            : "get-value",
    "font_family"         : "font-family",
    "style"               : "style",
    "backgroundColor"     : "background-color"
  }

  beforeEach(function() {
    Inflector = require("inflector");
  });

  it("ordinalize", function() {
    for(var number in OrdinalNumbers) {
      expect(Inflector.ordinalize(number)).toBe(OrdinalNumbers[number]);
    };
  });

  it("pluralize singular", function() {
    for(var singular in SingularToPlural) {
      var plural = SingularToPlural[singular];
      expect(Inflector.pluralize(singular)).toBe(plural);
    }
  });

  it("camelize", function() {
    for(var camel in CamelToUnderscore) {
      var underscore = CamelToUnderscore[camel];
      expect(Inflector.camelize(underscore)).toBe(camel);
    }
  });

  it("underscore", function() {
    for(var camel in CamelToUnderscore) {
      var underscore = CamelToUnderscore[camel];
      expect(Inflector.underscore(camel)).toBe(underscore);
    }
  });

  it("dasherize", function() {
    for(var camel in CamelToDash) {
      var dash = CamelToDash[camel];
      expect(Inflector.dasherize(camel)).toBe(dash);
    }
  });  
});