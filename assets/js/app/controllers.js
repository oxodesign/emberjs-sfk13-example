
App.CompanyController = Ember.ObjectController.extend({
    isEditing: false,

    actions : {
        showform : function(){

            this.toggleProperty('isEditing');
            //this.set('isEditing', true);
        }
    }
});
