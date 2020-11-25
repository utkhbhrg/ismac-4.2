"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packagesColumns = void 0;
const windowsColumns = [
    { id: 'name' },
    { id: 'architecture', width: "10%" },
    { id: 'version' },
    { id: 'vendor', width: '30%' }
];
const linuxColumns = [
    { id: 'name' },
    { id: 'architecture', width: '10%' },
    { id: 'version' },
    { id: 'vendor', width: "30%" },
    { id: 'description', width: '30%' }
];
const MacColumns = [
    { id: 'name' },
    { id: 'version' },
    { id: 'format' },
    { id: 'location', width: "30%" },
    { id: 'description', width: '20%' }
];
exports.packagesColumns = {
    'windows': windowsColumns,
    'linux': linuxColumns,
    'apple': MacColumns
};
