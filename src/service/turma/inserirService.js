import {inserir} from '../../repository/turmasRepository.js'
import validarInsercao from '../../validation/turma/inserirValidation.js';


export default async function inserirService(turma) {
    validarInsercao(turma)

    let id = await inserir(turma);
    return id;
}