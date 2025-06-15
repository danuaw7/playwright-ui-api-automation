import {Page} from '@playwright/test'
import path from 'path'

export class FormPage{
    readonly page: Page
    constructor(page: Page){
        this.page = page
    }

    async inputForm(
      firstNameField: string,
      lastNameField: string,
      adressField: string,
      emailField: string,
      phoneField: string,
      genderOption: 'Male' | 'FeMale',
      hobbiesOption: ('Cricket' | 'Movies' | 'Hockey')[],
      languageOption: string,
      skillOption: string,
      //country: string,
      selectCountryOption: string,
      birthYearOption: string,
      birthMonthOption: string,
      birthDayOption: string,
      passwordField: string,
      confirmPpasswordField: string,
      fileName: string,
    ) {
      await this.page.locator('[placeholder="First Name"]').fill(firstNameField);
      await this.page.locator('[placeholder="Last Name"]').fill(lastNameField);
      await this.page.locator('textarea[ng-model="Adress"]').fill(adressField);
      await this.page.locator('input[ng-model="EmailAdress"]').fill(emailField);
      await this.page.locator('input[ng-model="Phone"]').fill(phoneField);
      await this.page.locator(`input[ng-model="radiovalue"][value="${genderOption}"]`).check();
      for (const hobby of hobbiesOption) {
        if (hobby === 'Cricket') await this.page.check('#checkbox1');
        if (hobby === 'Movies') await this.page.check('#checkbox2');
        if (hobby === 'Hockey') await this.page.check('#checkbox3');
      }
      await this.page.locator('#msdd').click();
      await this.page.locator(`//a[text()="${languageOption}"]`).click();;
      await this.page.locator('body').click();
      await this.page.locator('#Skills').selectOption(skillOption);

      // Skipping this step due to a known issue: the #countries dropdown is currently not selectable
      // await this.page.selectOption('#countries', country);
      await this.page.locator('.select2-selection').click();
      await this.page.waitForTimeout(100);
      await this.page.locator('.select2-results__option').filter({ hasText: selectCountryOption }).click();
      await this.page.locator('#yearbox').selectOption(birthYearOption);
      await this.page.locator('select[placeholder="Month"]').selectOption(birthMonthOption);
      await this.page.locator('#daybox').selectOption(birthDayOption);
      await this.page.locator('#firstpassword').fill(passwordField);
      await this.page.locator('#secondpassword').fill(confirmPpasswordField);
      const filePath = path.resolve(__dirname, `../assets/${fileName}`);
      await this.page.setInputFiles('input[type="file"]', filePath);
      await this.page.locator('#submitbtn').click();
      await this.page.waitForTimeout(5000);
    }
}
