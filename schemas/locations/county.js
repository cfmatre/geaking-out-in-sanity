import icon from 'react-icons/lib/fa/bullseye'

export default {
    name: 'county',
    title: 'County',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'code',
            title: 'Code',
            type: 'string',
        },
        // {
        //     name: 'boundingBox',
        //     title: 'Bounding Box',
        //     type: 'object',
        //     fields: [
        //         {
        //             name: 'ne',
        //             title: 'North East (max)',
        //             type: 'geopoint',
        //         },
        //         {
        //             name: 'sw',
        //             title: 'South West (min)',
        //             type: 'geopoint',
        //         },
        //     ]
        // },
        {
            name: 'country',
            title: 'Country',
            type: 'reference',
            to: [{ type: 'country' }]
        },
    ]
}