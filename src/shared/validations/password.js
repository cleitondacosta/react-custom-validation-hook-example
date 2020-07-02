export default function validatePassword(password) {
  let errorMessages = [];

  if(fewCharacters(password))
    errorMessages.push('A senha deve ter no mínimo 8 caracteres');

  if(muchCharacters(password))
    errorMessages.push('A senha deve ter no máximo 12 caracteres');

  if(!hasLetter(password))
    errorMessages.push('A senha deve ter pelo menos uma letra');

  if(!hasNumber(password))
    errorMessages.push('A senha deve ter pelo menos um número');

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
