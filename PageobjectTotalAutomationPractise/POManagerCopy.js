const {LoginTotalPage}=require('./LoginTotalPage');
const {InputingTextPage}=require('./InputingTextPage')


class POManagerCopy{
    constructor(page){
        this.page=page;
        this.login=new LoginTotalPage(this.page);
        this.input=new InputingTextPage(this.page);
    }

    getLoginPageAccess() {
        return this.login;
    }

    getInputPageAccess(){
        return this.input;
    }
}
module.exports={POManagerCopy}