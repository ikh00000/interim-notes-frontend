import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {themeController} from './utils/theme-controller';

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = css`
    button {
      padding: var(--spacing-sm) var(--spacing-md);
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
    }
  `;

  private handleToggle() {
    themeController.toggleTheme();
    this.requestUpdate();
  }

  render() {
    return html` <button @click=${this.handleToggle}>Toggle Theme</button> `;
  }
}
