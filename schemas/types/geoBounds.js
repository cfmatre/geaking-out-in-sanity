import React from 'react';
import icon from 'react-icons/lib/md/crop-free';

export default {
    name: 'geoBounds',
    title: 'Geo Bounds',
    type: 'object',
    icon,
    fields: [
        {
            name: 'north',
            title: 'North',
            type: 'number',
            required: true,
        },
        {
            name: 'south',
            title: 'South',
            type: 'number',
            required: true,
        },
        {
            name: 'east',
            title: 'East',
            type: 'number',
            required: true,
        },
        {
            name: 'west',
            title: 'West',
            type: 'number',
            required: true,
        },
    ],
}