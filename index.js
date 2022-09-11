import address from "address";
import Express from 'express';

const app = Express()
const appId = process.env.APPID
console.log(appId)


//grabbing local ip by specifying interface, family
const connectionInterface = address.interface('IPv4');
const localAddress = connectionInterface.address;


//validating if interface is a virtual or bridged or correct interface
connectionInterface.internal === true ? console.error():
console.log(connectionInterface.address)    

app.listen(8080, function(){
    console.log("app running on port 80")
})
app.set('view engine', 'pug')

app.get('/', (req,res) => {
 res.render('index', {address: localAddress})    
})




