import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('text-area')
export class TextArea extends LitElement {
  static styles = css`
    textarea {
      min-width: 500px;
      max-width: 500px;
      min-height: 200px;
      max-height: 200px;
      resize: none;
    }
  `;
  render() {
    return html`
      <textarea name="" id="" cols="30" rows="10">Write your note</textarea>
    `;
  }
}
