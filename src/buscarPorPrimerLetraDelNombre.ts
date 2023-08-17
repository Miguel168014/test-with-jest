import { contactos } from "./contactos";

const buscarPorPrimerLetraDelNombre = (letra: string) => {
  const encontradosPorNombre = contactos.filter((contacto) => {
    return contacto.first_name[0] === letra.toUpperCase();
  });

  const encontradosPorApellido = contactos.filter((contacto) => {
    return contacto.last_name[0] === letra.toUpperCase();
  });

  const encontradosPorNombreOrdenados = encontradosPorNombre.sort(
    (contactoA, contactoB) => {
      return contactoA.first_name.localeCompare(contactoB.first_name);
    }
  );

  const encontradosPorApellidoOrdenados = encontradosPorApellido.sort(
    (contactoA, contactoB) => {
      return contactoA.first_name.localeCompare(contactoB.first_name);
    }
  );

  return [...encontradosPorNombreOrdenados, ...encontradosPorApellidoOrdenados];
};

export { buscarPorPrimerLetraDelNombre };
