import { LightningElement, api } from 'lwc';

export default class PageElement extends LightningElement {
    @api pageTemplate;
    render() {
        return this.pageTemplate;
    }
}