import { LightningElement } from 'lwc';
import { pageA as pageATemplate, pageB as pageBTemplate } from "c/pageTemplates";
import Router from 'c/router';

export default class MyApp extends LightningElement {
    /**
     * @type {RouterPageData[]}
     */
    pages = [
        { id: 'A', template: pageATemplate },
        { id: 'B', template: pageBTemplate }
    ];

    /** @type {?Router} */
    _router;
    connectedCallback() {
        debugger;
    }
    /**
     * @type {!Router}
     */
    get router() {

        return this.template.querySelector('c-router');
    }

    selectPage(event) {
        const value = event.target.value;

        this.router.selectPage(value);
    }
}