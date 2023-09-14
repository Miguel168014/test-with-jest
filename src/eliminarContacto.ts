import {Contacto} from "./contactos";

function eliminarContacto(contactos:Contacto[], primer_nombre: string)  {
    return contactos.filter(contacto => contacto.first_name != primer_nombre) 
}
export { eliminarContacto };
