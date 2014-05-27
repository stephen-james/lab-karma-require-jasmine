define(['app', 'jquery'], function (App, $) {

    describe("when the app starts", function () {
        it("outputs 'App Started!' in the target", function () {
            var target = $("<div></div>");

            var app = new App(target);
            app.start();

            expect(target.html()).toEqual("App Started!");
        });
    });
});
