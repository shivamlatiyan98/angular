import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class UsernameValidators {
  static invalidSymbols: string[] = ['@', '$', '%', '*'];
  static validUsernames: string[] = ['shivam', 'manpreet'];

  static checkValidSymbol = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (control.value === '') return null;

    for (
      let index = 0;
      index < UsernameValidators.invalidSymbols.length;
      index++
    ) {
      const symbol = UsernameValidators.invalidSymbols[index];
      if (control.value.includes(symbol)) return { invalidSymbol: true };
    }

    return null;
  };


  static checkValidUsername = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!UsernameValidators.validUsernames.includes(control.value)) {
          resolve({ invalidUsername: true });
        } else {
          resolve(null);
        }
      }, 1200);
    });
  };
}
