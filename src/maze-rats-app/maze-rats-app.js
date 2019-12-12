import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MazeRatsApp extends PolymerElement {
    static get is() {
        return 'maze-rats-app';
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'maze-rats-app'
            }
        };
    }

    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>

            <h2>Hello [[prop1]]!</h2>
        `;
    }
}

window.customElements.define(MazeRatsApp.is, MazeRatsApp);