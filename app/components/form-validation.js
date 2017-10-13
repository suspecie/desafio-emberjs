import Ember from 'ember';
import formValidation from 'ember-form-validation/mixins/form-validation';
 

export default Ember.Component.extend(formValidation, {
    validate: {
      form: {
        name: {
          required: true,
          min: 3,
          format: 'word',
          message: 'Name error',
          // A more specific message tailored to the 'required' test
          requiredMessage: 'Preencha o nome corretamente.'
        },
        lastname: {
            required: true,
            min: 3,
            format: 'word',
            message: 'Name error',
            // A more specific message tailored to the 'required' test
            requiredMessage: 'Preencha o sobrenome corretamente.'
          },
      }
    },
    actions: {
        yourAction() {
          this.send('validate_form_action');
        }
      }
  })