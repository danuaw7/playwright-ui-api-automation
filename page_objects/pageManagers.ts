import {Page} from '@playwright/test'
import { FormPage } from './formPage'

export class PageManager{
    private readonly page: Page
    private readonly formPage: FormPage

    constructor(page: Page){
        this.page = page
        this.formPage = new FormPage(this.page)
    }

    onFormPage(){
        return this.formPage
    }
}