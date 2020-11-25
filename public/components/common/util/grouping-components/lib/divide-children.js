"use strict";
/*
 * Wazuh app - Component to group some components within another
 *
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideChildren = void 0;
exports.divideChildren = (children, ref, parentWidth, width) => {
    if (!parentWidth)
        return { show: children, hide: [], width: 0 };
    return children.reduce((acc, child, key) => {
        const childs = ((ref || {}).current || {}).childNodes;
        const currentChild = !!childs && childs[0];
        const isPopOver = !!currentChild && !!currentChild.classList && currentChild.classList.contains('euiPopover');
        const currentWidth = acc.width + ((isPopOver) ? 5000 : (currentChild || {}).offsetWidth || 100);
        const newAcc = {
            ...acc,
            width: currentWidth
        };
        if (currentWidth < (parentWidth * width)) {
            newAcc.show.push(child);
        }
        else {
            newAcc.hide.push(child);
        }
        return newAcc;
    }, { show: [], hide: [], width: 0 });
};
