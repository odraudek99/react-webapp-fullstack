
import { findInvoiceById } from './data/invoices';

findInvoiceById(3)
    .then((json)=>{
        console.log(json);
        console.log("task finished ok!");
    })
    .catch(console.error);
