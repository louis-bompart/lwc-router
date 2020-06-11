import { LightningElement, api } from 'lwc';

export default class PageElement extends LightningElement {
    @api pageTemplate;
    render() {
        return this.pageTemplate;
    }

    /**
     * Handle new page selection.
     * @param {CustomEvent} event 
     */
    handleNewPageSelected = (event) => this.dispatchEvent(new CustomEvent(event.type, { detail: event.detail }));
}