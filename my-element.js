import {LitElement, html} from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  render() {
    return html` <div>Hello Gabriel</div> `;
  }
}

window.customElements.define('my-element', MyElement);
