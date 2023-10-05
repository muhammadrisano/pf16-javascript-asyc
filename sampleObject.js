class MyError{

    constructor(message){
        this.defaultError = message
    }
    
    defaultError = "aplikasi terjadi error"

    printError =()=>{
        console.log(this.defaultError);
    }
} 

const error = new MyError('error bro....')

error.printError()