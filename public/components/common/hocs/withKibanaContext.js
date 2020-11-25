"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withKibanaContext = void 0;
/*
 * Wazuh app - React HOC to create component with Kibana state
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
const react_1 = __importStar(require("react"));
const hooks_1 = require("../hooks");
exports.withKibanaContext = (Component) => {
    function hoc(props) {
        const indexPattern = props.indexPattern ? props.indexPattern : hooks_1.useIndexPattern();
        const filterManager = props.filterManager ? props.filterManager : hooks_1.useFilterManager();
        const [query, setQuery] = props.query ? react_1.useState(props.query) : hooks_1.useQuery();
        const { timeFilter, timeHistory, setTimeFilter } = hooks_1.useTimeFilter();
        return react_1.default.createElement(Component, Object.assign({}, props, { indexPattern: indexPattern, filterManager: filterManager, timeFilter: timeFilter, timeHistory: timeHistory, setTimeFilter: setTimeFilter, query: query, setQuery: setQuery }));
    }
    hoc.displayName = `withKibanaContext-${Component.displayName}`;
    return hoc;
};
