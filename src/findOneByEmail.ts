import { contactos } from "./contactos";

function findOneByEmail(email:string) {
contactos.forEach(contacto => {
    if (contacto.email === email){
        return contacto
    }
});
} 
export{findOneByEmail} 