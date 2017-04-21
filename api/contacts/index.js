import express from 'express';
import contacts from './contacts';
import _ from 'lodash';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ contacts: contacts });
});

router.post('/', (req, res) => {
        let newContact = req.body;
        if (newContact){
          contacts.push({name: newContact.name, address : newContact.address, phone_number: newContact.phone_number }) ;
          res.status(201).send({message: "Contact Created"});
      }else{
            res.status(400).send({message: "Unable to find Contact in request. No Contact Found in body"});
      }
});
//Update a contact
router.put('/:id', (req, res) => {
     let key = req.params.id;
     let updateContact = req.body;
     var index = _.findIndex(contacts, contact => {
                 return contact.phone_number === key;
              });
            if (index !== -1) {
               contacts.splice(index, 1, {name: updateContact.name, address: updateContact.address, phone_number: updateContact.phone_number});
               res.status(200).send({message: "Contact Updated"});
              }
              else{
          res.status(400).send({message: "Unable to find Contact in request. No Contact Found in body"}) ;
      }
});
//Delete a contact
router.delete('/:id', (req, res) => {
     let key = req.params.id;
   var elements = _.remove(contacts,
              contact => {
                     return contact.phone_number === key;
                  });
    if (elements){
       res.status(200).send({message: "Contact deleted"});
    }else{
      res.status(400).send({message: "Unable to find Contact. No contact Deleted"}) ;
      }


});

export default router;
