import { LightningElement } from 'lwc';
import pageATemplate from "../pageA/pageATemplate.html";
import pageBTemplate from "../pageB/pageBTemplate.html";
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