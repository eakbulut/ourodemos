import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';

// Needed for now, initial-color-scheme isn't enough
document.documentElement.classList.add('dark');

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} [slot='logo'] span {
      color: var(--starter-color-base-core-colors-primary-500);
    }

    [slot='logo'] {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 24px;
      width: max-content;
    }
  </style>
  <dockit-layout
    disable-color-scheme-change
    initial-color-scheme="dark"
    .context="${context}"
  >
    <div class="dark:prose-invert">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
