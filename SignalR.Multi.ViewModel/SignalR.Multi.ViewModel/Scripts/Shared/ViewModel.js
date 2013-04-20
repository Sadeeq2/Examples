$(function () {
    var viewModels = {
        pageModel: typeof page !== 'undefined' ? page : null,
        listModel: typeof list !== 'undefined' ? list : null
    };

    $.connection.hub.start(function () {
        if (typeof page !== 'undefined')
            page.init();
        if (typeof list !== 'undefined')
            list.init();
    });

    ko.applyBindings(viewModels);
})