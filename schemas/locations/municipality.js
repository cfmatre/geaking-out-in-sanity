import icon from 'react-icons/lib/fa/shield'

export default {
    name: 'municipality',
    title: 'Municipality',
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
        {
            name: 'geoBounds',
            title: 'Geo Bounds Box',
            type: 'geoBounds',
            options: { collapsible: true, collapsed:false },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'county',
            title: 'County',
            type: 'reference',
            to: [{ type: 'county' }]
        },
    ],
    preview: {
        select: {
            name: 'name',
            code: 'code',
            county: 'county.name',
            country: 'county.country.name',
        },
        prepare(selection) {
            const { name, code, county, country } = selection;

            return {
                title: name,
                subtitle: `${county} (${country})`,
            }
        },
    },
}