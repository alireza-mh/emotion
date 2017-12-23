// flow-typed signature: 22afe792d07ce86b99954c5d2a83c46e
// flow-typed version: <<STUB>>/jest-glamor-react_v^3.1.1/flow_v0.59.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'jest-glamor-react'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

import type {JestSnapshotSerializer} from 'jest'


interface GlamorStyleSheet {
  tags: Array<HTMLStyleElement>;
}
declare module 'jest-glamor-react' {
  declare module.exports: JestSnapshotSerializer & (sheet: GlamorStyleSheet) => JestSnapshotSerializer
}
