export interface IUser{
    _id:string|object|Buffer
    email:string
    password_hash:string
}


export interface IAccount{
    user_id:String
    acctNo:String
    balance:number
}

export interface Transaction{
    senderAcct_id:String;
    RecieverAcct_id:String;
    amount:number
}