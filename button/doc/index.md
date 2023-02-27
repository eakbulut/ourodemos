# Button

This is a button component.

```js script
import { html } from 'lit';
import '~/sd-output/variables.css';
import '../src/button.css';
```

```js preview-story
export const base = () => html` <button class="btn">Primary Button</button> `;
```

```js preview-story
export const outline = () =>
  html` <button class="btn" outline>Outline Button</button> `;
```

```js preview-story
export const disabled = () =>
  html` <button class="btn" disabled>Disabled Button</button> `;
```
