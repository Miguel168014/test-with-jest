import {Contacto, contactos} from "../src/contactos";
import{eliminarContacto} from "../src/eliminarContacto";

describe("eliminarContactos", () => {
    test("deveria eliminar un contacto por el nombre" , () => {
        const contactosQueQuedan: Contacto[] = eliminarContacto(contactos, "Muhammad");
        expect(contactosQueQuedan).toHaveLength(9);
    });

    test("no deveria eliminar un contacto", () => {
        const contactosQueQuedan: Contacto[] = eliminarContacto(contactos, "pepe");
        expect(contactosQueQuedan).toHaveLength(10);
    });
})