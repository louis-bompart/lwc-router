import { LightningElement, api } from 'lwc';

export default class RouterPage extends LightningElement {
    @api pageId;
    @api pageTemplate;
    @api selectedPageId;

    get isSelected() {
        return this.pageId === this.selectedPageId;
    }
}