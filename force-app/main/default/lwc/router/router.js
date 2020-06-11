import { LightningElement, api, track } from 'lwc';
//#region TypeDefinitions

/**
 * @typedef RouterPageData
 * @type {object}
 * @property {string} id - ID of the page.
 * @property {object} pageTemplate - The template of the page
 */

//#endregion

export default class Router extends LightningElement {
    /**
     * @type {RouterPageData[]}
     */
    @api pages;
    @track currentPageId;

    /**
     * Check if a page ID exists in the registered pages.
     * @param {string} pageId - ID to check
     */
    isPageIdInPages(pageId) {
        return this.pages.some(page => page.id === pageId);
    }

    /**
     * Select a new page.
     * @param {string} pageId 
     */
    @api selectPage(pageId) {
        const shouldSetPageId = !pageId || pageId !== this.currentPageId || !this.isPageIdInPages(pageId);
        if (!shouldSetPageId) {
            return;
        }
        this.currentPageId = pageId;
    }

    /**
     * 
     * @param {CustomEvent} event 
     */
    handleNewPageSelected(event) {
        this.selectPage(event.detail)
    }

    connectedCallback() {
        this.currentPageId = this.pages[0].id
    }
}