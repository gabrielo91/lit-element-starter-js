import {LitElement, html} from 'lit-element';

export class Payment extends LitElement {
  render() {
    return html` <paypal-buttons></paypal-buttons> `;
  }
}

window.customElements.define('custom-wrapper', Payment);
