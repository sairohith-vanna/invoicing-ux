export interface FormStructure {
  label?: {
    text: string;
    labelFor: string;
  },
  field?: {
    inputType: string;
    name: string;
    id: string;
    placeholder: string;
    cssClass: string;
    validations: string[]
  }
}
