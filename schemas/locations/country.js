import icon from 'react-icons/lib/fa/flag'

export default {
    name:'country',
    title:'Country',
    type:'document',
    icon,
    fields:[
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
    ]
}