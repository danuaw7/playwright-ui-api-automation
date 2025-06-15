import {test,expect} from '@playwright/test'
import {PageManager} from '../../page_objects/pageManagers'

test.beforeEach(async({page})=>{
  await page.goto('https://demo.automationtesting.in/Register.html')
})

test ('User Submit Form Register', async ({page}) => {
  const pm = new PageManager(page)
  await pm.onFormPage().inputForm(
    'Adi',
    'Wijaya',
    'Jakarta',
    'adi@gmail.com',
    '0812345678',
    'Male',
    ['Cricket', 'Movies'],
    'English',
    'Java',

    // Skipping this step due to a known issue: the #countries dropdown is currently not selectable
    //'India',
    'Australia',
    '2000',
    'May',
    '10',
    '1122334455',
    '1122334455',
    'profilePhoto.jpg'
  );

  // Assertions
  await expect(page.locator('[placeholder="First Name"]')).toHaveValue('Adi');
  await expect(page.locator('[placeholder="Last Name"]')).toHaveValue('Wijaya');
  await expect(page.locator('textarea[ng-model="Adress"]')).toHaveValue('Jakarta');
  await expect(page.locator('input[ng-model="EmailAdress"]')).toHaveValue('adi@gmail.com');
  await expect(page.locator('input[ng-model="Phone"]')).toHaveValue('0812345678');
  await expect(page.locator(`input[ng-model="radiovalue"][value="Male"]`)).toBeChecked();
  await expect(page.locator('#checkbox1')).toBeChecked();
  await expect(page.locator('#checkbox2')).toBeChecked();
  await expect(page.locator('#checkbox3')).not.toBeChecked();
  await expect(page.locator('#Skills')).toHaveValue('Java');
  await expect(page.locator('.select2-selection__rendered')).toHaveText('Australia');
  await expect(page.locator('#yearbox')).toHaveValue('2000');
  await expect(page.locator('select[placeholder="Month"]')).toHaveValue('May');
  await expect(page.locator('#daybox')).toHaveValue('10');
  await expect(page.locator('#firstpassword')).toHaveValue('1122334455');
  await expect(page.locator('#secondpassword')).toHaveValue('1122334455');
});
