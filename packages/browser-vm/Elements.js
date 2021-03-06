/**
 * Elements.js
 * @lastModified 2019085
 * @forwardCompatibleTo 2019085
 * @createAt 2019085
 */

import injectScriptCallBack from './utils/injectScriptCallBack';

if( typeof Element === 'function' ){
  const mountElementMethods = [ 'appendChild', 'insertBefore', 'append' ];

  for ( const method of mountElementMethods ) {
    const originMethod = Element.prototype[ method ];

    Element.prototype[ method ] = function( el, ...args ){
      if( el && el.nodeName === 'SCRIPT' && el.ownerAppWindow ){
        injectScriptCallBack( el );
      }

      return originMethod.call( this, el, ...args );
    }
  }
}