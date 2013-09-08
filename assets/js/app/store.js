
App.Adapter = DS.LSAdapter;

App.Store = DS.Store.extend({
    revistion: 13,
    adapter: App.Adapter
});



//App.LSAdapter = DS.LSAdapter.extend({
//    namespace: 'company-directory'
//});

//App.Store.registerAdapter('App.Company', App.Adapter);

