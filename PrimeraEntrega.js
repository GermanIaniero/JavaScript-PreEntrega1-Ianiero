let usuario;
let pass;
let email;
let nombre;
let validausuario;
let validapass;
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
usuario = 'Genio@2022.com';
pass = 'Pass12345';

nombre = prompt('Ponga su nombre');
validausuario = prompt('Ponga su usuario');
validapass = prompt('Ponga su clave');

const ingresedatos = () => {
  validausuario = prompt('Ponga su usuario');
  validapass = prompt('Ponga su clave');
  validaciones(validapass, validausuario);
};

const validaciones = (validapass, validausuario, nombre) => {

    
  if (!validausuario.includes('@')) {
    alert('Tu usuario no contiene el simbolo @');
    return ingresedatos();
  } else if (!emailRegex.test(validausuario)){
     alert('Tu usuario no contiene un formato valido');
  } else if (validapass.length <= 2) {
    alert('Su contraseña es insegura, intentelo nuevamente');
    return ingresedatos();
  }else if (validausuario !== usuario && validapass !== pass) {
    alert(
      'Usuario y clave incorrecta, debe ingresar el usuario y clave nuevamente'
    );
  } else if (validausuario !== usuario) {
    alert('Usuario incorrecta, debe ingresar el usuario nuevamente');
    return ingresedatos();
  } else if (!validapass.includes[0-9]) {
        alert ("Tu contraseña no contiene numeros, vuelva a ingresar")
        return ingresedatos();  
  } else if (validapass !== pass) {
    alert('Contraseña incorrecta, debe ingresar la contraseña nuevamente');
    return ingresedatos();
  

   
  } else {
    return bienvenido(nombre);
  }

  let acc1 = 0;

  for (let i = 0; i < validapass.length; i++) {
    if (typeof validapass[i] === 'string') {
      acc1 = acc1 + 1;
    }
  }
  if ((acc1 = 0)) {
    prompt(
      'La contraseña debe contener al menos un número, ingresela nuevamente'
    );
    return 'Debe ingresar la contraseña nuevamente';
  }
};

const bienvenido = (validapass, validausuario, usuario, pass) => {
  if (validausuario != usuario) {
    alert('no concuerda usuario');
  }

  if (validapass != pass) {
    alert('no concuerda el pass');
  } else {
    alert('login exitoso');
  }

};

ingresedatos();

bienvenido();
