export default function yupValidPassword() {
  return this.test('Validate password', function(value) {
    if(value) {
      const { createError } = this;
      const errorMessages = validatePassword(value);

      if(errorMessages.length > 0)
        return createError({ message: errorMessages[0] });
      else 
        return true;
    }
  });
}

export function validatePassword(password) {
  let errorMessages = [];

  if(fewCharacters(password))
    errorMessages.push('The password must have at least 8 characters.');

  if(muchCharacters(password))
    errorMessages.push('The password cannot contain more than 12 characters.');

  if(!hasLetter(password))
    errorMessages.push('The password must contain one letter.');

  if(!hasNumber(password))
    errorMessages.push('The password must contain one number.');

  return errorMessages;
}

function fewCharacters(password) {
  return password.length < 8;
}

function muchCharacters(password) {
  return password.length >= 12;
}

function hasLetter(password) {
  return password.match(/[a-z]/i) ? true : false;
}

function hasNumber(password) {
  return password.match(/[0-9]/i) ? true : false;
}
