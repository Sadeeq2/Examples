var list;

$(function () {
    function listViewModel() {
        var self = this;

        self.listvalue = ko.observable("listViewModel");

        self.init = function () {
            console.log("listViewModel.init");
        };
    }

    list = new listViewModel();
})