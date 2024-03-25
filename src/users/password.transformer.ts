import { ValueTransformer } from 'typeorm';
import { UserUtils } from './../utils/user.utils';

export class PasswordTransformer implements ValueTransformer {
  to(value: string) {
    if (value) {
      return UserUtils.generateHash(value);
    } else {
      return null;
    }
  }
  from(value: string) {
    return value;
  }
}
