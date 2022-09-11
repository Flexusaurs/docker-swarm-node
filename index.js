import address from "address";
import Express from 'express';
import os from 'os';


const app = Express()
const appId = process.env.APPID
console.log(appId)


//grabbing local ip by specifying interface, family
const connectionInterface = address.interface('IPv4');
const localAddress = connectionInterface.address;
const localhostname = os.hostname;

//validating if interface is a virtual or bridged or correct interface
//connectionInterface.internal === true ? console.error():
console.log(localAddress)    

app.listen(8080, function(){
    console.log("app running on port 8080")
})
app.set('view engine', 'pug')

app.get('/', (req,res) => {
 res.render('index', {address: localAddress, hostname: localhostname})    
})




