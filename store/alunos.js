// aluno.js
const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL';

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({ type: MODIFICAR_EMAIL, payload: email });

const initialState = {
  nome: 'Carol',
  email: 'ca@rol.com',
  dias: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.dias++;
      break;
    case REDUZIR_TEMPO:
      state.dias--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;
