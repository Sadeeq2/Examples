var page;

$(function () {
    function pageViewModel() {
        var self = this;

        self.pagevalue = ko.observable("pageViewmodel");

        self.init = function() {
            console.log("pageViewModel.init");
        };
    }

    page = new pageViewModel();
})