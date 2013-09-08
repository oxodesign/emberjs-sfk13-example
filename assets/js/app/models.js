App.Employee = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),

    company: DS.belongsTo('company')
});

App.Company = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),

    employees: DS.hasMany('employee', {async: true})
});



//App.Company.FIXTURES = [
//    {id: 1, name: 'Empirio AS', description: 'Empirio AS is a web development company located in Norway'},
//    {id: 2, name: 'OXODesign TEAM', description: 'OXODesign TEAM was a web development company located in Norway'}
//];