class LoginTotalPage{
    constructor(page){
        this.page=page;
    }

    async valid_login(path){
        await this.page.goto(path)
    }
}
module.exports={LoginTotalPage}