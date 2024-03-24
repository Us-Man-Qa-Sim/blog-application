import { ValueTransformer } from 'typeorm';

export class PasswordTransformer implements ValueTransformer {
  to(value: string) {
    if (value) {
      return value + 123;
    } else {
      return null;
    }
  }
  from(value: string) {
    return value;
  }
}
