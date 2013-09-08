App.Router.map(function() {

    this.resource('companies', function(){
        this.route('new');
        this.resource('company', {path: ':company_id'}, function(){
            this.resource('employees', function(){
                this.route('new');
                this.resource('employee', {path: ':employee_id'});

            })
        });
    });

});