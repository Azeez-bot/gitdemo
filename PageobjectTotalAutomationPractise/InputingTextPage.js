class InputingTextPage{
    constructor(page){
        this.page=page;
        this.countryInput=page.getByPlaceholder("Type to Select Countries");
        this.items=page.locator("//ul//li[@class='ui-menu-item']")
        this.countrySelection=page.getByRole("listitem").filter({hasText:'British Indian Ocean Territory'});

    }
    async inputting(){
        this.countryInput.pressSequentially("Ind");
        await this.page.locator("//ul//li[@class='ui-menu-item']").first().waitFor({ state: 'visible' });
        this.countrySelection.click();
    }
}
module.exports={InputingTextPage};