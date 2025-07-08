const nomeDeUsuario = Symbol("nomeDeUsuario");
const senha = Symbol("senha");

const usuario = {
  [nomeDeUsuario]: "amandacavallaro",
  [senha]: "123456",
};
console.log(usuario.nomeDeUsuario);
console.log(usuario.senha);

