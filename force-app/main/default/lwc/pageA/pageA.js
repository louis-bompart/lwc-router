import { LightningElement } from 'lwc';

export default class PageA extends LightningElement {

    selectPage(event) {
        const value = event.target.value;
        this.dispatchEvent(new CustomEvent('newpageselected', { detail: value }));
    }
}