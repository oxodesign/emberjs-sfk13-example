
// Index
App.IndexRoute = Ember.Route.extend({});


// Companies
App.CompaniesRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('company');
    }
});

App.CompanyRoute = Ember.Route.extend({


    actions : {

        edit : function(model){
            model.save();

            this.get('controller').set('isEditing', false);
        },

        delete : function(model){
            if (confirm("Are you sure you want to delete the selected record ? Click OK to continue.")) {

                var self = this;

                //deletes record from store
                model.deleteRecord();

                //persist change
                model.save().then(function(){
                    self.transitionTo('companies');
                });
            }
        }
    }
});

App.CompaniesNewRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('company');
    },

    actions : {
        save : function(){
            var self = this;

            this.modelFor('companiesNew').save().then(function(){
                self.transitionTo('companies');
            });
        }
    }
});



// Employees
App.EmployeesRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('employee');
    }
});

App.EmployeesNewRoute = Ember.Route.extend({
    model: function(){
        return this.store.createRecord('employee');
    },


    actions : {
        save : function(){

            var company = this.modelFor('company');
            var employee = this.store.createRecord('employee');
            var self = this;

            employee.set('company', company);
            employee.set('name', this.get('controller').get('name'));
            employee.set('email', this.get('controller').get('email'));

            employee.save().then(function(){
                console.log('Model saved');
                //self.transitionTo('company', company);
            });

            company.get('employees').pushObject(employee);
            company.save().then(function(){
                console.log('Company saved');
            })




        }
    }
});
