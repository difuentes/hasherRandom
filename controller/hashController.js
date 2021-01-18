//paquete para encriptar pass bcrypt
const bcryp = require('bcrypt');
// require the module 
var Hashes = require('jshashes');
// require hasha
var hasha = require('hasha');


const { uuid,v4: uuidv4,v1:uuidv1, stringify } = require('uuid');

//import {uuid,v4 as uuidv4,v1 as uuidv1, stringify} from 'uuid'

exports.hash = async (req,res) =>{

    const {valor} = req.body; 

    var test = [valor];

    //hashear bscryp
    const salt = await bcryp.genSalt(10);
    bscryptvalor = await bcryp.hash(valor,salt);

    //Encriptado Exagonal 
    // new MD5 instance 
    const MD5_HEX = new Hashes.MD5().hex(valor);
    // new SHA1 instance
    const SHA1_HEX = new Hashes.SHA1().hex(valor);
    // new SHA256 instance
    const SHA256_HEX =  new Hashes.SHA256().hex(valor);
    // new SHA512 instace
    const SHA512_HEX = new Hashes.SHA512().hex(valor);
    // new RIPEMD-160 instace
    const RMD160_HEX = new Hashes.RMD160().hex(valor);

    //encriptado b64

        // new MD5 instance 
        const MD5_B64 = new Hashes.MD5().b64(valor);
        // new SHA1 instance
        const SHA1_B64 = new Hashes.SHA1().b64(valor);
        // new SHA256 instance
        const SHA256_B64 =  new Hashes.SHA256().b64(valor);
        // new SHA512 instace
        const SHA512_B64 = new Hashes.SHA512().b64(valor);
        // new RIPEMD-160 instace
        const RMD160_B64 = new Hashes.RMD160().b64(valor);
        const hashas =  hasha(valor);

        //return json
    res.json(
        {
         uuid1 :uuidv1(),
         uuid4 :uuidv4(),
         uuidfromeString:stringify(test),
         bcrypSalt10:bscryptvalor,
         MD5_HEX: MD5_HEX,
         SHA1_HEX:SHA1_HEX,
         SHA256_HEX:SHA256_HEX,
         SHA512_HEX:SHA512_HEX,
         RMD160_HEX:RMD160_HEX,
         MD5_B64: MD5_HEX,
         SHA1_B64:SHA1_HEX,
         SHA256_B64:SHA256_HEX,
         SHA512_B64:SHA512_HEX,
         RMD160_B64:RMD160_HEX,
         hasha: hashas
        }
        );
}


