import { LightningElement, api } from 'lwc';

export default class RouterPage extends LightningElement {
    @api pageId;
    @api pageTemplate;
    @api selectedPageId;
    /**
     * Handle new page selection.
     * @param {CustomEvent} event 
     */
    handleNewPageSelected = (event) => this.dispatchEvent(new CustomEvent(event.type, { detail: event.detail }));

    get isSelected() {
        return this.pageId === this.selectedPageId;
    }
}