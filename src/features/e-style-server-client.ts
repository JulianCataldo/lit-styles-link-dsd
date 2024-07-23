import { LitElement, html, css, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { bootstrapStylesJs } from './_bootstrap.css.js';
import { commonStylesJs } from './common.css.js';

@customElement('e-style-server-client')
export class StyleServerClient extends LitElement {
	static override styles = [
		css`
			:host {
				display: block;
			}
		`,

		bootstrapStylesJs,
		commonStylesJs,
	];

	@property() animal = 'UNSET';

	override connectedCallback(): void {
		super.connectedCallback();

		if (isServer === false) {
			setTimeout(() => {
				this.animal = 'platypus';
			}, 1000);
		}
	}

	override render() {
		return html`
			<button class="btn btn-primary">Epsilon</button>
			<em class="display-4">${this.animal}</em>

			Epsilon
		`;
	}
}
