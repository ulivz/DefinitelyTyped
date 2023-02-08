// Type definitions for @babel/helper-plugin-utils 7.10
// Project: https://github.com/babel/babel/tree/main/packages/babel-helper-plugin-utils, https://babeljs.io/
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import type {
  PluginAPI,
  PluginObject,
  PluginPass,
  PresetAPI,
  PresetObject,
} from "@babel/core";

export declare function declare<State = {}, Option = {}>(
  builder: (
    api: PluginAPI,
    options: Option,
    dirname: string,
  ) => PluginObject<State & PluginPass>,
): (
  api: PluginAPI,
  options: Option,
  dirname: string,
) => PluginObject<State & PluginPass>;

export declare const declarePreset: <Option = {}>(
  builder: (api: PresetAPI, options: Option, dirname: string) => PresetObject,
) => (api: PresetAPI, options: Option, dirname: string) => PresetObject;


