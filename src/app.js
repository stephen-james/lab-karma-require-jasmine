define(["jquery"], function ($) {
    "use strict";

    var App = function (target) {
        this.target = target || $("body");
    };

    App.prototype.start = function () {
        this.target.html("App Started!");
    };

    return App;
});
