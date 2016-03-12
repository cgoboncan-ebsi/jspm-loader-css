import Core from 'css-modules-loader-core'
import {CSSLoader} from './lib/CSSLoader'

const {fetch, bundle} = new CSSLoader([
  Core.values,
  localByDefault: Core.localByDefault,
  Core.extractImports,
  Core.scope
])

export {CSSLoader, Core, fetch, bundle}
