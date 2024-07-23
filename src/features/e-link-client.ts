import { LitElement, html, css, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';

console.log('sss)');

import bootstrapStyles from 'bootstrap/scss/bootstrap.scss?url';
import commonStyles from '../features/e-common.css?url';

@customElement('e-link-client')
export class LinkClient extends LitElement {
	static override styles = [
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
				this.animal = 'tiger';
			}, 1000);
		}
	}

	override render() {
		return html`
			<link rel="stylesheet" href=${bootstrapStyles} />
			<link rel="stylesheet" href=${commonStyles} />

			<button class="btn btn-primary">Alpha</button>
			<em class="display-4">${this.animal}</em>

			Alpha
		`;
	}
}
