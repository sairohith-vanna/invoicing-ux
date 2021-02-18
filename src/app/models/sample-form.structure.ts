import { FormStructure } from './form-structure';

/**
 * Provides form structures for pages throughout the
 * application.
 */
export class AppFormStructure {

  public static readonly samplePageFormStructure: FormStructure[] = [
    {
      label: {
        text: 'First Name',
        labelFor: 'firstName'
      },
      field: {
        inputType: 'text',
        name: 'firstName',
        id: 'firstName',
        placeholder: 'First Name',
        cssClass: 'form-control form-control-sm col-4',
        validations: [
          'required'
        ]
      }
    },
    {
      label: {
        text: 'Last Name',
        labelFor: 'lastName'
      },
      field: {
        inputType: 'text',
        name: 'lastName',
        id: 'lastName',
        placeholder: 'Last Name',
        cssClass: 'form-control form-control-sm col-4',
        validations: []
      }
    }
  ];
}
