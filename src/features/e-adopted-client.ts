import { LitElement, html, css, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { bootstrapStylesJs } from './_bootstrap.css.js';
import { commonStylesJs } from './common.css.js';

@customElement('e-adopted-client')
export class AdoptedClient extends LitElement {
	static override styles = [
		bootstrapStylesJs,
		commonStylesJs,
		css`
			:host {
				display: block;
			}
		`,
	];

	@property() animal = 'UNSET';

	override connectedCallback(): void {
		super.connectedCallback();
		if (isServer === false) {
			setTimeout(() => {
				this.animal = 'ant';
			}, 1000);
		}
	}

	override render() {
		return html`
			<button class="btn btn-primary">Zeta</button>
			<em class="display-4">${this.animal}</em>

			Zeta
		`;
	}
}
